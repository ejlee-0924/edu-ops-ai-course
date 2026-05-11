# Claude Code/Codex for Education Operations

비개발 교육 운영자를 위한 1일 실습형 교육 패키지입니다.

이 교육은 코딩을 가르치지 않습니다. 교육 운영자가 반복적으로 처리하는 자료 정리, 만족도 리포팅, 기업별 할 일 정리, 메일/CS 초안 작성 업무를 Claude Code와 Codex에 맡기는 법을 배웁니다.

## 학습 웹사이트

이 저장소는 두 층으로 구성되어 있습니다.

- 공개 학습 웹사이트: https://edu-ops-ai-course-vercel.vercel.app
- 루트 웹사이트: `index.html`에서 시작하는 학습 가이드북
- 실습 패키지: `practice/` 안의 샘플 데이터, 프롬프트, 템플릿

웹사이트는 `시작하기 → 이해하기 → 설계하기 → 만들기 → 마무리` 흐름으로 구성되어 있습니다. 수강생은 웹사이트에서 학습 흐름을 보고, Claude Code 또는 Codex에서는 `practice/` 실습 파일을 실행합니다.

## 수강생 시작 방법

Claude Code 또는 Codex에 아래 문장을 그대로 붙여넣으세요. 저장소 루트에서 시작해도 되고, `practice` 폴더에서 시작해도 됩니다.

```text
이 GitHub 링크에서 실습 자료를 받아서 설치하고, README를 읽은 뒤 설계하기 > AI 업무 매뉴얼 만들기부터 순서대로 진행해줘:

[강사가 공유한 GitHub 링크]
```

AI가 GitHub 링크를 직접 열거나 설치할 수 없는 환경이면, GitHub 페이지에서 `Code` → `Download ZIP`을 눌러 내려받은 뒤 압축을 풀고, Claude Code 또는 Codex에서 압축을 푼 폴더를 열어 아래 문장을 입력하세요.

```text
이 폴더의 README를 읽고, 설계하기 > AI 업무 매뉴얼 만들기부터 순서대로 진행해줘.
```

## 강사용 설치 안내

수강생에게 공유할 GitHub 링크는 이 저장소의 주소를 사용합니다.

수강생이 터미널 사용에 익숙하지 않다면 ZIP 다운로드 방식을 기본으로 안내하세요. Claude Code/Codex가 GitHub 링크를 직접 받을 수 있는 환경에서는 링크만 붙여넣어도 됩니다.

Claude Code는 루트의 `CLAUDE.md`를 읽고, Codex는 루트의 `AGENTS.md`를 읽도록 구성했습니다. 두 파일 모두 `practice` 폴더의 업무 매뉴얼을 불러오므로 어느 도구에서 시작해도 같은 실습 흐름으로 진행됩니다.

터미널을 사용할 수 있는 수강생은 아래처럼 받을 수 있습니다.

```bash
git clone [강사가 공유한 GitHub 링크]
cd edu-ops-ai-course
python3 -m http.server 18790
```

그 다음 브라우저에서 `http://127.0.0.1:18790`을 열면 학습 웹사이트를 볼 수 있습니다. 포트가 이미 사용 중이면 `18791`처럼 비어 있는 번호로 바꿔 실행하면 됩니다.

## 핵심 메시지

아이디어를 같이 떠올리고 다듬을 때는 Claude Code, 정해진 업무를 정확히 처리하고 산출물로 만들 때는 Codex.

## 구성

- `slides/index.html`: 강의용 HTML 슬라이드
- `index.html`: 웹 가이드북 첫 화면
- `content/`: 웹 가이드북 본문 Markdown
- `practice/README.md`: 수강생 실습 안내서
- `practice/sample-data/`: 가상 만족도 조사, 싱크업 문서, 고객 메일, CS 문의 샘플
- `practice/private-data/`: 수강생 개인 자료를 넣는 폴더
- `practice/prompts/`: Claude Code/Codex에 붙여넣을 요청문
- `practice/templates/`: 결과물 양식
- `practice/examples/`: 완성 예시

## 진행 흐름

1. ChatGPT/Gemini와 Claude Code/Codex의 차이
2. 언제 Claude Code, 언제 Codex를 쓰는지
3. AI 업무 매뉴얼 만들기: `CLAUDE.md`, `AGENTS.md`
4. 자료 연결 이해하기(MCP): AI가 내 업무 자료를 찾는 통로
5. Clarify로 모호한 업무 요청 정리하기
6. Lab 1: 만족도 조사 정성 의견 리포팅
7. Lab 2: 싱크업/메일 히스토리 기반 기업별 할 일 정리
8. 나만의 업무 레시피 만들기

## 수강생 데이터 원칙

실제 업무 자료는 `practice/private-data/`에만 넣습니다. 이 폴더는 공유 저장소에 올리지 않는 전제입니다.

민감정보가 들어간 자료를 사용할 때는 다음을 지킵니다.

- 이름, 전화번호, 이메일, 회사 내부 사정은 결과물에서 제거하거나 익명화합니다.
- 고객사에 바로 보낼 메일은 반드시 사람이 검토한 뒤 발송합니다.
- 만족도 정성 의견은 과장하거나 새로 지어내지 않습니다.
