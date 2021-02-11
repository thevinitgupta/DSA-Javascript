class ThreeSum{
    static threeSum(nums){
        let len = nums.length;
        if(len<3) return [];
        let sumArrays = [];
        for(let i=0;i<len-2;i++){
            let a = i+1,b=len-1;
            while(a<b){
                let currSum = nums[i]+nums[a]+nums[b];
                if(currSum===0){
                    sumArrays.push([nums[i],nums[a],nums[b]])
                
                }
                if(currSum-nums[a]+nums[a+1]===0) a++;
                else if(currSum-nums[b]+nums[b-1]===0) b--;
                else {
                    a++;b--;
                }
            }
        }
        return sumArrays;
    }
    static twoSumWay(nums){
        let len = nums.length;
        if(len<3) return [];
        let sumArrays = [];
        nums = nums.sort((a,b)=> a-b);
        for(let i=0;i<len-2;i++){
            if(i===0 ||(i>0 && nums[i]!==nums[i-1])){
                let low = i+1,high=len-1;
                while(low<high){
                    let sum = 0 - nums[i];
                    if(nums[low]+nums[high]===sum){
                        sumArrays.push([nums[i],nums[low],nums[high]]);
                        while(low<high && nums[low]===nums[low+1]) low++;
                        while(low<high && nums[high]===nums[high-1]) high--;
                        low++;
                        high--;
                    }
                    else if(nums[low]+nums[high] > sum) high--;
                    else {
                        low++;
                    }
                }
            }
        }
        return sumArrays;
    }
}


//fastest output (same time complexity)
var threeSum = function(nums) {
    nums.sort((a,b) => a-b); 
    
    const res = []; 
    
    for (let i = 0; i < nums.length -2; i+= 1){
        if (i === 0 || nums[i] !== nums[i - 1]){
          twoSum(nums, i + 1, res, -nums[i]);   
        };
    };
    
    return res; 
};

var twoSum = function(nums, left, res, target) {
    let right = nums.length -1; 
    
    while(left < right){    
        const 
        low = nums[left], 
        high = nums[right]; 
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
        };
    }
};



console.log(ThreeSum.threeSum([-1,0,1,2,-1,-4]))
console.log(ThreeSum.twoSumWay([-1,0,1,2,-1,-4]))
console.log(ThreeSum.twoSumWay([0,0,0,0,0]))