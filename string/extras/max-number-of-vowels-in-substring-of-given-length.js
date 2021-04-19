class Solution {
    //!time limit exceeded
    // static maxVowels(s, k) {
    //     let reg = /[aeiou]/g;
    //     let max = 0;
    //     for(let i =0;i<=s.length-k;i++){
    //         let curr = s.substr(i,k).match(reg);
    //         console.log(s.substr(i,k),curr)
    //        if(curr) max = Math.max(max,curr.length);
    //     }
    //     return max;
    // }
    
    static maxVowels(s,k){
        var vowels = 'aeiou';
        var max = 0; // result
        var count = 0; // count of vowels of current window
        for (var i = 0; i < s.length; i++) {
            if (i >= k) { // remove window's first item
                if (vowels.indexOf(s[i - k]) > -1) {
                    count--;
                }
            }
	    	// add current char to window
            if (vowels.indexOf(s[i]) > -1) {
                count++;
                max = Math.max(max, count);
                if (max === k) return k;
            }
        }
        return max;
    }
}


console.log(Solution.maxVowels("weallloveyou",7))