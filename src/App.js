import { Component } from "react";

import Searchbar from "./Components/Searchbar";
import ImageGallery from "./Components/ImageGallery";

import "./styles.scss";

class App extends Component {
  state = {
    query: "",
  };

  handleFormSubmit = (data) => {
    this.setState({ query: data });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery query={this.state.query} />
      </div>
    );
  }
}

export default App;
