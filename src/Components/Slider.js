import React, {Component, Fragment} from 'react';
import firebase from './firebase';
import CreateList from './CreateList';
import VoteButtons from './VoteButtons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'

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
    // reference firebase
    const dbRef = firebase.database().ref();

    dbRef.on('value', (response) => {

    // get values from firebase database
      const data = response.val();

    // new array for list titles
      const listTitlePush = [];

    // new array for shows
      const showPush = [];

    // pushing relevant info for list titles and shows into respective arrays
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
      
      // used to order the shows by rating
      const sortedPush = showPush.sort((a, b) => (a.rating > b.rating) ? -1 : 1);

      this.setState({
        myListTitles: listTitlePush,
        myLists: sortedPush,
      })
    })
  }  

  // If the small down arrow is clicked expand or minimize the list of shows
    expandList = (listTitle) => {
    for (let t of document.getElementsByClassName(listTitle)) {
      t.classList.toggle('show');
    }
    document.querySelector(`.arrow${listTitle}`).classList.toggle('show')
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
        <CreateList />
      <div className="gridContainer">
        {/* map through array of list titles to return individual list titles */}
        {this.state.myListTitles.map((s) => {
          return (
            <div className="sliderList">
              <div className="listTitleContainer">
                <button className='collapseList' onClick={() => this.expandList(s.actualListTitle)}><FontAwesomeIcon className={`collapseList arrow${s.actualListTitle}`} icon={faSortDown} /></button>
                <h2>{s.actualListTitle}</h2>
                <button className="delete" onClick={() => this.handleDelete(s.actualListTitle)}><FontAwesomeIcon icon={faPlus} /></button>
              </div>
              {/* map through array of shows and match them with respsective list titles to return shows within relevant list */}
              {this.state.myLists.map((item) => {
                if (item.listTitleRecord === s.actualListTitle && item.title != 'Start adding in your shows!') {
                  return (
                    <li key={item.showKey} className={`tvList ${s.actualListTitle}`}>
                      <h3>{item.title}</h3>
                      <p>&#x2605; {item.rating}</p><button className="delete" onClick={() => this.handleDelete(s.actualListTitle, item.showKey)}><FontAwesomeIcon icon={faPlus} /></button>
                      <VoteButtons showKey={item.showKey} listTitle={s.actualListTitle}/>
                    </li>
                  )
                }
              })}
            </div>  
          )
        })}
        </div>
      </Fragment>
    )
  }
}

export default Slider;