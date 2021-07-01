/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
 */


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//*faster than 65%, efficient than 73%
 var isAnagram = function(s, t) {
     if(s.length!==t.length) return false;
    let map = {};
    for(let i=0;i<s.length;i++){
        if(map[s[i]]) map[s[i]]++;
        else map[s[i]] = 1;
    }
    for(let i=0;i<t.length;i++){
        if(map[t[i]]) map[t[i]]--;
        //?if that character is not in the first string, this is a different string so return false;
        else return false;
    }
    for (const [key,value] in map) {
        if(value>0) return false;
    }
    return true;
};
//?slower solution 
// var isAnagram = function(s,t){
//     if(s.length!==t.length) return false;
//     s = s.split("").sort().join("");
//     t = t.split("").sort().join("");
//      return s===t;
// }

console.log(`\n\n"anagram" and "nagaram" are ANAGRAM STRINGS ->`,isAnagram("anagram","nagaram"),"\n\n\n");
console.log(`"anagram" and "magaram" are ANAGRAM STRINGS ->`,isAnagram("anagram","magaram"),"\n\n\n");