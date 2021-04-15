/**
 * Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.
 */

class Solution {

    //!recursive method -> Accepted but slow
    // static validPalindrome(s){
    //     return Solution.isPalindrome(s,0)===1 ? true : false;
    // }

    // static isPalindrome(s,removed){
    //     let len = s.length;
    //     if(len<=1) {
    //         return 1;
    //     }
    //     if(s[0]===s[len-1]) {
    //         return Solution.isPalindrome(s.slice(1,len-1),removed);
    //     }
    //     if(removed===1 && s[0]!==s[len-1]) {
    //         return 0;
    //     }
    //     if(removed===0 && s[0]!==s[len-1]) {
    //         return Math.max(Solution.isPalindrome(s.slice(0,len-1),1),Solution.isPalindrome(s.slice(1,len),1));
    //     }
    // }

    //?faster than 50% -> O(N)
    static validPalindrome(s){
        let i=0,j=s.length-1;
        if(j<=0) return true;
        while(i<j){
            if(s[i]!==s[j]){
                return Solution.partIsPalindrome(s,i+1,j) || Solution.partIsPalindrome(s,i,j-1);
            }
            i++;j--;
        }
        return true;
    }
    static partIsPalindrome(s,start,end){
        let i=start,j=end;
        if(j<=0) return true;
        while(i<j){
            if(s[i]!==s[j]){
                return false;
            }
            i++;j--;
        }
        return true;
    }
}

console.log(Solution.validPalindrome("aba"));
console.log(Solution.validPalindrome("abca"));
console.log(Solution.validPalindrome("abdbae"));
console.log(Solution.validPalindrome("abdae"));
console.log(Solution.validPalindrome("a"));
console.log(Solution.validPalindrome("abae"));
console.log(Solution.validPalindrome("abbab"));
console.log(Solution.validPalindrome("abddbabd"));