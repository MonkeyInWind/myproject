import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Socket from './service/socket';
import Store from './store/store';
import Settings from './etc/settings';

@observer
class App extends Component {
    async componentDidMount() {
        const ws = new Socket(Settings.socket_url, 'test');
        let connectRes = await ws.connect();
        console.log(`websocket connect result: ${connectRes.result}`);

        let sendRes = await ws.emit('message', {a: 1});
        console.log(`send message result: ${sendRes.result}`);

        ws.on('disconnect', () => {
            console.log('websocket disconnect');
        });

        ws.on('res', (res) => {
            console.log(`websocket received: ${res}`);
        });
    }

    render() {
        return (
            <div className="App">
                <div>
                    <button onClick={Store.getHandler}>get</button>
                    <span>{ `res: ${Store.getRes}`}</span>
                </div>
                <div>
                    <button onClick={Store.postHandler}>post</button>
                    <span>{ `res: ${Store.postRes}`}</span>
                </div>
            </div>
        );
    }
}

export default App;
