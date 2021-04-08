/**
 * You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

Return the number of consistent strings in the array words.
 */

class Solution {
    //O(n^2) time, O(1) space
    static bruteForce(allowed,words){
        allowed = "["+allowed+"]";
    let reg = new RegExp(allowed,"g");
    let count=0;
    for(let i=0;i<words.length;i++){
        let matching = true;
        for(let j=0;j<words[i].length;j++){

            //comparing for each character and if it is a NOT allowed character, the current string is skipped
            if(words[i][j].match(reg)===null) {
                matching = false;
                break;
            }
        }
        if(matching) count++;
    }
    return count;
    }

    //O(n) time , O(1) space
    static countConsistentStrings(allowed, words) {
        allowed = "[^"+allowed+"]";

        //setting regexp to check for elements not in the string allowed
        let reg = new RegExp(allowed,"g");
        let count=0;
        for(let i=0;i<words.length;i++){
            //if the word has no NOT allowed characters, it returns null so it is a valid string
            if(words[i].match(reg)===null) count++;
        }
        return count;
    }
}