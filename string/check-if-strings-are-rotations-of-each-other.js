/**
 * *Given a string s1 and a string s2, write a snippet to say whether s2 is a rotation of s1?
*!(eg given s1 = ABCD and s2 = CDAB, return true, given s1 = ABCD, and s2 = ACBD , return false)
 */

class StringChecker{
    //!wrong process
    // static forRotation(str1,str2){
    //     if(str1.length!==str2.length) return false;
    //     let sMap={};
    //     for(let i =0;i<str1.length;i++){
    //         sMap[str1[i]] = i;
    //     }
    //     let absDiff = Math.abs(0 - str2.indexOf(str1[0]));
    //     console.log("Abs diff ->",absDiff);
    //     if(absDiff===0) return false;
    //     //console.log("Abs diff ->",absDiff);
    //     for(let i =0;i<str1.length;i++){
    //         if(Math.abs(sMap[str2[i]]-i)!==absDiff) return false;
    //     }
    //     console.log("Rotations :",absDiff);
    //     return true;
    // }

    //? KMP Algorithm -> O(N) time complexity
    static forRotation(str1,str2){
        if(str1.length!==str2.length) return false;
        let strCpy = str1+str1;
        let l2 = str2.length;

        //*using manual operation
        for(let i=0;i<strCpy.length;i++){
            if(strCpy.substr(i,l2)===str2) return true;
        }
        return false;

        //* javascript built-in function
        // return strCpy.includes(str2);
    }
}

console.log(StringChecker.forRotation("ABCD","CDAB"));
console.log(StringChecker.forRotation("ABCD","BCDA"));
console.log(StringChecker.forRotation("ABCD","ABCD"));
console.log(StringChecker.forRotation("ABCD","BACD"));
console.log(StringChecker.forRotation("ABCD","BACDD"));
console.log(StringChecker.forRotation("A","B"));
console.log(StringChecker.forRotation("A",""));