// If Example

if(2 < 5){
    console.log("Correct!");
    
}

//Else Example

if(2 > 5){
    console.log("Correct!"); 
}
else {
    console.log("Wrong!");
    
}

// Q1: Write a program that calculates the area of rectangle

var length:number = 7;
var width:number = 5;

var area:number = length*width;

console.log(area);

// Q2: Write a program that calculates the volume of cube

var l:number = 7;

var volume:number = l*l*l;

console.log(volume);

// Q3: Write a program that checks if a number is positive,negative or zero

var a:number = -9;

if (a > 0) {
    console.log("Number is Positive");
} else if(a < 0){
    console.log("Number is Negative");
} else {
    console.log("Number is Zero");
    
}

// Q4: Write a program that checks if a given number is even or odd

var b:number = 7;

if (b%2 == 0) {
    console.log("Number is even");
    
} else {
    console.log("Number is odd");
    
}

// Q5: Write a program that determines if a person is eligible to vote based on their age

var age:number = 21;

if (age >= 18) {
    console.log("Eligible to Vote");
    
} else {
    console.log("Not Eligible to Vote");
    
}

//Q6: Write a program that calculates the result of following mathematical expression ((10 + 5) * 3 - 2) / (4 % 3)

var f:number = ((10 + 5) * 3 - 2) / (4 % 3)

console.log(f);
