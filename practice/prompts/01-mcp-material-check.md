# 01. 업무 자료 연결 확인 요청

아래 요청문을 Claude Code 또는 Codex에 붙여넣으세요.

```text
나는 교육 운영자이고, 지금부터 내 실제 반복 업무 하나를 AI에게 맡기려고 해.

먼저 이 작업에 필요한 자료가 어디에 있는지 같이 확인해줘.

가능하면 MCP나 Connector에서 먼저 확인하고,
연결이 어렵다면 practice/sample-data 또는 practice/private-data 폴더의 백업 파일을 기준으로 진행해줘.

Google Workspace 자료는 Claude Code에 workspace-mcp로 설치하는 것을 기준으로 해.
설치 명령은 claude mcp add workspace-mcp --scope user 방식이고,
사용 도구는 sheets, forms, docs, slides, appscript, gmail, drive야.
Slack이나 Notion은 연결 가능한 MCP/Connector가 있으면 사용하고, 없으면 export 파일을 기준으로 확인해줘.

먼저 찾을 자료:
- 내가 방금 Clarify에서 말한 실제 업무 자료
- 그 업무에 쓰는 문서, 채널, 메일함, 페이지
- 결과물에 필요한 범위
- 개인정보나 고객사 민감정보가 들어간 위치

내 실제 자료가 없거나 연결이 어렵다면 아래 백업 자료로 흐름만 확인해줘:
- 문서명: Edu Ops AI Course Sample
- 탭: satisfaction_comments
- 탭: syncup_notes
- 탭: client_email_thread
- 탭: cs_inquiries

출력은 다음 형태로 해줘:
1. 찾은 자료
2. 부족한 자료
3. 민감정보 주의가 필요한 자료
4. 첫 실행 프롬프트에 넣어야 할 자료 조건
```
