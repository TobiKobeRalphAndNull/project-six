import React, { Component, Fragment } from 'react';
import firebase from './firebase';

class VoteButtons extends Component {

  handleUpvote  = () => {
    const currentRating = firebase.database().ref(this.props.listTitle).child(this.props.showKey).child('rating');

    let newData = null;

    currentRating.on('value', (response) => {
        let data = response.val();
        newData = data+1;
    })
    
    currentRating.set(newData)    
  }

  
  handleDownvote = () => {
    const currentRating = firebase.database().ref(this.props.listTitle).child(this.props.showKey).child('rating');

    let newData = null;

    currentRating.on('value', (response) => {
        let data = response.val();
        newData = data - 1;
    })

    currentRating.set(newData)
  }

  
  render() {
    return(
        <Fragment>
            <button onClick={this.handleUpvote}>Upvote</button>
            <button onClick={this.handleDownvote}>Downvote</button>
        </Fragment>
    )
  }
}

export default VoteButtons;