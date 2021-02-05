/**
 * Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.
 */

 class MinSubArray {
     static withSumGreaterOrEqual(target, nums){
        let minSize = Number.MAX_VALUE;
        let start = 0;
        let currentSum = 0;
        for(let end = 0;end<nums.length;end++){
            currentSum = currentSum + nums[end];
            while(currentSum>=target) {
                minSize = MinSubArray.min(minSize,end-start+1);
                currentSum = currentSum-nums[start];
                start++;
            }
        }
        return minSize>nums.length?0 : minSize;
     }
     static min(a,b){
        return a<b?a : b;
    }
 }