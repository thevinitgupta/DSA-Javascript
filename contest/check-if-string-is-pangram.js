/**
 * A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.
 */

var checkIfPangram = function(sentence) {
    let letterMap = {};
    for(let i=0;i<sentence.length;i++){
        if(letterMap[sentence[i]]) letterMap[sentence[i]]++;
        else letterMap[sentence[i]] = 1;
    }
    if(Object.keys(letterMap).length===26) return true;
    else return false;
};