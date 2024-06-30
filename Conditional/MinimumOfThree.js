let x = 49;

let y = 25;

let z = 39;

// one way to find minimum
if (x < y && x < z){
    console.log(x);
    console.log("x is the minimum value");
} else if (y < x && y < z){
    console.log(y);
    console.log("y is the minimum value");
} else {
    console.log(z);
    console.log("z is the minimum value");
}