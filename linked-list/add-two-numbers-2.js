/**
 * You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

//?Faster than 16% -> O(M+N) solution 
 var addTwoNumbers = function(l1, l2) {
    let num1 = [];
    let num2 = [];
    if(!l1) return l2;
    if(!l2) return l1;
    while(l1){
        num1.push(l1.val);
        l1 = l1.next;
    }
    while(l2){
        num2.push(l2.val);
        l2 = l2.next;
    }
    let sum = BigInt(num1.join(""))+BigInt(num2.join("")) +"";
    let head = new ListNode(0);
    let l3 = head;
    for(let i=0;i<sum.length;i++){
        let newNode = new ListNode(parseInt(sum[i]));
        l3.next = newNode;
        l3 = l3.next;
    }
    return head.next;
};