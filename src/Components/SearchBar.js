import React, {Component} from 'react';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
    };
  }

  // Used to take user input(TV show name) from search bar
  handleChange = (e) => {
    this.setState({
      userInput: e.target.value,
    });
  };

  // Used to call to API using user input(TV show name) as query
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.callApi(this.state.userInput);
  };

  render() {
    return (
      <div>
        <form
          className="showTitleSearch"
          onSubmit={this.handleSubmit}
          action="submit"
        >
          <label className="sr-only" htmlFor="searchByName">
            Search TV Show By Name:
          </label>
          <input
            value={this.state.userInput}
            onChange={this.handleChange}
            name="searchByName"
            type="text"
            placeholder="Search TV Show By Name"
          />
          <button className="inputButton">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>
    );
  }
}


export default SearchBar;