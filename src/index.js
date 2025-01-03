import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => {
	const my_secret = c.env.MY_SECRET;
	return c.text(`MY_SECRET IS: ${my_secret}`);
});

export default {
	fetch: app.fetch,
};
