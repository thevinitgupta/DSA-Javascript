/**
 * TODO Google Interview Question 
 * 
 ** Given two arrays, A and B, of equal size n, the task is to find the minimum value of A[0] * B[0] + A[1] * B[1] +…+ A[n-1] * B[n-1]. Shuffling of elements of arrays A and B is allowed.
 * 
 *? Input : A[] = {3, 1, 1} and B[] = {6, 5, 4}.
 *?Output : 23
 *?Minimum value of S = 1*6 + 1*5 + 3*4 = 23.

*!Input : A[] = { 6, 1, 9, 5, 4 } and B[] = { 3, 4, 8, 2, 4 }
*!Output : 80.
*!Minimum value of S = 1*8 + 4*4 + 5*4 + 6*3 + 9*2 = 80.
 */

class FindMinimumSumOfProducts{
    static forTwoArrays(arr1,arr2){
        let n = arr1.length;
        if(n===0) return undefined;
        if(n===1) return arr1[0]*arr2[0];
        arr1 = Sort.mergeSort(arr1,"i");
        arr2 = Sort.mergeSort(arr2,"d");
        let sum = 0;
        for(let i = 0;i<n;i++){
            sum += (arr1[i]*arr2[i]);
        }
        return sum;
    }
}

class Sort {
    static mergeSort(arr,method){
      let len = arr.length;
      if(len<=1) return arr;
      let mid = Math.floor(len/2);
      let left = arr.slice(0,mid);
      let right = arr.slice(mid,len);
      if(method==="i"){
      return Sort.mergeIncreasing(
        Sort.mergeSort(left,"i"),
        Sort.mergeSort(right,"i")
      )
    }
    else if(method==="d"){
        return Sort.mergeDecreasing(
            Sort.mergeSort(left,"d"),
            Sort.mergeSort(right,"d")
          )
    }
    }
    static mergeIncreasing(leftArr,rightArr){
        const lLen = leftArr.length;
        const rLen = rightArr.length;
        let i=0,j=0;
        let merged = [];
        while(i<lLen&&j<rLen){
            if(leftArr[i]<rightArr[j]){
                merged.push(leftArr[i]);
                i++;
            }
           else {
                merged.push(rightArr[j]);
                j++;
            }
        }
        return [...merged,...leftArr.slice(i,lLen),...rightArr.slice(j,rLen)];
    }
    static mergeDecreasing(leftArr,rightArr){
        const lLen = leftArr.length;
        const rLen = rightArr.length;
        let i=0,j=0;
        let merged = [];
        while(i<lLen&&j<rLen){
            if(leftArr[i]<rightArr[j]){
                merged.push(rightArr[j]);
                j++;
            }
           else {
                merged.push(leftArr[i]);
                i++;
            }
        }
        return [...merged,...leftArr.slice(i,lLen),...rightArr.slice(j,rLen)];
    }

    static insertionSort(arr){
        let len = arr.length;
        if(len<=1) return arr;
        let i=1;
        let temp =0;
        while(i<len){
            temp=arr[i];
            let j=i-1;
            while(j>=0 && arr[j]>temp){
                arr[j+1] = arr[j];
                j--;
            }
            arr[j+1]=temp;
            i++;
        }
        return arr;
    }
}

console.log(FindMinimumSumOfProducts.forTwoArrays([3, 1, 1],[6, 5, 4]))
console.log(FindMinimumSumOfProducts.forTwoArrays([6, 1, 9, 5, 4],[ 3, 4, 8, 2, 4]))
console.log(Sort.insertionSort([6, 1, 9, 5, 4]));