/*
Author: João Victor David de Oliveira (j.victordavid2@gmail.com)
Button.jsx (c) 2022
Desc: Button component base
Created:  2022-04-28T00:44:16.158Z
Modified: 2022-04-28T01:35:01.882Z
*/

import React, { Component } from "react";

import "./Button.css";

class Button extends Component {
  render() {
    return (
      <>
        <button
          className={`button ${this.props.operation ? "operation" : ""} ${
            this.props.double ? "double" : ""
          } ${this.props.triple ? "triple" : ""}`}
        >
          {this.props.label}
        </button>
      </>
    );
  }
}

export default Button;
