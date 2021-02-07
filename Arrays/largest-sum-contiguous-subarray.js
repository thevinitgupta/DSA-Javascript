class LargetSumContiguousSubArray {
    static kadane(nums){
        let currSum = nums[0];
        let max = nums[0];
        for(let i =1;i<nums.length;i++){
            currSum = currSum+nums[i]>nums[i] ? currSum+nums[i] : nums[i];
            max = max<currSum ? currSum : max;
        }
        return max;
    }
}


console.log(LargetSumContiguousSubArray.kadane([-2,1,-3,4,-1,2,1,-5,4]));
console.log(LargetSumContiguousSubArray.kadane([-100000]));