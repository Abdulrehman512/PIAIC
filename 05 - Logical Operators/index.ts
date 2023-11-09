// Logical Operators (used to combine multiple conditions )

let n:number = 5;

console.log(n >= 5 && n < 10);
//            T    &&    T     so Output is True

console.log(n > 5 && n < 10);
//            F    &&    T     so Output is False

console.log(n >= 5 || n < 10);
//            T    ||    T     so Output is True

console.log(n > 5 || n < 10);
//           F    ||    T     so Output is True

console.log(!(n < 10));
//          !T      so Output is False

console.log(!(n > 10));
//          !F      so Output is True

