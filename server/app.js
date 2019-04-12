const Koa = require('koa');
const KoaParser = require('koa-bodyparser');
const cors = require('koa2-cors');
const socket = require('socket.io');
const http = require('http');
const router = require('./router/router').router;
const Ws = require('./socket/ws');

const app = new Koa();

app.use(cors());
app.use(KoaParser());
app.use(router.routes());

const server = http.createServer(app.callback());

const io = socket(server);

io.of('/test').on('connection', Ws.test);

server.listen('10086');
