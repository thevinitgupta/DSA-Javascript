class MedianSorted
{

    //!Time -> O(n+m), Space -> O(1)
    static sameSizeBetter(nums1,nums2)
    {   
        let n = nums1.length,m = nums2.length;
        let i = 0;
        
        // Current index of input array nums2[]
        let j = 0;
        let count;
        let m1 = -1, m2 = -1;
        
        // Since there are (n+m) elements, 
        // There are following two cases 
        // if n+m is odd then the middle 
        //index is median i.e. (m+n)/2 
        if ((m + n) % 2 == 1)
        {
            for(count = 0;
                count <= (n + m) / 2;
                count++)
            {
                if (i != n && j != m)
                {
                    m1 = (nums1[i] > nums2[j]) ?
                          nums2[j++] : nums1[i++];
                }
                else if (i < n)
                {
                    m1 = nums1[i++];
                }
                 
                // for case when j<m,
                else
                {
                    m1 = nums2[j++];
                }
            }
            return m1;
        }
    
        // median will be average of elements
        // at index ((m+n)/2 - 1) and (m+n)/2
        // in the array obtained after merging
        // nums1 and nums2
        else
        {
            for(count = 0;
                count <= (n + m) / 2;
                count++)
            {
                m2 = m1;
                if (i != n && j != m)
                {
                    m1 = (nums1[i] > nums2[j]) ?
                          nums2[j++] : nums1[i++];
                }
                else if (i < n)
                {
                    m1 = nums1[i++];
                }
                 
                // for case when j<m,
                else
                {
                    m1 = nums2[j++];
                }
            }
            return (m1 + m2) / 2;
        }
    }

    //? O(n+m)->Time and Space
    static sameSize(nums1,nums2)
    {
        const lLen = nums1.length;
        const rLen = nums2.length;
        let tot = rLen+lLen;
        let mid = Math.floor(tot/2);
        let merged = MedianSorted.merge(nums1,nums2);
        if(tot%2===0){
            return (merged[mid]+merged[mid-1])/2;
        }
        else {
            return merged[mid];
        }
        
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
    static binarySearchTechnique(nums1,nums2){
        let n1 = nums1.length;
        let n2 = nums2.length;
        let lo = 0,hi = n1;
        let cut1=0,cut2=0,l1=0,l2=0,r1=0,r2=0;
        while(lo<hi){
            cut1 = Math.floor((lo+hi)/2);
            cut2 = Math.floor((n1+n2)/2) - cut1;
            l1 = cut1===0?Number.MIN_VALUE : nums1[cut1-1];
            l2 = cut2===0?Number.MIN_VALUE : nums2[cut2-1];
            r1 = cut1===n1?Number.MAX_VALUE : nums1[cut1];
            r2 = cut2===n2?Number.MAX_VALUE : nums2[cut2];
            if(l1>r2){
                hi = cut1-1;
            }
            else if(l2>r1){
                lo = cut1+1;
            }
            else {
                if((n1+n2)%2===0){
                    return (Math.max(l1,l2)+Math.min(r1,r2))/2;
                }
                else {
                    return Math.min(r1,r2);
                }
            }
        }
    }
}

console.log("Final Median :",MedianSorted.sameSizeBetter([1,2],[3,4]),"\n\n");
console.log("Final Median :",MedianSorted.sameSizeBetter([0,0],[0,0]),"\n\n");
console.log("Final Median :",MedianSorted.sameSizeBetter([0,0,0,0,0],[-1,0,0,0,0,0,1]),"\n\n");
console.log("Final Median :",MedianSorted.sameSizeBetter([3,4],[]),"\n\n");
console.log("Final Median :",MedianSorted.sameSizeBetter([4],[]),"\n\n");
console.log("Final Median :",MedianSorted.sameSizeBetter([],[0]),"\n\n");