/**
 * *You are given two non-increasing 0-indexed integer arrays nums1​​​​​​ and nums2​​​​​​.

**A pair of indices (i, j), where 0 <= i < nums1.length and 0 <= j < nums2.length, is valid if both i <= j and nums1[i] <= nums2[j]. The distance of the pair is j - i​​​​.
**
**Return the maximum distance of any valid pair (i, j). If there are no valid pairs, return 0.
**
**An array arr is non-increasing if arr[i-1] >= arr[i] for every 1 <= i < arr.length.
 
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var maxDistance = function(nums1, nums2) {
    let i=0,j=0,max=0;
    while(i<nums1.length || j<nums1.length){
        while(i<=j && nums1[i]<=nums2[j] && j<nums2.length){
            let diff = j-i;
            max = Math.max(diff,max);
            j++;
        }
            i++;
            j++;
    }
    return max;
};

console.log(maxDistance([55,30,5,4,2],[100,20,10,10,5]));
console.log(maxDistance([2,2,2], [10,10,1]));
console.log(maxDistance([30,29,19,5], [25,25,25,25,25]));
console.log(maxDistance([5,4], [3,2]));