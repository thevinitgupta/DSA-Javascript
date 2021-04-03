/**
 * !1806. Minimum Number of Operations to Reinitialize a Permutation
**You are given an even integer n​​​​​​. You initially have a permutation perm of size n​​ where perm[i] == i​ (0-indexed)​​​​.
**
**In one operation, you will create a new array arr, and for each i:
**
*?If i % 2 == 0, then arr[i] = perm[i / 2].
*?If i % 2 == 1, then arr[i] = perm[n / 2 + (i - 1) / 2].
*?You will then assign arr​​​​ to perm.
**
**Return the minimum non-zero number of operations you need to perform on perm to return the permutation to its initial value.
 */

/**
 * @param {number} n
 * @return {number}
 */
function reinitializePermutation(n) {
    let arr=[],perm=[],count=0;
    for(let i=0;i<n;i++){
        arr.push(i+1);
        perm.push(i+1);
    }
    let matching = false;
    while(!matching){
        console.log("Arr ->",arr);
        console.log("Perm ->",perm);
        for(let i=0;i<n;i++){
            if(i%2===0) arr[i] = perm[parseInt(i/2)];
            else arr[i] = perm[n / 2 + parseInt((i - 1) / 2)];
        }
        console.log("Arr ->",arr);
        console.log("Perm ->",perm);
        count++;
        console.log("Ops :",count);
        for(let i=0;i<n;i++){
            if(arr[i]===i+1) matching = true;
            else {
                matching = false;
                break;
            }
        }
        perm = [...arr];
        console.log();
    }
    return count;
};

console.log("For 1 :",reinitializePermutation(2));
console.log("For 2 :",reinitializePermutation(4));
console.log("For 3 :",reinitializePermutation(6));

