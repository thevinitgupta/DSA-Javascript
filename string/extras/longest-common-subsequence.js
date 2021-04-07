/**
 * Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".
A common subsequence of two strings is a subsequence that is common to both strings.
 */

class Solution {

    //? DP Approach -> efficient solution
    static longestCommonSubsequence(text1,text2){
        const dp = [];
    let m = text1.length;
    let n = text2.length;
    
    for (let i = 0; i <= m; i++) {
        dp[i] = new Array(n + 1).fill(0);
    }
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            // two  possible scenarioes:
            // 1. the current char of text1 and text2 does not match
            // 2. the current char of text1 and text2 matches
            
			if (text1.charAt(i - 1) != text2.charAt(j - 1)) {
                // check left and top for longer subsequence length
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
            else {
                // check diag for prev longest subsequence length and add 1
                dp[i][j] = dp[i - 1][j - 1] + 1;
            }
        }
    }
    
    return dp[m][n];
    }

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

console.log("First ->",Solution.longestCommonSubsequence("abcde","ace"));
console.log("Second ->",Solution.longestCommonSubsequence("abc","abc"));
console.log("Third ->",Solution.longestCommonSubsequence("abc","def"));
console.log("Fourth ->",Solution.longestCommonSubsequence("aggtab","gxtxayb"));
console.log("Fifth ->",Solution.longestCommonSubsequence("mhunuzqrkzsnidwbun","szulspmhwpazoxijwbq"));