const Sort = require("../Extras/sorting-algorithms")
class Solution {
    static findLongestConseqSubseq(arr, N){
        let prevVal =arr[0],count=1,maxCount=1;
        arr = [...new Set(arr)]
        N=arr.length;
        arr = Sort.mergeSort(arr,"i");
        for(let i=0;i<N;i++){
            if(arr[i] - 1===prevVal){
                count++;

                maxCount=Math.max(maxCount,count);

            }
            else {
                count=1;

            }
            
            prevVal=arr[i]
        }
        return maxCount;
    }
}

console.log(Solution.findLongestConseqSubseq([2,6,1,9,4,5,3],7));
console.log(Solution.findLongestConseqSubseq([1,9,3,10,4,20,2],7));
console.log(Solution.findLongestConseqSubseq([6 ,6, 2, 3, 1, 4, 1, 5, 6, 2, 8, 7, 4, 2, 1, 3, 4, 5, 9, 6],20));