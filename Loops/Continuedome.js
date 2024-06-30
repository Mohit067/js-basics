// IN CONTINUE CONDITION IF CONDITION HITS THAN FIRST ITERATION WILL SKIP ONLY 

let i  = 1;

while (i < 20) {
    if(i % 8 == 0) {
        
        i++;
        continue;
    }
    console.log(i);
    i++;
    }
console.log("End");

// OUTPUT
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 9
// End