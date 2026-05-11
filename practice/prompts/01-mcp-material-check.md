# 01. Google Sheets MCP 자료 연결 확인 요청

아래 요청문을 Claude Code 또는 Codex에 붙여넣으세요.

```text
나는 교육 운영자이고, 지금부터 만족도 리포트와 기업별 할 일 목록을 만들려고 해.

먼저 이 작업에 필요한 자료가 어디에 있는지 같이 확인해줘.

가능하면 Google Sheets MCP에서 먼저 확인하고,
연결이 어렵다면 practice/sample-data 또는 practice/private-data 폴더의 백업 파일을 기준으로 진행해줘.

Google Sheets MCP는 Claude Code에 workspace-mcp로 설치하는 것을 기준으로 해.
설치 명령은 claude mcp add workspace-mcp --scope user 방식이고,
사용 도구는 sheets, forms, docs, slides, appscript, gmail, drive야.

Google Sheets MCP에서 먼저 찾을 자료:
- 문서명: Edu Ops AI Course Sample
- 탭: satisfaction_comments
- 탭: syncup_notes
- 탭: client_email_thread
- 탭: cs_inquiries

확인할 자료:
- 만족도 조사 정성 의견
- 싱크업 회의 메모
- 고객사 메일 히스토리
- CS 문의 기록

출력은 다음 형태로 해줘:
1. 찾은 자료
2. 부족한 자료
3. 민감정보 주의가 필요한 자료
4. 다음 단계에서 Clarify로 정리해야 할 업무 요청
```
