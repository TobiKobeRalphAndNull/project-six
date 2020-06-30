import React, {Component, Fragment} from 'react';
import firebase from './firebase';
import CreateList from './CreateList'
// import { findAllByPlaceholderText } from '@testing-library/react';

class Slider extends Component {

  constructor(){
    super();
    this.state={
      myListTitles:[],
      myLists:[]
    }
  }

  componentDidMount(){
    const dbRef = firebase.database().ref();

    dbRef.on('value', (response) => {

      const data = response.val();

      const listTitlePush = [];

      const showPush = [];

      for (let key in data) {
        let listTitle = key
        let next = data[key]
        console.log(listTitle);
        console.log(next);
          listTitlePush.push({
            actualListTitle: listTitle
          })
        for (let key in next) {
          showPush.push({
            listTitleRecord: listTitle,
            title: next[key]['title'],
            rating: next[key]['rating']
          })
        }
      }
     
      this.setState({
        myListTitles: listTitlePush,
        myLists: showPush,
      })
    })
  }  

  render() {
    return (
      <Fragment>
        {this.state.myListTitles.map((s) => {
          return (
            <div>
            <h2>{s.actualListTitle}</h2>
              {this.state.myLists.map((item) => {
                if (item.listTitleRecord == s.actualListTitle) {
                return (
                  <li>
                    <h3>{item.title}</h3>
                    <p>{item.rating}</p>
                  </li>
                )
                }
              })}
            </div>  
          )
        })}
        <CreateList />
      </Fragment>
    )
  }
}

export default Slider;