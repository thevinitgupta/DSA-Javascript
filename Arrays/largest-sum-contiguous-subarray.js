class LargetSumContiguousSubArray {
    static Kadane(arr){
        let currSum = 0;
        let max = 0;
        for(let i =0;i<arr.length;i++){
            currSum = currSum+arr[i];
            if(currSum<0) currSum = 0;
            if(max<currSum) max = currSum;
        }
        return max;
    }
}