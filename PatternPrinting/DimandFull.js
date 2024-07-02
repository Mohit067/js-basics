function dimandPattern (n) {
    // first part of the pattern this is for upper part of the pattern
    for (let row = 1; row <= n; row++) {
        let str = "";
        let space = " ";
        for (let col = 1; col <= n - row; col++) { // firstly added space
            str += space;
        }
        for (let col = 1; col <= 2 * row - 1; col++) { // on same row we added *
            str += "*";
        }
    console.log(str);
   }
   // second part of the pattern this is for lower part of the pattern
   for (let row = 1; row <= n-1; row++) {
        let str = "";
        let space = " ";
        for (let col = 1; col <= row; col++) {  // here are added some spaces
            str += space;
        }
        let star = (2 * (n - row)) - 1;
        for (let col = 1; col <= star; col++ ){// here are added star
            str += "*";
        }
    console.log(str);
   }

}
dimandPattern(3);

/* 



  *
 ***
*****
 ***
  *



*/