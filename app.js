(() => {
  const cfg = window.SITE_CONFIG;
  const pages = cfg.sections.flatMap((section) =>
    section.pages.map((page) => ({ ...page, section: section.title }))
  );

  const byId = (id) => pages.find((page) => page.id === id);
  const indexOf = (id) => pages.findIndex((page) => page.id === id);

  let headingObserver = null;

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;",
      "'": "&#39;",
    })[char]);
  }

  function renderInline(text) {
    const codeSpans = [];
    let value = String(text).replace(/`([^`]+)`/g, (_, code) => {
      const token = `\u0000CODE${codeSpans.length}\u0000`;
      codeSpans.push(`<code>${escapeHtml(code)}</code>`);
      return token;
    });

    value = escapeHtml(value)
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, url) => {
        return `<a href="${escapeHtml(url)}">${label}</a>`;
      })
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");

    return value.replace(/\u0000CODE(\d+)\u0000/g, (_, index) => codeSpans[Number(index)]);
  }

  function isTableLine(line) {
    return /^\s*\|.*\|\s*$/.test(line);
  }

  function isSpecialLine(line) {
    return /^(#{1,4})\s+/.test(line)
      || /^```/.test(line)
      || /^[-*]\s+/.test(line)
      || /^\d+\.\s+/.test(line)
      || /^>\s?/.test(line)
      || isTableLine(line);
  }

  function renderTable(lines) {
    const rows = lines
      .filter((line) => !/^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(line))
      .map((line) => line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((cell) => cell.trim()));

    if (!rows.length) return "";
    const [head, ...body] = rows;
    const header = `<thead><tr>${head.map((cell) => `<th>${renderInline(cell)}</th>`).join("")}</tr></thead>`;
    const bodyRows = body.map((row) => `<tr>${row.map((cell) => `<td>${renderInline(cell)}</td>`).join("")}</tr>`).join("");
    return `<table>${header}<tbody>${bodyRows}</tbody></table>`;
  }

  function renderMarkdown(markdown) {
    const lines = markdown.replace(/\r\n/g, "\n").split("\n");
    const html = [];
    let index = 0;

    while (index < lines.length) {
      const line = lines[index];

      if (!line.trim()) {
        index += 1;
        continue;
      }

      const fence = line.match(/^```(\w+)?/);
      if (fence) {
        const lang = fence[1] ? ` class="language-${escapeHtml(fence[1])}"` : "";
        const code = [];
        index += 1;
        while (index < lines.length && !/^```/.test(lines[index])) {
          code.push(lines[index]);
          index += 1;
        }
        if (index < lines.length) index += 1;
        html.push(`<pre><code${lang}>${escapeHtml(code.join("\n"))}</code></pre>`);
        continue;
      }

      const heading = line.match(/^(#{1,4})\s+(.+)$/);
      if (heading) {
        const level = heading[1].length;
        html.push(`<h${level}>${renderInline(heading[2])}</h${level}>`);
        index += 1;
        continue;
      }

      if (/^[-*]\s+/.test(line)) {
        const items = [];
        while (index < lines.length && /^[-*]\s+/.test(lines[index])) {
          items.push(`<li>${renderInline(lines[index].replace(/^[-*]\s+/, ""))}</li>`);
          index += 1;
        }
        html.push(`<ul>${items.join("")}</ul>`);
        continue;
      }

      if (/^\d+\.\s+/.test(line)) {
        const items = [];
        while (index < lines.length && /^\d+\.\s+/.test(lines[index])) {
          items.push(`<li>${renderInline(lines[index].replace(/^\d+\.\s+/, ""))}</li>`);
          index += 1;
        }
        html.push(`<ol>${items.join("")}</ol>`);
        continue;
      }

      if (/^>\s?/.test(line)) {
        const quote = [];
        while (index < lines.length && /^>\s?/.test(lines[index])) {
          quote.push(lines[index].replace(/^>\s?/, ""));
          index += 1;
        }
        html.push(`<blockquote><p>${renderInline(quote.join(" "))}</p></blockquote>`);
        continue;
      }

      if (isTableLine(line)) {
        const table = [];
        while (index < lines.length && isTableLine(lines[index])) {
          table.push(lines[index]);
          index += 1;
        }
        html.push(renderTable(table));
        continue;
      }

      const paragraph = [];
      while (index < lines.length && lines[index].trim() && !isSpecialLine(lines[index])) {
        paragraph.push(lines[index].trim());
        index += 1;
      }
      html.push(`<p>${renderInline(paragraph.join(" "))}</p>`);
    }

    return html.join("\n");
  }

  function slugify(text, fallback) {
    const slug = text
      .trim()
      .toLowerCase()
      .replace(/[^\w가-힣\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
    return slug || fallback;
  }

  function buildSidebar() {
    const root = document.getElementById("sidebar");
    root.innerHTML = "";
    cfg.sections.forEach((section) => {
      const wrapper = document.createElement("section");
      wrapper.className = "sidebar-section";

      const title = document.createElement("div");
      title.className = "sidebar-title";
      title.textContent = section.title;
      wrapper.appendChild(title);

      section.pages.forEach((page) => {
        const link = document.createElement("a");
        link.className = "sidebar-link";
        link.href = `#${page.id}`;
        link.dataset.page = page.id;
        link.textContent = page.title;
        wrapper.appendChild(link);
      });

      root.appendChild(wrapper);
    });
  }

  function renderBreadcrumb(page) {
    document.getElementById("breadcrumb").innerHTML = `
      <span>${escapeHtml(page.section)}</span>
      <span class="breadcrumb-sep">›</span>
      <span>${escapeHtml(page.title)}</span>
    `;
  }

  function renderFooter(pageId) {
    const root = document.getElementById("main-content");
    const idx = indexOf(pageId);
    const prev = pages[idx - 1];
    const next = pages[idx + 1];
    const footer = document.createElement("nav");
    footer.className = "page-footer";
    footer.innerHTML = `
      ${prev ? `<a class="page-nav prev" href="#${prev.id}">
        <span>← 이전</span>
        <strong>${escapeHtml(prev.title)}</strong>
      </a>` : "<span></span>"}
      ${next ? `<a class="page-nav next" href="#${next.id}">
        <span>다음 →</span>
        <strong>${escapeHtml(next.title)}</strong>
      </a>` : "<span></span>"}
    `;
    root.appendChild(footer);
  }

  function buildTOC(pageId) {
    const tocWrap = document.getElementById("toc-wrap");
    const tocList = document.getElementById("toc-list");
    tocList.innerHTML = "";

    const headings = Array.from(document.querySelectorAll("#main-content h2, #main-content h3"));
    if (!headings.length) {
      tocWrap.style.visibility = "hidden";
      return;
    }

    tocWrap.style.visibility = "visible";
    headings.forEach((heading, index) => {
      heading.id = slugify(heading.textContent, `h-${index}`);
      const item = document.createElement("li");
      item.className = heading.tagName.toLowerCase();
      const link = document.createElement("a");
      link.href = `#${pageId}/${heading.id}`;
      link.dataset.target = heading.id;
      link.textContent = heading.textContent;
      link.addEventListener("click", (event) => {
        event.preventDefault();
        document.getElementById(heading.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", `#${pageId}/${heading.id}`);
      });
      item.appendChild(link);
      tocList.appendChild(item);
    });

    observeHeadings();
  }

  function observeHeadings() {
    if (headingObserver) headingObserver.disconnect();
    headingObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        document.querySelectorAll("#toc-list a").forEach((link) => {
          link.classList.toggle("active", link.dataset.target === entry.target.id);
        });
      });
    }, { rootMargin: "-90px 0px -70% 0px" });

    document.querySelectorAll("#main-content h2, #main-content h3")
      .forEach((heading) => headingObserver.observe(heading));
  }

  function enhanceCodeBlocks() {
    document.querySelectorAll("#main-content pre").forEach((pre) => {
      const button = document.createElement("button");
      button.className = "copy-btn";
      button.type = "button";
      button.textContent = "복사";
      button.addEventListener("click", async () => {
        const text = pre.querySelector("code")?.innerText || pre.innerText;
        try {
          await navigator.clipboard.writeText(text.trim());
          button.textContent = "복사됨";
          button.classList.add("copied");
          setTimeout(() => {
            button.textContent = "복사";
            button.classList.remove("copied");
          }, 1400);
        } catch {
          button.textContent = "실패";
        }
      });
      pre.appendChild(button);
    });
  }

  function renderError(error) {
    if (location.protocol === "file:") {
      return `
        <div class="error-state">
          <h1>로컬 서버가 필요합니다</h1>
          <p>이 웹사이트는 <code>content/*.md</code> 파일을 불러오기 때문에 파일을 직접 더블클릭하면 열리지 않을 수 있습니다.</p>
          <pre><code>python3 -m http.server 18790</code></pre>
          <p>그 다음 <a href="http://127.0.0.1:18790">http://127.0.0.1:18790</a>으로 접속하세요.</p>
        </div>
      `;
    }
    return `
      <div class="error-state">
        <h1>페이지를 불러올 수 없습니다</h1>
        <p>${escapeHtml(error.message)}</p>
      </div>
    `;
  }

  async function renderPage(pageId) {
    const page = byId(pageId) || byId(cfg.defaultPage);
    const main = document.getElementById("main-content");
    const actualId = page.id;

    renderBreadcrumb(page);
    document.title = `${page.title} · ${cfg.title}`;
    document.querySelectorAll(".sidebar-link").forEach((link) => {
      link.classList.toggle("active", link.dataset.page === actualId);
    });

    main.innerHTML = "<div class=\"loading-state\">불러오는 중...</div>";

    try {
      const response = await fetch(`content/${actualId}.md`, { cache: "no-cache" });
      if (!response.ok) throw new Error(`content/${actualId}.md`);
      const markdown = await response.text();
      main.innerHTML = renderMarkdown(markdown);

      main.querySelectorAll("a").forEach((link) => {
        const href = link.getAttribute("href") || "";
        if (/^(https?:|mailto:|tel:)/i.test(href)) {
          link.target = "_blank";
          link.rel = "noopener noreferrer";
        }
      });

      enhanceCodeBlocks();
      renderFooter(actualId);
      buildTOC(actualId);
      window.scrollTo(0, 0);
    } catch (error) {
      main.innerHTML = renderError(error);
      document.getElementById("toc-wrap").style.visibility = "hidden";
    }
  }

  function handleHash() {
    const [pageId, headingId] = location.hash.replace("#", "").split("/");
    renderPage(pageId || cfg.defaultPage).then(() => {
      if (!headingId) return;
      setTimeout(() => {
        document.getElementById(headingId)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    });
  }

  function setupSidebarToggle() {
    const button = document.getElementById("sidebar-toggle");
    button.addEventListener("click", () => {
      const collapsed = document.documentElement.classList.toggle("sidebar-collapsed");
      localStorage.setItem("edu_ops_sidebar_collapsed", collapsed ? "1" : "0");
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("site-title").textContent = cfg.title;
    document.getElementById("brand-mark").textContent = cfg.brand;
    buildSidebar();
    setupSidebarToggle();
    handleHash();
    window.addEventListener("hashchange", handleHash);
  });
})();
