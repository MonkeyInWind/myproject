import React, { Component } from 'react';
import './App.css';
import { getTest, postTest } from './http/server';

class App extends Component {
  async componentDidMount() {
    let getRes = await getTest({a: 1});
    let postRes = await postTest({a: 1});
    console.log(getRes, postRes);
  }
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
