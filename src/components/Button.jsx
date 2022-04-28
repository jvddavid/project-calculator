/*
Author: João Victor David de Oliveira (j.victordavid2@gmail.com)
Button.jsx (c) 2022
Desc: Button component base
Created:  2022-04-28T00:44:16.158Z
Modified: 2022-04-28T00:56:43.158Z
*/

import React, { Component } from "react";

import "./Button.css";

class Button extends Component {
  render() {
    return (
      <>
        <button className="button">{this.props.label}</button>
      </>
    );
  }
}

export default Button;
