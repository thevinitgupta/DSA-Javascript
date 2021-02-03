//Given three arrays sorted in non-decreasing order, print all common elements in these arrays.
// Input:
// ar1[] = {1, 5, 10, 20, 40, 80}
// ar2[] = {6, 7, 20, 80, 100}
// ar3[] = {3, 4, 15, 20, 30, 70, 80, 120}
// Output: 20, 80

// Input:
// ar1[] = {1, 5, 5}
// ar2[] = {3, 4, 5, 5, 10}
// ar3[] = {5, 5, 10, 20}
// Output: 5, 5


class FindCommon {
    static forThreeSortedArrays(arr1,arr2,arr3){
        let len1 = arr1.length;
        let len2 = arr2.length;
        let len3 = arr3.length;
        let commons =[];
        let i = 0, j = 0, k = 0; 
  
        // Iterate through three arrays while all arrays have elements 
        while (i < len1 && j < len2 && k < len3) 
        { 
             // If x = y and y = z, print any of them and move ahead 
             // in all arrays 
             if (arr1[i] == arr2[j] && arr2[j] == arr3[k]) 
             {   
                 commons.push(arr1[i]);   
                 i++; j++; k++; 
            } 
  
             // x < y 
             else if (arr1[i] < arr2[j]) 
                 i++; 
  
             // y < z 
             else if (arr2[j] < arr3[k]) 
                 j++; 
  
             // We reach here when x > y and z < y, i.e., z is smallest 
             else
                 k++; 
        }  
        return commons;
    }
}

console.log(FindCommon.forThreeSortedArrays([1, 5, 10, 20, 40, 80],[6, 7, 20, 80, 100],[3, 4, 15, 20, 30, 70, 80, 120]));
console.log(FindCommon.forThreeSortedArrays([1, 5, 10,20,20, 40, 80],[6, 7, 20, 80, 100],[3, 4, 15, 20,20, 30, 70, 80, 120]));