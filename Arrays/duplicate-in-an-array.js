/*
    Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
    There is only one repeated number in nums, return this repeated number.
*/


//* fastest solution 
var findDuplicate = function(nums) {
    let len = nums.length;
let dup = new Array(len-1);
for(let i=0;i<len;i++){
    let curr = nums[i];
    if(dup[curr-1]) return curr;
    else dup[curr-1] = curr;
    }
}
//simple solution : O(n)
var findDuplicate = function(nums) {
    let len = nums.length;
    for(let i=0;i<len;i++){
        if(nums.slice(i+1).indexOf(nums[i])!==-1) return nums[i];
    }
};

//sorting and  comparing pairs solution : O(nlogn)
class FindDuplicate {
    static mergeSort(arr) {
        let len = arr.length;
        if(len<=1) return arr;
        let mid = Math.floor(len/2);
        let left = arr.slice(0,mid);
        let right = arr.slice(mid,len);
        
        return FindDuplicate.merge(FindDuplicate.mergeSort(left),FindDuplicate.mergeSort(right))
    }
    static merge(left,right){
        let lLeft = left.length;
        let lRight = right.length;
        let i=0,j=0;
        let sorted = [];
        while(i<lLeft&&j<lRight){
            if(left[i]<right[j]){
                sorted.push(left[i]);
                i++;
            }
            else {
                sorted.push(right[j]);
                j++;
            }  
        }
        return [...sorted,...left.slice(i),...right.slice(j)];
    }

    static getDuplicate(arr){
        arr = FindDuplicate.mergeSort(arr);
        let len = arr.length;
        for(let i=0;i<len;i++){
            if(arr[i]===arr[i+1]) return arr[i];
        }
    }
}

console.log(FindDuplicate.getDuplicate([1,3,4,2,2]));
console.log(FindDuplicate.getDuplicate([1,1]));