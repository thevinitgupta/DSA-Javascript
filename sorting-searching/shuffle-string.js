/**
 * Given a string s and an integer array indices of the same length.

The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

Return the shuffled string
 */


/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
 var restoreString = function(s, indices) {
    for(let i=0;i<indices.length;i++){
        indices[i] = [indices[i],s[i]];
    }
    indices = Sort.mergeSort(indices);
    console.log(indices);
    s= "";
    for(let i=0;i<indices.length;i++){
        s = s + indices[i][1];
    }
    return s;
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
        )
    }
    static merge(leftArr,rightArr){
        let i=0,j=0,k=0;
        let merged = [];
        while(i<leftArr.length && j<rightArr.length){
           if(leftArr[i][0]<rightArr[j][0]){
            merged.push(leftArr[i])
            i++;
           }
           else {
               merged.push(rightArr[j]);
               j++;
           }
        }
        return [...merged,...leftArr.slice(i,leftArr.length),...rightArr.slice(j,rightArr.length)];
    }
}


console.log(restoreString("codeleet",[4,5,6,7,0,2,1,3]))