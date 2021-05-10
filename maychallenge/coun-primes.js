


/**
 * @param {number} n
 * @return {number}
 */
 var countPrimes = function(n) {
     let tot =0;
     let nums = new Array(n).fill(true);
     nums[0] = null;
     nums[1] = null;
    for(let i=2;i<=parseInt(Math.sqrt(n));i++){
        if(nums[i]===true){
            for(let j= i+i;j<=n;j += i){
                if(nums[j]) nums[j] = false;
            }
        }
    }
    nums.forEach((num)=>{
        if(num===true) tot++;
    })
    return tot;
};

function isPrime(num){
    for(let i=2;i*i<=num;i++){
        if(num%i===0) return false;
    }
    return true;
}

console.log(countPrimes(10))
console.log(countPrimes(2))
