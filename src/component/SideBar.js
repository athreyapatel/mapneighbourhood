import React, { Component } from 'react';
import ListOfVenues from './ListOfVenues';

class SideBar extends Component {
    constructor() {
        super();
        this.state = {
            query: '',
            venues: []
        };
    }

    handleFilterVenues = () => {
        if (this.state.query.trim() !== '') {
          const venues = this.props.venues.filter(venue =>
            venue.name.toLowerCase().includes(this.state.query.toLowerCase())
          );
          return venues;
        }
        return this.props.venues;
      };

      handleChange = e => {
        this.setState({ query: e.target.value });
        const markers = this.props.venues.map(venue => {
          const isMatched = venue.name
            .toLowerCase()
            .includes(e.target.value.toLowerCase());
          const marker = this.props.markers.find(marker => marker.id === venue.id);
          if (isMatched) {
            marker.isVisible = true;
          } else {
            marker.isVisible = false;
          }
          return marker;
        });
        this.props.updateSuperState({ markers });
      };

    render() {
        return(
         <div className="sideBar">
            <header>
                <div className="header"><h2>Petrol Bunks in Bangalore</h2></div>
            </header>
            <aside>
                <input type="search" aria-labelledby="filter" role="search" id="search" placeholder="Filter Malls"  onChange={this.handleChange}/>
                <ListOfVenues
                {...this.props}
                venues = {this.handleFilterVenues()}
                handleItemClick={this.props.handleItemClick}
                />
            </aside>
         </div>
        );
    }
}

export default SideBar;
