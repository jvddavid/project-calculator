/*
Author: João Victor David de Oliveira (j.victordavid2@gmail.com)
Calculator.jsx (c) 2022
Desc: file to create the calculator component
Created:  2022-04-27T17:57:20.042Z
Modified: 2022-04-28T00:58:30.251Z
*/

import React, { Component } from "react";

import "./Calculator.css";

import Button from "../components/Button";

export default class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        <Button label="AC" />
        <Button label="/" />
        <Button label="7" />
        <Button label="8" />
        <Button label="9" />
        <Button label="*" />
        <Button label="4" />
        <Button label="5" />
        <Button label="6" />
        <Button label="-" />
        <Button label="1" />
        <Button label="2" />
        <Button label="3" />
        <Button label="+" />
        <Button label="0" />
        <Button label="." />
        <Button label="=" />
      </div>
    );
  }
}
