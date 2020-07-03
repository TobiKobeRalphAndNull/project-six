import React,{Component} from 'react';
import firebase from './firebase';

class AddTitle extends Component {

  constructor() {
    super();
    this.state={
      myListTitles: [],
      selectedList: ''
    }
  }

  componentDidMount() {
    // referencing firebase
    const dbRef = firebase.database().ref();

    // create array for list titles
    const listTitleArray = [];

    dbRef.on('value', (response) => {
      // clear the array
      listTitleArray.length = 0;

      // push each available list title into the new array
      const data = response.val();
      for (let key in data) {
        listTitleArray.push({
          listTitle: key
        })
      }
      
      this.setState({
        myListTitles: listTitleArray
      })
    })  
  }

  handleChange = (e) => {
    // retrieve the tv show the user wants to add to a list and push respective info to firebase at intended list as per user's intentions
    if (e.target.value !== '') {
    const pushedList = firebase.database().ref(e.target.value)
        pushedList.push({
          rating: 0,
          title: this.props.showTitle
        })
      }
    
  }

  render() {
    return(
      <form>
        <select className={''} onChange={this.handleChange}>
        <option selected disabled value={''}>Add to List</option>   
          {/* map through array of user inputted list titles and return them to the dropdown menu so that users can add tv shows to lists */} 
          {this.state.myListTitles.map((item) => {
              return (
                <option value={item.listTitle}>{item.listTitle}</option>
              )
            })
          }
        </select>
      </form>
    )
  }
}

export default AddTitle;