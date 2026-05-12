# Claude Code/Codex for Education Operations

비개발 교육 운영자를 위한 1일 실습형 교육 패키지입니다.

이 교육은 코딩을 가르치지 않습니다. 교육 운영자가 반복적으로 처리하는 자료 정리, 만족도 리포팅, 기업별 할 일 정리, 메일/CS 초안 작성 업무를 Claude Code와 Codex에 맡기는 법을 배웁니다.

## 학습 웹사이트

수강생은 공개 학습 웹사이트 하나만 열고 시작합니다.
이 저장소는 강사가 웹사이트 원본을 관리하기 위한 작업 공간입니다.

- 공개 학습 웹사이트: https://edu-ops-ai-course-vercel.vercel.app
- 강사용 원본: `index.html`, `content/`

웹사이트는 `시작하기 → 이해하기 → 설계하기 → 만들기 → 마무리` 흐름으로 구성되어 있습니다.
수강생은 Vercel 페이지를 보면서 Claude Code 또는 Codex에서 실습을 진행합니다.

## 수강생 시작 방법

수강생에게는 Vercel 학습 웹사이트 링크를 공유합니다.
수강생은 `설치하고 시작하기`를 먼저 확인한 뒤, `내 업무 자료 준비하기`와 `MCP 설치하고 자료 연결하기`에서 자료 연결을 끝냅니다.
그 다음 `설계하기 > Clarify로 내 업무 구조화하기`에서 실제 시작 프롬프트를 복사합니다.

시작 프롬프트는 웹사이트 안에서 한 곳에만 둡니다.
그래야 설치 안내와 실습 시작 요청이 섞이지 않습니다.

## 강사용 설치 안내

수강생에게는 Vercel 학습 웹사이트 링크를 공유합니다.

Clarify는 실습 전에 먼저 설치하거나 사용 가능 여부를 확인합니다.

Claude Code 입력창:

```text
/plugin marketplace add team-attention/plugins-for-claude-natives
/plugin install clarify
```

Codex CLI:

```bash
codex plugin marketplace add team-attention/plugins-for-claude-natives
```

Codex에서는 marketplace 추가 후 앱의 Plugins 또는 Skills 목록에서 `Clarify Codex`, `clarify`, `clarify-request`가 보이면 활성화합니다.
설치가 바로 보이지 않으면 웹사이트의 Clarify 실행 프롬프트를 그대로 사용합니다.

Windows에서 Claude Code 설치가 필요한 수강생은 PowerShell에서 아래 명령을 실행합니다.

```powershell
winget install --id OpenJS.NodeJS.LTS -e --source winget
winget install --id Git.Git -e --source winget
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
npm install -g @anthropic-ai/claude-code
```

## 핵심 메시지

아이디어를 같이 떠올리고 다듬을 때는 Claude Code, 정해진 업무를 정확히 처리하고 산출물로 만들 때는 Codex.

## 구성

- `slides/index.html`: 강의용 HTML 슬라이드
- `index.html`: 웹 가이드북 첫 화면
- `content/`: 웹 가이드북 본문 Markdown
- `practice/templates/`: 결과물 양식
- `practice/`: 강사용 참고 자료

## 진행 흐름

1. ChatGPT/Gemini와 Claude Code/Codex의 차이
2. 언제 Claude Code, 언제 Codex를 쓰는지
3. Clarify 설치 또는 사용 가능 여부 확인하기
4. 내 업무 자료 준비하기: 어떤 자료실을 연결할지 정하기
5. MCP 설치하고 자료 연결하기: 내 업무 자료를 AI가 볼 수 있게 연결하기
6. Clarify로 내 업무 구조화하기: 질문을 받으며 업무와 Skill 초안 만들기
7. 내 Skill 첫 실행하기
8. 나만의 업무 레시피 보강하기
9. AI 업무 매뉴얼로 기준 보강하기

## 수강생 데이터 원칙

실제 업무 자료는 가능하면 MCP나 Connector로 연결합니다.

민감정보가 들어간 자료를 사용할 때는 다음을 지킵니다.

- 이름, 전화번호, 이메일, 회사 내부 사정은 결과물에서 제거하거나 익명화합니다.
- 고객사에 바로 보낼 메일은 반드시 사람이 검토한 뒤 발송합니다.
- 만족도 정성 의견은 과장하거나 새로 지어내지 않습니다.
