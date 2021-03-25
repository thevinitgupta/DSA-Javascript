class Search{
   static binarySearch(arr,lo,hi,tar){
       while(lo<hi){
           let mid = parseInt((lo+hi)/2);
           if(tar===arr[mid]){
               return mid;
           }
           else if(tar<arr[mid]){
               hi = mid-1;
           }
           else {
               lo = mid+1;
           }
       }
       return -1;
   } 
}

console.log(Search.binarySearch([2,5,6,9,12],0,4,9));
console.log(Search.binarySearch([2,5,6,9,12],0,4,2));
console.log(Search.binarySearch([2,5,6,9,12],0,4,13));