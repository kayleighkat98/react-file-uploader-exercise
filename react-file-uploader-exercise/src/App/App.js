import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import FilterableList from '../FilterableList/FilterableList'




class App extends Component {
  //To add state to the App component create a constructor and write an instance property named state. Set state to be an object with the two values that we need.
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      filterOption: 'All'
    };
  }
  updateSearchTerm(term) {
    this.setState({
      searchTerm: term
    })
  }
  updateFilterOption(option) {
    this.setState({
      filterOption: option
    })
  }
  render() {
    return (
      <div className="App">
        <SearchBar
          searchTerm={this.state.searchTerm}
          filterOption={this.state.filterOption}
          handleUpdate={term=>this.updateSearchTerm(term)}
          handleFilterChange= {option =>this.updateFilterOption(option)}
        />
        <FilterableList 
          files={this.props.files} 
          searchTerm={this.state.searchTerm}
          filterOption={this.state.filterOption}
        />
      </div>
    );
  }
}

export default App;