import React from "react";
import youtube from "../api/youtube";

class SearchBar extends React.Component {
  state = { input: "" };

  inputOnChange = (event) => {
    this.setState({ input: event.target.value });
  };

  formOnSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.input);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.formOnSubmit} className="ui form">
          <label className="ui field">Search Videos</label>
          <input type="text" onChange={this.inputOnChange}></input>
        </form>
      </div>
    );
  }
}

export default SearchBar;
