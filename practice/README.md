# 실습 안내서

이 폴더는 교육 운영자가 Claude Code/Codex로 반복 업무를 정리해보는 실습 자료입니다.

개발자가 아니어도 괜찮습니다. 순서는 단순합니다.

1. AI에게 알려줄 우리 업무 매뉴얼을 만듭니다.
2. Google Sheets MCP로 샘플 시트 또는 내 업무 시트를 연결합니다.
3. AI에게 자료 위치와 원하는 결과물을 알려줍니다.
4. Clarify로 요청을 정확한 의뢰서로 바꿉니다.
5. 만족도 리포트와 기업별 할 일 목록을 만듭니다.
6. 잘 된 흐름을 내 업무 레시피로 저장합니다.

## 폴더 사용법

- `sample-data/`: Google Sheets MCP 실습용 샘플 워크북과 연결 실패 시 사용하는 백업 파일입니다.
- `private-data/`: Google Sheets MCP 연결이 어려울 때 내 실제 업무 자료 export를 넣는 곳입니다. 이름, 이메일, 전화번호, 민감한 고객 정보는 가능하면 미리 지워주세요.
- `prompts/`: Claude Code/Codex에 붙여넣는 요청문입니다.
- `templates/`: 결과물을 정리할 양식입니다.
- `examples/`: 샘플 자료로 만든 완성 예시입니다.
- `outputs/`: 실습 결과물을 저장하는 폴더입니다.

## 3~8번 실습 흐름

### 3. AI 업무 매뉴얼 만들기

`prompts/00-ai-work-manual.md`를 사용해 AI가 따라야 할 교육 운영 기준을 만듭니다.

결과물은 다음을 포함합니다.

- 내 업무 매뉴얼 1장
- Codex용 `AGENTS.md` 반영 초안
- Claude Code용 `CLAUDE.md` 반영 초안
- 개인정보/민감정보 처리 원칙
- 만족도 의견 분류 기준
- 메일 초안 말투 기준

### 4. Google Sheets 자료 연결(MCP)

MCP는 AI가 자료를 찾으러 가는 길입니다. 수강생에게는 먼저 "Google Sheets 자료 연결"이라고 설명하고, MCP는 그 연결 방식의 이름이라고 덧붙입니다.

Claude Code에서는 아래 방식으로 `workspace-mcp`를 설치합니다.

```bash
claude mcp add workspace-mcp --scope user \
  -e GOOGLE_OAUTH_CLIENT_ID="[강사가 제공한 Google OAuth Client ID]" \
  -e GOOGLE_OAUTH_CLIENT_SECRET="[강사가 제공한 Google OAuth Client Secret]" \
  -- uvx workspace-mcp --tools sheets forms docs slides appscript gmail drive
```

Google OAuth Client ID와 Client Secret은 공개 저장소에 넣지 않습니다.
강사는 수업용 비공개 채널이나 화면 공유로 값을 제공합니다.

Google Sheets MCP 연결이 가능하면 `Edu Ops AI Course Sample` 문서의 탭을 사용합니다. 연결이 어렵다면 Google Sheets에서 export한 파일이나 `sample-data/`의 백업 파일을 사용합니다.

`prompts/01-mcp-material-check.md`를 사용합니다.

### 5. Clarify로 의뢰서 만들기

`prompts/02-clarify-request.md`를 사용해 막연한 요청을 업무 실행 의뢰서로 바꿉니다.

의뢰서에는 다음이 들어가야 합니다.

- 목표
- 입력 자료
- 결과물 형태
- 분류 기준
- 원하는 말투
- 주의사항
- 개인정보 처리 기준

### 6. 만족도 조사 정성 의견 리포팅

`prompts/03-satisfaction-reporting.md`를 사용합니다.

결과물은 다음을 포함합니다.

- 카테고리별 의견 개수
- 대표 의견
- 긍정 포인트
- 개선 포인트
- 운영진 제안 의견
- 강사용 리포트 요약

### 7. 기업별 할 일과 메일 초안 정리

`prompts/04-client-todo-email.md`를 사용합니다.

결과물은 다음을 포함합니다.

- 기업별 할 일
- 확인 필요 사항
- 담당자별 다음 액션
- 첫 회신 메일 초안

### 8. 나만의 업무 레시피 만들기

`prompts/05-skill-draft.md`를 사용합니다.

6번 또는 7번에서 잘 된 흐름을 골라 개인용 Skill 초안으로 바꿉니다.

## 안전 원칙

- 처음 실습할 때는 샘플 Google Sheet로 진행하고, 실제 업무 자료는 흐름을 이해한 뒤 내 Google Sheet로 바꿔 연결합니다.
- AI 결과물은 초안입니다. 발송 전 사람이 검토합니다.
- 실제 정성 의견에 없는 내용을 만들지 않습니다.
- 고객사명, 담당자명, 수강생명은 필요한 경우 익명화합니다.
- “좋게 보이게 바꾸기”보다 “정확하게 요약하기”를 우선합니다.
