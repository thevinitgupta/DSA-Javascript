//![3,4,5,5,4,3]
//*[3,4,5,0,5,4,3]

class MinSwaps{
    static toCheckPalindrome(a,n){
        for(let i = 0;i<n;i++){
           if(MinSwaps.isPalindrome(a[i])===0) return 0;
        }
        return 1;  
    }
    static isPalindrome(num){
        let dup = num,rev = 0;
        while(dup>0){
            let d = dup%10;
            rev = rev*10 + d;
            dup = parseInt(dup/10);
        }
        if(rev===num) return 1;
        else return 0;
    }
}
console.log(MinSwaps.toCheckPalindrome([111,222,333,444,555,666],6));
console.log(MinSwaps.toCheckPalindrome([1110,222,333,444,555,666],6));