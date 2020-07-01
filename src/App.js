import React, { Component, Fragment } from 'react';
import axios from 'axios';
import './styles/Sass/App.scss';
import SearchBar from './Components/SearchBar'
import Slider from './Components/Slider';
import Gallery from './Components/Gallery';
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
            summary: data[key].show.summary,
            rating: data[key].show.rating.average
          })
        } else {
          searchResults.push({
            id: data[key].show.id,
            title: data[key].show.name,
            image: noImage,
            summary: data[key].show.summary,
            rating: data[key].show.rating.average
          })
        }
      }

      this.setState({
        relevantShows: searchResults,
      })
    });
  }

  render() {
    return (
      <Fragment>
        <header>
          <div className="wrapper">
            <h1 className="flash">My Watchlist</h1>
            <SearchBar callApi={this.callApi} />
          </div>
        </header>
        <section>
          <Slider />
        </section>
        <section className='gallery wrapper'>
          <Gallery relevantShows={this.state.relevantShows} />
        </section>
        <footer><p><a href="https://ruiwd.me">Jerry Dong</a>, <a href="https://lawrencehebia.com">Lawrence Hebia</a>, <a href="http://www.shondamoshis.com">Shonda Moshis</a>, <a href="http://www.tabithapoeze.com">Tabitha Poeze</a> &copy; 2020</p></footer>
      </Fragment>
    );
  }
}

export default App;
