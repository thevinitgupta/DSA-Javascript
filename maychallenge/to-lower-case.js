//Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

/**
 * @param {string} s
 * @return {string}
 */
 var toLowerCase = function(s) {
    return s.toLowerCase();
};

 var toLowerCase = function(s) {
    s = s.split("");
    let curr = 0;
    for(let i=0;i<s.length;i++){
        curr = s[i].charCodeAt(0);
        if(curr>=65 && curr<=90){
            s[i] = String.fromCharCode(curr+32);
        }
    }
    return s.join("");
};