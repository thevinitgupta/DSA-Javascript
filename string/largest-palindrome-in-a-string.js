/**
 ** Given a string S, find the longest palindromic substring in S. Substring of string S: S[ i . . . . j ] where 0 ≤ i ≤ j < len(S). Palindrome string: A string which reads the same backwards. More formally, S is palindrome if reverse(S) = S. Incase of conflict, return the substring which occurs first ( with the least starting index ).

*!NOTE: Required Time Complexity O(n2).
 */

class LargestPalindrome{

    static inStringFaster(s){
        let cur = '';
    
    for (let i = 0; i < s.length; i++) {
      // start l = i
      let l = i, r = i;

      // find "root", e.g. "bb" for "abba" when i === 1
      while (r + 1 < s.length && s[r + 1] === s[i]) {
        r++;
      }

      // check if it's possible to have longer palindrome than we already find
      // min(what we have at "root" sides) x 2 + (size of "root")    
      if (cur.length && cur.length >= Math.min(l, s.length - (r + 1)) * 2 + (r + 1 - l)) {
        break;
      }

      // expand while we can
      while (l > 0 && r < s.length - 1) {
        if (s[l - 1] !== s[r + 1]) {
          break;
        }

        l -= 1;
        r += 1;
      }

      if (r + 1 - l > cur.length) {
        cur = s.substring(l, r + 1);
      }
    }

    return cur;
    }


    static inString(s){
        let length = s.length;
        if(length===0 || s===null) return "";
        let longest = "";
        for(let i=0;i<length;i++){
            console.log("Looking at i ->",i);
            let oddPal = LargestPalindrome.expandFromMiddle(s,i,i);
            let evenPal = LargestPalindrome.expandFromMiddle(s,i-1,i);

            if(oddPal.length>longest.length) longest = oddPal;
            if(evenPal.length>longest.length) longest = evenPal;

            //skipping the rest of the string if i = middle of string which is itself a palindrome as there cannot be a palindrome greater than the string itself
            if(longest.length===length) break;
        }
        return longest;
    }
    static expandFromMiddle(str,left,right){
        let i =0;
        while(str[left-i] && str[left-i]===str[right+i]){
            i++;
        }

        //to reduce the value of i to the last valid value
        i--;
        return str.slice(left-i,right+i+1);
    }
}


console.log(LargestPalindrome.inString("saababaa"));
console.log(LargestPalindrome.inString("bb"));
console.log(LargestPalindrome.inString("aabcbaa"));