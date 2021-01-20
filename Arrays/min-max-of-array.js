//Linear Approach
/*
const minMaxOfArray = function(arr){
    let min = arr[0],max=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max) max=arr[i];
        if(arr[i]<min) min = arr[i]
    }
    return [min,max];
}
*/

//Pairwise Approach
const minMaxOfArray = function(arr){
    let min,max,i;
    let len = arr.length;
    if(len%2!==0){
        min = arr[0];
        max = arr[0];
        i=1;
    }
    else {
        min = arr[0]<arr[1]?arr[0]:arr[1];
        max = arr[0]>arr[1]?arr[0]:arr[1];
        i=2;
    }

    while(i<len-1){
        if(arr[i]>arr[i+1]){
            max = arr[i]>max?arr[i]:max;
            min = arr[i+1]<min?arr[i+1]:min;
        }else {
                max = arr[i+1]>max?arr[i+1]:max;
                min = arr[i]<min?arr[i]:min;
        }
        i = i+2;
    }
    return [min,max];
} 
console.log(minMaxOfArray([2,11,540,5,0,7,600,-1]));