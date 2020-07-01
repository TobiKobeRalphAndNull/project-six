import React, { Component } from 'react';
import '../styles/Sass/App.scss';
import AddTitle from './AddTitle';

class Gallery extends Component {
    render() {
        return (
            <ul className="searchResuts">
                { this.props.relevantShows.map((show) => {
                    return (
                        <li key={show.id}>
                            {/* Do we need this button?? It doesn't appear to be used. */}
                            {/* <button className="tvImgButton"> */}
                                <img src={show.image} alt={`Poster for ${show.title}`}></img>
                                <p className="tv Title">{show.title}</p>
                            {/* </button> */}
                            <AddTitle showTitle={show.title} showRating={show.rating} />
                        </li>
                    )
                })}
            </ul>
        )
    }
}
export default Gallery;

