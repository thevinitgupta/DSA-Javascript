//different sorting algorithms

class Sort {
    Sort(_arr){
        this.arr = _arr;
    }
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
    static quickSort(arr){
        return Sort.quick(arr,0,arr.length-1);
    }
    static quick(arr,lb,ub){
        if(ub<=1) return arr;
        let loc;
        if(lb<ub){
           let part = Sort.partition(arr,lb,ub);
           arr = part.arr;
           loc = part.loc;
           Sort.quick(arr,lb,loc-1);
           Sort.quick(arr,loc+1,ub)
        }
        return arr;
    }
    static partition(arr,lb,ub){
        let pivot = arr[lb];
        let start = 0,end = ub;
        while(start<end){
            while(arr[start]<=pivot){
                start++;
            }
            while(arr[end]>pivot){
                end--;
            }
            if(start<end){
                let temp = arr[start];
                arr[start] = arr[end];
                arr[end] = temp;
            }

        }
        let t = arr[end];
        arr[end] = pivot;
        arr[lb] = t;
        return {arr:arr,loc:end};
    }
}


console.log(Sort.quickSort([2,7,1,3,9,1]))
console.log(Sort.quickSort([17,12,11,6,3]))