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
| `winget install --id Git.Git -e --source winget` | Claude Code가 일부 작업에서 활용할 수 있는 기본 도구를 설치합니다. |
| `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser` | 현재 사용자 계정에서 필요한 실행 권한을 허용합니다. |
| `npm install -g @anthropic-ai/claude-code` | Claude Code를 설치합니다. |

설치 후 새 PowerShell 창을 열고 아래 명령으로 확인합니다.

```powershell
claude --version
```

버전이 보이면 Claude Code 설치가 끝난 것입니다.

## Clarify 먼저 설치하기

이 교육은 Clarify 질문으로 내 업무를 구조화하는 과정부터 시작합니다.
Clarify는 AI가 바로 결과물을 만들기 전에 필요한 질문을 먼저 하게 만드는 도구입니다.
수강생은 Clarify 질문에 답하면서 내 반복 업무의 목표, 필요한 자료, 결과물 기준을 정리합니다.
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
이 경우에도 실습은 멈추지 않습니다. 뒤의 Clarify 페이지에 있는 실행 프롬프트를 그대로 사용합니다.
Codex에서는 `Clarify로 해줘`만 입력하면 바로 정리문을 만들 수 있으므로, 실습 프롬프트처럼 질문형 대화로 진행해달라고 함께 적습니다.

## 다음 단계

Claude Code와 Clarify 설치가 끝나면 `시작하기 > 내 업무 자료 준비하기`로 이동합니다.
그 다음 바로 아래의 `MCP 설치하고 자료 연결하기`에서 Google Workspace MCP 설치와 자료 연결 확인을 진행합니다.

업무 자료 연결까지 끝나면 `설계하기 > Clarify로 내 업무 구조화하기`로 이동합니다.
실제 시작 프롬프트는 Clarify 페이지 한 곳에만 있습니다.

프롬프트를 실행하면 AI는 바로 결과물을 만들지 않고 “어떤 반복 업무를 줄이고 싶나요?”부터 질문을 하나씩 시작합니다.

## Claude Code와 Codex 둘 다 가능

- Claude Code와 Codex 모두 이 웹사이트의 프롬프트를 그대로 사용할 수 있습니다.
- 업무 기준은 뒤의 `AI 업무 매뉴얼 만들기`에서 교육 운영자 언어로 정리합니다.

## 업무 자료 연결 준비

MCP 설치와 자료 연결 확인은 `시작하기 > MCP 설치하고 자료 연결하기`에서 진행합니다.
강사는 수업 전에 Google OAuth Client ID와 Client Secret을 비공개로 준비합니다.
이 값은 강의 공개 자료에 그대로 올리지 않습니다.
