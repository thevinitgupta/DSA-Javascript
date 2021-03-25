/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

class Search{
   static binarySearch(arr,lo,hi,tar){
       console.log("Array :",arr);
       console.log("target :",tar);
       while(lo<=hi){
           let mid = parseInt((lo+hi)/2);
           console.log("Lo :",lo," Hi :",hi," mid :",mid);
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
    static inMatrix(matrix, target){
        let m = matrix.length-1;
        let n = matrix[0].length -1;
        if(matrix[0][0]>target || matrix[m][n]<target) return false;
        for(let i=0;i<=m;i++){
            if(matrix[i][0]<=target && matrix[i][n]>=target){
                return Search.binarySearch(matrix[i],0,n,target)===-1?false : true;
            }
        }
        return false;
    }
}

//console.log(Search.inMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],11));
//console.log(Search.inMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],80));
//console.log(Search.inMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],21));
console.log(Search.inMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],1));
//console.log(Search.binarySearch([2,5,6,9,12],0,4,2));
//console.log(Search.binarySearch([2,5,6,9,12],0,4,13));