/**
 * Given an array of integers nums.

A pair (i,j) is called good if nums[i] == nums[j] and i < j.

Return the number of good pairs.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var numIdenticalPairs = function(nums) {
    if(nums.length===1) return 0;
    
    nums.forEach((val,i) => {
        nums[i] = [val,i];
        return;
    })
        nums.sort((a,b)=>{
        if(a[0]===b[0]) return a[1] - b[1];
        else return a[0] - b[0];
    })
    let i=0,j=1,count =0;
    while(i<nums.length){
        if(nums[j] && nums[i][0]===nums[j][0]){
            count++;
            j++;
        }
        else {
            i=i+1;
            j=i+1;
        }
    }
    return count;
};