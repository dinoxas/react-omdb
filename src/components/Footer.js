import React, { Fragment } from "react";

function Footer() {
  return (
    <Fragment>
      <footer className="bg-dark">
        <div className="container">
          <div
            className="footer p-3 mt-4 text-center bg-dark text-light"
            style={{ minHeight: "40vh" }}
          >
            Developed By:{" "}
            <span className="text-warning font-weight-normal">dinoxas</span>,
            Using React &amp; Redux integrated with{" "}
            <a
              href="http://www.omdbapi.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              OMDB API
            </a>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

export default Footer;
