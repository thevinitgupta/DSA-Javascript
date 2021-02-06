class FindSubArray{
    static withSumZero(arr,n){
        let sumTillHere = 0;
        let prevSum = Number.MIN_VALUE;
        let start = 0;
        for(let end=0;end<n-1;end++){
            sumTillHere += arr[end];
            if(sumTillHere===0) return true;
            if(sumTillHere<prevSum){

            }
            prevSum = sumTillHere;
        }
    }
}