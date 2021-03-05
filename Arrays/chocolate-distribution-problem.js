/**
 * *Given an array A[ ] of positive integers of size N, where each value represents the number of chocolates in a packet. Each packet can have a variable number of chocolates. There are M students, the task is to distribute chocolate packets among M students such that :
    **1. Each student gets exactly one packet.
    **2. The difference between maximum number of chocolates given to a student and minimum number of chocolates given to a student is minimum.

    *!The difference should be minimum, so even after sorting we need to find out the minimum difference subarray of the sorted array
 */

const Sort = require("../Extras/sorting-algorithms")

class Chocolate{
    static distribution(a,n,m){
        if(m>n) return -1;
        a = Sort.quickSort(a);
        let diff = 0,minDiff = Number.MAX_VALUE;
        for(let i =0;i<n-m+1;i++){
            diff = a[i+m - 1] - a[i];
            if(diff<minDiff) minDiff = diff;
        }
        return minDiff;
    }
}

console.log(Chocolate.distribution([3, 4, 1, 9, 56, 7, 9, 12],8,5));
console.log(Chocolate.distribution([7, 3, 2, 4, 9, 12, 56],7,3));