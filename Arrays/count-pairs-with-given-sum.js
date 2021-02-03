/**
 * Given an array of N integers, and an integer K, find the number of pairs of elements in the array whose sum is equal to K.

Example 1:
Input:
N = 4, K = 6
arr[] = {1, 5, 7, 1}
Output: 2
Explanation: 
arr[0] + arr[1] = 1 + 5 = 6 
and arr[1] + arr[3] = 5 + 1 = 6.

Example 2:
Input:
N = 4, X = 2
arr[] = {1, 1, 1, 1}
Output: 6
Explanation: 
Each 1 will produce sum 2 with any 1.
 */

class Count {
    static pairs(arr,n,k){
        let pairCount=0;
        for(let i=0;i<n-1;i++){
            let diff= k-arr[i];
            console.log(i,"diff : "+diff);
            if(diff>0){
                for(let j=i+1;j<n;j++){
                    if(arr[j]===diff) pairCount++;
                }
            }
            console.log("pair count for "+i+" = "+pairCount)
        }
        return pairCount;
    }
}

console.log(Count.pairs([1, 5, 7, 1],4,6))