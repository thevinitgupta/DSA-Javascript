/**
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 */

class Solution {

    //!time limit exceeded for large value
    // static  groupAnagrams(strs) {
    //     let anagrams = [];
    //     while(strs.length>0){
    //         let curr = [];
    //         let j=1;
    //        while(j<strs.length){
    //             if(strs[0]===strs[j] || Solution.isAnagram(strs[0],strs[j])){
    //                 curr.push(strs[j]);
    //                 strs.splice(j,1);
    //             }
    //             else j++;
    //         }
    //         strs[0]!==undefined && curr.push(strs[0]);
    //         anagrams.push(curr);
    //         strs.splice(0,1);
    //     }
    //     return anagrams;
    // }

    // static isAnagram(s1,s2){
    //     let hash = new Array(26).fill(0);
    //     if(s1.length!==s2.length) return false;

    //     for(let i=0;i<s1.length;i++){
    //         hash[s1[i].charCodeAt(0)-97]++;
    //     }
    //     for(let i=0;i<s2.length;i++){
    //         hash[s2[i].charCodeAt(0)-97]--;
    //         if(hash[s2[i].charCodeAt(0)-97]<0) return false;
    //     }
    //     return true;
    // }

    //?O(n*klogk) -> faster than 76%
    static groupAnagrams(strs){
        let hash = {};
        for(let i=0;i<strs.length;i++){
            let sort = strs[i].split("").sort().join();
            if(hash[sort]) hash[sort].push(strs[i]);
            else hash[sort] = [strs[i]];
        }
        return Object.values(hash);
    }
}

console.log(Solution.groupAnagrams( ["eat","tea","tan","ate","nat","bat"]))