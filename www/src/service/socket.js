import socket from 'socket.io-client';

class Socket {
    constructor(url, path) {
        this.url = url;
        this.path = path;
        this.io = socket(`${url}/${path}`);
    }

    connect = () => {
        return new Promise((resolve, reject) => {
            this.io.on('connect', () => {
                console.log('websocket connected');
                resolve({result: true});
            });
        });
    }

    emit = (key, values) => {
        return new Promise((resolve, reject) => {
            this.io.emit(key, values, (res) => {
                resolve(res);
            });
        });
    }

    on = (key, cb) => {
        this.io.on(key, cb);
    }

    close = () => {
        this.io.close();
    }
}

export default Socket;
