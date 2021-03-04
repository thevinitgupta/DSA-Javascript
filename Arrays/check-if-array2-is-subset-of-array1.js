const Sort = require("../Extras/sorting-algorithms")
class Subset {
    static ofArray(arr1,arr2){
        arr1 = Sort.quickSort(arr1);
        let subset = true;
        for(let i=0;i<arr2.length;i++){
            if(Subset.binarySearch(arr2[i],arr1,0,arr1.length-1)===-1) {
                subset = false; 
                break;
            }
        }
        return subset;
    }
    static binarySearch(e,arr,lb,ub){
        let mid;
        while(lb<=ub){
            mid = Math.floor((lb+ub)/2)
            if(arr[mid]===e) return 1;
            else if(arr[mid]>e) ub=mid-1;
            else lb=mid+1;
        }
        return -1;
    }
}

console.log(Subset.ofArray([11, 1, 13, 21, 3, 7],[11, 3, 7, 1]))
console.log(Subset.binarySearch(3,[0,1,2,3,4,6,8,9,11],0,8))