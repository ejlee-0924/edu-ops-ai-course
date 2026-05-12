# Google Sheets 자료 연결(MCP)

MCP는 AI가 자료를 찾으러 가는 길입니다.
수강생에게는 먼저 **Google Sheets 자료 연결**이라고 설명하면 됩니다.

## 실습 목표

Google Sheets MCP로 수강생의 실제 반복 업무에 필요한 자료가 어디 있는지 확인합니다.

먼저 확인할 자료:

- 내 업무에 쓰는 Google Sheet 문서명
- 실제로 사용할 탭 이름
- 결과물에 포함해도 되는 열
- 개인정보나 고객사 민감정보가 있는 열

자료가 아직 없는 수강생만 만족도, 싱크업, 고객사 메일, CS 문의 샘플로 흐름을 확인합니다.

## Claude Code에 MCP 설치하기

수업에서는 `workspace-mcp`를 설치해 Google Workspace 자료를 연결합니다.
아래 명령은 Claude Code 기준입니다.

```bash
claude mcp add workspace-mcp --scope user \
  -e GOOGLE_OAUTH_CLIENT_ID="[강사가 제공한 Google OAuth Client ID]" \
  -e GOOGLE_OAUTH_CLIENT_SECRET="[강사가 제공한 Google OAuth Client Secret]" \
  -- uvx workspace-mcp --tools sheets forms docs slides appscript gmail drive
```

여기서 켜는 도구는 다음과 같습니다.

| 도구 | 실습에서의 의미 |
|---|---|
| `sheets` | 내 업무 Google Sheet를 읽기 |
| `drive` | Google Drive에서 업무 시트나 백업용 샘플 워크북 찾기 |
| `gmail` | 고객사 메일 히스토리 확인 |
| `forms` | 만족도 설문 결과와 연결될 수 있는 자료 확인 |
| `docs`, `slides` | 회의록, 교육 자료, 결과 공유 문서 확인 |
| `appscript` | 고급 자동화 확장 예시 |

설치 후 Google 계정 승인 화면이 뜨면 수업용 계정으로 승인합니다.
실제 고객 자료가 있는 개인 계정은 강의 실습에서 바로 연결하지 않습니다.

## 연결이 가능할 때

Google Sheets MCP가 연결되어 있다면 AI에게 수강생의 실제 업무 시트를 먼저 찾게 합니다.

확인할 항목:

- 문서명
- 탭 이름
- 주요 열
- 민감정보가 들어간 열
- 결과물에 써도 되는 범위

자료가 없거나 연결이 어려울 때만 아래 백업 자료를 사용합니다.

백업용 샘플 자료:

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
practice/prompts/01-mcp-material-check.md를 읽고, 내가 고른 반복 업무에 필요한 자료가 어디 있는지 확인해줘.
Google Sheets MCP가 연결되어 있으면 내 실제 업무 Google Sheet를 먼저 확인해줘.
연결된 시트를 찾을 수 없으면 practice/sample-data 폴더의 백업 파일로 진행해줘.
```
