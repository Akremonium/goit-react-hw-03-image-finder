import { Component } from "react";

class Searchbar extends Component {
  state = {
    query: "",
  };

  handleQuery = (evt) => {
    this.setState({ query: evt.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();

    this.props.onSubmit(this.state.query);
    this.setState({ query: "" });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleQuery}
            value={this.state.query}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
