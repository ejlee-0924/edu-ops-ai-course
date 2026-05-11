# 설치하고 시작하기

학습 웹사이트는 아래 주소로 바로 열 수 있습니다.

[https://edu-ops-ai-course-vercel.vercel.app](https://edu-ops-ai-course-vercel.vercel.app)

가장 쉬운 방법은 Claude Code 또는 Codex에 GitHub 링크를 주는 것입니다.

```text
이 GitHub 링크에서 실습 자료를 받아서 설치하고, README를 읽은 뒤 설계하기 > AI 업무 매뉴얼 만들기부터 순서대로 진행해줘:
https://github.com/ejlee-0924/edu-ops-ai-course
```

## ZIP으로 시작하기

회사 보안 정책 때문에 AI가 GitHub 링크를 직접 열지 못할 수 있습니다. 그럴 때는 ZIP으로 받습니다.

1. GitHub 저장소를 엽니다.
2. `Code` 버튼을 누릅니다.
3. `Download ZIP`을 누릅니다.
4. 압축을 풉니다.
5. Claude Code 또는 Codex에서 압축을 푼 폴더를 엽니다.
6. 아래 문장을 입력합니다.

```text
이 폴더의 README를 읽고, 설계하기 > AI 업무 매뉴얼 만들기부터 순서대로 진행해줘.
```

## Claude Code와 Codex 둘 다 가능

- Claude Code는 `CLAUDE.md`를 읽고 진행합니다.
- Codex는 `AGENTS.md`를 읽고 진행합니다.
- 두 파일은 같은 교육 운영 업무 매뉴얼을 불러옵니다.

## Google Sheets MCP 준비

이 교육의 자료 연결 실습은 Claude Code에 `workspace-mcp`를 설치해 Google Sheets MCP를 사용하는 방식으로 진행합니다.

강사는 수업 전에 Google OAuth Client ID와 Client Secret을 비공개로 준비합니다.
이 값은 GitHub, Vercel, 강의 공개 자료에 그대로 올리지 않습니다.

Claude Code를 사용하는 수강생은 아래 명령을 실행합니다.

```bash
claude mcp add workspace-mcp --scope user \
  -e GOOGLE_OAUTH_CLIENT_ID="[강사가 제공한 Google OAuth Client ID]" \
  -e GOOGLE_OAUTH_CLIENT_SECRET="[강사가 제공한 Google OAuth Client Secret]" \
  -- uvx workspace-mcp --tools sheets forms docs slides appscript gmail drive
```

설치 후에는 Google 계정 승인 화면이 뜰 수 있습니다.
승인이 끝나면 Claude Code에서 Google Sheets, Drive, Gmail 같은 업무 자료를 찾을 수 있습니다.

수업에서는 `practice/sample-data/edu-ops-google-sheets-sample.xlsx`를 Google Drive에 업로드하고 Google Sheets로 연 뒤, Google Sheets MCP에서 해당 시트를 찾게 합니다.
회사 보안이나 계정 문제로 연결이 어려운 경우에만 `practice/sample-data/`의 CSV/Markdown 백업 파일을 사용합니다.
