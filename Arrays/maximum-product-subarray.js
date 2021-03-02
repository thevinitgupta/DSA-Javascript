/**
 * [3,5,0,6,3,-1,0,7,3,-1,-2]
 * [3,5] -> overall =15;start=0,end=1;
 * at end=2 -> 0 ,so we make start=end;
 * [6,3] ->curr>overall -> overall = curr = 18
 * [6,3,-1] -> negative ,still curr=-18, waiting for another negative
 * at end=6 -> 0, so we make start =end;
 * [7,3] ->curr>overall -> overall=curr =21;
 * [7,3,-1] -> negative,still curr = -21
 * [7,3,-1,-2] -> negative, but curr>overall -> overall = curr = 42
 */


class Solution {
    static maxProduct(arr,n){
        let max = arr[0];
        let minProd = arr[0],maxProd = arr[0],choice1,choice2;
        for(let i=1;i<n;i++){
            choice1 = minProd*arr[i];
            choice2 = maxProd*arr[i];
            minProd = Math.min(arr[i],choice1,choice2);
            maxProd = Math.max(arr[i],choice1,choice2);
            max = Math.max(max,maxProd)
        }
        return max;
    }
}

console.log(Solution.maxProduct([-3,5,6,3,7,3],6));
console.log(Solution.maxProduct([6, -3, -10, 0, 2],5));
console.log(Solution.maxProduct([2, 3, 4, 5, -1, 0],6));
console.log(Solution.maxProduct([2,3,-2,4],4));
console.log(Solution.maxProduct([-2,0,-1],3));