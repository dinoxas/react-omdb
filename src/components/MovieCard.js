import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaChevronCircleRight } from "react-icons/fa";

export class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="col-md-3 mb-5">
        <div className="card card-body bg-dark text-center h-100">
          <img className="w-100 mb-2" src={movie.Poster} alt="Movie Cover" />
          <h5 className="text-light card-title">
            {movie.Title} - {movie.Year}
          </h5>
          <Link className="btn btn-primary" to={"/movie/" + movie.imdbID}>
            <span className="mr-10">Movie Details</span>{" "}
            <FaChevronCircleRight size="16" />
          </Link>
        </div>
      </div>
    );
  }
}

export default MovieCard;
