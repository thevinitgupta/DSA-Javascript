/**
    **You have n boxes. You are given a binary string boxes of length n, where boxes[i] is '0' if the ith box is empty, and '1' if it contains one ball.
    **In one operation, you can move one ball from a box to an adjacent box. Box i is adjacent to box j if abs(i - j) == 1. Note that after doing so, there may be more than one ball in some boxes.
    **Return an array answer of size n, where answer[i] is the minimum number of operations needed to move all the balls to the ith box.
    **Each answer[i] is calculated considering the initial state of the boxes.

    *!Input: boxes = "110"
    *!Output: [1,1,3]
    *?Explanation: The answer for each box is as follows:
    *?1) First box: you will have to move one ball from the second box to the first box in one operation.
    *?2) Second box: you will have to move one ball from the first box to the second box in one operation.
    *?3) Third box: you will have to move one ball from the first box to the third box in two operations, and move one ball from the second box to the third box in one operation.

    
    *TODO Runtime: 336 ms, faster than 100.00% of JavaScript online submissions for Minimum Number of Operations to Move All Balls to Each Box.
    *TODO Memory Usage: 41.8 MB, less than 100.00% of JavaScript online submissions for Minimum Number of Operations to Move All Balls to Each Box.
 */

function minOperations(boxes){
    let moves = [];
    for(let i=0;i<boxes.length;i++){
        let curr = 0;
        for(let j=0;j<boxes.length;j++){
            if(i!=j){
               if(boxes.charAt(j)==="1"){
                   curr = curr + Math.abs(i-j);
               } 
            }
        }
        moves.push(curr);
    }
    return moves;
}

console.log(minOperations("110"))