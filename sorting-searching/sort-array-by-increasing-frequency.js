/**
 * Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.

Return the sorted array.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
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
    console.log(freq)
    let res = [];
    for(let i=0;i<freq.length;i++){
        res.push(...new Array(freq[i][1]).fill(parseInt(freq[i][0])))
    }
    return res;
};

console.log(frequencySort([1,1,2,2,2,3]))
console.log(frequencySort([2,3,1,3,2]))
console.log(frequencySort([-1,1,-6,4,5,-6,1,4,1]))