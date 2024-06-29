// comparision operator

// 1.    (a < b)  here are "a is smaller than b".

console.log(5 < 6);  // return true
console.log(5 < 3);  // return false

// 2.    (a > b)  here are "a is greater than b".

console.log(7 > 3);  // return true
console.log(4 > 7);  // return false

// 3.    (a <=  b)   it simple mean that " a is smaller or equal to b "

console.log(3 <= 3);  // return true
console.log(4 <= 1);  // return false
console.log(2 <= 5);  // return true

// 4.   (a  >=  b)  it simple mean that  " a is greater or equal to b "

console.log(3 >= 3);  // return true
console.log(4 >= 1);  // return true
console.log(2 >= 5);  // return false

// 5.   (a  ==  b)  == this is  Abstract equality sign ..  it means a and b 
//       both are  equal and if a and b are not equal then js is trying to conver 
//       equal to both of  them

console.log(10 == 10);  // return true
console.log("10" == 10); // return true



// 6.   (a === b)  ===  this is strict equality operator ..  it checks only a and b
//      are equal or not if not equal then do not change anything..

console.log(10 === 10);  // return true
console.log("10" === 10); // return false

// 7.   (a != b)  it simple mean that " a is not equal to b " if a and b are not equal then
//       js is trying to convert equal to both of  them

console.log(10 != 10);  // return false
console.log("10" != 10); // return false

// 8.   (a !== b)  it simple mean that " a is not equal to b "
//      are equal or not if not equal then do not change anything..

console.log(10 !== 10);  // return false
console.log("10" !== 10); // return true