# Google Sheets 자료 연결(MCP)

MCP는 AI가 자료를 찾으러 가는 길입니다.
수강생에게는 먼저 **Google Sheets 자료 연결**이라고 설명하면 됩니다.

## 실습 목표

Google Sheets MCP로 만족도 리포트와 기업별 할 일 정리에 필요한 자료가 어디 있는지 확인합니다.

확인할 자료:

- 만족도 조사 정성 의견
- 싱크업 회의 메모
- 고객사 메일 히스토리
- CS 문의 기록

## 연결이 가능할 때

Google Sheets MCP가 연결되어 있다면 AI에게 샘플 워크북 또는 실제 업무 시트를 찾게 합니다.

수업 기본 자료:

- 문서: `Edu Ops AI Course Sample`
- 탭: `satisfaction_comments`
- 탭: `syncup_notes`
- 탭: `client_email_thread`
- 탭: `cs_inquiries`

Slack, Drive, Gmail, Notion 같은 도구는 추가 자료 연결 예시로 설명합니다.

## 연결이 어려울 때

회사 보안 정책 때문에 연결이 안 될 수 있습니다.
그럴 때는 Google Sheets에서 export한 파일을 `practice/private-data/`에 넣거나, `practice/sample-data/`의 백업 파일로 진행합니다.

## 실습 프롬프트

```text
practice/prompts/01-mcp-material-check.md를 읽고, 만족도 리포트와 기업별 할 일 목록에 필요한 자료가 어디 있는지 확인해줘.
Google Sheets MCP가 연결되어 있으면 Edu Ops AI Course Sample 시트의 탭을 먼저 확인해줘.
연결된 시트를 찾을 수 없으면 practice/sample-data 폴더의 백업 파일로 진행해줘.
```
