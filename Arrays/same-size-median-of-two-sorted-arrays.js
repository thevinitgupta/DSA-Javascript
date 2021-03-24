class MedianSorted
{
    static sameSize(nums1,nums2)
    {
        const lLen = nums1.length;
        const rLen = nums2.length;
        let tot = rLen+lLen;
        let mid = Math.floor(tot/2);
        let count = 0,prev = 0,curr=0;
        let i=0,j=0;
        while(i<lLen||j<rLen){
            // console.log("Prev :",prev,", Curr :",curr);
            // console.log("i :",i," j :",j);
            // console.log("Count :",count);
            if(nums1[i]<nums2[j]){
                console.log("If block!");
                console.log("Nums1[i] :",nums1[i]," Nums2[j] :",nums2[j])
                count += 1;
                prev = curr;
                curr = nums1[i];
                i++;
            }
            else{
                console.log("Else block!");
                console.log("Nums1[i] :",nums1[i]," Nums2[j] :",nums2[j])
                count += 1;
                prev = curr;
                if(nums2[j]){
                    curr = nums2[j]>=curr? nums2[j] : ((curr===undefined)||(curr===null)) ? prev : curr; 
                }
                else{
                    curr = nums1[i];
                }
                j++;
            }
            // else {
            //     count +=2;
            //     prev = nums1[i];
            //     curr = nums1[i];
            //     i++;j++;
            // }

            if(count===mid+1){
                console.log("Prev :",prev,", Curr :",curr);
                if(tot%2===0){
                    return (prev+curr)/2;
                }
                else {
                    return curr;
                }
            }
        }
    }

    //! O(n+m)->Time and Space
    // static sameSize(nums1,nums2)
    // {
    //     const lLen = nums1.length;
    //     const rLen = nums2.length;
    //     let tot = rLen+lLen;
    //     let mid = Math.floor(tot/2);
    //     let merged = MedianSorted.merge(nums1,nums2);
    //     if(tot%2===0){
    //         return (merged[mid]+merged[mid-1])/2;
    //     }
    //     else {
    //         return merged[mid];
    //     }
        
    // }
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

console.log("Final Median :",MedianSorted.sameSize([1,2],[3,4]),"\n\n");
console.log("Final Median :",MedianSorted.sameSize([0,0],[0,0]),"\n\n");
console.log("Final Median :",MedianSorted.sameSize([0,0,0,0,0],[-1,0,0,0,0,0,1]),"\n\n");
console.log("Final Median :",MedianSorted.sameSize([3,4],[]),"\n\n");
console.log("Final Median :",MedianSorted.sameSize([4],[]),"\n\n");
console.log("Final Median :",MedianSorted.sameSize([],[0]),"\n\n");