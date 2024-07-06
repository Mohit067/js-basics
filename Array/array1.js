let arr1 = []; // empty array
let arr2 = [1, "mohit", 2, "sahu"];

console.log(arr1);
console.log(arr2);

console.log(typeof(arr2)); // object
console.log(arr2[1]);// to print index number 1 value

arr2[1] = "mohit1";// now  we upadated value at index 1
console.log(arr2);

console.log(arr2[10]);// undefined

arr2[10] = "ok";
console.log(arr2); //[ 1, 'mohit1', 2, 'sahu', <6 empty items>, 'ok' ]
// <6 empty items> == it means undefined

