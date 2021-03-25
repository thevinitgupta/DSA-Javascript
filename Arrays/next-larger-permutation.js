/**
 * Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
If such an arrangement is not possible, it must rearrange it as the lowest possible order (i.e., sorted in ascending order).
The replacement must be in place and use only constant extra memory.
 */

 class Permutation {
     static nextLarger(arr){
         let len = arr.length;
         if(len===1) return arr;
         let pivot = -1;
         for(let i=len-1;i>0;i--){
             console.log("Arr[i] :",arr[i]);
             if(arr[i]>arr[i-1]){
                pivot = i-1;
                let nextLargest = i;
                console.log("Arr[pivot] :",arr[pivot]," Arr[nxt_largest] :",arr[nextLargest]);
                for(let j=i;j<len;j++){
                    if(arr[j]>arr[pivot]&&arr[j]<=arr[nextLargest]) {
                       nextLargest = j;
                       console.log("Next arr[nxt_largest] :",arr[nextLargest]);
                   }
                }
                console.log("Arr before exchange of piv and nlrg :",arr);
                let temp = arr[pivot];
                arr[pivot] = arr[nextLargest];
                arr[nextLargest] = temp;
                console.log("Arr after exchange of piv and nlrg :",arr);
                let start = pivot+1;
                let end = len -1;
                while(start<=end){
                    let t = arr[start];
                    arr[start] = arr[end];
                    arr[end] = t;
                    start++;
                    end--;
                }
                console.log("Arr after reverse of nlar -> n :",arr);
                return arr;
            }
             
        }
        if(pivot===-1){
            let start = pivot+1;
            let end = len -1;
          
            while(start<=end){
                let t = arr[start];
                arr[start] = arr[end];
                arr[end] = t;
                start++;
                end--;
            }
            return arr;
        }
     }
 }

 console.log(Permutation.nextLarger([1,5,8,4,7,6,5,3,1]))

 