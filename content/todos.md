# 기업별 할 일 정리하기

싱크업 문서와 고객사 메일 히스토리를 읽고 기업별 할 일을 정리합니다.

## 사용하는 자료

- Google Sheets MCP로 연결된 내 실제 운영 업무 Google Sheet
- 실제 자료가 없을 때만 `Edu Ops AI Course Sample` 문서의 `syncup_notes`, `client_email_thread`, `cs_inquiries` 탭
- 연결이 어려울 때만 `practice/sample-data/`의 Markdown 백업 파일

## 실습 프롬프트

```text
practice/prompts/04-client-todo-email.md를 읽고, Google Sheets MCP로 연결된 내 실제 운영 업무 시트를 바탕으로 기업별 할 일 목록을 만들어줘.
고객에게 확인할 질문과 내부에서 먼저 확인할 항목을 분리해줘.
```

## 결과물 기준

| 항목 | 설명 |
|---|---|
| 우선순위 | 높음/중간/낮음 |
| 할 일 | 운영자가 실제로 해야 할 일 |
| 확인 주체 | 고객, 강사, 운영팀 중 누구에게 확인할지 |
| 마감 | 자료에 있는 경우만 표시 |
| 상태 | 진행 필요, 확인 필요, 대기 |
