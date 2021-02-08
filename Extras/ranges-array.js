/**
 * You are given a sorted unique integer array nums.

Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

Each range [a,b] in the list should be output as:
"a->b" if a != b
"a" if a == b

Example 1:
Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
 */

class ArraySummary {
    static ranges(nums) {
        let len = nums.length;
        if(len===0) return nums;
        if(len===1) return [`${nums[0]}`]
        let rangesArr = [];
        for(let i=0;i<len;i++){
            let a=nums[i];
            while(i+1<nums.length&&(nums[i+1]-nums[i])==1){
                i++;
            }
            if(a!=nums[i]){
                rangesArr.push(a+"->"+nums[i]);
            }else{
                rangesArr.push(a+"");
            }
        }
        return rangesArr;
    }
}

console.log(ArraySummary.ranges([0,1,2,4,5,7]))//[ '0->2', '4->5', '7' ]
console.log(ArraySummary.ranges([0,2,3,4,6,8,9]))//[ '0', '2->4', '6', '8->9' ]
console.log(ArraySummary.ranges([]))//[]
console.log(ArraySummary.ranges([-1]))//["-1"]
console.log(ArraySummary.ranges([0]))//["0"]