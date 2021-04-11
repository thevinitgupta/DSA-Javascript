function findTheWinner(n, k) {
    let nums = []
    for(let i=1;i<=n;i++){
        nums[i-1]=i;
    }
    console.log(nums);
    let head = 0;
    let count =0;
    while(nums.length!==1){
        console.log(nums)
        count = head + k-1;
        while(count>=nums.length){
            console.log("Before ->",count)
            count = count - nums.length;
            console.log(count)
        }
        nums.splice(count,1);
        head = count;
    }
    console.log(nums[0]);
}

console.log(findTheWinner(5,2))
 console.log(findTheWinner(5,4))
 console.log(findTheWinner(6,5))