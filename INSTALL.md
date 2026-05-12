# 설치 및 진행 가이드

이 문서는 강사가 수강생에게 학습 웹사이트를 공유할 때 함께 안내하기 위한 문서입니다.

## 가장 쉬운 진행 방식

학습 웹사이트는 아래 주소로 공유합니다.

https://edu-ops-ai-course-vercel.vercel.app

수강생은 학습 웹사이트에서 `설치하고 시작하기`를 확인한 뒤, `내 업무 자료 준비하기`와 `MCP 설치하고 자료 연결하기`를 먼저 진행합니다.
그 다음 `설계하기 > Clarify로 내 업무 구조화하기`에서 실제 시작 프롬프트를 복사합니다.

시작 프롬프트는 그 페이지 한 곳에만 둡니다.
첫 질문은 보통 “어떤 반복 업무를 줄이고 싶나요?”입니다.

Claude Code와 Codex 모두 사용할 수 있습니다.

- Claude Code와 Codex 모두 웹사이트의 프롬프트를 그대로 사용합니다.
- 업무 기준은 수업 중 `AI 업무 매뉴얼 만들기`에서 정리합니다.

## Clarify 설치

이 교육은 Clarify 질문으로 내 업무를 구조화한 뒤 Skill 초안을 만드는 흐름입니다.
수강생이 실습을 시작하기 전에 Clarify 설치 또는 사용 가능 여부를 먼저 확인하게 안내합니다.

### Claude Code

Claude Code 입력창에 아래 두 줄을 차례대로 입력합니다.

```text
/plugin marketplace add team-attention/plugins-for-claude-natives
/plugin install clarify
```

설치 후 새 대화를 열거나 Claude Code를 다시 시작하면 더 안정적입니다.

### Codex

Codex CLI에서는 아래 명령으로 플러그인 marketplace를 추가할 수 있습니다.

```bash
codex plugin marketplace add team-attention/plugins-for-claude-natives
```

그 다음 Codex 앱의 Plugins 또는 Skills 목록에서 `Clarify Codex`, `clarify`, `clarify-request`가 보이면 활성화합니다.
현재 Codex CLI에는 Claude Code의 `/plugin install clarify`와 같은 설치 명령이 보이지 않을 수 있습니다.
이 경우에는 웹사이트의 Clarify 실행 프롬프트로 같은 질문 흐름을 진행합니다.
Codex에서는 `Clarify로 해줘`만 입력하면 바로 정리문을 만들 수 있으므로, 실습 프롬프트처럼 질문형 대화로 진행해달라고 함께 적습니다.

## Windows에서 Claude Code 설치

Claude Code가 설치되어 있지 않은 수강생은 Windows PowerShell에서 아래 명령을 순서대로 실행합니다.

```powershell
winget install --id OpenJS.NodeJS.LTS -e --source winget
winget install --id Git.Git -e --source winget
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
npm install -g @anthropic-ai/claude-code
```

설치 확인:

```powershell
claude --version
```

버전이 보이지 않으면 PowerShell을 새로 열고 다시 확인합니다.

## 수강생 실데이터 안내

실제 업무 자료는 가능하면 MCP나 Connector로 연결합니다.

주의:

- 수강생 실명, 이메일, 전화번호는 가능하면 지웁니다.
- 고객사 민감정보는 익명화합니다.
- 고객에게 보낼 메일은 반드시 사람이 검토한 뒤 발송합니다.

## Claude Code Google Workspace MCP 설치

Google Sheets, Gmail, Drive, Docs 자료 연결은 웹사이트의 `시작하기 > MCP 설치하고 자료 연결하기`에서 진행합니다.
Claude Code에서는 `workspace-mcp`를 설치합니다.
강사는 Google OAuth Client ID와 Client Secret을 비공개로 제공합니다.
이 값은 공개 자료에 그대로 올리지 않습니다.

```bash
claude mcp add workspace-mcp --scope user \
  -e GOOGLE_OAUTH_CLIENT_ID="[강사가 제공한 Google OAuth Client ID]" \
  -e GOOGLE_OAUTH_CLIENT_SECRET="[강사가 제공한 Google OAuth Client Secret]" \
  -- uvx workspace-mcp --tools sheets forms docs slides appscript gmail drive
```

설치 후 Google 계정 승인 화면이 뜨면 수업용 계정으로 승인합니다.
그 다음 수강생이 고른 Skill에 필요한 실제 업무 자료를 기준으로 자료 연결을 확인합니다.
