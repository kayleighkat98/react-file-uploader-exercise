// Receives user input for filtering options.
// The SearchBar component itself is not using these props directly but rather passing them along to the respective child components. The searchTerm is needed in the SearchBox and the filterOption is needed in the FilterOptions components respectively. Simply pass along the props in SearchBar.
import React, { Component } from 'react';
import './SearchBar.css';
import SearchBox from '../SearchBox/SearchBox';
import FilterOptions from '../FilterOptions/FilterOptions';

class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBar">

        <div className="SearchBar__heading">
          <h1>File Uploader</h1>
        </div>

        <div className="SearchBar__controls">
          <SearchBox
            searchTerm={this.props.searchTerm}
            handleUpdate={this.props.handleUpdate}
          />
          <FilterOptions
            filterOption={this.props.filterOption}
            handleFilterChange={this.props.handleFilterChange}
          />
        </div>

      </div>
    );
  }
}

export default SearchBar;