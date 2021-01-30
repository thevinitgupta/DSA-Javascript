/*
    N = 4, M = 5
    arr1[] = {1, 3, 5, 7}
    arr2[] = {0, 2, 6, 8, 9}
    Output: 0 1 2 3 5 6 7 8 9

        Explanation: Since you can't use any 
        extra space, modify the given arrays
        to form 
        arr1[] = {0, 1, 2, 3}
        arr2[] = {5, 6, 7, 8, 9}
*/

class MergeWithoutExtraSpace {
    static insertionType(left,right){
        console.log(left,right)
        let i=0,j=0;
        let lLeft = left.length;
        //let lRight = right.length;
        while(i<lLeft){
            j=0;
            if(left[i]>right[j]){
                left[i] = left[i]+right[j];
               right[j] = left[i] - right[j];
               left[i] = left[i] - right[j];
                while(right[j]>right[j+1]){
                    right[j] = right[j]+right[j+1];
                    right[j+1] = right[j] - right[j+1];
                    right[j]= right[j] - right[j+1];
                    j++;
                }
            }
            i++;
        }
        console.log(left,right)
    }
    static  nextGap(gap)
    {
        if (gap <= 1)
            return 0;
        return (gap / 2) + (gap % 2);
    }
 
    static gapAlgorithm(arr1,arr2){
        
        let n = arr1.length;
        let m = arr2.length;
        let gap = parseInt(n + m);
        let i=0,j=0;
        
        for (gap = parseInt(MergeWithoutExtraSpace.nextGap(gap)); gap > 0;gap = parseInt(MergeWithoutExtraSpace.nextGap(gap)))
        {
            console.log("Start for loop : "+arr1,arr2)
       // comparing elements in the first
       // array.
       for (i = 0; i + gap < n; i++)
           if (arr1[i] > arr1[i + gap]) 
           {
               let temp = arr1[i];
               arr1[i] = arr1[i + gap];
               arr1[i + gap] = temp;
           }

       // comparing elements in both arrays.
       for (j = gap > n ? gap - n : 0;
            i < n && j < m;
            i++, j++)
           if (arr1[i] > arr2[j])
           {
               let temp = arr1[i];
               arr1[i] = arr2[j];
               arr2[j] = temp;
           }

       if (j < m)
       {
           // comparing elements in the
           // second array.
           for (j = 0; j + gap < m; j++)
               if (arr2[j] > arr2[j + gap]) 
               {
                   let temp = arr2[j];
                   arr2[j] = arr2[j + gap];
                   arr2[j + gap] = temp;
               }
       }
       console.log("End for loop : "+arr1,arr2)
   }
        console.log("End of function : "+arr1,arr2)
    }
}

MergeWithoutExtraSpace.insertionType([2,4,7,10],[5,9,11,12]);
MergeWithoutExtraSpace.insertionType([1,3,5,7],[0,2,6,8,9]);
MergeWithoutExtraSpace.gapAlgorithm([1,3,5,7],[0,2,6,8,9])