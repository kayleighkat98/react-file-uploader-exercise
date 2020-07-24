// Captures user's search term.
// In the SearchBox component, searchTerm should be set in the input to be displayed. To do this you set the value attribute on the input to the searchTerm prop.
import React, { Component } from 'react';
import './SearchBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class SearchBox extends Component {
  render() {
    return (

        <div className="SearchBox">
            <FontAwesomeIcon 
                icon={faSearch}
            />

            <input 
                placeholder="Search term"
                value={this.props.searchTerm}
                onChange={e => this.props.handleUpdate(e.target.value)}
            />
        </div>   
        
    );
  }
}

export default SearchBox;