/**
 * You are assigned to put some amount of boxes onto one truck. You are given a 2D array boxTypes, where boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]:

numberOfBoxesi is the number of boxes of type i.
numberOfUnitsPerBoxi is the number of units in each box of the type i.
You are also given an integer truckSize, which is the maximum number of boxes that can be put on the truck. You can choose any boxes to put on the truck as long as the number of boxes does not exceed truckSize.

Return the maximum total number of units that can be put on the truck.
 */

/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */

 class Sort {
    static mergeSort(arr){
      let len = arr.length;
      //console.log("Curr Array In Merge Sort: ",arr);
      if(len<=1) return arr;
      let mid = Math.floor(len/2);
      let left = arr.slice(0,mid);
      let right = arr.slice(mid,len);
        return Sort.mergeDecrease(
            Sort.mergeSort(left),
            Sort.mergeSort(right)
          );      
    }    
    static mergeDecrease(leftArr,rightArr){
        const lLen = leftArr.length;
        const rLen = rightArr.length;
        let i=0,j=0;
        let merged = [];
        while(i<lLen&&j<rLen){
            if(leftArr[i][1]>rightArr[j][1]){
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
 var maximumUnits = function(boxTypes, truckSize) {
    boxTypes = Sort.mergeSort(boxTypes);
    let sumBox = 0,res=0;
    for(let i=0;i<boxTypes.length;i++){
        if(truckSize-sumBox<boxTypes[i][0]){
            res += (truckSize-sumBox)*boxTypes[i][1];
            sumBox = truckSize;
            break;
        }
        sumBox += boxTypes[i][0];
        res += boxTypes[i][0]*boxTypes[i][1];
    }
    console.log(res);
    return res;
};

maximumUnits([[1,3],[2,2],[3,1]],4)
maximumUnits([[5,10],[2,5],[4,7],[3,9]],10)