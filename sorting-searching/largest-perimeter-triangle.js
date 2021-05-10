/**
 ** Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0. 

 *?Example : 
 **Input: nums = [3,2,3,4] -> [2,3,3,4]
 *?Output: 10
 */



function isPossible(a,b,c){
    if(a+b > c && b+c>a && a+c>b) return true;
    else false;
}

/**
 * @param {number[]} nums
 * @return {number}
 */

//!very slow solution
 var largestPerimeter = function(nums) {
    nums.sort((a,b)=> a-b);
    console.log(nums)
    let i=nums.length-1;
    
    while(i>=0){
        let j=i-1;
        while(j>=0){
            let k=j-1;
            while(k>=0){
                if(isPossible(nums[i],nums[j],nums[k])) {
                    return nums[i]+nums[j]+nums[k];
                }
                else k--;
            }
            j--;
        }
        i--
    }
    
    return 0;
};

var largestPerimeter = function(nums){
    
}


console.log(largestPerimeter([3,2,3,4]))
console.log(largestPerimeter([3,6,2,3]))