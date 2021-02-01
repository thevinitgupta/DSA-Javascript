/*
    Given an array arr[] denoting heights of N towers and a positive integer K, you have to modify the height of each tower either by increasing or decreasing them by K only once. After modifying, height should be a non-negative integer. 
Find out what could be the possible minimum difference of the height of shortest and longest towers after you have modified each tower.


Example 1:

Input:
K = 2, N = 4
Arr[] = {1, 5, 8, 10}
Output:
5
Explanation:
The array can be modified as 
{3, 3, 6, 8}. The difference between 
the largest and the smallest is 8-3 = 5.
Example 2:

Input:
K = 3, N = 5
Arr[] = {3, 9, 12, 16, 20}
Output:
11
Explanation:
The array can be modified as
{6, 12, 9, 13, 17}. The difference between 
the largest and the smallest is 17-6 = 11. 
*/

class Heights{
    static minimizeMaxDiff(arr,k){
      let big = arr[arr.length-1]+k;
      let small = arr[0]-k>0 ? arr[0]-k: arr[0]+k;
      arr[arr.length-1] = big;
      arr[0] = small;
      let maxDiff = big-small;
     

      for(let i=1;i<=arr.length-2;i++){
          console.log(maxDiff)
        let add = arr[i]+k;
        let sub = arr[i]-k>0 ? arr[i]-k : arr[i]+k;
        let currDiff=0;
        if(sub<small) {
            arr[i] = sub;
            currDiff = big-sub;
            small = sub;
            
        }
        else if(add>big){
            arr[i] = big
            currDiff = add-small;
            big = add;
            
        }
        if(currDiff>0 &&currDiff<maxDiff) maxDiff = currDiff
      }
      console.log(arr)
      return maxDiff;
    }  
}

console.log(Heights.minimizeMaxDiff([3, 9, 12, 16, 20],3));