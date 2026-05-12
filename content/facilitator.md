# 강사용 진행 팁

이 과정은 코딩 교육이 아닙니다.
강사는 계속 교육 운영 업무 언어로 연결해줘야 합니다.

## 권장 진행

1. 처음에는 반드시 수강생의 실제 반복 업무를 하나 고르게 합니다.
2. Clarify는 Ask Your Question 방식으로 질문을 하나씩 하게 합니다.
3. MCP는 “Google Sheets 자료 연결”이라고 먼저 설명합니다.
4. Google OAuth Client ID와 Client Secret은 공개 자료에 남기지 않습니다.
5. Clarify 완성형 예시는 자료가 없는 수강생에게만 백업으로 제공합니다.
6. 실제 업무 자료 적용을 첫 흐름의 기본값으로 둡니다.

## 막히는 지점

| 지점 | 대응 |
|---|---|
| Claude Code가 설치되지 않은 경우 | Windows PowerShell 설치 명령을 먼저 실행하고 새 PowerShell 창에서 `claude --version` 확인 |
| GitHub 링크를 AI가 못 여는 경우 | ZIP 다운로드 방식으로 안내 |
| 실제 Google Sheet가 없는 경우 | 샘플 워크북으로만 흐름 확인 |
| Google Sheets MCP 연결이 안 되는 경우 | export 파일 또는 샘플 워크북의 백업 파일로 진행 |
| OAuth 값이 노출될 수 있는 경우 | 화면 공유나 비공개 채널로만 전달하고 공개 저장소에는 placeholder 사용 |
| Clarify 질문이 길어지는 경우 | 3개 이하 질문 원칙을 다시 안내 |
| 결과물이 너무 장황한 경우 | 표와 짧은 문단으로 다시 정리 요청 |

## 강사용 멘트

> 오늘은 샘플을 따라 하는 시간이 아니라, 내 반복 업무 하나를 AI에게 맡길 수 있는 Skill로 바꾸는 시간입니다.
