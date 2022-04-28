/*
Author: João Victor David de Oliveira (j.victordavid2@gmail.com)
Calculator.jsx (c) 2022
Desc: file to create the calculator component
Created:  2022-04-27T17:57:20.042Z
Modified: 2022-04-28T01:35:30.371Z
*/

import React, { Component } from "react";

import "./Calculator.css";

import Button from "../components/Button";
import Display from "../components/Display";

export default class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        <Display value={10000000} />
        <Button label="AC" operation triple />
        <Button label="/" operation />
        <Button label="7" />
        <Button label="8" />
        <Button label="9" />
        <Button label="*" operation />
        <Button label="4" />
        <Button label="5" />
        <Button label="6" />
        <Button label="-" operation />
        <Button label="1" />
        <Button label="2" />
        <Button label="3" />
        <Button label="+" operation />
        <Button label="0" double />
        <Button label="." />
        <Button label="=" operation />
      </div>
    );
  }
}
