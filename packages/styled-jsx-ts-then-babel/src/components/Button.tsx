import React, { Component, Fragment } from "react";
import { primaryTextColor, primaryBackgroundColor } from "../constants/colors";

export class Button extends Component {
  public render() {
    return (
      <Fragment>
        <button type="button">Button</button>
        <style jsx>{`
          button {
            color: ${primaryTextColor};
            background: ${primaryBackgroundColor};
          }
        `}</style>
      </Fragment>
    );
  }
}
