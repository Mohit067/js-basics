function triangleRightPattern (n) {
    for (let row = 1; row <= n; row++) {
        let str = "";
        let spaces = n - row;
        for (let i = 1; i <= spaces; i++) {
            str += " ";  // added spaces for make triangle right
        }
        let star = row;
        for (let col = 1; col <= star; col++) {
            str += "*";
        }
        console.log(str);
    }
}

triangleRightPattern(5)
    