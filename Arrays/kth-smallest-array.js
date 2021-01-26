/*Input:
 The first line of input contains an integer T, denoting the number of testcases. Then T test cases follow. Each test case consists of three lines. First line of each testcase contains an integer N denoting size of the array. Second line contains N space separated integer denoting elements of the array. Third line of the test case contains an integer K.
 */

/*
Input:
2
6
7 10 4 3 20 15
3
5
7 10 4 20 15
4

Output:
7
15
*/

//Simplest Approach -> Sorting the array in ascending order and passing the k-th smallest for current array passed
const kthSmallest = function(...currArgs){
    let [len,arr,k] = currArgs;
    if(k>len) return undefined;

    //sorting using bubble sort
    // for(let i = 0;i<len-1;i++){
    //     for(let j =i+1;j<len;j++){
    //         if(arr[j]<arr[i]){
    //             let temp = arr[j];
    //             arr[j]=arr[i];
    //             arr[i]=temp
    //         }
    //     }
    // }
    arr = Sort.mergeSort(arr);
    //return kth smallest element
   return arr[k-1];
}


    class Sort {
    static mergeSort(arr){
      let len = arr.length;
      if(len<=1) return arr;
      let mid = Math.floor(len/2);
      let left = arr.slice(0,mid);
      let right = arr.slice(mid,len);
      
      return Sort.merge(
        Sort.mergeSort(left),
        Sort.mergeSort(right)
      );
    }
    static merge(leftArr,rightArr){
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
}

const smallestInArrays = function(...args){
    let init =1;
    let kthSmallElements = [];
 while(init<args.length){
    kthSmallElements.push(kthSmallest(args[init],args[init+1],args[init+2]))
     init+=3;
 }
 return kthSmallElements;
}
console.log(smallestInArrays(2,6,[7,10,4,3,20,15],4,5,[7,10,4,20,15],4));
//console.log(mergeSort([7,10,4,3,20,15]));
//console.log(mergeSort([7,10,4,3,20,15]));
//merge([ 7 ],[ 20 ]);