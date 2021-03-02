/**
 * Given an integer, the task is to find factorial of the number.
 
Input:
The first line of input contains an integer T denoting the number of test cases.  
The first line of each test case is N,the number whose factorial is to be found
 
Output:
Print the factorial of the number in separate line.
 */

class Factorial {
    
    static ofLargeNumbers(T, nArr){
        for(let i=0;i<T;i++){
           console.log(Factorial.getFactorial(nArr[i]));
        }
    }

    //using memoization
    static getFactorial(n){
        let fact ={};
        return function factorial(n){
            if(fact[n]) return fact[n];
            else {
                if(n<=1) fact[n]=1;
                else fact[n] = n*getFactorial(n-1);
                return fact[n];
            }
        }
    }
}

Factorial.ofLargeNumbers(3,[5,10,2]);