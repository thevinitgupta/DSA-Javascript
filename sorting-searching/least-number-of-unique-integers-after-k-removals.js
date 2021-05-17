/**
 * Given an array of integers arr and an integer k. Find the least number of unique integers after removing exactly k elements.

Example 1:
Input: arr = [5,5,4], k = 1
Output: 1
Explanation: Remove the single 4, only 5 is left.
 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

//ascending order of frequencies
var frequencySort = function(nums) {
    let freq = {};
    for(let i=0;i<nums.length;i++){
        if(freq[nums[i]]) freq[nums[i]] += 1;
        else freq[nums[i]] = 1;
    }
    freq = Object.entries(freq)
    freq.sort((a,b) => {
        if(a[1]===b[1]){
            return b[0]-a[0]
        }
        else return a[1]-b[1];
    })
    let res = [];
    for(let i=0;i<freq.length;i++){
        res.push(...new Array(freq[i][1]).fill(parseInt(freq[i][0])))
    }
    return res;
}

//! very slow -> faster 17%
 var findLeastNumOfUniqueInts = function(arr, k) {
    arr = frequencySort(arr);
    let freq = {};
    for(let i=0;i<arr.length;i++){
        if(freq[arr[i]]) freq[arr[i]] += 1;
        else freq[arr[i]] = 1;
    }
    for(let i=0;i<k;i++){
        if(freq[arr[i]]===1) delete freq[arr[i]];
        else if(freq[arr[i]]) freq[arr[i]] -= 1;
    }
    return Object.keys(freq).length;
};

console.log(findLeastNumOfUniqueInts([5,5,4],1));
console.log(findLeastNumOfUniqueInts([4,3,1,1,3,3,2],3));