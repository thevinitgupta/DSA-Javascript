/**
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
 */


 class Insert{
    static searchInsert(nums, target) {
        return Insert.binarySearch(nums,target);
    }
    static binarySearch(arr,t){
        let low = 0;
        let high = arr.length-1;
        let mid;
        while(low<=high){
           mid = Math.floor((low+high)/2);
            if(arr[mid]===t) return mid;
            else if(t<arr[mid]) {
                high=mid-1;
            }
            else {
                low = mid +1;
            }
        }
     return low;
    }
 }

console.log(Insert.searchInsert([1,3,5,6],5))
console.log(Insert.searchInsert([1,3,5,6],2));
console.log(Insert.searchInsert([1,3,5,6],7))
console.log(Insert.searchInsert([1,3,5,6],0))
console.log(Insert.searchInsert([1],1));

