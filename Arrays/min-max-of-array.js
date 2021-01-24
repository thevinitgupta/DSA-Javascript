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
    return {"min" : min, "max":max};
} 

//class Based approach with tournament method
class MinMax {
    constructor(_arr){
        this.arr = _arr;
        this.len = _arr.length;
        this.minMax = {
            min : undefined,
            max : undefined
        }
    }
    //inbuilt function that when called gets the min and max of the instance 
    getMinMax(){
        let arr= this.arr;
        let i=0;
        if(this.len%2===0){
            this.minMax.min = arr[0]<arr[1]?arr[0]:arr[1];
            this.minMax.max = arr[0]>arr[1]?arr[0]:arr[1];
            i=2;
        }
        else {
            this.minMax.min = arr[0]
            this.minMax.max = arr[0]
            i=1;
        }
        while(i<(this.len-1)){
            if(arr[i]>arr[i+1]){
                this.minMax.min = arr[i+1]<this.minMax.min?arr[i+1]:this.minMax.min;
                this.minMax.max = arr[i]>this.minMax.max? arr[i] :this.minMax.max;
            }
            else {
                this.minMax.min = arr[i]<this.minMax.min? arr[i] : this.minMax.min;
                this.minMax.max = arr[i+1]>this.minMax.max ? arr[i+1] : this.minMax.max;
            }
            i +=2;
        }
        return this.minMax;
    }
    //static function to return min and max 
    static minMaxFunc(arr){
        let minMax = {
            min : undefined,
            max : undefined
        };
        let len = arr.length,i=0;
        if(len%2===0){
            minMax.min = arr[0]<arr[1]?arr[0]:arr[1];
            minMax.max = arr[0]>arr[1]?arr[0]:arr[1];
            i=2;
        }
        else {
            minMax.min = arr[0]
            minMax.max = arr[0]
            i=1;
        }
        while(i<len-1){
            if(arr[i]>arr[i+1]){
                minMax.min = arr[i+1]<minMax.min && arr[i+1];
                minMax.max = arr[i]>minMax.max && arr[i];
            }
            else {
                minMax.min = arr[i]<minMax.min && arr[i];
                minMax.max = arr[i+1]>minMax.max && arr[i+1];
            }
            i +=2;
        }
        return minMax;
    }
}
console.log(minMaxOfArray([2,11,540,5,0,7,600,-1]));
console.log(MinMax.minMaxFunc([2,11,540,5,0,7,600,-1]));
console.log(MinMax.minMaxFunc([4]));
console.log(MinMax.minMaxFunc([]));
let currArray = new MinMax([4,0,-20,10,300,540]); // creating an instance of the MinMax class and passing in an array argument
console.log(currArray.getMinMax()); //calling the getMinMax function 