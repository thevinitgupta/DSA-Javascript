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
    for(let i = 0;i<len-1;i++){
        for(let j =i+1;j<len;j++){
            if(arr[j]<arr[i]){
                let temp = arr[j];
                arr[j]=arr[i];
                arr[i]=temp
            }
        }
    }
   return arr[k-1];
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
console.log(smallestInArrays(2,6,[7,10,4,3,20,15],4,5,[7,10,4,20,15],4))