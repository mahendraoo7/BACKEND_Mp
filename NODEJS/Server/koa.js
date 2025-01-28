const koa = require('koa');
const app = new koa();

app.use( async (ctx ,next) => {
    console.log(`${ctx.method} ${ctx.url}`);
    await next();
});

app.use( async (ctx) => {
     ctx.body = "Hello world";
});

app.listen(3000 , () => {
    console.log("Server is running on http://localhost:3000");
});