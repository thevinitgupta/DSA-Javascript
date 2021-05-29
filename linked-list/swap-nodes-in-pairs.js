/**
 * Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)
 */

//* faster than 85% -> O(N) solution
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function(head) {
    let temp = new ListNode(0);
    temp.next = head;
    let curr = temp;
    while(curr.next && curr.next.next){
        let first = curr.next;
        let second = curr.next.next;
        first.next = second.next;
        curr.next = second;
        curr.next.next = first;
        curr = curr.next.next;
    }
    return temp.next;
};