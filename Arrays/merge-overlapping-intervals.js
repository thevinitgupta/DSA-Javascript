//  

class MergeIntervals {
    static mergeSort(arr){
        let len = arr.length;
        if(len===1) return arr;
        let mid = Math.floor(len/2);
        let left = arr.slice(0,mid);
        let right = arr.slice(mid,len);
        return MergeIntervals.merge(MergeIntervals.mergeSort(left),MergeIntervals.mergeSort(right) )
    }
    static merge(left,right) {
        let l1 = left.length;
        let l2 = right.length;
        let i=0,j=0;
        let merged = [];
        while(i<l1&&j<l2) {
            if(left[i][0]<right[j][0]) {
                merged.push(left[i]);
                i++;
            }
            else {
                merged.push(right[j]);
                j++;
            }
        }
        return [...merged,...left.slice(i),...right.slice(j)]
    }

    static mergeOverlapping(intervals) {
        intervals = MergeIntervals.mergeSort(intervals);
        let  i =0;
        while(i<intervals.length-1){
            console.log(intervals[i],intervals[i+1])
           if(intervals[i][1]>=intervals[i+1][0]){
               let start = MergeIntervals.min(intervals[i][0],intervals[i+1][0]);
               let end = MergeIntervals.max(intervals[i][1],intervals[i+1][1]);
               let interval = [start,end];
               intervals.splice(i,2,interval)
           }
           else {
               i++;
           }
           console.log("Intervals :",intervals);
       }
       return intervals;
   }
   static min(a,b){
    return a<b?a:b;
   }
static max(a,b){
    return a>b?a:b;
}
}

console.log(MergeIntervals.mergeOverlapping([[1,3],[0,1],[0,2],[5,7],[2,6],[8,10],[15,18],[17,20]]));