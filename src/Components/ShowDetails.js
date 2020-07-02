import React, {Component , Fragment} from 'react';

class ShowDetails extends Component {
    
  createSummary = () => {
    return {__html: this.props.showDetails.summary};
  }
  
  // function MyComponent() {
  //   return <div dangerouslySetInnerHTML={createMarkup()} />;
  // }

  render() {
    return (
      <div className="detailsModal">
        <h2>{this.props.showDetails.title}</h2>
        <h3>{this.props.showDetails.rating}</h3>
        <p className="modal">{this.props.showDetails.genre}</p>
        <img src={this.props.showDetails.image} alt={`Poster for ${this.props.showDetails.title}`}></img>
        <div className="modal" dangerouslySetInnerHTML={this.createSummary()} />
      </div>
    )
  }
}

export default ShowDetails;