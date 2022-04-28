/*
Author: João Victor David de Oliveira (j.victordavid2@gmail.com)
Calculator.jsx (c) 2022
Desc: file to create the calculator component
Created:  2022-04-27T17:57:20.042Z
Modified: 2022-04-28T01:46:39.789Z
*/

import React, { Component } from "react";

import "./Calculator.css";

import Button from "../components/Button";
import Display from "../components/Display";

export default class Calculator extends Component {
  clearMemory() {
    console.log("clear memory");
  }

  setOperation(operation) {
    console.log(operation);
  }

  addDigit(n) {
    console.log(n);
  }

  render() {
    return (
      <div className="calculator">
        <Display value={100} />
        <Button label="AC" operation triple onClick={this.clearMemory} />
        <Button label="/" operation onClick={this.setOperation} />
        <Button label="7" onClick={this.addDigit} />
        <Button label="8" onClick={this.addDigit} />
        <Button label="9" onClick={this.addDigit} />
        <Button label="*" operation onClick={this.setOperation} />
        <Button label="4" onClick={this.addDigit} />
        <Button label="5" onClick={this.addDigit} />
        <Button label="6" onClick={this.addDigit} />
        <Button label="-" operation onClick={this.setOperation} />
        <Button label="1" onClick={this.addDigit} />
        <Button label="2" onClick={this.addDigit} />
        <Button label="3" onClick={this.addDigit} />
        <Button label="+" operation onClick={this.setOperation} />
        <Button label="0" double onClick={this.addDigit} />
        <Button label="." onClick={this.addDigit} />
        <Button label="=" operation onClick={this.setOperation} />
      </div>
    );
  }
}
