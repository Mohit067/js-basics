// it means copy into another place

let names = ["mohit", "rohit", "neetu", "xyz", "abc", "pqr"];

let [runner, winner,seconWinner, ...other] = names;

console.log(runner, winner,seconWinner);//runner, winner,seconWinner
console.log(other); //[ 'xyz', 'abc', 'pqr' ]