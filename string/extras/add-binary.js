/**
 * Given two binary strings a and b, return their sum as a binary string.
 */

class Solution {
    // static addBinary(a,b){
    //     let i=a.length-1,j=b.length-1;
    //     let tot = "",carry=0;
    //     while(i>=0 || j>=0){
    //         console.log("For ",a[i]," + ",b[j])
    //         let aval = i>=0?a[i] : 0;
    //         let bval = j>=0?b[j] : 0;
    //         let currSum = Solution.binarySum([aval,bval,carry]);
            
    //         tot = currSum[currSum.length-1]+""+tot;
    //         carry = currSum.length>1?parseInt(currSum[0]) : 0;
    //         console.log("Curr Sum ->",currSum,",Carry ->",carry);
    //         i--;j--;
    //     }
    //     if(carry!==0) tot = carry + tot;
    //     return tot;
    //}

    //?works -> faster than 50%
    static addBinary(a,b){
        a=a.length>=1 ? Solution.toInteger(a,2) : 0;
        b=b.length>=1 ? Solution.toInteger(b,2) : 0;
        let sum = a+b;
        if(sum==0) return "0";

        let bin = Solution.binarySum(sum)+"";
        return bin.slice(0,bin.length-1);
    }
    static binarySum(num){
        let bin = 0n;
        while(num>0){
            let dig = BigInt(num%2n);
            bin = dig + ""+bin;
            num = BigInt(num/2n);
        }
        return bin;
    }
    static toInteger(s){
        let num = 0n,pow=0;
        for(let i=s.length-1;i>=0;i--){
            num = num+ BigInt(s[i]*(2**pow));
            console.log(num);
            pow++; 
        }
        return num;
    }
}


console.log(Solution.addBinary("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
"110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"))//returns 110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000