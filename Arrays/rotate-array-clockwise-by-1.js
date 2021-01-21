const rotateClockwiseByOne = function(arr){
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
console.log(rotateClockwiseByOne([9, 8, 7, 6, 4, 2, 1, 3]))