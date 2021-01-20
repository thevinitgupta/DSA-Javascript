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

console.log(sortArrayOf012([0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1 ]));