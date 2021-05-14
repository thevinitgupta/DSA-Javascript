/**
 * The power of an integer x is defined as the number of steps needed to transform x into 1 using the following steps:

if x is even then x = x / 2
if x is odd then x = 3 * x + 1
For example, the power of x = 3 is 7 because 3 needs 7 steps to become 1 (3 --> 10 --> 5 --> 16 --> 8 --> 4 --> 2 --> 1).

Given three integers lo, hi and k. The task is to sort all integers in the interval [lo, hi] by the power value in ascending order, if two or more integers have the same power value sort them by ascending order.

Return the k-th integer in the range [lo, hi] sorted by the power value.

Notice that for any integer x (lo <= x <= hi) it is guaranteed that x will transform into 1 using these steps and that the power of x is will fit in 32 bit signed integer.
 */

/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
 var getKth = function(lo, hi, k) {
    let vals = []
    for(let i=lo;i<=hi;i++){
        let pow = getPower(i);
        vals.push([i,pow]);
    }
    vals.sort((a,b)=> {
        if(a[1]===b[1]) return a[0]-b[0];
        else return a[1]-b[1];
    })
    return vals[k-1][0];
};

function getPower(num){
    let count =0;
    while(num!==1){
        if(num%2===0) num = num/2;
        else num = num*3 + 1;
        count++;
    }
    return count;
}

console.log(getKth(12,  15,  2))
console.log(getKth( 1, 1,1))
console.log(getKth( 7, 11,  4))
console.log(getKth(10, 20, 5))
console.log(getKth(1,  1000,  777))