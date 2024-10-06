let arr = [1,2,3,4,5,6,7,8,9,10];

let output = arr.filter((element) => {
    return element % 2 == 0;
})
console.log(output);
//filter() --> it return only true value