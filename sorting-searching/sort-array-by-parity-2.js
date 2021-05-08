/**
 * Given an array of integers nums, half of the integers in nums are odd, and the other half are even.

Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.

Return any answer array that satisfies this condition.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

//*accepted -> O(N), O(N)
 var sortArrayByParityII = function(nums) {
    let k=0,j=1;
    let copy = new Array(j+1).fill(0);
    for(let i=0;i<nums.length;i++){
        if(nums[i]%2===0){
            copy[k] = nums[i];
            k +=2;
        }
        else {
            copy[j] = nums[i];
            j += 2;
        }
    }
    return copy;
};

//? Faster than 96% -> O(N), less space than 99% -> O(1)
var sortArrayByParityII = function(nums) {
    let k=0,j=1;
    while(k<nums.length){
        if(nums[k]%2===0){
            k=k+2;
        }
        else {
            while(nums[j]%2!==0) j+=2;
            let temp = nums[k];
            nums[k] = nums[j];
            nums[j] = temp;
            j=j+2;
            k+=2;
        }
    }
    return nums;
};


//?[4,6,8,13,7,3,12,11]
//* 0 1 2 3  4 5 6  7

console.log(sortArrayByParityII([4,6,8,13,7,3,12,11]))