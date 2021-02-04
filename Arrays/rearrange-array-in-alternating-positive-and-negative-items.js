class Rearrange {

    static alternating(arr){
        let i=0,len= arr.length;
        while(i<len-1){
            if(i%2===0&&arr[i]>=0){
                let next;
                for(let j=i+1;j<len;j++){
                    if(arr[j]<0) {
                        next = j;
                        break;
                    }
                }
               arr = Rearrange.rotateRight(arr,i,next);
            }
            else if(i%2!==0&&arr[i]<0){
                let next;
                for(let j=i+1;j<len;j++){
                    if(arr[j]>0) {
                        next = j;
                        break;
                    }
                }
                arr = Rearrange.rotateRight(arr,i,next);
            }
            i++;
        }
        return arr;
    }
    static rotateRight(arr,low,high){
        arr = Rearrange.reverse(arr,low,high);
        arr = Rearrange.reverse(arr,low+1,high);
        return arr;
    }
    static reverse(arr,start,end){
        while(start<end){
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++; end--;
        }
        return arr;
    }
}

console.log(Rearrange.rotateRight([2,4,6,7,1,-1,4,-3,-5,7],0,5));
console.log(Rearrange.alternating([-5, -2, 5, 2, 4, 7, 1, 8, 0, -8]));
console.log(Rearrange.alternating([2,4,6,7,1,-1,4,-3,-5,7]));
console.log(Rearrange.alternating([1, 2, 3, -4, -1, 4]));