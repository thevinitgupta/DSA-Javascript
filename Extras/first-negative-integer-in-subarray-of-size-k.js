/**
 * Each test case contains an integer n denoting the size of the array. The next line contains n space separated integers forming the array. The last line contains the window size k.
Output:
Print the space separated negative integer starting from the first till the end for every window size k. If a window does not contain a negative integer , then print 0 for that window.
 */

 /**
  * Sample
  * Input:
        5
        -8 2 3 -6 10
        2
    Output : 
    -8 0 -6 -6
  */

  class FirstNegativeInteger {
      static inSubArray(n,arr,k){
          let prevNeg = 0;
          let firstNegative;
          for(let i=k-1;i<n;i++){
              while((prevNeg<i) && (prevNeg<=i-k||arr[prevNeg]>0)){
                  prevNeg++;
              }
              if(arr[prevNeg]<0){
                  firstNegative = arr[prevNeg];
              }
              else {
                  firstNegative=0;
              }
              console.log(firstNegative);
          }
      }
  }

  FirstNegativeInteger.inSubArray( 5,[-8, 2, 3, -6, 10],2);