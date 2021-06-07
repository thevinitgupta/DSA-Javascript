/**
 * Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

Return the array in the form [x1,y1,x2,y2,...,xn,yn].
 */

//*O(N) solution
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
 var shuffle = function(nums, n) {
    let i=0,j=n;
    let copy = [];
    while(i<n){
        copy.push(nums[i]);
        copy.push(nums[j]);
        i++;
        j++;
    }
    return copy;
};