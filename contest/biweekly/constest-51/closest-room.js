var closestRoom = function(rooms, queries) {
    let res = [];
   rooms.sort((a,b)=> a[0]-b[0]);
    for(let i =0;i<queries.length;i++){
        let prevDiff= Number.MAX_VALUE,found=null;
        for(let j =0;j<rooms.length;j++){
            if(Math.abs(queries[i][0]-rooms[j][0])<prevDiff) {
                if(queries[i][1]>=rooms[j][1]) found = j;
                prevDiff =Math.abs(queries[i][0]-rooms[j][0]); 
            }
            if(found===null) res.push(-1);
            else res.push(found);
            rooms.splice(found,1);
        }
    }
   console.log(res);
};


class Search{
    static binarySearch(arr,lo,hi,tar){
        while(lo<=hi){
            let mid = parseInt((lo+hi)/2);
            if(tar===arr[mid][0]){
                return mid;
            }
            else if(tar<arr[mid][0]){
                hi = mid-1;
            }
            else {
                lo = mid+1;
            }
        }
        return -1;
    } 
 }


console.log(closestRoom([[2,2],[1,2],[3,2]],[[3,1],[3,3],[5,2]]))