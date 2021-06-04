/**
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

//? faster than 12%
 var productExceptSelf = function(nums) {
    let lProd = [nums[0]],rProd = [nums[nums.length-1]];
    let r = rProd[0];
    for(let i=1;i<nums.length;i++){
        lProd.push(lProd[i-1] * nums[i]);
        r = r * nums[nums.length-i-1];
        rProd.unshift(r)
    }
    for(let i=0;i<nums.length;i++){
        let lVal = i===0 ? 1 : lProd[i-1];
        let rVal = i===nums.length-1 ? 1 : rProd[i+1];
        nums[i] = lVal * rVal;
    }
    return nums;
};