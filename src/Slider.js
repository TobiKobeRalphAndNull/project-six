import React, {Component, Fragment} from 'react';
import firebase from './firebase';
import CreateList from './CreateList'

class Slider extends Component {

  constructor(){
    super();
    this.state={
      myLists:{},
    }
  }

  componentDidMount(){
    const dbRef = firebase.database().ref();

    dbRef.on('value', (response) => {
      const data = response.val();
      this.setState({
        myLists:data
      })
    })

    for (let key in this.state.myLists) {
      return(
        
        <ul className={this.state.myLists[key]}>
          <li>
            <h3>{this.state.myLists[key].Title}</h3>
            <p>{this.state.myLists[key].Rank}</p>
          </li>
        </ul>
      )  
    }
  }  

  render() {
    return (
      <Fragment>
        <CreateList />
      </Fragment>
    )
  }
}

export default Slider;