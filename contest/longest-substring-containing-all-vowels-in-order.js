//!fails test cases
var longestBeautifulSubstring = function(word) {
    let max = 0,curr = 0;
    let i=0;
    let vowels = ["a","e","i","o","u"],vPoint =0;
    console.log("Word Length -> ",word.length)
    while(i<word.length){
        if(vowels[vPoint]!==word[i]) {
            vPoint = 0;
            curr = 0;
            i++;
        }
        while(vowels[vPoint]===word[i]){
            i++;
            curr++;
        }
        if(vPoint===4){
            curr = curr>=5?curr-1 : 0;
            max = Math.max(max,curr);
            vPoint = 0;
            curr = 0;
        }
        if(vowels[vPoint+1]===word[i]){
            vPoint++;
        }
        console.log("i ->",word[i]);
        console.log("curr length -> ",word[curr]);
        
    }
    return max;
}


console.log(longestBeautifulSubstring("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooouuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuee"));