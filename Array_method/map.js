let arr = [1,2,3,4,5];

let map1 = arr.map((element) => {
    return element*2;
})
console.log(map1);
//map() --> it returns the copy of the array

let num = [
    {
        name: "mohit",
        marks: 92
    },
    {
        name: "rohit",
        marks: 80,
    },
    {
        name: "neetu",
        marks: 95
    }
]

let copy = num.map((element) => {
    return {
        sgpa: element.marks/10
    }
})
console.log(copy);