import React, {Component} from 'react';

class SearchBar extends Component{
    constructor() {
        super()
        this.state = {
            userInput: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            userInput: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.callApi(this.state.userInput);
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} action="submit">
                    <label  htmlFor="searchByName">Search TV Show By Name:</label>
                    <input value={this.state.userInput} onChange={this.handleChange} name="searchByName"type="text"/>
                    <button>Search</button>
                </form>
            </div>
        )
    }
}


export default SearchBar;