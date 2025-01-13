import { Hono } from 'hono'

// ENV : 'worker-configuration.d.ts' is type definitions for `wrangler.toml` bindings
const app = new Hono<{ Bindings: Env }>();

app.get('/', (c) => {
	return c.json({
		hello: 'world',
		var: c.env.MY_VARIABLE,
		// If you want to use a local secret, 
		// Create .dev.vars file with MY_SECRET=your_secret

		// secret: c.env.MY_SECRET
	})
})

export default app
