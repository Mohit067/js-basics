
function myFunction(f1) {
    f1();
    console.log("hellow");
}

function isGreating () {
    console.log("greating");
}

myFunction(isGreating); // to call funtion under another function
myFunction(isGreating()); // here is error
