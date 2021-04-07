/**
 * Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".
A common subsequence of two strings is a subsequence that is common to both strings.
 */

class Solution {
    static longestCommonSubsequence(str1,str2){
        var result = [];
        for (var i = -1; i < str1.length; i = i + 1) {
          result[i] = [];
          for (var j = -1; j < str2.length; j = j + 1) {
            if (i === -1 || j === -1) {
              result[i][j] = 0;
            } else if (str1[i] === str2[j]) {
              result[i][j] = result[i - 1][j - 1] + 1;
            } else {
              result[i][j] = Math.max(result[i - 1][j], result[i][j - 1]);
            }
          }
        }
        return result;
    }
    // static longestCommonSubsequence(text1, text2){
    //     let matches = new Array(text2.length+1).fill(new Array(text1.length+1).fill(0));
    //     for(let j =1;j<matches.length;j++){
    //         let t2 = text2[i];
    //         for(let i=1;i<matches[0].length;i++){
    //             let t1 = text1[j];
    //             if (text2[j-1] === text1[i-1]) {
    //                 console.log("Matching -> ",text2[j]," and ",text1[i])
    //                 matches[j][i] = matches[j - 1][i - 1] + 1;
    //             } 
    //             else {
    //                 matches[j][i] = Math.max(
    //                   matches[j - 1][i], matches[j][i - 1]
    //                 );
    //             }
          
    //         }
    //     }
    //     console.log(matches)
    //     return matches[text2.length][text1.length]
    // }

    //!Recursive Approach -> time limit exceeded
    // static longestCommonSubsequence(text1, text2){
    //     if(text1.length===0 || text2.length===0) return 0;
    //     else if(text1[text1.length-1]===text2[text2.length-1]){
    //         text1=text1.slice(0,text1.length-1);
    //         text2=text2.slice(0,text2.length-1);
    //         return (1+Solution.longestCommonSubsequence(text1,text2));
    //     }
    //     else {
    //         let t1 = text1.slice(0,text1.length-1);
    //         let t2 = text2.slice(0,text2.length-1);
    //         return Math.max(Solution.longestCommonSubsequence(t1,text2),Solution.longestCommonSubsequence(text1,t2));
    //     }
    // }
}

// console.log("First ->",Solution.longestCommonSubsequence("abcde","ace"));
// console.log("Second ->",Solution.longestCommonSubsequence("abc","abc"));
console.log("Third ->",Solution.longestCommonSubsequence("abc","def"));
console.log("Fourth ->",Solution.longestCommonSubsequence("aggtab","gxtxayb"));
console.log("Fifth ->",Solution.longestCommonSubsequence("mhunuzqrkzsnidwbun","szulspmhwpazoxijwbq"));