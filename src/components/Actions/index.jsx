import React from "react";

import "./style.css";

import { ReactComponent as TwitterSVG } from "../../assets/twitter.svg";
import { ReactComponent as TumblrSVG } from "../../assets/tumblr.svg";

import Button from "../../UI/Button";

export default class Actions extends React.Component {
  render() {
    return (
      <div className="actions">
        <div className="links">
          <Button style={{ marginRight: "1rem" }}>
            <TwitterSVG fill={"white"} width={10} height={10} />
          </Button>
          <Button>
            <TumblrSVG fill={"white"} width={10} height={10} />
          </Button>
        </div>

        <Button>New Quote</Button>
      </div>
    );
  }
}
