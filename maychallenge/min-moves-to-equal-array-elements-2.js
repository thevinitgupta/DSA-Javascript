/**
 * Given an integer array nums of size n, return the minimum number of moves required to make all array elements equal.

In one move, you can increment or decrement an element of the array by 1.

 

Example 1:

Input: nums = [1,2,3]
Output: 2
Explanation:
Only two moves are needed (remember each move increments or decrements one element):
[1,2,3]  =>  [2,2,3]  =>  [2,2,2]
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

//!wrong solution
//  var minMoves2 = function(nums) {
//     nums.sort((a,b)=> a-b);
//     let mid = Math.floor((nums[0]+nums[nums.length-1])/2);
//     let count=0;
//     for(let i=0;i<nums.length;i++){
//         count += Math.abs(mid-nums[i])
//     }
//     return count;
// };