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

    emit = (key, mess) => {
        this.io.emit(key, mess);
    }

    on = (key, callback) => {
        this.io.on(key, res => {
            callback && callback(res);
        });
    }

    close = () => {
        this.io.close();
    }
}

export default Socket;
