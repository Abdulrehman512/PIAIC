let numbers:number[] = [2,3,3,4,5,2,77,4,3,7,4,388,] 

let updatedArray = numbers.map((numbers)=>{
     if (numbers % 2 == 0) {
        return "Even";
     } else {
        return "Odd"
     }
});

console.log(updatedArray);
