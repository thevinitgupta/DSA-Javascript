/**
 * *Given an array of n positive integers and a number k. Find the minimum number of swaps required to bring all the numbers less than or equal to k together.

*TODO Example 1:
*!Input : arr[ ] = {2, 1, 5, 6, 3} and K = 3
*?Output : 1
*?Explanation:
*?To bring elements 2, 1, 3 together, swap element '5' with '3'
*?such that final array will be- arr[] = {2, 1, 3, 6, 5}
 */

class MinimumNumber {
    static ofSwaps(arr,k){
        let cnt = 0;
        for(let i = 0;i<arr.length;i++){
            if(arr[i]<=k) cnt++;
        }
        //console.log("Sub Array Size : ",cnt);
        let minCnt = Number.MAX_VALUE,bad = 0;
        let start= 0 , end = 0;
        while(start<=end && end<arr.length){
            if(arr[end]>k) bad++;
            if(end===start+cnt-1){
                console.log("for window ",start," : ",end);
                console.log("Bad : ",bad);
                console.log("Min swaps till now : ",minCnt);
                start =start+1;
                //console.log("bad Value :",bad);
                minCnt = Math.min(minCnt,bad);
                if(arr[start-1]>k) bad--;
            }
                end++;
        }
        return minCnt==Number.MAX_VALUE? 0 : minCnt;
    }
}

console.log("Min Swaps : ",MinimumNumber.ofSwaps([2, 1, 5, 6, 3],3));
console.log("Min Swaps : ",MinimumNumber.ofSwaps([2, 1, 5, 6, 3],5));
console.log("Min Swaps : ",MinimumNumber.ofSwaps([2, 7, 9, 5, 8, 7, 4],6));
console.log("Min Swaps : ",MinimumNumber.ofSwaps([2, 7, 9, 5, 8, 7, 4],9));