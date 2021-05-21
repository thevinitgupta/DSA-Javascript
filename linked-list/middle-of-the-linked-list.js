/**
 * Given a non-empty, singly linked list with head node head, return a middle node of linked list.
If there are two middle nodes, return the second middle node.

Example 1:
Input: [1,2,3,4,5]
Output: Node 3 from this list (Serialization: [3,4,5])
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
 * @return {ListNode}
 */

//?linear solution -> Time O(N),space O(N)
 var middleNode = function(head) {
    let len = 0;
    let headCopy = head;
    while(headCopy.next!==null){
        len++;
        headCopy = headCopy.next;
    }
    len++;
    let mid = parseInt(len/2)
    for(let i=0;i<mid;i++){
        head = head.next;
    }
    return head;
};