import React, {Component} from 'react';




class SearchBar extends Component{

    

    render(){
        return(
            <div>
                <form action="submit">
                    <input type="text"/>
                    <button>Search</button>
                </form>
            </div>
        )
    }
}


export default SearchBar;