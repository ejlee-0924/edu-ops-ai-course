# 실습 안내서

이 참고 자료는 강사용입니다.
수강생의 기본 입구는 Vercel 학습 웹사이트입니다.

개발자가 아니어도 괜찮습니다. 순서는 단순합니다.

1. 내 실제 반복 업무 하나를 고릅니다.
2. Clarify 설치 또는 사용 가능 여부를 확인합니다.
3. MCP나 Connector로 내 업무 자료를 연결합니다.
4. Clarify가 질문을 하나씩 던지며 업무를 구조화합니다.
5. Clarify가 만든 첫 실행 프롬프트로 내 Skill을 실행해봅니다.
6. 잘 된 흐름을 내 업무 레시피로 저장합니다.

## 폴더 사용법

- `prompts/`: Claude Code/Codex에 붙여넣는 요청문입니다.
- `templates/`: 결과물을 정리할 양식입니다.
- `outputs/`: 실습 결과물을 저장하는 폴더입니다.

## 실습 흐름

수강생은 Vercel 페이지에서 `시작하기 > 내 업무 자료 준비하기`와 `MCP 설치하고 자료 연결하기`를 먼저 확인합니다.
그 다음 `설계하기 > Clarify로 내 업무 구조화하기`의 시작 프롬프트를 사용합니다.

### 0. Clarify 설치 확인

Claude Code에서는 아래 두 줄을 입력합니다.

```text
/plugin marketplace add team-attention/plugins-for-claude-natives
/plugin install clarify
```

Codex CLI에서는 아래 명령으로 marketplace를 추가합니다.

```bash
codex plugin marketplace add team-attention/plugins-for-claude-natives
```

그 다음 Codex 앱의 Plugins 또는 Skills 목록에서 `Clarify Codex`, `clarify`, `clarify-request`가 보이면 활성화합니다.
Codex에서 설치가 바로 보이지 않아도 웹사이트의 Clarify 실행 프롬프트로 같은 질문 흐름을 진행할 수 있습니다.
Codex에서는 `Clarify로 해줘`만 입력하면 바로 정리문을 만들 수 있으므로, 실습 프롬프트처럼 질문형 대화로 진행해달라고 함께 적습니다.

### 1. MCP 설치하고 자료 연결하기

MCP는 AI가 자료를 찾으러 가는 길입니다. 수강생에게는 먼저 "업무 자료 연결"이라고 설명하고, MCP는 그 연결 방식의 이름이라고 덧붙입니다.

Claude Code에서는 아래 방식으로 `workspace-mcp`를 설치합니다.

```bash
claude mcp add workspace-mcp --scope user \
  -e GOOGLE_OAUTH_CLIENT_ID="[강사가 제공한 Google OAuth Client ID]" \
  -e GOOGLE_OAUTH_CLIENT_SECRET="[강사가 제공한 Google OAuth Client Secret]" \
  -- uvx workspace-mcp --tools sheets forms docs slides appscript gmail drive
```

Codex에서는 아래 방식으로 설치합니다.

```bash
codex mcp add workspace-mcp \
  --env GOOGLE_OAUTH_CLIENT_ID="[강사가 제공한 Google OAuth Client ID]" \
  --env GOOGLE_OAUTH_CLIENT_SECRET="[강사가 제공한 Google OAuth Client Secret]" \
  -- uvx workspace-mcp --tools sheets forms docs slides appscript gmail drive
```

Google OAuth Client ID와 Client Secret은 공개 저장소에 넣지 않습니다.
강사는 수업용 비공개 채널이나 화면 공유로 값을 제공합니다.

내 업무 자료가 있으면 그것을 먼저 연결합니다.

자료 연결 확인 프롬프트는 웹사이트의 `MCP 설치하고 자료 연결하기` 페이지에 있습니다.

### 2. Clarify로 내 업무 구조화하기

웹사이트의 Clarify 실행 프롬프트를 사용해 수강생의 실제 반복 업무를 고릅니다.
AI는 Clarify로 필요한 질문을 하나씩 던지고, 수강생은 자기 업무 기준으로 답합니다.

결과물은 다음을 포함합니다.

- 업무 실행 의뢰서 초안
- 필요한 업무 자료 목록
- 첫 실행 프롬프트
- 개인용 Skill 초안

### 3. 내 Skill 첫 실행하기

Clarify가 만든 첫 실행 프롬프트를 그대로 사용합니다.
만족도 리포터, 기업별 투두 정리기, 고객사 메일 초안기 등은 만들 수 있는 업무 예시로만 안내합니다.

### 4. 나만의 업무 레시피 보강하기

Clarify에서 만든 Skill 초안을 첫 실행 결과 기준으로 보강합니다.

### 보조. AI 업무 매뉴얼 만들기

웹사이트의 AI 업무 매뉴얼 프롬프트를 사용해 AI가 따라야 할 교육 운영 기준을 만듭니다.

결과물은 다음을 포함합니다.

- 내 업무 매뉴얼 1장
- Claude Code/Codex에서 반복해서 쓸 업무 기준 문장
- 개인정보/민감정보 처리 원칙
- 만족도 의견 분류 기준
- 메일 초안 말투 기준

## 안전 원칙

- 처음 실습할 때는 내 실제 업무 자료를 우선 사용합니다.
- AI 결과물은 초안입니다. 발송 전 사람이 검토합니다.
- 실제 정성 의견에 없는 내용을 만들지 않습니다.
- 고객사명, 담당자명, 수강생명은 필요한 경우 익명화합니다.
- “좋게 보이게 바꾸기”보다 “정확하게 요약하기”를 우선합니다.
