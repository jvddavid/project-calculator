/*
Author: João Victor David de Oliveira (j.victordavid2@gmail.com)
Button.jsx (c) 2022
Desc: Button component base
Created:  2022-04-28T00:44:16.158Z
Modified: 2022-04-28T01:42:09.702Z
*/

import React from "react";

import "./Button.css";

function Button(props) {
  let className = "button";
  if (props.double) className += " double";
  if (props.triple) className += " triple";
  if (props.operation) className += " operation";
  return (
    <>
      <button className={className} onClick={() => props.onClick(props.label)}>
        {props.label}
      </button>
    </>
  );
}

export default Button;
