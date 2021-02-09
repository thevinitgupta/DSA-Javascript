/**
 * The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

    F(0) = 0, F(1) = 1
    F(n) = F(n - 1) + F(n - 2), for n > 1.
    Given n, calculate F(n).
 */

class GetFibonacci {

    //Time Complexity -> O(n) , Space Complexity -> O(n)
    static withLinearApproach(n){
        let fibSeq = [0,1];
        for(let i=2;i<=n;i++){
            fibSeq.push(fibSeq[i-1]+fibSeq[i-2]);
        }
        return fibSeq[n];
    }

    //Time Complexity -> O(n) , Space Complexity -> O(1)
    static withIterativeTopDownApproach(n){
        if(n<=1) return n;
        if(n===2) return 1;
        let fib1=1,fib2=1, fibCurr = 0,i=3;
        while(i<=n){
            fibCurr = fib1+fib2;
            fib1 = fib2;
            fib2=fibCurr;
            i++;
        }
        return fibCurr;
    }

     //Time Complexity -> O(1) , Space Complexity -> O(1)
    static withGoldenRatio(n){
        let goldenRatio = (1 + Math.sqrt(5)) / 2;
        return parseInt(Math.round(Math.pow(goldenRatio, n)/ Math.sqrt(5)));
    }
}

console.log(GetFibonacci.withIterativeTopDownApproach(4));
console.log(GetFibonacci.withGoldenRatio(5));