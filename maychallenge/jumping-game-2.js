/**
 * Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

You can assume that you can always reach the last index.
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
 var jump = function(nums) {
    let currReach = 0,maxReach = 0,jumps = 0;
    for(let i =0;i<nums.length-1;i++){
        if(i+nums[i] > maxReach){
            maxReach = i+nums[i];
        }
        if(i===currReach){
            jumps++;
            currReach = maxReach;
        }
    }
    return jumps;
};

console.log(jump([2,3,1,1,4]))
console.log(jump([2,3,0,1,4]))
console.log(jump([1,1,1,1]))