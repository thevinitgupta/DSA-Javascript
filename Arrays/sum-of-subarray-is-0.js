class FindSubArray{
    static withSumZero(n,arr){
        if(arr.indexOf(0)!==-1) return true;
        let sum = 0;
        let sumArr = [];
        for(let i=0;i<n;i++){
            sum = sum+arr[i];
            if(sumArr.indexOf(sum)!==-1||sum===0) return true;
            else sumArr.push(sum);
        }
        return false;
    }
}

console.log(FindSubArray.withSumZero(5,[4,4 ,-3, 1, 6]));//output -> false
console.log(FindSubArray.withSumZero(2,[10,-10]));//output -> true
console.log(FindSubArray.withSumZero(5,[4 ,2 ,-3, 1, 6]));//output -> true