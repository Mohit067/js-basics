// spread --> it is destructure of every element
// denoted by (...)

let arr = [1,2,4,6,7,3,1,-1,-4,-6];

let result = Math.min(...arr);
console.log(result);
// advantage--> if i don't use spread then i need a loop for access 
// every element of array and then find minimus



let str = "thisisstring";
console.log(...str);// t h i s i s s t r i n g
