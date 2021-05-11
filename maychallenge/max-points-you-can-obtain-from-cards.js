/**
 * There are several cards arranged in a row, and each card has an associated number of points The points are given in the integer array cardPoints.

In one step, you can take one card from the beginning or from the end of the row. You have to take exactly k cards.

Your score is the sum of the points of the cards you have taken.

Given the integer array cardPoints and the integer k, return the maximum score you can obtain.

console.log(maxScore([1,2,3,4,5,6,1], 3));
console.log(maxScore([1,79,80,1,1,1,200,1], 3));
console.log(maxScore([1,1000,1], 1));
console.log(maxScore([9,7,7,9,7,7,9],7));
console.log(maxScore([2,2,2], 2));

**Example 1
*?Input: cardPoints = [1,79,80,1,1,1,200,1], k = 3
*!Output: 202

**Example 2
*?Input: cardPoints = [1,2,3,4,5,6,1], k = 3
*!Output: 12
 */

/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */

//!very slow solution
 var maxScore = function(cards, k) {
    let len = cards.length-1;
    let arr1=[],arr2=[];
    for(let i=0;i<k;i++){
        arr1.push(cards[i]);
        arr2.push(cards[len-i]);
    }

    console.log("arr1 -> ",arr1);
    console.log("arr2 -> ",arr2);
    let count=tot=i=j=0;
    while(count<k){
        console.log("arr1[i] -> ",arr1[i]);
    console.log("arr2[j] -> ",arr2[j]);
        if(arr1[i]>arr2[j]){
            tot += arr1[i];
            i++;
        }
        else if(arr2[j]>arr1[i]){
            tot += arr2[j];
            j++;
        }
        else if(i+1<k && j+1<k){
            if(arr1[i+1]>arr2[j+1]){
                tot += arr1[i]+arr1[i+1];
                i += 2;
                count++;
            }
            else {
                tot += arr2[j]+arr2[j+1];
                j+=2;
                count++;
            }
        }
        else {
            if(i<j){
                tot += arr1[i];
                i++;
            }
            else {
                tot += arr2[j];
                j++;
            } 
        }
        count++;
    }
    return tot;
};

//*sliding window -> O(N) time solution
var maxScore = function(cards, k) {
    let tot = 0,currSum=0;
    let len = cards.length;
    for(let i=0;i<len;i++){
        tot += cards[i];
    }
    if(k=== len) return tot;
    let max = 0;
    for(let i=0;i<len;i++){
        currSum += cards[i];
        if(i>=((len-k)-1)){
            max = Math.max(max,tot-currSum);
            currSum -= cards[i-(len-k)+1];
        }

    }
    return max;
}


console.log(maxScore([11,49,100,20,86,29,72],4));
console.log(maxScore([1,2,3,4,5,6,1], 3));
console.log(maxScore([1,79,80,1,1,1,200,1], 3));
console.log(maxScore([1,1000,1], 1));
console.log(maxScore([9,7,7,9,7,7,9],7));
console.log(maxScore([2,2,2], 2));
//?                    0  1   2  3  4  5  6