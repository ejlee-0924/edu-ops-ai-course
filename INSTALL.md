# 설치 및 진행 가이드

이 문서는 강사가 수강생에게 학습 웹사이트를 공유할 때 함께 안내하기 위한 문서입니다.

## 가장 쉬운 진행 방식

학습 웹사이트는 아래 주소로 공유합니다.

https://edu-ops-ai-course-vercel.vercel.app

수강생은 Claude Code 또는 Codex에 아래 문장을 붙여넣습니다.

```text
아래 교육 페이지 흐름대로 내 반복 업무를 개인용 Skill로 만들고 싶어.
https://edu-ops-ai-course-vercel.vercel.app

먼저 Clarify 사용 가능 여부를 확인하고, 나에게 질문을 하나씩 해줘.
```

이 프롬프트를 넣으면 AI는 Clarify 확인 후 첫 질문부터 시작합니다.
첫 질문은 보통 “어떤 반복 업무를 줄이고 싶나요?”입니다.

Claude Code와 Codex 모두 사용할 수 있습니다.

- Claude Code는 `CLAUDE.md`를 읽고 진행합니다.
- Codex는 `AGENTS.md`를 읽고 진행합니다.
- 두 파일 모두 같은 교육 운영 업무 매뉴얼을 불러오도록 되어 있습니다.

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
이 경우에는 `practice/prompts/00-start-with-my-skill.md`와 `practice/prompts/02-clarify-request.md`로 같은 Ask Your Question 흐름을 진행합니다.

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

## GitHub/ZIP 백업

수강생은 보통 GitHub를 열 필요가 없습니다.
샘플 파일, 템플릿, 오프라인 실습 패키지가 필요할 때만 아래 방식으로 진행합니다.

1. GitHub 페이지를 엽니다.
2. `Code` 버튼을 누릅니다.
3. `Download ZIP`을 누릅니다.
4. 압축을 풉니다.
5. Claude Code 또는 Codex에서 압축을 푼 폴더를 엽니다.
6. 아래 문장을 입력합니다.

```text
이 폴더의 README와 START_HERE.md를 읽고, 교육 페이지 흐름에 맞춰 내 반복 업무를 개인용 Skill로 만드는 실습을 진행해줘.
먼저 Clarify 사용 가능 여부를 확인하고, 질문을 하나씩 해줘.
```

## 터미널 사용 가능자용

```bash
git clone [GitHub 링크]
cd edu-ops-ai-course
python3 -m http.server 18790
```

브라우저에서 `http://127.0.0.1:18790`을 열면 학습 웹사이트를 볼 수 있습니다. 포트가 이미 사용 중이면 `18791`처럼 비어 있는 번호로 바꿔 실행하면 됩니다.

그다음 Claude Code 또는 Codex에서 다음을 입력합니다.

```text
이 저장소의 README.md와 practice/START_HERE.md를 읽고, 교육 페이지 흐름에 맞춰 내 반복 업무를 개인용 Skill로 만드는 실습을 진행해줘.
먼저 Clarify 사용 가능 여부를 확인하고, 질문을 하나씩 해줘.
```

## 수강생 실데이터 안내

실제 업무 자료는 가능하면 Google Sheets MCP로 연결합니다.
연결이 어렵거나 사전 익명화가 필요하면 `practice/private-data/`에 export 파일을 넣습니다.

주의:

- 수강생 실명, 이메일, 전화번호는 가능하면 지웁니다.
- 고객사 민감정보는 익명화합니다.
- 고객에게 보낼 메일은 반드시 사람이 검토한 뒤 발송합니다.

## Claude Code Google Workspace MCP 설치

Google Sheets 실습은 Claude Code에서 `workspace-mcp`를 설치해 진행합니다.
강사는 Google OAuth Client ID와 Client Secret을 비공개로 제공합니다.
이 값은 GitHub/Vercel 공개 자료에 그대로 올리지 않습니다.

```bash
claude mcp add workspace-mcp --scope user \
  -e GOOGLE_OAUTH_CLIENT_ID="[강사가 제공한 Google OAuth Client ID]" \
  -e GOOGLE_OAUTH_CLIENT_SECRET="[강사가 제공한 Google OAuth Client Secret]" \
  -- uvx workspace-mcp --tools sheets forms docs slides appscript gmail drive
```

설치 후 Google 계정 승인 화면이 뜨면 수업용 계정으로 승인합니다.
그 다음 수강생의 실제 업무 Google Sheet를 기준으로 자료 연결을 확인합니다.
자료가 없거나 계정 연결이 어려운 수강생만 `practice/sample-data/edu-ops-google-sheets-sample.xlsx`를 Google Drive에 업로드하고 Google Sheets로 열어 흐름을 확인합니다.
