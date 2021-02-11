/**
 *! Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

**Example 1:

    **Input: nums = [-1,2,1,-4], target = 1
    **Output: 2
    **Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 */

class ThreeSum {
    static closest(nums,target) {
        let len = nums.length;
        if(len<3) return undefined;
        let sum = nums[0] + nums[1] + nums[len-1];
        nums = nums.sort((a,b) => a-b);
        for(let i=0;i<len-2;i++){
            let a = i+1,b=len-1;
            while(a<b){
                let currSum = nums[i]+nums[a]+nums[b];
                if(currSum>target){
                    b--;
                }
                else {
                    a++;
                }
                if(Math.abs(sum-target)>Math.abs(currSum-target)) sum = currSum;
            }
        }
        return sum;
    }
}

console.log(ThreeSum.closest([-1,2,1,-4],1));
console.log(ThreeSum.closest([-1,3,6,3,-5,0],1));
console.log(ThreeSum.closest([0,2,1,-3],1));