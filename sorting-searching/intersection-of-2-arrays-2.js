/**
 * 
 * console.log(intersect([1,2,2,1],[2,2]))
console.log(intersect([4,9,5],[9,4,9,8,4]))
 */


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

//?faster than 80%, more efficient than 60%
 var intersect = function(nums1, nums2) {
     if(nums2.length<nums1.length) return intersect(nums2,nums1);
    let reps = {};
    for(let i=0;i<nums1.length;i++){
        if(reps[nums1[i]]) reps[nums1[i]]++;
        else reps[nums1[i]] = 1;
    }
    console.log(reps);
    let intersec = [];
    for(let i=0;i<nums2.length;i++){
        let count = reps[nums2[i]] || 0;
        if(count>0){
            intersec.push(nums2[i]);
            reps[nums2[i]] -= 1;
        }
    }

    return intersec;
};


console.log(intersect([9],[9]))
console.log(intersect([1,2,2,1],[2,2]))
console.log(intersect([4,9,5],[9,4,9,8,4]))
