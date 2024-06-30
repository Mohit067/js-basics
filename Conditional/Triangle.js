// one methoo
let a = 6;

let b = 6;

let c = 6;

if(a == b  && b == c && c == a){
    console.log("Equlator triangle");
} else if (a != b && b != c && c != a){
    console.log("scalen triangle");
} else {
    console.log("isolated triangle");
}
console.log("End");

// two method
let x = 6;

let y = 3;

let z = 3;

if(x == y && y == z && z == x){
    console.log("Equlator triangle");
} else if (x == y || y == z || z == x){
    console.log("isolated triangle");
} else {
    console.log("scalen triangle");
}
console.log("End")