import React, { Component } from 'react';
import ListOfItems from './ListOfItems';

class ListOfVenues extends Component {
  render() {
    return(
      <ol className="listOfVenues">
        {this.props.venues &&
          this.props.venues.map((venue, index) => (
          <ListOfItems
             key={index}
             {...venue}
             handleItemClick={this.props.handleItemClick}
          />
        ))}
      </ol>
    );
  }
}

export default ListOfVenues;
