/**
 * Given a string str, find length of the longest repeating subseequence such that the two subsequence don’t have same string character at same position, i.e., any i’th character in the two subsequences shouldn’t have the same index in the original string.
 

Exampel 1:

Input: str = "axxxy"
Output: 2
Explanation: The longest repeating subsequenece
is "xx".
Example 2:

Input: str = "aab"
output: 1
Explanation: The longest reapting subsequenece
is "a".
 */


class Longest {
    static subsequenceInString(str){
        let reps = [],len = 1;
        for(let i=0;i<str.length;i++){
            let currReps = [];
            for(let j=0;j<str.length;j++){
                currReps.push(str.substr(j,len));
            }
            reps.push(currReps);
            len++;
        }
        console.log(reps);
        let longest ="";
        for(let i=0;i<reps.length;i++){
            let prev = ""
            for(let j=0;j<reps[0].length;j++){
                if(reps[i][j]===prev){
                    if(prev.length>longest.length) longest = prev;
                }
                else prev = reps[i][j]
            }
        }
        console.log("Longest -> ",longest?longest : "none repeating")
    }
}

//Longest.subsequenceInString("axxxy")
//Longest.subsequenceInString("aab")
//Longest.subsequenceInString("ab")//should give 1
Longest.subsequenceInString("aabebcdd")//should give 1 as a/y is repeating over the string