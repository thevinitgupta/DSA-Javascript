/**
 * Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    let sum = [nums[0]];
    for(let i=1;i<nums.length;i++){
        sum[i] = sum[i-1]+nums[i];
    }
    return sum;
};


console.log(runningSum([3,10,-111,234,-999999,1000000]))