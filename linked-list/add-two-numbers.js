/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 */

/**
 * Definition for singly-linked list.
  */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

//?faster than 17% -> O(max(M,N)) solution
 var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let head = new ListNode(0);
    let l3 = head;
    while(l2!==null || l1!==null){
        let sum=0;
        let l1Val = l1 ?l1.val : 0;
        let l2Val = l2 ? l2.val :0;
        sum = l1Val+l2Val+carry;
        carry = parseInt(sum/10);
        let dig = sum%10;
        let newNode = new ListNode(dig);
        l3.next = newNode;
        l3 = l3.next;
        l1 = l1 &&l1.next;
        l2 = l2 && l2.next;
    }
    if(carry){
        let newNode = new ListNode(carry);
        l3.next = newNode;
        l3 = l3.next;
    }
    return head.next;
};