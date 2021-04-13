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
    static addBinary(a,b){
        a=a.length>=1 ? parseInt(a,2) : 0;
        b=b.length>=1 ?parseInt(b,2) : 0;
        let sum = a+b;
        if(sum==0) return "0";

        let bin = Solution.binarySum(sum)
        return bin;
    }
    static binarySum(num){
        let bin = "";
        while(num>0){
            let dig = num%2;
            bin = dig + ""+bin;
            num = parseInt(num/2);
        }
        return bin;
    }
    static toInteger(s){
        let num = 0,pow=0;
        for(let i=s.length-1;i>=0;i--){
            num = num+ s[i]*(2**pow);
            console.log(num);
            pow++; 
        }
        return num;
    }
}


console.log(Solution.toInteger("110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"));