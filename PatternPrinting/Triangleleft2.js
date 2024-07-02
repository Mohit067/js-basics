// first way
function triangleLeftPattern (n) {
    for (let row = 1; row <= n; row++) {
        let str = "";
        for (let col = n; col >= row; col--) { // condition
            str += "*";
        }
        console.log(str);
        }
    }
triangleLeftPattern(10);


/*

**********
*********
********
*******
******
*****
****
***
**
*


 */










// second way
function triangleLeftPattern (n) {
    for (let row = 1; row <= n; row++) {
        let str = "";
        for (let col = 1; col <= n - row + 1; col++) { // condition  attention here
            str += "*";
        }
        console.log(str);
        }
    }
triangleLeftPattern(3);


/*

*
**
***


 */