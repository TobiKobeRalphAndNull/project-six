import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './SearchBar';
import Slider from './Slider';
import Gallery from './Gallery';

class App extends Component {

  constructor() {
    super();
    this.state = {
      relevantShows: []
    }
  }

  componentDidMount() {
    this.callApi('dragon');
  }

  callApi = (search) => {
    axios({
      method: "GET",
      url: "https://api.tvmaze.com/search/shows",
      responseType: "json",
      params: {
        q: search,
      },
    }).then((res) => {
      const data = res.data;

      const searchResults = [];

      for (let key in data) {
        searchResults.push({
          id: data[key].show.id,
          title: data[key].show.name,
          image: data[key].show.image.medium,
          summary: data[key].show.summary
        })
      }

      this.setState({
        relevantShows: searchResults,
      })
    });
  }

  render() {
    return (
      <div className="App">
        <h1>My Watchlist</h1>
        <Slider />
        <SearchBar callApi={this.callApi}/>
        <Gallery relevantShows={this.state.relevantShows}></Gallery>
      </div>
    );
  }
}

export default App;
