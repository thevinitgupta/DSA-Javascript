/**
 * Question Statement from Leetcode
 * We have some permutation A of [0, 1, ..., N - 1], where N is the length of A.

   The number of (global) inversions is the number of i < j with 0 <= i < j < N and A[i] > A[j].

   The number of local inversions is the number of i with 0 <= i < N and A[i] > A[i+1].

   Return true if and only if the number of global inversions is equal to the number of local inversions.
 */

//simple approach 
var isIdealPermutation = function(A) {
    let i=0;
    let N = A.length;
    let locInv=0,globInv=0;
    while(i< N-1){
        for(let j=i+1;j<N;j++){
            if(i<j&&A[i]>A[j]){
                globInv++;
                if(j===i+1) locInv++;
            }
        }
        i++;
    }
    if(locInv===globInv) return true;
    else return false;
};

//time limit exceeds for the above solution, So we need to make it more efficient
//So we can directly return false as soon as we find a global inversion that is not a local inversion

class Permutation {
    static isIdeal(A){
        let i=0;
        let N = A.length;
        while(i< N-1){
            for(let j=i+1;j<N;j++){
                if(j!==i+1&&A[i]>A[j]) return false;
            }
            i++;
        }
        return true;
    }
    //even faster solution
    static isIdealPermutation(A){
        let max = -1;
        for(let i=0;i<A.length-2;i++){
            max = max>A[i]?max:A[i];
            if(max>A[i+2]) return false;
        }
        return true;
    }
}



console.log(isIdealPermutation([1,2,0]))