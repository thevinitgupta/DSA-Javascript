/**
 * 
 * You are given a string word that consists of digits and lowercase English letters.

You will replace every non-digit character with a space. For example, "a123bc34d8ef34" will become " 123  34 8  34". Notice that you are left with some integers that are separated by at least one space: "123", "34", "8", and "34".

Return the number of different integers after performing the replacement operations on word.

Two integers are considered different if their decimal representations without any leading zeros are different.

 

Example 1:

Input: word = "a123bc34d8ef34"
Output: 3
Explanation: The three different integers are "123", "34", and "8". Notice that "34" is only counted once.
 */

var numDifferentIntegers = function(word) {
    let reg = /\d+/g;
    let nArr = word.match(reg);
    if(!nArr) return 0;
    nArr.forEach((num,index)=> {
        nArr[index] = parseInt(num);
    });
    nArr = nArr.sort((a,b)=> a-b);
    let i =0;
    while(i<nArr.length){
        if(nArr[i]===nArr[i+1]) nArr.splice(i,1);
        else i++;
    }
    console.log(nArr);
    return nArr.length;
};