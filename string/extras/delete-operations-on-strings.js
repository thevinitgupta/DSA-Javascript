/**
 * Given two strings word1 and word2, return the minimum number of steps required to make word1 and word2 the same.

*In one step, you can delete exactly one character in either string.
 */

class Solution {

    //!this does not work because though not specified in question, we need to consider the order of characters too
    static minDistance(word1, word2) {
        let hash1 = new Array(26).fill(0);
        let hash2 = new Array(26).fill(0);
        for(let i=0;i<word1.length;i++){
            hash1[word1.charCodeAt(i)-97] +=1;
        }
        for(let i=0;i<word2.length;i++){
            hash2[word2.charCodeAt(i)-97] += 1;
        }
        let deletions = 0;
        for(let i=0;i<26;i++){
            deletions += Math.abs(hash1[i]-hash2[i])
        }
        return deletions;
    }
}


console.log(Solution.minDistance("sea", "eat"))
console.log(Solution.minDistance("leetcode", "etco"))
console.log(Solution.minDistance("vinit",""))
console.log(Solution.minDistance("",""))
console.log(Solution.minDistance("vinit","vinit"))
