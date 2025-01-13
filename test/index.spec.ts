import app from '../src/index'
import { env } from 'cloudflare:test'
import { expect, describe, it } from 'vitest'

// Command to run tests: `bun run test` or `bunx vitest`
describe('Test the application', () => {
	it('Should return 200 response', async () => {
		const res = await app.request('/', {}, env);
		expect(res.status).toBe(200);
		expect(await res.json()).toEqual({
			hello: 'world',
			var: 'your_variable',
			secret: 'your_secret',
		})
	})

	it('should return 404 for unknown routes', async () => {
		const res = await app.request('/unknown', {});
		expect(res.status).toBe(404);
	})

	// it('should handle errors', async () => {
	//     const res = await app.request('/error');
	//     expect(res.status).toBe(500);
	// })
})