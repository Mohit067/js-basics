// this is always in boolean if this is not in form of boolean then js is trying  to convert it to boolean

// AND operatots
// symbol -->    &&


// x   $$    y    result 
// true  true  true
// true  false false
// false true  false
// false false false


// OR operatots
// symbol -->    ||


// x   ||   y     result
// true  true  true
// true  false true
// false true  true
// false false false

// NOT operatots
// symbol -->    !


// x      !x (result)
// true  false
// false true


console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);


console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
 

console.log(!true);
console.log(!false);