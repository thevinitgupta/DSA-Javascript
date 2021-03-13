/**
 * 
    **Input:
    **nums[] = {1, 4, 45, 6, 0, 19}
    **target  =  51
    *!Output: 3
    *?Explanation:
    *?Minimum length subarray is 
    *?{4, 45, 6}
 */

class SmallestSum {
    static subArray(nums,target){
        let minSize = Number.MAX_VALUE;
    let start = 0;
    let currentSum = 0;
    for(let end = 0;end<nums.length;end++){
        currentSum = currentSum + nums[end];
        while(currentSum>target) {
            minSize = Math.min(minSize,end-start+1);
            currentSum = currentSum-nums[start];
            start++;
        }
    }
    return minSize>nums.length?0 : minSize;
    }
} 


console.log(SmallestSum.subArray([1, 4, 45, 6, 0, 19],51));
console.log(SmallestSum.subArray([1, 10, 5, 2, 7],9));
console.log(SmallestSum.subArray([2,3,1,2,4,3],7));