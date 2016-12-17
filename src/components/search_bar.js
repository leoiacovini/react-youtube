import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) {
      super(props);
      this.state = {term: ''};
      this.onVideoSearch = this.onVideoSearch.bind(this);
  }

  onVideoSearch(event) {
    this.setState({term: event.target.value})
    this.props.onVideoSearch(event.target.value);
  }

  render() {
      return (
        <div className="col-md-12 search-bar">
          <input
            value={this.state.term}
            onChange={this.onVideoSearch} />
        </div>
      );
  }
}

export default SearchBar;
