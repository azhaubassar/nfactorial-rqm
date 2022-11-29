import React from "react";

import "./style.css";

export default class Button extends React.Component {
  render() {
    const { children, style } = this.props;

    return (
      <button
        style={{
          backgroundColor: "#16a085",
          ...style,
        }}
        className="button"
        onClick={() => console.log("change quote")}
      >
        {children}
      </button>
    );
  }
}
