//every() --> return only true or false;
//this method check if all elemnt are true
//then return true otherwise it return false 

let arr = [1,3,5,7];
let output = arr.every((element) => {
    return element%2 != 0
})
console.log(output);//true

let arr1 = [2,4,7];
let output1 = arr.every((element) => {
    return element%2 == 0
})
console.log(output1);//false
