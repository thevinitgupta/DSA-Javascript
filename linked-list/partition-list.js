/**
 * Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

//*Time Complexity -> O(N) , faster than 75%
 var partition = function(head, x) {
    let slowHead = new ListNode(0);
    let fastHead = new ListNode(0);
    let slow = slowHead,fast =fastHead;
    while(head!==null){
        if(head.val<x){
            slow.next = head;
            slow = slow.next;
        }
        else {
            fast.next = head;
            fast = fast.next;
        }
        head = head.next;
    }
    fast.next = null;
    slow.next = fastHead.next;
    return slowHead.next;
};