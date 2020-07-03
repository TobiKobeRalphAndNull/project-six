import React, { Component, Fragment } from 'react';
import axios from 'axios';
import './styles/Sass/App.scss';
import SearchBar from './Components/SearchBar'
import Slider from './Components/Slider';
import Gallery from './Components/Gallery';
import noImage from './assets/noImage.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

class App extends Component {

  constructor() {
    super();
    this.state = {
      relevantShows: []
    }
  }

  // Call to show gallery to user on load
  componentDidMount() {
    this.callApi('Survivor');
  }

  // Main API call
  callApi = (search) => {
    axios({
      method: "GET",
      url: "https://api.tvmaze.com/search/shows",
      responseType: "json",
      params: {
        q: search,
      },
    }).then((res) => {
      // Take response and break down into more-usable structure
      const data = res.data;
      const searchResults = [];
      for (let key in data) {
        if(data[key].show.image !== null) {
          searchResults.push({
            id: data[key].show.id,
            title: data[key].show.name,
            image: data[key].show.image.medium,
            summary: data[key].show.summary,
            rating: data[key].show.rating.average,
            language: data[key].show.language,
            genre: data[key].show.genres[0],
          })
        } else {
          searchResults.push({
            id: data[key].show.id,
            title: data[key].show.name,
            image: noImage,
            summary: data[key].show.summary,
            rating: data[key].show.rating.average,
            language: data[key].show.language,
            genre: data[key].show.genres[0],
          })
        }
      }
      this.setState({
        relevantShows: searchResults,
      })
      // If error received, show user error tile by adding error tile to state
    }, (error) => {
      console.log('Error:', error)
      const searchResults = [];
      searchResults.push({
        id: 1,
        title: "Sorry, no result/error received.",
        image: noImage,
        summary: "N/A",
        rating: "N/A",
        language: "N/A",
        genre: "N/A",
      })
      this.setState({
        relevantShows: searchResults,
      })
    });
  }

  // Hide/expose slider with list of shows
  showMyLists =() => {
    document.querySelector('section.slider').classList.toggle('show');
  }

  render() {
    return (
      <Fragment>
        <header>
          <div className="hamburgerMenu">
            <FontAwesomeIcon icon={faBars} onClick={this.showMyLists}/>
          </div>
          <div className="headerContent">
            <h1 className="flash">My Watchlist</h1>
            <SearchBar callApi={this.callApi} />
          </div>
        </header>
        <section className="slider">
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
