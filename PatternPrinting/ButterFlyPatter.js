function upper (n) {
    // uper component
    for (let row = 1; row <= (n-1) / 2; row++) {
        let str = "";

        // left star
        let leftStar = row;
        for (let i = 1; i <= leftStar; i++){
            str += "*";
        }
        
        // space between
        let spaces = n - (2 * row);
        for (let j = 1; j <= spaces; j++) {
            str += " ";
        }

        // right star
        let rightStar = row;
        for (let k = 1; k <= rightStar; k++) {
            str += "*";
        }
        console.log(str);
    }
}
    
function middle (n) {
        // middle component
        let str = "";
        for (let col  = 1; col <= n; col++) {
            str += "*";
        }
        console.log(str);
}

function lower (n) {
    // lower component
    for (let row = 1; row <= (n-1) / 2; row++){
        // left star
        let str = "";
        let leftStarr = ((n-1)/2) - row + 1;
        for (let i = 1; i <= leftStarr; i++){
            str += "*";
        }

        // space between
        let spacess = 2*row - 1;
        for (let j = 1; j <= spacess; j++) {
            str += " ";
        }

        // right star
        let rightStarr = ((n-1)/2) - row + 1;
        for (let k = 1; k <= rightStarr; k++) {
            str += "*";
        }
        console.log(str);
    }
}


function butterFlyPattern (n) {
    upper(n);
    middle(n);
    lower(n);
}

butterFlyPattern(9);