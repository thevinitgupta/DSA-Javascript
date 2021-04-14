/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 */


class Solution {

    //?O(N) solution 
    static isValid(s) {
        let stack  =[],top=-1;
        if(s.length%2!==0) return false;
        for(let i =0;i<s.length;i++){
            if(["(","{","["].includes(s[i])) {
                stack.push(s[i]);
                top++;
            }
            else {
                if(stack[top]==="(" && s[i]===")") {
                    stack.pop();
                    top--;
                }
               else if(stack[top]==="{" && s[i]==="}") {
                    stack.pop();
                    top--;
                }
                else if(stack[top]==="[" && s[i]==="]"){
                    stack.pop();
                    top--;
                }
                else if(s[i]===s[i-1]) return false;
                
            }
    
        }
        if(top===-1) return true;
        else return false;
    }
}