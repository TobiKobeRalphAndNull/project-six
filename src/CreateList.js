import React, {Component} from 'react';
import firebase from './firebase';

class CreateList extends Component {
  constructor(){
    super();
    this.state={
      inputTitle:'',
      inputRating:''
    }
  }
  
  createList = (e) => {
    e.preventDefault();

    const createdList = firebase.database().ref(this.state.inputTitle);
    createdList.push(
      'Start adding in your TV shows')
    // {
    //   Rating: this.state.inputRating,
    //   Title: this.state.inputTitle
    // }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  
  render(){
    return(
      <form onSubmit={this.createList} action="submit">
        <input name="inputTitle" onChange={this.handleChange} value={this.state.inputTitle} type="text"/>
        {/* <input name="inputRating" onChange={this.handleChange} value={this.state.inputRating} type="text"/> */}
        <button>Create List</button>
      </form>
    )
  }
}

export default CreateList;