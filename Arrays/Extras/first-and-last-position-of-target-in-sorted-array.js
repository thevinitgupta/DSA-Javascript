/**
 ** Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

*!If target is not found in the array, return [-1, -1].

*?Follow up: Could you write an algorithm with O(log n) runtime complexity?
 */

const Search = require("./binary-search.js");


class FindIndex{
    //!does not pass all the cases
    // static searchRange(nums,target){
    //     let found = Search.binarySearch(nums,0,nums.length-1,target);
    //     if(found===-1) return [-1,-1];
    //     if(found===0){
    //         if(nums[found+1]===target) return [found,found+1];
    //         else return [-1,found]
    //     }
    //     if(found===nums.length-1){
    //         if(nums[found-1]===target) return [found-1,found]
    //         else return [found,-1]
    //     }
    //     if(nums[found+1]===target) return [found,found+1];
    //     if(nums[found-1]===target) return [found-1,found]
    // }

    //* O(N) solution -> faster than 94.5%
    static searchRange(nums,target){
        let i=0,j=nums.length-1;

        while(i<=j){
            if(nums[i]===target && nums[j]===target) return [i,j];
            if(nums[i]<target) i++;
            if(nums[j]>target)j--;
        }
        return [-1,-1]
    }
}

console.log(FindIndex.searchRange([5,7,7,8,8],8))
console.log(FindIndex.searchRange([5,7,7,8,8,10],7))
console.log(FindIndex.searchRange([5,6,7,7,8,8,10],5))
console.log(FindIndex.searchRange([5,6,7,7,8,8,10],10))
console.log(FindIndex.searchRange([3,3,3],3))