/**
 * Given an integer array nums (0-indexed) and two integers target and start, find an index i such that nums[i] == target and abs(i - start) is minimized. Note that abs(x) is the absolute value of x.

Return abs(i - start).

It is guaranteed that target exists in nums
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
 var getMinDistance = function(nums, target, start) {
    let ti=null,diff = Number.MAX_VALUE;
    for(let i =0;i<nums.length;i++){
        if(nums[i]===target){
            ti=i;
        }
        if(ti!==null){
            diff = Math.min(diff,Math.abs(ti-start))
        }
    }
    return diff;
};

console.log(getMinDistance([1,2,3,4,5],5,3))
console.log(getMinDistance([1],1,0))
console.log(getMinDistance([1,1,1,1,1,1,1,1,1,1],1,0))
console.log(getMinDistance([5,3,6],5,2))