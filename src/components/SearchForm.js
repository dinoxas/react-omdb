import React, { Component } from "react";
import { FaSearch } from "react-icons/fa";
import { searchMovie } from "../actions/search";
import { connect } from "react-redux";

class SearchForm extends Component {
  handleChange = e => {
    this.props.searchMovie(e.target.value);
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="jumbotron jumbotron-fluid mt-5 text-center">
        <div className="container">
          <h1 className="display-4 mb-3">
            <FaSearch size="60" />{" "}
            <span>Search for a Movie, TV series ...</span>
          </h1>
          <form id="searchForm">
            <input
              type="text"
              className="form-control"
              name="searchText"
              placeholder="Search Movies, TV Series ..."
              onChange={this.handleChange}
            />
            <button
              type="submit"
              className="btn btn-primary btn-bg mt-3"
              onClick={this.handleSubmit}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    text: state.movies.text
  };
}

export default connect(mapStateToProps, { searchMovie })(SearchForm);
