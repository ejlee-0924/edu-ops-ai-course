# 내 Google Sheet 준비하기

기본은 수강생이 실제로 쓰는 Google Sheet입니다.
샘플 워크북은 자료가 없거나 회사 계정 연결이 어려울 때만 사용합니다.

## 내 자료를 먼저 준비하기

가능하면 아래 중 하나를 준비합니다.

- 실제 만족도 조사 결과 Google Sheet
- 고객사별 운영 현황 Sheet
- 교육 신청자/수강생 안내 Sheet
- CS 문의 정리 Sheet
- 주간 운영 리포트 Sheet

민감정보가 있으면 이름, 이메일, 전화번호, 고객사 내부 사정은 먼저 익명화합니다.

## 백업용 샘플 자료

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

Google Sheets MCP 연결이 안 될 때만 아래 파일을 사용합니다.

| 파일 | 내용 |
|---|---|
| `practice/sample-data/satisfaction-comments.csv` | 만족도 조사 정성 의견 백업 |
| `practice/sample-data/syncup-notes.md` | 싱크업 회의 메모 백업 |
| `practice/sample-data/client-email-thread.md` | 고객사 메일 히스토리 백업 |
| `practice/sample-data/cs-inquiries.md` | CS 문의 기록 백업 |

## export 파일을 쓸 때

실제 업무 자료는 가능하면 Google Sheets MCP로 연결합니다.
연결이 어렵거나 민감정보 검토가 필요하면 `practice/private-data/`에 export 파일을 넣습니다.

주의할 점:

- 수강생 이름, 이메일, 전화번호는 제거합니다.
- 고객사 내부 사정은 외부 공유용 결과물에서 제거합니다.
- 메일 초안은 반드시 검토용으로 표시합니다.
- AI가 만든 결과물은 바로 발송하지 않습니다.

## 추천 진행 방식

첫 실습은 내 실제 Google Sheet로 진행하세요.
자료가 준비되지 않은 수강생만 샘플 Google Sheet로 흐름을 확인합니다.
