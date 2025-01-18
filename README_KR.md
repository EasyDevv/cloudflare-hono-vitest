# Cloudflare Workers Hono Vitest 템플릿

<h3 align="center">서버리스 앱을 빠르게 구축, 테스트까지.</h3>

<p align="center">
    <img
    src="https://go-skill-icons.vercel.app/api/icons?i=cloudflare,hono,vite,bun"
    />
</p>

<p align="center">
    <a href="./README.md"><img alt="README in English" src="https://img.shields.io/badge/English-d9d9d9"></a>
    <a href="./README_KR.md"><img alt="README in Korean" src="https://img.shields.io/badge/한국어-d9d9d9"></a>
</p>

이 템플릿은 Cloudflare Workers에서 실행되는 Hono 앱을 Vitest로 테스트하는 예제입니다. 환경 변수를 JSON으로 출력하는 엔드포인트 예시 코드가 포함되며, 로컬 개발을 위해 `.dev.vars`를 통해 비밀 및 변수를 관리합니다.

## 사전 요구 사항

시작하기 전에 다음 요구사항을 확인해주세요:

- [Bun](https://bun.sh/)
- [Cloudflare 계정](https://dash.cloudflare.com/)

## 프로젝트 구조

- `src/index.ts`: Hono 메인 파일.
- `test/index.test.ts`: Vitest 테스트 케이스.
- `.dev.vars`: 로컬 개발을 위한 환경 변수 및 비밀을 정의하는 파일.
- `wrangler.toml`: Cloudflare Workers 설정 파일

## 설정

### 1. 새 프로젝트 생성:

my-project는 프로젝트 이름입니다. 자신의 프로젝트 이름으로 변경할 수 있습니다.

```bash
bun create easydevv/cloudflare-hono-vitest my-project
```

### 2. `wrangler.toml` 설정:

`wrangler.toml` 설정의 예시입니다:

```toml
name = "my-project"
main = "src/index.ts"

[vars]
MY_VARIABLE = "your_variable"
```

### 3. 환경 변수 설정 (선택 사항):

프로젝트 루트에 `.dev.vars` 파일을 생성하세요. 이 파일은 Wrangler가 로컬에서 애플리케이션을 실행할 때 자동으로 로드됩니다.

`.dev.vars` 예시:

```plaintext
MY_SECRET="your_secret"
```

이 변수들은 Hono 애플리케이션에서 `c.env`를 통해 접근할 수 있습니다.

## 애플리케이션 실행

Wrangler를 사용하여 로컬에서 실행하려면:

```bash
bun run dev # 또는 bun dev
```

이 명령어로 로컬 서버가 실행되며 `http://localhost:8787`에서 접근할 수 있습니다.

## 테스트 실행

Bun을 사용하여 테스트를 실행하려면:

```bash
bun run test
```

또는 bunx를 사용:

```bash
bunx vitest
```

## 프로덕션 환경에서의 설정

#### 1. Cloudflare Workers에서 SECRET 설정:

Wrangler CLI를 사용하여 애플리케이션의 비밀을 설정하기:

```bash
wrangler secret put MY_SECRET
```

`MY_SECRET`의 값을 입력하라는 메시지가 표시됩니다. API 키 등을 입력하세요.

#### 2. 애플리케이션 배포:

다음 명령어를 실행하여 Hono 애플리케이션을 Cloudflare Workers에 배포하세요:

```bash
bun run deploy
```

배포 후 아래 대시보드에서 확인할 수 있습니다.

- [Cloudflare 대시보드](https://dash.cloudflare.com/)

## 마치며

Hono, Cloudflare Workers, Vitest에 대한 더 많은 정보는 공식 문서를 참조하세요:

- [Hono 문서](https://hono.dev/docs/getting-started/cloudflare-workers)
- [Cloudflare Workers 문서](https://developers.cloudflare.com/workers/)
- [Vitest 문서](https://vitest.dev/guide/)
