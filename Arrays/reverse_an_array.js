const reverseArrayFunc = function(arr){
    const len = arr.length;
    if(len===0) return undefined;
    else if(len===1) return arr;
    else {
        const limit = len-1;
        for(let i=0;i<len;i++){
            if(i<limit-i){
               let temp = arr[i];
               arr[i] = arr[limit-i];
               arr[limit-i]= temp;
            } 
        }
        return arr;
    }
}

//two pointer approach 
class Reverse {
    constructor(_arr){
        this.arr = _arr;
    }

    //static reversing method
    static reverseArray(arr){
        let start = 0;
        let end = arr.length -1;
        while(start<=end){
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
        return arr;
    }
}

console.log(Reverse.reverseArray(["Orange","Apple","Grapes"])); //output -> [ 'Grapes', 'Apple', 'Orange' ]
console.log(Reverse.reverseArray([4, 5, 1, 2]) );//output -> [ 2, 1, 5, 4 ]
console.log(Reverse.reverseArray([4, 5, 1, 2,11,25,4]));//output -> [ 4, 25, 11, 2, 1 , 5, 4]