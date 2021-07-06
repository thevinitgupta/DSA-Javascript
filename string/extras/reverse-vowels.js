/**
 * Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.
 */

/**
 * @param {string} s
 * @return {string}
 */
 var reverseVowels = function(s) {
    let i=0,j=s.length - 1;
    s = s.split("")
    while(i<j){
        if(!isVowel(s[i])){
            i++;
        }
        else if(!isVowel(s[j])){
            j--;
        }
        else {
            let temp = s[i];
                s[i] = s[j];
                s[j] = temp;
            i++;j--;
        }
    }
    return s.join("");
};

function isVowel(char){
    char = char.toLowerCase();
    return ['a','e','i','o','u'].includes(char);
}