/**
 * Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 */
/**
 * Input: [0,1,0,3,12] -> [12,3,0,1,0] -> [1,0,3,12,0] -> [1,12,3,0,0] -> [1,3,12,0,0]
   Output: [1,3,12,0,0]
 */

class MoveZeroes{
    static toEnd(nums){
        let start=0,end=nums.length-1;
        while(start<end){
            if(nums[start]===0){
                nums = MoveZeroes.reverse(nums,start,end);
                end--;
                nums = MoveZeroes.reverse(nums,start,end);
            }
            if(nums[start]!==0) start++;
        }
        return nums;
    }
    static reverse(arr,start,end){
        while(start<end){
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] =temp;
            start++;end--;
        }
        return arr;
    }
}

console.log(MoveZeroes.toEnd([0,1,0,3,12]));
console.log(MoveZeroes.toEnd([0,0,1]));