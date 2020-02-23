import React, { Fragment } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Fragment>
      <Nav />
      <h1>Hello world!</h1>
      <Footer />
    </Fragment>
  );
}

export default App;
