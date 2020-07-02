import React, { Component, Fragment } from 'react';
import firebase from './firebase';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'

class VoteButtons extends Component {

  handleUpvote  = () => {
    const currentRating = firebase.database().ref(this.props.listTitle).child(this.props.showKey).child('rating');

    let newData = null;

    currentRating.on('value', (response) => {
        let data = response.val();
        if (data < 10) {
          newData = data+1;
        } else {
          newData = 10
        }
    })
    
    currentRating.set(newData)    
  }

  
  handleDownvote = () => {
    const currentRating = firebase.database().ref(this.props.listTitle).child(this.props.showKey).child('rating');

    let newData = null;

    currentRating.on('value', (response) => {
        let data = response.val();
        if (data > 0) {
          newData = data - 1;
        } else {
          newData = 0
        }
    })

    currentRating.set(newData)
  }

  
  render() {
    return(
        <Fragment>
        <button className='upvote' onClick={this.handleUpvote}><FontAwesomeIcon icon={faArrowCircleUp} /></button>
        <button className='downvote' onClick={this.handleDownvote}><FontAwesomeIcon icon={faArrowCircleDown} /></button>
        </Fragment>
    )
  }
}

export default VoteButtons;