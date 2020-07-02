import React, {Component, Fragment} from 'react';
import firebase from './firebase';
import CreateList from './CreateList';
import VoteButtons from './VoteButtons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
// import { findAllByPlaceholderText } from '@testing-library/react';

class Slider extends Component {

  constructor(){
    super();
    this.state={
      myListTitles:[],
      myLists:[],
      expand: true
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
          listTitlePush.push({
            actualListTitle: listTitle,
          })
        for (let key in next) {
          showPush.push({
            listTitleRecord: listTitle,
            title: next[key]['title'],
            rating: next[key]['rating'],
            showKey: key
          })
        }
      }

      const sortedPush = showPush.sort((a, b) => (a.rating > b.rating) ? -1 : 1);

      this.setState({
        myListTitles: listTitlePush,
        myLists: sortedPush,
      })
    })
  }  

  expandList = (listTitle) => {
      for (let t of document.getElementsByClassName(listTitle)) {
        t.style.display = 'block';
      }
  }

  reduceList = (listTitle) => {
    for (let t of document.getElementsByClassName(listTitle)) {
      t.style.display = 'none';
    }
  }

  // Used to delete a show or a list, depending on what items are passed
  handleDelete = (list, key=null) => {
    const dbRef = firebase.database().ref(list);
    // If no key is passed in, delete the list
    if (key === null) {
      dbRef.remove();
    } else {
      // If a key was passed, delete the child item
      dbRef.child(key).remove();
    }
  }

  render() {
    return (
      <Fragment>
        <h2 className="sliderTitle">My TV Show Lists</h2>
        {this.state.myListTitles.map((s) => {
          return (
            <div className="sliderList">
              <div className="listTitleContainer">
                <h2>{s.actualListTitle}</h2>
                <button className="expandList" onClick={() => this.expandList(s.actualListTitle)}><FontAwesomeIcon icon={faPlus} /></button>
                <button className="reduceList" onClick={() => this.reduceList(s.actualListTitle)}><FontAwesomeIcon icon={faMinus} /></button>
                <button className="delete" onClick={() => this.handleDelete(s.actualListTitle)}><FontAwesomeIcon icon={faPlus} /></button>
              </div>
              {this.state.myLists.map((item) => {
                if (item.listTitleRecord === s.actualListTitle && item.title != 'Start adding in your shows!') {
                  return (
                    <li key={item.showKey} className={s.actualListTitle}>
                      <h3>{item.title}</h3>
                      <p>{item.rating}</p><button className="delete" onClick={() => this.handleDelete(s.actualListTitle, item.showKey)}><FontAwesomeIcon icon={faPlus} /></button>
                      <VoteButtons showKey={item.showKey} listTitle={s.actualListTitle}/>
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