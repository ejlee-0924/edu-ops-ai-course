# 설치 및 진행 가이드

이 문서는 강사가 수강생에게 GitHub 링크를 공유할 때 함께 안내하기 위한 문서입니다.

## 가장 쉬운 진행 방식

수강생은 Claude Code 또는 Codex에 아래 문장을 붙여넣습니다.

```text
이 GitHub 링크에서 실습 자료를 받아서 설치하고, README를 읽은 뒤 교육 운영자 실습을 3번 AI 업무 매뉴얼 만들기부터 순서대로 진행해줘:

[GitHub 링크]
```

Claude Code와 Codex 모두 사용할 수 있습니다.

- Claude Code는 `CLAUDE.md`를 읽고 진행합니다.
- Codex는 `AGENTS.md`를 읽고 진행합니다.
- 두 파일 모두 같은 교육 운영 업무 매뉴얼을 불러오도록 되어 있습니다.

## ZIP 다운로드 방식

회사 보안 정책이나 네트워크 제한 때문에 AI가 GitHub 링크를 직접 열지 못할 수 있습니다. 그럴 때는 아래 방식으로 진행합니다.

1. GitHub 페이지를 엽니다.
2. `Code` 버튼을 누릅니다.
3. `Download ZIP`을 누릅니다.
4. 압축을 풉니다.
5. Claude Code 또는 Codex에서 압축을 푼 폴더를 엽니다.
6. 아래 문장을 입력합니다.

```text
이 폴더의 README를 읽고, 교육 운영자 실습을 3번 AI 업무 매뉴얼 만들기부터 순서대로 진행해줘.
```

## 터미널 사용 가능자용

```bash
git clone [GitHub 링크]
cd edu-ops-ai-course/practice
```

그다음 Claude Code 또는 Codex에서 다음을 입력합니다.

```text
이 practice 폴더의 README를 읽고, 3번 AI 업무 매뉴얼 만들기부터 실습을 진행해줘.
```

## 수강생 실데이터 안내

실제 업무 자료는 `practice/private-data/`에 넣습니다.

주의:

- 수강생 실명, 이메일, 전화번호는 가능하면 지웁니다.
- 고객사 민감정보는 익명화합니다.
- 고객에게 보낼 메일은 반드시 사람이 검토한 뒤 발송합니다.
