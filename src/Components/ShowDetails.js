import React, {Component, Fragment} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

class ShowDetails extends Component {
    
  createSummary = () => {
    return {__html: this.props.showDetails.summary};
  }
  
  closeModal = () => {
    document.querySelector(`.detailsModal.show`).classList.remove('show');
    document.querySelector(`.modalBackground.show`).classList.remove('show')
  }

  render() {
    return (
      <Fragment>
        <div className='modalBackground'></div>
        <div className={`detailsModal modal${this.props.showDetails.id}`}>
          <span className="closeModal" onClick={this.closeModal}><FontAwesomeIcon icon={faPlus} /></span>
          <h2>{this.props.showDetails.title}</h2>
          <h3>&#x2605; {this.props.showDetails.rating}/10</h3>
          <p className="modal">{this.props.showDetails.genre}</p>
          <img src={this.props.showDetails.image} alt={`Poster for ${this.props.showDetails.title}`}></img>
          <div className="modal" dangerouslySetInnerHTML={this.createSummary()} />
        </div>
      </Fragment>
    )
  }
}

export default ShowDetails;