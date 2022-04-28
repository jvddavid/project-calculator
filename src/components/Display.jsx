/*
Author: João Victor David de Oliveira (j.victordavid2@gmail.com)
Display.jsx (c) 2022
Desc: Display component base
Created:  2022-04-28T01:02:50.580Z
Modified: 2022-04-28T01:12:24.073Z
*/

import React, { Component } from "react";

import "./Display.css";

class Display extends Component {
  render() {
    return (
      <div className="display">
        <span>{this.props.value}</span>
      </div>
    );
  }
}

export default Display;
