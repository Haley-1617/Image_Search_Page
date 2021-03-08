import React from "react";

class SearchBar extends React.Component {
  state = {term: ""};
  preventDefault = (event) => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.term);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.preventDefault}>
          <label>Image Search</label>
          <br />
          <input
            type='text'
            value={this.state.term}
            onChange={(event) => this.setState({term: event.target.value})}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
