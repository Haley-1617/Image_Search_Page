import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = {images: []};
  onSearchSubmit = async (term) => {
    console.log(term);
    const response = await unsplash.get("search/photos", {
      params: {query: term},
    });
    this.setState({images: response.data.results});
    console.log(this.state.images);
  };
  render() {
    return (
      <div>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
        <div>Found: {this.state.images.length}</div>
      </div>
    );
  }
}

export default App;
