const sortArrayOf012 = function(arr){
    let c0=0,c1=0,c2=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===0){
            c0++;
        }
        else if(arr[i]===1){
            c1++;
        }
        else {
                c2++;
        }
    }
    i = 0; 
      
    // Storing all the 0s in the beginning 
    while (c0 > 0) { 
        arr[i++] = 0; 
        c0--; 
    } 
  
    // Counting the 1s and storing
    while (c1 > 0) { 
        arr[i++] = 1; 
        c1--; 
    } 
  
    // Counting the 2s and storing
    while (c2 > 0) { 
        arr[i++] = 2; 
        c2--; 
    } 
    return arr;
}

//Dutch National Flag Algorithm or 3 way partitioning
class DNF {
    static sort(arr){
        let len = arr.length;
        if(len<=1) return arr;
        let low = 0;
        let mid = 0;
        let high = len-1;
        while(mid<=high){
            let curr= arr[mid];
            switch(curr) {
                case 0 :
                    arr[low] = arr[low] + arr[mid];
                    arr[mid] = arr[low]-arr[mid];
                    arr[low] = arr[low]-arr[mid];
                    low++;
                    mid++;
                break;
                case 1 : 
                    mid++;
                break;
                case 2 :
                    arr[high] = arr[high] + arr[mid];
                    arr[mid] = arr[high]-arr[mid];
                    arr[high] = arr[high]-arr[mid]; 
                    high --;
                break;
                default :
                    arr[mid] = arr[mid];
            }
        }
        return arr;
    }

}

console.log(sortArrayOf012([0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1 ]));
console.log(DNF.sort([0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1 ]));