/**
 * Given an array of integers arr and an integer k.

A value arr[i] is said to be stronger than a value arr[j] if |arr[i] - m| > |arr[j] - m| where m is the median of the array.
If |arr[i] - m| == |arr[j] - m|, then arr[i] is said to be stronger than arr[j] if arr[i] > arr[j].

Return a list of the strongest k values in the array. return the answer in any arbitrary order.
 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */

//?Faster than 62% -> O(N) solution
 var getStrongest = function(arr, k) {
     let n = arr.length;
    arr.sort((a,b)=>a-b);
    let m = arr[parseInt((n-1)/2)];
    arr.sort((a,b)=>{
        if(Math.abs(a-m)===Math.abs(b-m)){
            return b-a;
        }
        else return Math.abs(b-m)-Math.abs(a-m)
    })
    return arr.slice(0,k);
};


console.log(getStrongest([1,2,3,4,5],2))
console.log(getStrongest([1,1,3,5,5],2))
console.log(getStrongest([6,7,11,7,6,8],5))
console.log(getStrongest([6,-3,7,2,11],3))
console.log(getStrongest([-7,22,17,3],2))