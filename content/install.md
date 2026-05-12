# 설치하고 시작하기

학습 웹사이트는 아래 주소로 바로 열 수 있습니다.

[https://edu-ops-ai-course-vercel.vercel.app](https://edu-ops-ai-course-vercel.vercel.app)

## Windows에서 Claude Code 설치하기

아직 Claude Code가 설치되어 있지 않은 수강생은 Windows PowerShell을 열고 아래 명령을 순서대로 실행합니다.

```powershell
winget install --id OpenJS.NodeJS.LTS -e --source winget
winget install --id Git.Git -e --source winget
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
npm install -g @anthropic-ai/claude-code
```

각 명령의 의미는 간단합니다.

| 명령 | 의미 |
|---|---|
| `winget install --id OpenJS.NodeJS.LTS -e --source winget` | Claude Code를 설치하기 위한 Node.js를 설치합니다. |
| `winget install --id Git.Git -e --source winget` | 강사용 원본이나 백업 자료를 받을 수 있게 Git을 설치합니다. |
| `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser` | 현재 사용자 계정에서 필요한 실행 권한을 허용합니다. |
| `npm install -g @anthropic-ai/claude-code` | Claude Code를 설치합니다. |

설치 후 새 PowerShell 창을 열고 아래 명령으로 확인합니다.

```powershell
claude --version
```

버전이 보이면 Claude Code 설치가 끝난 것입니다.

## Clarify 먼저 설치하기

이 교육은 Clarify 질문으로 내 업무를 구조화하는 과정부터 시작합니다.
실습을 시작하기 전에 Clarify를 먼저 설치하거나, Codex에서 Clarify 사용 가능 여부를 확인합니다.

### Claude Code에서 설치

Claude Code 입력창에 아래 두 줄을 차례대로 입력합니다.

```text
/plugin marketplace add team-attention/plugins-for-claude-natives
/plugin install clarify
```

설치 후 새 대화를 열거나 Claude Code를 다시 시작하면 더 안정적입니다.

### Codex에서 확인

Codex CLI에서는 아래 명령으로 플러그인 marketplace를 추가할 수 있습니다.

```bash
codex plugin marketplace add team-attention/plugins-for-claude-natives
```

그 다음 Codex 앱의 Plugins 또는 Skills 목록에서 `Clarify Codex`, `clarify`, `clarify-request`가 보이면 활성화합니다.
현재 Codex CLI에는 Claude Code의 `/plugin install clarify`와 같은 설치 명령이 보이지 않을 수 있습니다.
이 경우에도 실습은 멈추지 않습니다. `practice/prompts/02-clarify-request.md`가 같은 Clarify 질문 흐름을 재현합니다.

## 다음 단계

설치가 끝나면 `설계하기 > Clarify로 내 업무 구조화하기`로 이동합니다.
실제 복사 프롬프트는 그 페이지 한 곳에만 있습니다.

프롬프트를 실행하면 AI는 바로 결과물을 만들지 않고 “어떤 반복 업무를 줄이고 싶나요?”부터 질문을 하나씩 시작합니다.

## GitHub/ZIP 백업

수강생은 보통 GitHub를 열 필요가 없습니다.
샘플 파일이나 오프라인 실습 패키지가 필요할 때만 강사가 GitHub/ZIP 방식을 안내합니다.

1. GitHub 저장소를 엽니다.
2. `Code` 버튼을 누릅니다.
3. `Download ZIP`을 누릅니다.
4. 압축을 풉니다.
5. Claude Code 또는 Codex에서 압축을 푼 폴더를 엽니다.
6. 아래 문장을 입력합니다.

```text
이 폴더의 README와 START_HERE.md를 읽고, 교육 페이지 흐름에 맞춰 내 반복 업무를 개인용 Skill로 만드는 실습을 진행해줘.
먼저 Clarify 사용 가능 여부를 확인하고, 질문을 하나씩 해줘.
```

## Claude Code와 Codex 둘 다 가능

- Claude Code는 `CLAUDE.md`를 읽고 진행합니다.
- Codex는 `AGENTS.md`를 읽고 진행합니다.
- 두 파일은 같은 교육 운영 업무 매뉴얼을 불러옵니다.

## 업무 자료 연결 준비

이 교육의 자료 연결 실습은 내가 만들 Skill에 필요한 자료실을 연결하는 방식으로 진행합니다.
Google Sheets, Gmail, Drive, Docs 자료는 Claude Code에 `workspace-mcp`를 설치해 연결할 수 있습니다.
Slack이나 Notion은 사용하는 도구에서 MCP나 Connector가 가능하면 연결하고, 어렵다면 필요한 자료를 export해서 사용합니다.

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

수업에서는 수강생이 고른 Skill에 필요한 실제 업무 자료를 먼저 찾게 합니다.
자료가 없거나 계정 연결이 어려운 경우에만 샘플 워크북이나 `practice/sample-data/`의 CSV/Markdown 백업 파일을 사용합니다.
