/**
 * Given an unsorted array of integers nums, return the length of the longest continuous increasing subsequence (i.e. subarray). The subsequence must be strictly increasing.

A continuous increasing subsequence is defined by two indices l and r (l < r) such that it is [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] and for each l <= i < r, nums[i] < nums[i + 1].

Input: nums = [1,3,5,4,7]
Output: 3
Explanation: The longest continuous increasing subsequence is [1,3,5] with length 3.

Input: nums = [2,2,2,2,2]
Output: 1
Explanation: The longest continuous increasing subsequence is [2] with length 1. Note that it must be strictly
increasing.
 */

class LargestContinuousIncreasingSubsequence{
    static bySlidingWindow(nums){
        let len = nums.length;
    if(len<=1) return len;
    let l=0,r=0,max=0;
    for(let i =0;i<len;i++){
        if(nums[i]<nums[i+1]) r++;
        max = r-l+1>max ? r-l+1 : max;
        if(nums[i]>=nums[i+1]) {l=i+1;r=i+1;}
    }
    return max;
    }
}