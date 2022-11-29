import React from "react";

import "./App.css";

import Quotes from "./components/Quotes";
import Actions from "./components/Actions";

import quotesData from "./data/quotes.json";

const colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857",
];

class App extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#16a085",
        }}
        className="App"
      >
        <div className="quotes-container">
          <Quotes />
          <hr />
          <Actions />
        </div>
      </div>
    );
  }
}

export default App;
