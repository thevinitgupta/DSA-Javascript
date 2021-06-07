/**
 * The letter value of a letter is its position in the alphabet starting from 0 (i.e. 'a' -> 0, 'b' -> 1, 'c' -> 2, etc.).

The numerical value of some string of lowercase English letters s is the concatenation of the letter values of each letter in s, which is then converted into an integer.

For example, if s = "acb", we concatenate each letter's letter value, resulting in "021". After converting it, we get 21.
You are given three strings firstWord, secondWord, and targetWord, each consisting of lowercase English letters 'a' through 'j' inclusive.

Return true if the summation of the numerical values of firstWord and secondWord equals the numerical value of targetWord, or false otherwise.
 */

//? O(N) -> faster than 58.32%
/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
 var isSumEqual = function(firstWord, secondWord, targetWord) {
    if((sum(firstWord)+sum(secondWord))=== sum(targetWord)) return true;
    return false;
};

var sum = function(str){
    let tot = "";
    for(let i=0;i<str.length;i++){
        tot += str.charCodeAt(i) - 97;
    }
    console.log(tot)
    return parseInt(tot);
}