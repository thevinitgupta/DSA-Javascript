/*
Input : ([2,4,5,7],[1,4,6,9,10])
Output : Union -> [1,2,5,6,7,9,10]
         Intersection -> [4]
*/

const getUnionIntersection = function(arr1,arr2){
    const union =[];
    const intersec =[];
    arr1.forEach(curr => {
        if(arr2.indexOf(curr)===-1){
            if(union.indexOf(curr)===-1){
                union.push(curr);
            }
        }
        else {
            if(intersec.indexOf(curr)===-1){
                intersec.push(curr);
            }
        }
    });
    arr2.forEach(curr => {
        if(union.indexOf(curr)===-1){
            union.push(curr);
        }
    });
    union.sort((a,b) => a-b);
    intersec.sort((a,b) => a-b);
     return [union,intersec];
}

//time complexity exceeds required 
class OperationsWithoutSorting {
    static intersection(a1,a2){
        let p1=0;
        let l1=a1.length;
        let intersec =new Array();
        while(p1<l1){
            if(a2.indexOf(a1[p1])>-1){
                if(intersec.indexOf(a1[p1])===-1)
                intersec.push(a1[p1]);
            }
            p1++;
        }
        return intersec;
    }
    static union(a1,a2){
        let p1=0;
        let l1=a1.length;
        let p2=0;
        let l2=a2.length;
        let union =new Array();
        while(p1<l1||p2<l2){
                if(a1[p1]!==undefined && union.indexOf(a1[p1])===-1){
                union.push(a1[p1]);
                }
                if(a2[p2]!==undefined &&union.indexOf(a2[p2])===-1){
                    union.push(a2[p2]);
                    }
            p1++;
            p2++;
        }
        return union;
    }
}

//sorting to be used
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
//using sorting and binary search technique
class Operations {
    static binarySearch(elem,arr){
        let low = 0;
        let found = false;
        let high = arr.length-1;
        while(low<high){
            let mid =Math.floor((high+low)/2);
            if(elem===arr[mid]) {
                found = true;
                return found;
            }
            else if(elem<arr[mid]){
                high = mid-1;
            }
            else {
                low=mid+1;
            }
        }

        return found;
    }
    static union(a1,a2){
        let l1 = a1.length;
        let l2 = a2.length;
        let union = [];
        if(l1<l2){
            a1 = Sort.mergeSort(a1)
            union =[...new Set(a1)];
            a2 = Sort.mergeSort(a2);
            for(let i =0;i<l2;i++){
                if(Operations.binarySearch(a2[i],union)===false){
                    union.push(a2[i]);
                }
            }
            return union;
        }
        else {
            a2 = Sort.mergeSort(a2);
            union =[...new Set(a2)];
            a1 = Sort.mergeSort(a1);
            for(let i =0;i<l1;i++){
                if(Operations.binarySearch(a1[i],union)===false){
                    union.push(a1[i]);
                }
            }
            union = [...new Set(union)]
            return union;
        }
    }
}

console.log(getUnionIntersection([2,4,5,7],[1,4,6,9,10]));
//console.log(Operations.intersection([5,6,1,12,6],[9,7,12,15,6,12]));
//console.log(Operations.union([5,6,1,12,6],[9,7,12,15,6,12,17]));
console.log(Operations.union([9 ,1, 9, 1, 9, 1, 0],[9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(Operations.union([1, 4, 2 ,3, 5, 4],[4,4]));