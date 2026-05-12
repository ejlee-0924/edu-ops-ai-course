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
| `winget install --id Git.Git -e --source winget` | GitHub 실습 자료를 받을 수 있게 Git을 설치합니다. |
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
이 경우에도 실습은 멈추지 않습니다. `practice/prompts/00-start-with-my-skill.md`와 `practice/prompts/02-clarify-request.md`가 같은 Ask Your Question 흐름을 재현합니다.

가장 쉬운 방법은 Claude Code 또는 Codex에 GitHub 링크를 주는 것입니다.

```text
이 GitHub 링크에서 실습 자료를 받아서 설치하고, README를 읽은 뒤 Clarify 설치 또는 사용 가능 여부를 먼저 확인해줘.
그 다음 설계하기 > 내 업무 Skill로 시작하기부터 진행해줘.
샘플보다 내 실제 반복 업무와 Google Sheet를 기준으로 진행하고, Clarify 질문을 하나씩 받으면서 구조화해줘:
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
이 폴더의 README를 읽고, Clarify 설치 또는 사용 가능 여부를 먼저 확인해줘.
그 다음 설계하기 > 내 업무 Skill로 시작하기부터 진행해줘.
샘플보다 내 실제 반복 업무와 Google Sheet를 기준으로 진행하고, Clarify 질문을 하나씩 받으면서 구조화해줘.
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

수업에서는 수강생의 실제 업무 Google Sheet를 먼저 찾게 합니다.
자료가 없거나 계정 연결이 어려운 경우에만 `practice/sample-data/edu-ops-google-sheets-sample.xlsx`를 Google Drive에 업로드하고 Google Sheets로 열어 흐름을 확인합니다.
회사 보안이나 계정 문제로 연결이 어려운 경우에는 `practice/sample-data/`의 CSV/Markdown 백업 파일을 사용합니다.
