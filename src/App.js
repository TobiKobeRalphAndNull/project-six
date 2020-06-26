import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './SearchBar';
import Slider from './Slider';
import Gallery from './Gallery';
import noImage from './assets/noImage.jpg';

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
        if(data[key].show.image !== null) {
          searchResults.push({
            id: data[key].show.id,
            title: data[key].show.name,
            image: data[key].show.image.medium,
            summary: data[key].show.summary
          })
        } else {
          searchResults.push({
            id: data[key].show.id,
            title: data[key].show.name,
            image: noImage,
            summary: data[key].show.summary
          })
        }
        

      }

      this.setState({
        relevantShows: searchResults,
      })

      console.log(searchResults)
    });
  }

  render() {
    return (
      <div className="App">
        <h1>My Watchlist</h1>
        <Slider />
        <SearchBar callApi={this.callApi}/>
        <Gallery relevantShows={this.state.relevantShows}></Gallery>
        <footer><a href="https://ruiwd.me">Jerry Dong</a>, <a href="https://lawrencehebia.com">Lawrence Hebia</a>, <a href="http://www.shondamoshis.com">Shonda Moshis</a>, <a href="http://www.tabithapoeze.com">Tabitha Poeze</a> &copy; 2020</footer>
      </div>
    );
  }
}

export default App;
