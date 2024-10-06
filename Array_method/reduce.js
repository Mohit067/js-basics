//reduce() --> return a single value on the basis of given logic
//it take two parameter 1 is accumulator 2nd is element

let arr = [10,4,6,9,3];

let minimum = arr.reduce((min , element) => {
    if(min > element){
        return element;

    }
    else{
        return min;
    }
})
console.log(minimum);

//bydefault initially callback min value is INT_MAX