//?accepted but slow
// function multiplyStrings(num1,num2){
//     let m=num1.length,n=num2.length;
//     let vals = new Array(n+m).fill(0);
//     for(let i=m-1;i>=0;i--){
//         for(let j=n-1;j>=0;j--){
//             let curr = ((num1[i]-0) * (num2[j]-0));
//             let sum = vals[i+j+1] + curr;
//             vals[i+j] +=  parseInt(sum/10);
//             vals[i+j+1] = sum%10;
//         }
//     }
//     return vals.join('').replace(/^0+/, '');
// }
//*accepted and faster than 97%
function multiplyStrings(num1,num2){
    if(!+num1 || !+num2) return '0'
    const prod = Array(num1.length + num2.length).fill(0);
    let currIdx = prod.length-1;
    
    for(let i = num1.length-1; i >= 0; i--) {
        let idx = currIdx--;
        
        for(let j = num2.length-1; j >= 0; j--) {
            const res = +num1[i] * +num2[j] + prod[idx];
            prod[idx] = res % 10;
            prod[--idx] += Math.floor(res / 10);
        }
    }
    return prod.join('').replace(/^0+/, '')
}

console.log(multiplyStrings("3467","3456235"));