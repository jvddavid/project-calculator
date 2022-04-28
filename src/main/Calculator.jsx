/*
Author: João Victor David de Oliveira (j.victordavid2@gmail.com)
Calculator.jsx (c) 2022
Desc: file to create the calculator component
Created:  2022-04-27T17:57:20.042Z
Modified: 2022-04-28T03:33:16.949Z
*/

import React, { Component } from "react";

import "./Calculator.css";

import Button from "../components/Button";
import Display from "../components/Display";

export default class Calculator extends Component {
  constructor(props) {
    super(props);

    this.stateInitialValue = {
      displayValue: "0",
      operation: null,
    };
    this.state = {
      ...this.stateInitialValue,
    };
  }

  clearMemory() {
    this.setState({ ...this.stateInitialValue });
  }

  setOperation(operation) {
    let newDisplayValue = this.state.displayValue;
    const match = newDisplayValue.match(/(.*)[*,/,+,-]$/);
    if (match !== null) {
      newDisplayValue = match[1];
    }
    switch (operation) {
      case "=":
        if (this.state.operation === null || this.state.operation === "=") {
          return;
        }
        while (true) {
          const match = newDisplayValue.match(/([0-9.]*)[*,/,+,-]([0-9.]*)/);
          if (match === null) break;
          const n1 = Number(match[1]);
          const n2 = Number(match[2]);
          let n3 = 0;
          const op = match[0].replace(match[1], "").replace(match[2], "");
          switch (op) {
            case "+":
              n3 = n1 + n2;
              break;
            case "-":
              n3 = n1 - n2;
              break;
            case "*":
              n3 = n1 * n2;
              break;
            case "/":
              n3 = n1 / n2;
              break;
            default:
              break;
          }
          newDisplayValue = newDisplayValue.replace(match[0], n3.toString());
        }
        if (newDisplayValue.includes("NaN")) {
          return this.clearMemory();
        }
        this.setState({
          ...this.state,
          operation: operation,
          // eslint-disable-next-line no-eval
          displayValue: newDisplayValue,
        });
        return;
      default:
        break;
    }

    this.setState({
      ...this.state,
      operation: operation,
      displayValue: newDisplayValue + operation,
    });
  }

  addDigit(n) {
    let newDisplayValue = this.state.displayValue;
    let lastNumber = this.state.displayValue;
    const match = lastNumber.match(/[*,/,+,-]([0-9.]*)/);
    if (match !== null) {
      lastNumber = match[1];
    }
    if (lastNumber === "0" && n === "0") {
      return;
    } else if (lastNumber === "0") {
      lastNumber = "";
    }
    if (newDisplayValue === "0") {
      newDisplayValue = "";
    }
    if (newDisplayValue.includes("NaN")) {
      return this.clearMemory();
    }
    console.log(lastNumber);
    if (n === "." && lastNumber.includes(".")) {
      return;
    }
    this.setState({ ...this.state, displayValue: newDisplayValue + n });
    console.log(n);
  }

  render() {
    const addDigit = (n) => this.addDigit(n);
    const clearMemory = () => this.clearMemory();
    const setOperation = (op) => this.setOperation(op);
    return (
      <div className="calculator">
        <Display value={this.state.displayValue} />
        <Button label="AC" operation triple onClick={clearMemory} />
        <Button label="/" operation onClick={setOperation} />
        <Button label="7" onClick={addDigit} />
        <Button label="8" onClick={addDigit} />
        <Button label="9" onClick={addDigit} />
        <Button label="*" operation onClick={setOperation} />
        <Button label="4" onClick={addDigit} />
        <Button label="5" onClick={addDigit} />
        <Button label="6" onClick={addDigit} />
        <Button label="-" operation onClick={setOperation} />
        <Button label="1" onClick={addDigit} />
        <Button label="2" onClick={addDigit} />
        <Button label="3" onClick={addDigit} />
        <Button label="+" operation onClick={setOperation} />
        <Button label="0" double onClick={addDigit} />
        <Button label="." onClick={addDigit} />
        <Button label="=" operation onClick={setOperation} />
      </div>
    );
  }
}
