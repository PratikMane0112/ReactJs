import React from "react";
import ReactDOM from "react-dom";
import * as cal from "./calculator.js";
import pi, { doublePi, triplePi } from "./math.js";

ReactDOM.render(
  <ul>
    <li>{"PI - " + pi}</li>
    <li>{"DoublePI - " + doublePi()}</li>
    <li>{"TriplePI - " +triplePi()}</li>
    <li>{"Add 1+2 = " +cal.add(1, 2)}</li>
    <li>{"Mul 2*3 = " +cal.multiply(2, 3)}</li>
    <li>{"Sub 7-2 = " +cal.subtract(7, 2)}</li>
    <li>{"Div 5/2 = " +cal.divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);
