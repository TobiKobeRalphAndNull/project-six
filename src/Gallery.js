import React, { Component } from 'react';
import './App.css';

class Gallery extends Component {
    render() {
        return (
            <ul className="searchResuts">
                { this.props.relevantShows.map((show) => {
                    return (
                        <li><button className="tvImgButton" key={show.id}>
                            <img src={show.image} alt={`Poster for ${show.title}`}></img>
                            <p className="tv Title">{show.title}</p>
                        </button></li>
                    )
                })} 
            </ul>
        )
    }
}
export default Gallery;

