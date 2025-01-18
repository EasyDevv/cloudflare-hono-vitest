# Cloudflare Workers Hono Vitest Template

<h3 align="center">Build and Test Serverless Apps Quickly.</h3>

<p align="center">
    <img
    src="https://go-skill-icons.vercel.app/api/icons?i=cloudflare,hono,vite,bun"
    />
</p>

<p align="center">
    <a href="./README.md"><img alt="README in English" src="https://img.shields.io/badge/English-d9d9d9"></a>
    <a href="./README_KR.md"><img alt="README in Korean" src="https://img.shields.io/badge/Korean-d9d9d9"></a>
</p>

This template provides an example of testing a Hono app running on Cloudflare Workers using Vitest. It includes a simple example code that outputs environment variables as JSON, and demonstrates how to manage important API keys for local development.

## Prerequisites

Before getting started, ensure you have the following:

- [Bun](https://bun.sh/)
- [Cloudflare Account](https://dash.cloudflare.com/)

## Project Structure

- `src/index.ts`: Main Hono file.
- `test/index.test.ts`: Vitest test cases.
- `.dev.vars`: File to define environment variables and secrets for local development.
- `wrangler.toml`: Cloudflare Workers configuration file.

## Setup

### 1. Create a New Project:

Replace `my-project` with your desired project name. If not provided, the project will be named `cloudflare-hono-vitest`.

```bash
bun create easydevv/cloudflare-hono-vitest my-project
# bun create `template` `project-name`
```

### 2. Configure `wrangler.toml`:

Here’s an example configuration for `wrangler.toml`:

```toml
name = "my-project"
main = "src/index.ts"

[vars]
MY_VARIABLE = "your_variable"
```

### 3. Set Up Environment Variables (Optional):

Create a `.dev.vars` file in the project root. This file is automatically loaded by Wrangler when running the application locally.

Example `.dev.vars`:

```plaintext
MY_SECRET="your_secret"
```

These variables can be accessed in the Hono application via `c.env`.

## Running the Application

To run the application locally using Wrangler:

```bash
bun run dev # or bun dev
```

This command starts a local server accessible at `http://localhost:8787`.

## Running Tests

To run tests using Bun:

```bash
bun run test
```

Alternatively, using bunx:

```bash
bunx vitest
```

## Production Setup

#### 1. Set Up SECRET in Cloudflare Workers:

Use the Wrangler CLI to set secrets for your application:

```bash
wrangler secret put MY_SECRET
```

You will be prompted to enter the value for `MY_SECRET`. Input your API key or other sensitive data.

#### 2. Deploy the Application:

Deploy the Hono application to Cloudflare Workers using the following command:

```bash
bun run deploy
```

After deployment, you can monitor it in the Cloudflare dashboard:

- [Cloudflare Dashboard](https://dash.cloudflare.com/)

## Conclusion

For more information on Hono, Cloudflare Workers, and Vitest, refer to their official documentation:

- [Hono Documentation](https://hono.dev/docs/getting-started/cloudflare-workers)
- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [Vitest Documentation](https://vitest.dev/guide/)
