import * as Koa from 'koa';
import helloWorld from './middlewares/hello-world';

const app = new Koa();

app.use(helloWorld);

export default app;