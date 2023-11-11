"use strict";
let rollNo = [11, 22, 33, 44, 55];
rollNo.pop();
console.log(rollNo); //[11, 22, 33, 44]
rollNo.push(66);
console.log(rollNo);
rollNo.shift();
console.log(rollNo); //[22, 33, 44, 66]
rollNo.unshift(77);
console.log(rollNo);
rollNo.splice(1, 0, 88);
console.log(rollNo);
