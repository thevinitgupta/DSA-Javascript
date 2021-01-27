const rotateAntiClockwiseByOne = function(arr){
    let len = arr.length;
    if(len===0) return undefined;
    if(len===1) return arr;
    let val = arr[len-1];
    let point = 0;
    let temp = 0;
    while(point<len){
        temp = arr[point];
        arr[point] = val;
        val =temp;
        point++;
    }
    return arr;
}

class RotateArrayClockwise {
    static blockSwap(arr,d){
        let len = arr.length;
       arr =  RotateArrayClockwise.reverse(arr,0,d-1);
       arr =  RotateArrayClockwise.reverse(arr,d,len-1);
       arr =  RotateArrayClockwise.reverse(arr,0,len-1);
       return arr;
    }
    static reverse(arr,low,high){
        while(low<high){
            let temp = arr[low];
            arr[low] = arr[high];
            arr[high] = temp;
            low++;
            high--;
        }
        return arr;
    }

    static jugglingMethod(arr,d){
        let len = arr.length;
        if(d>len) d = d%len;
        let min = d<len ? d : len;
        let max = d<len ? len : d;
        let gcd = RotateArrayClockwise.gcd(min,max);
        for(let i =0;i<gcd;i++){
            let temp = arr[i];
            let j = i;
            while(true){
                let k = j+d;
                if(k>=len) k = k - len;
                if(k===i) break;
                arr[j] = arr[k];
                j=k;
            }
            arr[j] = temp;
        }
        return arr;
    }
    static gcd (a, b) 
    { 
        if (a === 0) return b; 
        return RotateArrayClockwise.gcd(b % a, a); 
    } 
     
}
console.log(rotateAntiClockwiseByOne([9, 8, 7, 6, 4, 2, 1, 3]))
console.log(RotateArrayClockwise.blockSwap([9, 8, 7, 6, 4, 2, 1, 3],1));
console.log(RotateArrayClockwise.jugglingMethod([9, 8, 7, 6, 4, 2, 1, 3],3));