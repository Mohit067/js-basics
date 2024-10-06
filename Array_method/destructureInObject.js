let student = {
    name: "mohit",
    branch: "AIADS",
    rollNo: 33,
    userName: "mohit@123",
    password: 1234
}

let {userName , password , ...other} = student;

console.log(userName, password);//mohit@123 1234
console.log(other);//{ name: 'mohit', branch: 'AIADS', rollNo: 33 }