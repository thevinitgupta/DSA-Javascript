/**
    ** Given an array of size N and a range [a, b]. The task is to partition the array around the range such that array is divided into three parts.
    **1) All elements smaller than a come first.
    **2) All elements in range a to b come next.
    **3) All elements greater than b appear in the end.
    **The individual elements of three sets can appear in any order. You are required to return the modified array.


 */

const Sort = require("../Extras/sorting-algorithms");
class Solution {
    //Function to partition the array around the range such 
    //that array is divided into three parts.
    static threeWayPartition(array, a, b)
    {
        //your code here
        array = Sort.mergeSort(array,"i");
        let parted = 1;
        for(let i =0;i<array.length;i++){
            console.log(array[i]);
            if((array[i]===a && (array[i-1]>a || array[i+1]<a))|| (array[i]===b && (array[i-1]>b || array[i+1]<b))){
                parted = 0;
            }
        }
        return parted;
    }
}

console.log(Solution.threeWayPartition([39, 60, 52 ,36 ,35, 40 ,93, 16],28,32))

