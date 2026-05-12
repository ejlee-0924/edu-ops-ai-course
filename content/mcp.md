# 업무 자료 연결(MCP)

MCP는 AI가 자료를 찾으러 가는 길입니다.
수강생에게는 먼저 **업무 자료 연결**이라고 설명하면 됩니다.

## 실습 목표

수강생이 만들 Skill에 필요한 자료가 어디 있는지 확인합니다.

먼저 확인할 자료:

- 어떤 자료실을 쓸지: Google Sheets, Slack, Gmail, Notion, Drive/Docs
- 실제로 사용할 문서, 채널, 메일함, 페이지 이름
- 결과물에 포함해도 되는 정보
- 개인정보나 고객사 민감정보가 있는 위치

자료가 아직 없는 수강생만 만족도, 싱크업, 고객사 메일, CS 문의 샘플로 흐름을 확인합니다.

## Claude Code에 Google Workspace MCP 설치하기

수업에서는 `workspace-mcp`를 설치해 Google Sheets, Gmail, Drive, Docs 같은 Google Workspace 자료를 연결합니다.
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
| `sheets` | 만족도, 신청자 명단, 운영 현황표 읽기 |
| `drive` | Google Drive에서 업무 시트나 백업용 샘플 워크북 찾기 |
| `gmail` | 고객사 메일 히스토리 확인 |
| `forms` | 만족도 설문 결과와 연결될 수 있는 자료 확인 |
| `docs`, `slides` | 회의록, 교육 자료, 결과 공유 문서 확인 |
| `appscript` | 고급 자동화 확장 예시 |

설치 후 Google 계정 승인 화면이 뜨면 수업용 계정으로 승인합니다.
실제 고객 자료가 있는 개인 계정은 강의 실습에서 바로 연결하지 않습니다.

## 연결이 가능할 때

MCP나 Connector가 연결되어 있다면 AI에게 수강생의 실제 업무 자료를 먼저 찾게 합니다.

확인할 항목:

- 자료실 이름
- 문서, 채널, 메일함, 페이지 이름
- 주요 필드나 메시지 범위
- 민감정보가 들어간 위치
- 결과물에 써도 되는 범위

자료가 없거나 연결이 어려울 때만 아래 백업 자료를 사용합니다.

백업용 샘플 자료:

- 문서: `Edu Ops AI Course Sample`
- 탭: `satisfaction_comments`
- 탭: `syncup_notes`
- 탭: `client_email_thread`
- 탭: `cs_inquiries`

Slack과 Notion은 사용 중인 도구에서 MCP나 Connector가 가능하면 연결합니다.
연결이 어려우면 필요한 대화나 페이지를 export해서 `practice/private-data/`에 넣습니다.

## 연결이 어려울 때

회사 보안 정책 때문에 연결이 안 될 수 있습니다.
그럴 때는 필요한 자료를 export한 파일로 `practice/private-data/`에 넣거나, `practice/sample-data/`의 백업 파일로 진행합니다.

## 실습 프롬프트

```text
practice/prompts/01-mcp-material-check.md를 읽고, 내가 고른 반복 업무에 필요한 자료가 어디 있는지 확인해줘.
연결 가능한 자료실이 있으면 내 실제 업무 자료를 먼저 확인해줘.
연결된 자료를 찾을 수 없으면 practice/sample-data 또는 practice/private-data 폴더의 백업 파일로 진행해줘.
```
