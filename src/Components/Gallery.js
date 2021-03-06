import React, { Component, Fragment } from 'react';
import '../styles/Sass/App.scss';
import AddTitle from './AddTitle';
import ShowDetails from './ShowDetails';

class Gallery extends Component {

    // to append relevant show details to page and allow for modals
    render() {
        return (
            <Fragment>    
                <ul className="searchResuts">
                    {   this.props.relevantShows.length === 0 ? 
                        (<p className="noResults">No results found.</p>) :
                        (this.props.relevantShows.map((show) => {
                            return (
                                <Fragment>                 
                                    <ShowDetails showDetails={show}/>
                                    <li key={show.id}>
                                        <button onClick={() => {document.querySelector(`.modal${show.id}`).classList.add('show');document.querySelector(`.modalBackground`).classList.add('show')}} className="tvImgButton">
                                            <img
                                            src={show.image}
                                            alt={`Poster for ${show.title}`}
                                            ></img>
                                        </button>
                                        <p className="tv Title">{show.title}</p>
                                        <AddTitle
                                        showTitle={show.title}
                                        showRating={show.rating}
                                        />
                                    </li>
                                </Fragment>
                            );
                        }))
                    }
                </ul>
            </Fragment>
        )
    }
}
export default Gallery;

