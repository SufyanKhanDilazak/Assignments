"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let prompt = require('prompt-sync')();
let n1 = parseInt(prompt("enter first number "));
let operator = prompt("enter your operator (+,-,*,/)");
let n2 = parseInt(prompt("enter second number"));
if (operator == "+") {
    console.log(`Answer ${n1} ${operator} ${n2} ${n1 + n2}`);
}
else if (operator == "-") {
    console.log(`Answer ${n1} ${operator} ${n2} ${n1 - n2}`);
}
else if (operator == "*") {
    console.log(`Answer ${n1} ${operator} ${n2} ${n1 * n2}`);
}
else if (operator == "/") {
    console.log(`Answer ${n1} ${operator} ${n2} ${n1 / n2}`);
}
else {
    console.log("Select Correct Numbers");
}
