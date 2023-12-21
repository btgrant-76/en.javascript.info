const Koa = require('koa');
const app = new Koa();
const router = require('@koa/router')();

console.log('server starting...')

/* TODO add a request logging middleware
 * TODO switch this over to hosting files rather than all the inline stuff
 */

router.get('/', async ctx => {
  console.log('ctx', ctx);
  const theBody = `
<head>
<title>This is the Title</title>
</head>
<body>
<h1>This is the First Page</h1>
Here is some stuff.
</body>
`;

  ctx.body = theBody;
});

router.get('/strong-mad', async ctx => {
  ctx.body = 'I\'m a web site!';
});

router.get('/hello-alert', async ctx => {
    ctx.body = `
<!DOCTYPE HTML>
<html>
<body>
    <p>Before the script...</p>
    <script> 
        alert('Hello World!');
    </script> 
    <p>After the script...</p>
</body>
</html>
`
});

router.get('/im-javascript', async ctx => {
    ctx.body = `
<!DOCTYPE HTML>
<html>
<body>
    <script>
        alert("I'm JavaScript!");
    </script>
</body>
</html>
`
});

router.get('/im-javascript-ext', async ctx => {
    ctx.body = `
<!DOCTYPE HTML>
<html>
<body>
    <script src="/im-javascript-ext.js">
    </script>
</body>
</html>
`;
});

router.get('/im-javascript-ext.js', async ctx => {
    ctx.body = `
alert("I'm JavaScript ext!");
`;
});

app.use(router.routes());

console.log('listening on 3000');
app.listen(3000);
