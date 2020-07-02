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
    const dbRef = firebase.database().ref();

    const listTitleArray = [];

    dbRef.on('value', (response) => {
      listTitleArray.length = 0;

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

  // handleClick = (e) => {
  //   e.preventDefault();
    
  //   document.querySelector(`.selectList.${this.props.show.title}`).classList.toggle('show')
  // }

  handleChange = (e) => {
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