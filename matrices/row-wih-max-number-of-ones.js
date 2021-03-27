/**
 ** Input: 
*!  N = 4 , M = 4
**  Arr[][] = {{0, 1, 1, 1},
**             {0, 0, 1, 1},
**             {1, 1, 1, 1},
**             {0, 0, 0, 0}}
*!Output: 2
*?Explanation: Row 2 contains 4 1's (0-based indexing).
 */

class FindRow{

    static maxOnesLinear(arr,n,m){
        let prevOne = -1,maxRow = -1,index =Number.MAX_VALUE,first;
        for(let i = 0;i<n;i++){
            //skip checking for rows that have less number of ones
            if(index>m || arr[i][index-1]===1){ 
                console.log("Checking for  i:",i);
                first = arr[i].indexOf(1);
                //updating the prev lower index and maxRow value
            if(first!==-1 && first<index){
                index = first;
                maxRow = i;
            }
            }
                //console.log("For i ",i, ", index of first 1 :",index);
            }
        return maxRow;
    }
    // static withMaxOnes(arr, n, m){
    
    //     let max = 0,prevCount=Number.MIN_VALUE,count= 0;
    //     for(let i=0;i<n;i++){
    //         count=0;
            
    //         for(let j=0;j<m;j++){
    //             if(arr[i][j]===1){
    //                 count++;
    //             }
    //         }
    //         prevCount = count>prevCount ? count : prevCount;
    //         console.log("Prev Count :",prevCount);
    //         console.log("Count :",count," Max :",max," i :",i);
    //         max = count > prevCount ? i : max;
    //         console.log("Final Max :",max," for i :",i);
    //     }
    //     return max;
    // }

    
    static first( arr, low, high) 
        {   console.log("Array : ",arr);
            if(high >= low) 
            { 
                // Get the middle index 
                let mid = low + (high - low)/2; 
            
                // Check if the element at middle index is first 1 
                if ( ( mid === low || arr[mid-1] === 0) && arr[mid] === 1) 
                    return mid; 
            
                // If the element is 0, recur for right side 
                else if (arr[mid] === 0) 
                    return FindRow.first(arr, (mid + 1), high); 
                
                // If element is not first 1, recur for left side 
                else
                    return FindRow.first(arr, low, (mid -1)); 
            } 
            return -1; 
        }  


}

console.log("Final Row :",FindRow.maxOnesLinear([[0,1,1,1],[0,0,1,1],[1,1,1,1],[0,0,0,0]],4,4));
//console.log(FindRow.first([0,1,1,1],0,4))