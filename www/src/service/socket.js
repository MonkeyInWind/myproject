import Settings from './../etc/settings';
import socket from 'socket.io-client';

const SocketUrl = Settings.socket_url;

const io = socket(`${SocketUrl}/test`);

io.on('connect', () => {
    console.log('connected');
    io.emit('message', 'test');
    io.on('res', res => {
        console.log(res);
        io.disconnect();
    });
});
