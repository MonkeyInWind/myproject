const Koa = require('koa');
const Router = require('koa-router');
const KoaParser = require('koa-bodyparser');
const cors = require('koa2-cors');
const socket = require('socket.io');
const http = require('http');

const app = new Koa();
const router = new Router();

app.use(cors());
app.use(KoaParser());
app.use(router.routes());

const server = http.createServer(app.callback());

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
});

const io = socket(server);

io.of('/test').on('connection', (client) => {
    console.log('connected');

    client.on('message', async function (message) {
        console.log(message);

        client.emit('res', {a: 2});
        client.disconnect();
    });

    client.on('disconnect', async function () {
        console.log('disconnect');
    });
});

server.listen('10086');
