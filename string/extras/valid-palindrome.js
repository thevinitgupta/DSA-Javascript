
//!accepted slow solution
var isPalindrome = function(s) {
    
    s = s.toLowerCase()
    let reg = /[a-z0-9]/g;
    s =s.match(reg)?.join("");
    if(s.length<=1) return true;
    let i=0,j=s.length-1;
    while(i<j){
            if(s[i]===s[j]) {
                i++;
                j--;
            }
            else return false;
    }
    return true;
};

//*fastest solution 
var isPalindrome = function(s) {
    const clean = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    const length = clean.length;
    const mid = Math.floor(length / 2);
    
    for (let i = 0; i < mid; i++) {
        if (clean.charAt(i) !== clean.charAt(length - i - 1)) {
            return false;
        }
    }
    
    return true;
};