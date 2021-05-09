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
 var intersect = function(nums1, nums2) {
     let concat = [...nums1,...nums2];
    concat.sort((a,b)=>a-b);
    let reps = {};
    for(let i=0;i<concat.length;i++){
        if(reps[concat[i]]) reps[concat[i]]++;
        else reps[concat[i]] = 1;
    }
    concat = [];
    console.log(reps);
    for (const prop in reps) {
        if(reps[prop]>=2){
            console.log(reps[prop])
            let lim = reps[prop]%2===0 ? reps[prop]/2: (reps[prop]-1)/2;
            console.log("limit-> ",lim);
                for(let i=1;i<=lim;i++){
                    concat.push(parseInt(prop));
                }
        }
        
    }
   return concat; 
};


console.log(intersect([9],[9]))
