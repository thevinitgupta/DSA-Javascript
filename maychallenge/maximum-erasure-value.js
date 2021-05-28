/**
 * You are given an array of positive integers nums and want to erase a subarray containing unique elements. The score you get by erasing the subarray is equal to the sum of its elements.

Return the maximum score you can get by erasing exactly one subarray.

An array b is called to be a subarray of a if it forms a contiguous subsequence of a, that is, if it is equal to a[l],a[l+1],...,a[r] for some (l,r).
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maximumUniqueSubarray = function(nums) {
    let nmap = new Int8Array(10001), total = 0, best = 0
    for (let left = 0, right = 0; right < nums.length; right++) {
        nmap[nums[right]]++, total += nums[right]
        while (nmap[nums[right]] > 1)
            nmap[nums[left]]--, total -= nums[left++]
        best = Math.max(best, total)
    }
    return best
};