const serve = require('koa-static');
const logger = require('koa-logger');
const Koa = require('koa');
const app = new Koa();
const router = require('@koa/router')();

console.log('server starting...')

/* TODO add a request logging middleware
 */

// app.use(router.routes());
app.use(serve('./public'))
app.use(logger());

console.log('listening on 3000');
app.listen(3000);
