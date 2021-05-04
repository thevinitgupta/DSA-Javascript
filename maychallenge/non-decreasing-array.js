/**
 * Given an array nums with n integers, your task is to check if it could become non-decreasing by modifying at most one element.

We define an array is non-decreasing if nums[i] <= nums[i + 1] holds for every i (0-based) such that (0 <= i <= n - 2).


*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var checkPossibility = function(nums) {
    for (let i = 1, err = 0; i < nums.length; i++)
        if (nums[i] < nums[i-1])
            if (err++ || (i > 1 && i < nums.length - 1 && nums[i-2] > nums[i] && nums[i+1] < nums[i-1]))
                return false 
    return true
};

console.log(checkPossibility([1]))
console.log(checkPossibility([1,3]))
console.log(checkPossibility([8,7,6,5,4,3,2,1,0]))
console.log(checkPossibility([8,2,7]))
console.log(checkPossibility([8,2,7,6]))
console.log(checkPossibility([-1,4,2,3]))
console.log(checkPossibility([3,4,2,3]))