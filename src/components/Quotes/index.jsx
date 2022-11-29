import React from "react";

import "./style.css";

import { ReactComponent as QuotesSVG } from "../../assets/quotes.svg";

export default class Qoutes extends React.Component {
  render() {
    return (
      <div className="quotes">
        <div className="quote">
          <QuotesSVG fill={"#16a085"} width={30} height={30} />
          <p className="quote-text" style={{ color: "#16a085" }}>
            Strive not to be a success, but rather to be of value.
          </p>
        </div>
        <p className="author" style={{ color: "#16a085" }}>
          - Albert Einstein
        </p>
      </div>
    );
  }
}
