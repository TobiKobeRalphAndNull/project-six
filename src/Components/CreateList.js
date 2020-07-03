import React, {Component} from 'react';
import firebase from './firebase';

class CreateList extends Component {
  constructor(){
    super();
    this.state={
      inputTitle:''
    }
  }
  
  createList = (e) => {
    e.preventDefault();
    // push the user's submitted list title up to firebase 
    const createdList = firebase.database().ref(this.state.inputTitle);
    createdList.push({
      title: 'Start adding in your shows!'
    })
  }

  handleChange = (e) => {
    // retrieve the list title that the user submits and use it to set state
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  
  render(){
    return(
      <form className='createList' onSubmit={this.createList} action="submit">
        <label className='sr-only' htmlFor="inputTitle">Name your new list</label>
        <input name="inputTitle" className='createList' placeholder="Name your new list" onChange={this.handleChange} value={this.state.inputTitle} type="text"/>
        <button className="inputButton">Create List</button>
      </form>
    )
  }
}

export default CreateList;