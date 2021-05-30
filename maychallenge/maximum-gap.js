/**
 * Given an integer array nums, return the maximum difference between two successive elements in its sorted form. If the array contains less than two elements, return 0.

You must write an algorithm that runs in linear time and uses linear extra space.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maximumGap = function(nums) {
    if(nums.length<=1) return 0;
    nums.sort((a,b)=>a-b);
    let max = 0,diff = 0;
    for(let i=1;i<nums.length;i++){
        diff = nums[i]-nums[i-1];
        max = Math.max(max,diff);
    }
    return max;
};