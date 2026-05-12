# 강사용 진행 팁

이 과정은 코딩 교육이 아닙니다.
강사는 계속 교육 운영 업무 언어로 연결해줘야 합니다.

## 권장 진행

1. 처음에는 반드시 수강생의 실제 반복 업무를 하나 고르게 합니다.
2. Clarify 설치 또는 사용 가능 여부를 먼저 확인합니다.
3. Claude Code에서는 Clarify가 질문형으로 잘 시작되지만, Codex에서는 "바로 결과물을 만들지 말고 질문형 대화로 진행" 문구를 반드시 넣게 합니다.
4. MCP는 “AI가 업무 자료를 찾으러 가는 연결 통로”라고 먼저 설명합니다.
5. Google OAuth Client ID와 Client Secret은 공개 자료에 남기지 않습니다.
6. 실제 업무 자료 적용을 첫 흐름의 기본값으로 둡니다.

## 막히는 지점

| 지점 | 대응 |
|---|---|
| Claude Code가 설치되지 않은 경우 | Windows PowerShell 설치 명령을 먼저 실행하고 새 PowerShell 창에서 `claude --version` 확인 |
| Clarify가 설치되지 않은 경우 | Claude Code는 `/plugin marketplace add team-attention/plugins-for-claude-natives` 후 `/plugin install clarify` 실행 |
| Codex에서 Clarify 설치 메뉴가 안 보이는 경우 | `codex plugin marketplace add team-attention/plugins-for-claude-natives` 실행 후 Plugins/Skills에서 확인, 안 보이면 제공 프롬프트로 진행 |
| 실제 업무 자료가 없는 경우 | 어떤 자료가 필요한지 먼저 정리하고, 수업 후 연결할 자료를 표시 |
| 자료 연결이 안 되는 경우 | 필요한 권한, 계정, 자료실 이름을 확인하고 연결 후 다시 진행 |
| OAuth 값이 노출될 수 있는 경우 | 화면 공유나 비공개 채널로만 전달하고 공개 저장소에는 placeholder 사용 |
| Clarify 질문이 길어지는 경우 | 3개 이하 질문 원칙을 다시 안내 |
| 결과물이 너무 장황한 경우 | 표와 짧은 문단으로 다시 정리 요청 |

## 강사용 멘트

> 오늘은 샘플을 따라 하는 시간이 아니라, 내 반복 업무 하나를 AI에게 맡길 수 있는 Skill로 바꾸는 시간입니다.
