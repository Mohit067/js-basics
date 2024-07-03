function defaultParameter (x , y = 5) {// here we define a defalut parameter y = 5; if actual parameter not pass in function then defalult parameter use 
    return  x + y;
}

console.log(defaultParameter(10)); // here we pass only one actual parameter

console.log(defaultParameter(10,20)); // if we pass two argument then run these two argument

/**

15

25

 */