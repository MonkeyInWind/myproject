const Koa = require('koa');
const Router = require('koa-router');
const KoaParser = require('koa-bodyparser');
const cors = require('koa2-cors');
const app = new Koa();
const router = new Router();

app.use(cors());
app.use(KoaParser());
app.use(router.routes());

const get = router.get;
const post = router.post;

router.get('/', (ctx) => {
  ctx.body = {
    result: true
  }
});

router.post('/', (ctx) => {
    ctx.body = {
        result: true,
        data: ctx.request.body
    }
})

app.listen('10086');
