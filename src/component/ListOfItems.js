import React,{Component} from 'react';
class ListOfItems extends Component {
  render() {
    return(
      <li className="listOfItems" role="button" tabIndex="0" onClick={() => this.props.handleItemClick(this.props)}>{this.props.name}
      </li>
    );
  }
}
export default ListOfItems;
