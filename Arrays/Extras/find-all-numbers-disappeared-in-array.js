/*
 * Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.
 */

class FindDisappeared{
    static numbersInRange(nums) {
        let count = 1;let missing=[];
        let length = nums.length;
        nums= [...new Set(nums)];
        while(count<=length){
            if(nums.indexOf(count)===-1) missing.push(count);
            count++;
        }
        return missing;
    }

    //more efficient in space and time -> O(n)
    static numbersInArray(nums){
        let missing=[];
        let length = nums.length;
        for(let i =0;i<length;i++){
            let curr = Math.abs(nums[i]);
            nums[curr-1] = -Math.abs(nums[curr-1]);
        }
        for(let i=0;i<length;i++){
            if(nums[i]>0) missing.push(i+1);
        }
        return missing;
    }
}

