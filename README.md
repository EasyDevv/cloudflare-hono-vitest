# Cloudflare Workers Hono Vitest Template

This project demonstrates a simple Hono application deployed on Cloudflare Workers, along with tests written using Vitest. The application exposes a single endpoint that returns a JSON response containing environment variables. Environment variables, including secrets, are managed using a `.dev.vars` file for local development.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Bun](https://bun.sh/)

## Project Structure

- `src/index.ts`: The main Hono application file.
- `test/index.test.ts`: Vitest test cases for the application.
- `.dev.vars`: File for defining environment variables and secrets for local development.
- `wrangler.toml`: Configuration file for Cloudflare Workers (not shown in the code, but assumed to be present).

## Setup

### 1. Create a new project:

my-project is the name of the project. You can replace it with your own project name.

```bash
bun create easydevv/cloudflare-hono-vitest my-project
```

### 2. Configure `wrangler.toml`:

Ensure your `wrangler.toml` file is properly configured for deployment. For example:

```toml
name = "my-project"
main = "src/index.ts"

[vars]
MY_VARIABLE = "your_variable"
```

### 3. Configure environment variables (Optional):

Create a `.dev.vars` file in the root of your project to define environment variables and secrets for local development. This file is automatically loaded by Wrangler when running the application locally.

Example `.dev.vars`:

```plaintext
MY_SECRET="your_secret"
```

These variables will be accessible in your Hono application via `c.env`.

## Running the Application

To run the application locally using Wrangler:

```bash
bun dev
```

This will start the Cloudflare Workers development server, and you can access the application at `http://localhost:8787`.

## Running Tests

Tests are written using Vitest and can be run using Bun or npm.

To run the tests using Bun:

```bash
bun run test
```

Alternatively, using bunx:

```bash
bunx vitest
```

### Test Cases

#### 1. Should return 200 response:

This test checks if the root endpoint (`/`) returns a 200 status code and the expected JSON response containing the environment variables.

#### 2. Should return 404 for unknown routes:

This test ensures that the application returns a 404 status code for routes that do not exist.

#### 3. Should handle errors:

This test is currently commented out but can be used to test error handling in the application.

## Deployment

To deploy the application to Cloudflare Workers:

#### 1. Set secrets in Cloudflare Workers:

Use the Wrangler CLI to set secrets for your application:

```bash
wrangler secret put MY_SECRET
```

You will be prompted to enter the value for `MY_SECRET`.

#### 2. Deploy the application:

Run the following command to deploy your Hono application to Cloudflare Workers:

```bash
bun run deploy
```

This will deploy your application to Cloudflare's edge network, making it accessible globally.

`https://my=project.my-name.workers.dev`

**my-project** is the name of your project, **my-name** is the name of your project.

And you can see it in your dashboard.

- [Cloudflare Dashboard](https://dash.cloudflare.com/)

## Conclusion

This project provides a basic setup for building and testing a Hono application on Cloudflare Workers. It demonstrates how to use environment variables and secrets, write tests with Vitest, and deploy the application using Wrangler. You can extend this setup to build more complex applications and add additional test cases as needed.

For more information on Hono, Cloudflare Workers, and Vitest, refer to their official documentation:

- [Hono Documentation](https://hono.dev/docs/getting-started/cloudflare-workers)
- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [Vitest Documentation](https://vitest.dev/guide/)
