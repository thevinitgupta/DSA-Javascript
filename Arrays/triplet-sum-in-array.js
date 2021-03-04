class Solution {
    //Function to find if there exists a triplet in the 
    //array arr[] which sums up to X.
    find3Numbers(arr, N, X)
    {
        //your code here
        arr.sort((a,b) => a-b); 
    
    const res = []; 
    
    for (let i = 0; i < arr.length -2; i+= 1){
        if (i === 0 || arr[i] !== arr[i - 1]){
          twoSum(arr, i + 1, res, X-arr[i]);   
        }
    }
    
    return res.length>=1?1 : 0;
    }
}
var twoSum = function(nums, left, res, target) {
    let right = nums.length -1; 
    
    while(left < right){    
        const low = nums[left], high = nums[right]; 
        if (low + high < target){
            left+= 1; 
        } else if (low + high > target){
            right-= 1; 
        } else {
            res.push([low, high , -target]); 
            // avoid duplicates 
            while(left < right && low === nums[left +1]) left+= 1; 
            while (left < right && high === nums[right - 1]) right-= 1;
            left+= 1;
            right-= 1; 
        }
    }
};