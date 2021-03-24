function removeDuplicates(nums) {
    let length = nums.length;
        
        if(length == 0)
            return 0;
        
        let i;
        let targetIndex = 1;
        let OG = nums[0];
        console.log("OG : ",OG);
        for(i = 1; i < length; i++){
            
            if(nums[i] != OG){
                
                OG = nums[i];
                console.log("OG : ",OG);
                console.log("target index : ",targetIndex,"i :",i);
                nums[targetIndex] = nums[i];
                console.log("target index val: ",nums[targetIndex],"i val:",nums[i]);
                targetIndex++;
                console.log("target index : ",targetIndex)
            }
            console.log("nums : ",nums)
        }
        
        return nums.splice(0,targetIndex);
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4,4,4,4,4,4,4,4,4,4,4,6,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]));