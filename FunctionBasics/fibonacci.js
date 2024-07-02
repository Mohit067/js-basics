function fibo (n) {
    if (n == 0) {
        console.log(0);
        return;
    }
    if (n >= 1) {
        console.log(0);
        console.log(1);
    }
    
    let secondlast = 0;
    let last = 1;
    
    for (let i = 3; i <= n; i++) {
        let sum = secondlast + last; 
        console.log(sum);
        secondlast = last; // for updating our
        last = sum;  // last or second last term
        
    }
}
fibo(5);