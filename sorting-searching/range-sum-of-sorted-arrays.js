/**
 * Given the array nums consisting of n positive integers. You computed the sum of all non-empty continous subarrays from the array and then sort them in non-decreasing order, creating a new array of n * (n + 1) / 2 numbers.

Return the sum of the numbers from index left to index right (indexed from 1), inclusive, in the new array. Since the answer can be a huge number return it modulo 10^9 + 7.
 */

/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */

//?faster than 75% 
 var rangeSum = function(nums, n, left, right) {
    let sums = [];
    for(let i=0;i<n;i++){
        sums.push(nums[i]);
        for(let j=i+1;j<n;j++){
            sums.push(nums[j]+sums[sums.length-1]);
        }
    }
    sums = sums.sort((a,b)=>a-b)
    let sum = 0;
    for(let i=left-1;i<right;i++){
        sum += sums[i]
    }
    return sum%((10**9)+7);
};


console.log(rangeSum([1,2,3,4],4,1,5))
console.log(rangeSum([1,2,3,4],4,3,4))
console.log(rangeSum([1,2,3,4],4,1,10))