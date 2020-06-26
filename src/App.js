import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      someThing: []
    }
  }

  componentDidMount() {
    axios('http://api.tvmaze.com/search/shows', {
      params: {
        q: 'a'
      }
    }).then(function (res) {
        console.log(res.data);
    });
  }

  render() {
    return (
      <div className="App">


        <h1>This is our wonderful!!</h1>

        <h2>tabitha's test</h2>

      </div>
    );
  }
}

export default App;
