import React, { Component } from 'react';
import { get, post } from './http/axios';
import './App.css';

class App extends Component {
  async componentDidMount() {
    let res = await get({
      url: 'http://192.168.20.41:10086',
      data: {
        a: 1,
        b: 2
      }
    });

    console.log(res);
  }
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
