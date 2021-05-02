/**
 * @param {string} num
 * @param {number} k
 * @return {number}
 */
 var getMinSwaps = function(num, k) {
    num = num.split("").map((val)=>parseInt(val));
    let copy = [...num];
    let tot = 0;let swap = 0;
    for(let i=0;i<k;i++){
        num = Permutation.nextLarger(num);
    }
    for(let j=0;j<num.length;j++){
        if(copy[j]!==num[j]){
             let k=j;
            while(copy[j]!==num[j] && k<num.length){
                let temp = num[k];
                num[k] = num[k+1];
                num[k+1] = temp;
                tot++;
                k++;
            }
        }  
    }
    return tot;
};

class Permutation {
    static nextLarger(arr){
        let swaps = 0;
        let len = arr.length;
        let pivot = -1;
        for(let i=len-1;i>0;i--){
            if(arr[i]>arr[i-1]){
               pivot = i-1;
               let nextLargest = i;
               for(let j=i;j<len;j++){
                   if(arr[j]>arr[pivot]&&arr[j]<=arr[nextLargest]) {
                      nextLargest = j;
                  }
               }
               let temp = arr[pivot];
               arr[pivot] = arr[nextLargest];
               arr[nextLargest] = temp;
               let start = pivot+1;
               let end = len -1;
               while(start<=end){
                   let t = arr[start];
                   arr[start] = arr[end];
                   arr[end] = t;
                   swaps++;
                   start++;
                   end--;
               }
               return arr;
           }
            
       }
       if(pivot===-1){
           let start = pivot+1;
           let end = len -1;
         
           while(start<=end){
               let t = arr[start];
               arr[start] = arr[end];
               arr[end] = t;
               swaps++;
               start++;
               end--;
           }
           return arr;
       }
    }
}

console.log(getMinSwaps("5489355142",4))