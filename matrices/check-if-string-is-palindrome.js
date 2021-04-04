class PalindromeChecker{
    static forString(str){
        if(str.length<=1) return true;
        str = str.toLowerCase();
        let i = 0,j=str.length-1;
        while(i<j){
            if(str[i]!==str[j]) return false;
            else {
                i++;j--;
            }
        }
        return true;
    }
}

console.log(PalindromeChecker.forString("Noon"))
console.log(PalindromeChecker.forString("Abbas"))
console.log(PalindromeChecker.forString(""))
console.log(PalindromeChecker.forString("A"))
console.log(PalindromeChecker.forString("Ababa"))