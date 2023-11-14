"use strict";
// While Loop
var index = 1;
while (index < 10) {
    console.log(index);
    index++;
}
// For Loop
for (let index = 1; index < 10; index++) {
    console.log(index);
    ;
}
// Do While Loop
let i = 1;
do {
    console.log("Abdul");
    i++;
} while (i < 6);
// Write a TS program that calculates sum of even numbers between 1 - 1000.
var sum = 0;
var list = [];
for (let index = 0; index <= 1000; index++) {
    if (index % 2 == 0) {
        sum = sum + index;
        list.push(index);
    }
}
console.log(sum, list);
