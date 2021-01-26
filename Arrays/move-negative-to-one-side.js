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

class Negative {
    static moveToBeginning(arr){
        let start = 0;
        let end = arr.length - 1;
        while(start<=end){
            if(arr[start]>=0 && arr[end]>0){
                end--;
            }
            else if(arr[start]>=0 && arr[end]<0){
                let temp = arr[start];
                arr[start] = arr[end];
                arr[end] = temp;
                start++;
                end--;
            }
            else if(arr[start]<0 && arr[end]<0){
                start++;
            }
            else{
                start++;
                end--;
            }
            
        }
        return arr;
    }
}
console.log(moveNegative([-12, 11, -13, -5, 6, -7, 5, -3, -6]));//[-12, -13, -5, -7, -3,-6,  11,  6,  5]
console.log(Negative.moveToBeginning([-12, 11, -13, -5, 6, -7, 5, -3,11, -6]));//[-12, -6, -13, -5, -3,-7,  5,   6, 11, 11]
console.log(Negative.moveToBeginning([]));//[]
console.log(Negative.moveToBeginning([0,-1,0,-10]));//[ -10, -1, 0, 0 ]