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
    createdList.push({
      rating: 'You get to select your rating!',
      title: 'Start adding in your shows!'
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  
  render(){
    return(
      <form className='createList' onSubmit={this.createList} action="submit">
        <input name="inputTitle" placeholder="Name your new list" onChange={this.handleChange} value={this.state.inputTitle} type="text"/>
        <button className="inputButton">Create List</button>
      </form>
    )
  }
}

export default CreateList;