import React from "react";
import { Provider } from "react-redux";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Lannding from "./components/Landing";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <Nav />
      <Lannding />
      <Footer />
    </Provider>
  );
}

export default App;
