// it allows a function to take a many number
// of arguments and bundle them into a array

// look like spread

function sum(...args){
    return args.reduce( (result , element) => result += element);
}
console.log(sum(1,2,3,4));
