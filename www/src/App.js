import React, { Component } from 'react';
import { getTest, postTest } from './service/server';
import Socket from './service/socket';
import Settings from './etc/settings';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            getRes: '',
            postRes: ''
        };
    }

    getHandler = async () => {
        let getRes = await getTest({a: 1});
        this.setState({
            getRes: JSON.stringify(getRes)
        });
    }

    postHandler = async () => {
        let postRes = await postTest({a: 1});
        this.setState({
            postRes: JSON.stringify(postRes)
        });
    }

    async componentDidMount() {
        const ws = new Socket(Settings.socket_url, 'test');
        let connectRes = await ws.connect();
        console.log(`websocket connect result: ${connectRes.result}`);
        ws.emit('message', {a: 1});

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
                    <button onClick={this.getHandler}>get</button>
                    <span>{ `res: ${this.state.getRes}`}</span>
                </div>
                <div>
                    <button onClick={this.postHandler}>post</button>
                    <span>{ `res: ${this.state.postRes}`}</span>
                </div>
            </div>
        );
    }
}

export default App;
