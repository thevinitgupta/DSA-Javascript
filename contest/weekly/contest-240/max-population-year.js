/**
 * @param {number[][]} logs
 * @return {number}
 */
 var maximumPopulation = function(logs) {
     logs.sort((a,b)=>a[0]-b[0]);
    let prevLow=logs[0][0],prevHigh=logs[0][1],currLow=0,currHigh=0,currMax=1,max=1,maxYear=logs[0][0];
    let i=1;
    while(i<logs.length){
        currLow = logs[i][0];
        currHigh = logs[i][1];
        while(currLow<prevHigh){
            console.log("prev high ->",prevHigh)
            console.log(logs[i])
            currMax++;
            if(currMax>max){
                max=currMax;
                maxYear = currLow;
            }
            
            if(logs[i][0]>prevHigh) break;
            i++;
            currLow = logs[i][0];
            currHigh = logs[i][1];
        }
        currMax=1;
        prevHigh = logs[i][1];
        prevLow = logs[i][0];
        i++;
    }
    return maxYear;
};


//?Input: logs = [[1950,1961],[1960,1971],[1970,1981]]
//*Output: 1960      cL,cH

console.log(maximumPopulation([[1950,1961],[1960,1971],[1970,1981]]))
console.log(maximumPopulation([[1993,1999],[2000,2010]]))
console.log(maximumPopulation([[1982,1998],[2013,2042],[2010,2035],[2022,2050],[2047,2048]]))
console.log(maximumPopulation([[2033,2034],[2039,2047],[1998,2042],[2047,2048],[2025,2029],[2005,2044],[1990,1992],[1952,1956],[1984,2014]]))
console.log(maximumPopulation([[2025,2041],[1988,2007],[2003,2046],[2045,2049],[2025,2027],[2014,2040],[2014,2027],[2011,2027],[1972,2019]]))