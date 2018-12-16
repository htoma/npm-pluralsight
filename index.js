const Koa = require('koa');
const app = module.exports = new Koa();

app.use(function *() {
    this.body = "koa says hi";
});

app.listen(3000);
console.log("Application started");