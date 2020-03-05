import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaChevronCircleRight } from "react-icons/fa";

export class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="col-lg-3 col-md-4 col-sm-6  mb-3">
        <div className="text-center h-100">
          <img
            className="w-50 img-fluid img-thumbnail"
            src={movie.Poster}
            alt="Movie Cover"
          />
          <div className="card-body ">
            <h5 className=" card-title">
              {movie.Title} - {movie.Year}
            </h5>
            <Link
              className="btn btn-primary btn-block"
              to={"/movie/" + movie.imdbID}
            >
              <span className="mr-2">Details</span>{" "}
              <FaChevronCircleRight size="16" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
