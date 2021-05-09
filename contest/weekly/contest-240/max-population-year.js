/**
 * @param {number[][]} logs
 * @return {number}
 */
 var maximumPopulation = function(logs) {
    let prevLow=1949,prevHigh=2051,currLow=0,currHigh=0,currMax=0,max=1,maxYear;
    for(let i=0;i<logs.length;i++){
        currLow = logs[i][0];
        currHigh = logs[i][1];
        while(currLow<prevHigh){
            currMax++;
            if(currMax>max){
                max=currMax;
                maxYear = currLow;
            }
            i++;
            currLow = logs[i][0];
            currHigh = logs[i][1];
        }
        currMax = 0;
    }
    return maxYear;
};


//?Input: logs = [[1950,1961],[1960,1971],[1970,1981]]
//*Output: 1960

console.log(maximumPopulation([[1950,1961],[1960,1971],[1970,1981]]))