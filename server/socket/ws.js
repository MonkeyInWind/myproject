const test = (client) => {
    console.log('connected');

    client.on('message', async function (message) {
        console.log(message);
        let n = 0;
        this.timer = setInterval(() => {
            client.emit('res', n);
            n++;
            if (n > 10) {
                clearInterval(this.timer);
                client.disconnect();
            }
        }, 1000);
    });

    client.on('disconnect', async function () {
        console.log('disconnect');
    });
}

module.exports = {
    test
}
