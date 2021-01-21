const moveNegative = function(arr){
    let negCount = 0;
    const len = arr.length;
    for(let i=0;i<len;i++){
        let curr = arr[i];
        if(curr<0){
            arr.splice(i,1);
            arr.splice(negCount,0,curr);
            negCount++;
        }
    }
    return arr;
}
console.log(moveNegative([-12, 11, -13, -5, 6, -7, 5, -3, -6]));