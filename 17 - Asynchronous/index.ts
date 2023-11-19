console.log("Before Async");

function doSomething () {
    console.log("Print Something");
    
}

// setTimeout(doSomething,5000)

setInterval(doSomething,5000)

console.log("After Async");
