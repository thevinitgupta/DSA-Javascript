/**
 * Given a list of intervals, remove all intervals that are covered by another interval in the list.

Interval [a,b) is covered by interval [c,d) if and only if c <= a and b <= d.

After doing so, return the number of remaining intervals. 

Example 1:

**Input: intervals = [[1,4],[3,6],[2,8]] => [[1,4],[2,8],[3,6]]
Output: 2
Explanation: Interval [3,6] is covered by [2,8], therefore it is removed.
 */

/**
 * @param {number[][]} intervals
 * @return {number}
 */

//!Faster than 62% -> O(N) solution
 var removeCoveredIntervals = function(intervals) {
    intervals.sort((a,b)=> {
        if(a[0]===b[0]){
           return b[1]-a[1]
        }
        else return a[0]-b[0];
    });
    console.log("intervals->",intervals)
    let i=0,j=1;
    while(i<intervals.length && j<intervals.length){
        if(intervals[j][1]<=intervals[i][1]){
            intervals.splice(j,1);
            console.log(intervals)
        }
        else {
            i++;
            j++;
        }
    }
    return intervals.length;
};


console.log(removeCoveredIntervals([[1,2],[1,4],[3,4]]))
console.log(removeCoveredIntervals([[1,4],[3,6],[2,8]]))
console.log(removeCoveredIntervals([[1,4],[2,3]]))
console.log(removeCoveredIntervals([[0,10],[5,12]]))
console.log(removeCoveredIntervals([[3,10],[4,10],[5,11]]))