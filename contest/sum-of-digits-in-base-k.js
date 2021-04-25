/**
 * 
 * Given an integer n (in base 10) and a base k, return the sum of the digits of n after converting n from base 10 to base k.

After converting, each digit should be interpreted as a base 10 number, and the sum should be returned in base 10.
 */

var sumBase = function(n, k) {
    let num = 0;
    if(k!==10){
        let num = 0;
        while(n>0){
           let dig = n%k;
            num = num *10 + dig;
            n = parseInt(n / k);
        }
        num = num*10 + n;
        n=num;
    }
    
    let sum = 0;
    while(n>0){
        let dig = n%10;
        sum = sum +dig;
        n = parseInt(n/10)
    }
    return sum;
    
};