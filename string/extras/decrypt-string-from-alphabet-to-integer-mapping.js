/**
 ** Given a string s formed by digits ('0' - '9') and '#' . We want to map s to English lowercase characters as follows:

*?Characters ('a' to 'i') are represented by ('1' to '9') respectively.
*?Characters ('j' to 'z') are represented by ('10#' to '26#') respectively. 
**Return the string formed after mapping.

*!It's guaranteed that a unique mapping will always exist.
 */

class Solution {

    //?Time -> O(n) : 84.05% ,space -> O(n) : 82.06% 
    static freqAlphabets(s){
        let encryption = " abcdefghijklmnopqrstuvwxyz";
    let decrypted = "";
    let i=0;
    while(i<s.length){
        if(s[i+2]==="#"){
            console.log("index -> ",Number(s.substr(i,2)),", value -> ",encryption[Number(s.substr(i,2))])
            decrypted += encryption[Number(s.substr(i,2))];
            i +=3;
        }
        else {
            console.log("index -> ",Number(s.substr(i,1)),", value -> ",encryption[Number(s.substr(i,1))])
            decrypted += encryption[Number(s.substr(i,1))];
            i++;
        }
    }
    console.log(decrypted);
    return decrypted;
    }
} 


console.log(Solution.freqAlphabets("2711#5315#1"));