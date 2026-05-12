# MCP 설치하고 자료 연결하기

MCP는 AI가 자료를 찾으러 가는 길입니다.
수강생에게는 먼저 **업무 자료 연결**이라고 설명하면 됩니다.

이 과정에서는 실습을 시작하기 전에 필요한 연결을 먼저 끝냅니다.
Google Sheets, Gmail, Drive, Docs 자료는 Claude Code에 `workspace-mcp`를 설치해서 연결합니다.
Slack이나 Notion은 사용하는 도구에서 MCP나 Connector가 가능하면 연결합니다.

## Claude Code에 Google Workspace MCP 설치하기

아래 명령은 Claude Code 기준입니다.
강사는 Google OAuth Client ID와 Client Secret을 비공개로 제공합니다.
이 값은 강의 공개 자료에 그대로 올리지 않습니다.

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
| `drive` | Google Drive에서 업무 시트나 문서 찾기 |
| `gmail` | 고객사 메일 히스토리 확인 |
| `forms` | 만족도 설문 결과와 연결될 수 있는 자료 확인 |
| `docs`, `slides` | 회의록, 교육 자료, 결과 공유 문서 확인 |
| `appscript` | 고급 자동화 확장 예시 |

설치 후 Google 계정 승인 화면이 뜨면 수업용 계정으로 승인합니다.
실제 고객 자료가 있는 개인 계정은 강의 실습에서 바로 연결하지 않습니다.

## 설치 후 확인할 자료

MCP나 Connector가 연결되면 AI에게 수강생의 실제 업무 자료를 먼저 찾게 합니다.

확인할 항목:

- 자료실 이름
- 문서, 채널, 메일함, 페이지 이름
- 주요 필드나 메시지 범위
- 민감정보가 들어간 위치
- 결과물에 써도 되는 범위

## 실습 프롬프트

```text
내가 고른 반복 업무에 필요한 자료가 어디 있는지 확인해줘.

연결 가능한 자료실이 있으면 내 실제 업무 자료를 먼저 확인해줘.
연결된 자료를 찾을 수 없으면 어떤 자료 연결이 더 필요한지만 알려줘.

먼저 확인할 자료:
- 내가 방금 정한 실제 업무 자료
- 그 업무에 쓰는 문서, 채널, 메일함, 페이지
- 결과물에 필요한 범위
- 개인정보나 고객사 민감정보가 들어간 위치

출력은 다음 형태로 해줘:
1. 찾은 자료
2. 부족한 자료
3. 민감정보 주의가 필요한 자료
4. 첫 실행 프롬프트에 넣어야 할 자료 조건
```
