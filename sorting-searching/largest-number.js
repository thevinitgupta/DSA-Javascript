/**
 * Given a list of non-negative integers nums, arrange them such that they form the largest number.
Note: The result may be very large, so you need to return a string instead of an integer.

Example 1:
Input: nums = [10,2]
Output: "210"
 */


/**
 * @param {number[]} nums
 * @return {string}
 */
 var largestNumber = function(nums) {
    let rst = "";
    nums.sort(comparator);
    for (const num of nums) {
        rst += num;
    }
    return rst == 0 ? "0" : rst;
};

var comparator = function(a, b) {
    const s1 = "" + a + b,
        s2 = "" + b + a;
        console.log(s1,s2);
        console.log(s1-s2);
    return s2 - s1;
};


console.log(largestNumber([3,30,34,9,5]))