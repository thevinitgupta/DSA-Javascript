/**
 * Given a binary array, find the maximum number of consecutive 1s in this array.
 * Example 1:
    Input: [1,1,0,1,1,1]
    Output: 3
    Explanation: The first two digits or the last three digits are consecutive 1s.
        The maximum number of consecutive 1s is 3. 

    Note:
        The input array will only contain 0 and 1.
        The length of input array is a positive integer and will not exceed 10,000
 */

class FindMaxConsecutive{

    //kadane's algorithm 
    static onesInArray(nums){
        let len = nums.length;
        let countTillHere = 0,countMax=0;
        for(let i=0;i<len;i++){
            if(nums[i]===1) countTillHere++;
            else countTillHere=0;
            countMax = countMax<countTillHere?countTillHere : countMax;  
        }
        return countMax;
    }
}