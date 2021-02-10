/**
 * ? Given an array of integers nums, calculate the pivot index of this array.The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.Return the leftmost pivot index. If no such index exists, return -1.
 * 
*! Input: nums = [1,7,3,6,5,6]
*!  Output: 3
**  Explanation:
**  The pivot index is 3.
**  Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
**  Right sum = nums[4] + nums[5] = 5 + 6 = 11
 * 
 * !Runtime: 88ms, faster than 95.15% of JavaScript online submissions for Find Pivot Index.
 * !Memory Usage: 40.6 MB, less than 87.63% of JavaScript online submissions for Find Pivot Index.
 */

class FindPivotIndex{
    static linearApproach(nums){
        let sumsArr=[nums[0]];
        let len = nums.length;
        for(let i = 1;i<len;i++){
            sumsArr.push(sumsArr[i-1]+nums[i]);
        }
        for(let i =0;i<len;i++){
            if(i-1===-1) {
                if(sumsArr[len-1]-sumsArr[i]===0) return i; 
            }
            else if(i+1===len){
                if(sumsArr[i-1]===0) return i;
            }
            else {
                if(sumsArr[i-1]===(sumsArr[len-1]-sumsArr[i])) return i;
            }
        }
        return -1;
    }
    static linearWithoutExtraArray(nums){
        let sum=0;
        let len = nums.length;
        for(let i = 0;i<len;i++){
            sum +=nums[i];
        }
        console.log(sum)
    let leftSum=nums[0];
        for(let i =1;i<len;i++){
            console.log("Sum before : ",leftSum);
            console.log("diff : ",sum-nums[i]-leftSum)
            if(leftSum===sum-nums[i]-leftSum) return i;
            leftSum +=nums[i];
            console.log("Sum after : ",leftSum);
        }
        return -1;
    }
}

console.log(FindPivotIndex.linearWithoutExtraArray([1,7,3,6,5,6]))
console.log(FindPivotIndex.linearApproach([1,2,3]))
console.log(FindPivotIndex.linearApproach([2,1,-1]))
console.log(FindPivotIndex.linearApproach([1,-1,2]))