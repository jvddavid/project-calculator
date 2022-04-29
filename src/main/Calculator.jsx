/*
Author: João Victor David de Oliveira (j.victordavid2@gmail.com)
Calculator.jsx (c) 2022
Desc: file to create the calculator component
Created:  2022-04-27T17:57:20.042Z
Modified: 2022-04-29T01:17:40.579Z
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
      lastDigit: null,
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
    let match = newDisplayValue.match(/(.*)[*,/,+,-]$/);
    while (match !== null) {
      newDisplayValue = match[1];
      match = newDisplayValue.match(/(.*)[*,/,+,-]$/);
    }
    switch (operation) {
      case "=":
        if (this.state.lastDigit === null || this.state.lastDigit === "=") {
          break;
        }
        while (true) {
          const match = newDisplayValue.match(
            /^([-]?[0-9.]*)[*,/,+,-]([-]?[0-9.]*)/m
          );
          if (match === null) break;
          if (match[1] === "") break;
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
          console.log(newDisplayValue);
          newDisplayValue = newDisplayValue.replace(
            /^([-]?[0-9.]*)[*,/,+,-]([-]?[0-9.]*)/m,
            n3.toString()
          );
        }
        if (
          newDisplayValue.includes("NaN") ||
          newDisplayValue.includes("Infinity")
        ) {
          this.clearMemory();
          break;
        }
        this.setState({
          ...this.state,
          lastDigit: operation,
          displayValue: newDisplayValue,
        });
        break;
      case "-":
        if (
          this.state.lastDigit !== "-" &&
          "*/+".includes(this.state.lastDigit)
        ) {
          this.setState({
            ...this.state,
            lastDigit: operation,
            displayValue:
              newDisplayValue + (this.state.lastDigit || "") + operation,
          });
          break;
        }
        this.setState({
          ...this.state,
          lastDigit: operation,
          displayValue: newDisplayValue + operation,
        });
        break;
      default:
        this.setState({
          ...this.state,
          lastDigit: operation,
          displayValue: newDisplayValue + operation,
        });
        break;
    }
  }

  addDigit(n) {
    let newDisplayValue = this.state.displayValue;
    let lastNumber = this.state.displayValue;
    const match = lastNumber.match(/[*,/,+,-]([0-9.-]*)/);
    if (match !== null) {
      lastNumber = match[1];
      if (match[0].includes("-")) {
        lastNumber = "-" + lastNumber;
      }
    }
    if (lastNumber === "0" && n === "0") {
      return;
    } else if (lastNumber === "0") {
      lastNumber = "";
    }
    if (newDisplayValue === "0") {
      newDisplayValue = "";
    }
    if (
      newDisplayValue.includes("NaN") ||
      newDisplayValue.includes("Infinity")
    ) {
      return this.clearMemory();
    }
    if (n === "." && lastNumber.includes(".")) {
      return;
    }
    this.setState({
      ...this.state,
      lastDigit: n,
      displayValue: newDisplayValue + n,
    });
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
