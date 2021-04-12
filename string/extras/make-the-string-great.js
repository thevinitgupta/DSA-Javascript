class Solution {
    static makeGood(s) {
        let len = s.length;
        do{
            len = s.length;
            for(let i=0;i<s.length-1;i++){
            let sUpper = s[i].toUpperCase();
            let sLower = s[i].toLowerCase();
                let iCode = s.charCodeAt(i);
            if(iCode>=65 && iCode<=90){
                 if(s[i+1]===sLower){
                s = s.substring(0,i)+""+s.substring(i+2,s.length)
                }
            }
               
                else if(s[i+1]===sUpper){
                     s = s.substring(0,i)+""+s.substring(i+2,s.length)
                }
        }
            
        }while(s.length!==len)
        
        return s;
    }
}

console.log(Solution.makeGood("leEeetcode"))
console.log(Solution.makeGood("aBbAcC"))
console.log(Solution.makeGood("s"))