# 01. 업무 자료 연결 확인 요청

아래 요청문을 Claude Code 또는 Codex에 붙여넣으세요.

```text
나는 교육 운영자이고, 지금부터 내 실제 반복 업무 하나를 AI에게 맡기려고 해.

먼저 이 작업에 필요한 자료가 어디에 있는지 같이 확인해줘.

가능하면 MCP나 Connector에서 먼저 확인해줘.
바로 연결된 자료가 없으면 대체 파일로 진행하지 말고, 어떤 연결이나 권한이 더 필요한지 알려줘.

Google Workspace 자료는 Claude Code에 workspace-mcp로 설치하는 것을 기준으로 해.
설치 명령은 claude mcp add workspace-mcp --scope user 방식이고,
사용 도구는 sheets, forms, docs, slides, appscript, gmail, drive야.
Slack이나 Notion은 연결 가능한 MCP/Connector가 있으면 사용해줘.

먼저 찾을 자료:
- 내가 방금 Clarify에서 말한 실제 업무 자료
- 그 업무에 쓰는 문서, 채널, 메일함, 페이지
- 결과물에 필요한 범위
- 개인정보나 고객사 민감정보가 들어간 위치

출력은 다음 형태로 해줘:
1. 찾은 자료
2. 부족한 자료
3. 민감정보 주의가 필요한 자료
4. 첫 실행 프롬프트에 넣어야 할 자료 조건
```
