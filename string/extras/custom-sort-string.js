/**
 * S and T are strings composed of lowercase letters. In S, no letter occurs more than once.
console.log(Solution.customSortString("abc","badc"),"\n");
console.log(Solution.customSortString("eav","venaesvatra"),"\n");
console.log(Solution.customSortString("zd","vwkaps"),"\n");
S was sorted in some custom order previously. We want to permute the characters of T so that they match the order that S was sorted. More specifically, if x occurs before y in S, then x should occur before y in the returned string.

Return any permutation of T (as a string) that satisfies this property.
 */


class Solution {

    //!O(n^3) solution very slow
    // static customSortString(s,t){
    //     let sorted = "";
    //     for(let i=0;i<s.length;i++){
    //         let k=0;
    //         console.log("Checking for ->",s[i]," in ->",t);
    //         while(k<t.length){
    //             if(t[k]===s[i]){
    //                 console.log("matching at k ->",k);
    //                 console.log(s[i]," <-> ",t[k]);
    //                 sorted += t[k];
    //                 t = t.substring(0,k)+t.substring(k+1,t.length);
    //                 k=0;
    //                 console.log("Sorted ->",sorted);
    //                 console.log("t ->",t);
    //             }
    //             else k++;
    //         }
    //     }
    //     sorted += t;
    //     return sorted;
    // }

    //?Faster solution -> O(N^2) 
    static customSortString(S,T){
       return T.split('')
    .sort((a, b) => S.indexOf(a) - S.indexOf(b))
    .join('');
    }
}


console.log(Solution.customSortString("jftiugkz", "kfiukutzjg"),"\n");