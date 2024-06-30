//  in break condition apne nearest loop se bahar nikal deta hai conditon hit hone prr
let i = 1;
let j = 1;
while (j < 100) {
    while (i < 10) {
        if (i % 7 == 0) {
            break;
        }
        console.log(i);
        i++;
    }
    j++;
console.log(j);
}
console.log("End");