//takes longer timer to resolve but still acceptable
function majorityElement(nums) {
    nums = Sort.mergeSort(nums);
    let i = 0,j=0,count = 0,maj = Math.floor(nums.length/2);
    while(i<=nums.length-2&&j<nums.length-1){
        count = 0;
        while(nums[i]===nums[j]){
            count++;
            j++;
        }
        if(count>maj) return nums[i];
         i=j;
    }
}
//we can reduce the time with a simple hack -> If the elements are sorted in monotonically increasing (or decreasing) order, the majority element can be found at index (n/2) (and (n/2)+1 if n is even) incidentally, if n is even).
var majorityElementHack = function(nums) {
    if(nums.length===1) return nums[0];
    nums = Sort.mergeSort(nums);
    let n = nums.length-1;
    return nums[Math.floor(n/2)]
};


    class Sort {
    static mergeSort(arr){
      let len = arr.length;
      if(len<=1) return arr;
      let mid = Math.floor(len/2);
      let left = arr.slice(0,mid);
      let right = arr.slice(mid,len);
      
      return Sort.merge(
        Sort.mergeSort(left),
        Sort.mergeSort(right)
      );
    }
    static merge(leftArr,rightArr){
        const lLen = leftArr.length;
        const rLen = rightArr.length;
        let i=0,j=0;
        let merged = [];
        while(i<lLen&&j<rLen){
            if(leftArr[i]<rightArr[j]){
                merged.push(leftArr[i]);
                i++;
            }
           else {
                merged.push(rightArr[j]);
                j++;
            }
        }
        return [...merged,...leftArr.slice(i,lLen),...rightArr.slice(j,rLen)];
    }
}

console.log(majorityElement([2,2,1,1,1,2,2]))
console.log(majorityElementHack([2,2,1,1,1,2,2]))