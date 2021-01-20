const reverseArray = function(arr){
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
console.log(reverseArray(["Orange","Apple","Grapes"])); //output -> [ 'Grapes', 'Apple', 'Orange' ]
console.log(reverseArray([4, 5, 1, 2]));//output -> [ 2, 1, 5, 4 ]
console.log(reverseArray([4, 5, 1, 2,11,25,4]));//output -> [ 4, 25, 11, 2, 1 , 5, 4]