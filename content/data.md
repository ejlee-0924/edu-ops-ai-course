# 내 업무 자료 준비하기

나만의 Skill을 무엇으로 만들지에 따라 필요한 자료가 달라집니다.
Google Sheet는 여러 자료 후보 중 하나입니다.

## 내 자료를 먼저 준비하기

먼저 만들고 싶은 Skill을 고른 뒤, 그 업무에 실제로 쓰는 자료실을 확인합니다.

| 자료실 | 예시 | 주로 쓰는 Skill |
|---|---|---|
| Google Sheets | 만족도 결과, 신청자 명단, 운영 현황표 | 만족도 리포터, 주간 운영 요약 |
| Slack | 고객사/운영 채널 대화, 결정 사항, 요청 사항 | 기업별 할 일 정리기, 싱크업 요약기 |
| Gmail | 고객사 메일, 문의 메일, 안내 메일 히스토리 | 고객사 회신 초안기, CS 답변 초안기 |
| Notion | 운영 매뉴얼, 프로젝트 페이지, 회의록 | 업무 기준 정리기, 교육 운영 매뉴얼 |
| Drive/Docs | 강의 자료, 결과 공유 문서, 회의록 | 결과 공유 자료 작성기 |
| export 파일 | 보안 검토 후 내려받은 CSV, PDF, Markdown | 연결이 어려울 때의 백업 실습 |

민감정보가 있으면 이름, 이메일, 전화번호, 고객사 내부 사정은 먼저 익명화합니다.

## 자료 선택 예시

| 만들 Skill | 먼저 준비할 자료 |
|---|---|
| 만족도 리포터 | Google Sheets의 만족도 응답 |
| 기업별 투두 정리기 | Slack 싱크업 채널, Gmail 고객사 메일, 운영 메모 |
| 수강생 안내 메일 작성기 | Google Sheets 신청자 명단, 기존 Gmail 안내 메일 |
| CS 답변 초안기 | Gmail 문의 메일, Notion FAQ, Slack 내부 답변 |
| 교육 종료 리포트 작성기 | Google Sheets 만족도, Notion 회고, Drive 결과 문서 |

## 백업용 샘플 자료

자료가 없거나 회사 계정 연결이 어려울 때만 샘플을 사용합니다.

| 자료 | 내용 |
|---|---|
| `practice/sample-data/edu-ops-google-sheets-sample.xlsx` | 실제 자료가 없을 때 쓰는 샘플 워크북 |

Google Drive에 업로드한 뒤 Google Sheets로 열면 아래 탭을 사용합니다.

| 시트 탭 | 내용 |
|---|---|
| `satisfaction_comments` | 만족도 조사 정성 의견 |
| `syncup_notes` | 싱크업 회의 메모 |
| `client_email_thread` | 고객사 메일 히스토리 |
| `cs_inquiries` | CS 문의 기록 |

## 백업 파일

자료 연결이 안 될 때만 아래 파일을 사용합니다.

| 파일 | 내용 |
|---|---|
| `practice/sample-data/satisfaction-comments.csv` | 만족도 조사 정성 의견 백업 |
| `practice/sample-data/syncup-notes.md` | 싱크업 회의 메모 백업 |
| `practice/sample-data/client-email-thread.md` | 고객사 메일 히스토리 백업 |
| `practice/sample-data/cs-inquiries.md` | CS 문의 기록 백업 |

## export 파일을 쓸 때

실제 업무 자료는 가능하면 MCP나 Connector로 연결합니다.
연결이 어렵거나 민감정보 검토가 필요하면 `practice/private-data/`에 export 파일을 넣습니다.

주의할 점:

- 수강생 이름, 이메일, 전화번호는 제거합니다.
- 고객사 내부 사정은 외부 공유용 결과물에서 제거합니다.
- 메일 초안은 반드시 검토용으로 표시합니다.
- AI가 만든 결과물은 바로 발송하지 않습니다.

## 추천 진행 방식

첫 실습은 내가 실제로 쓰는 자료실을 기준으로 진행하세요.
자료가 준비되지 않은 수강생만 샘플 자료로 흐름을 확인합니다.
