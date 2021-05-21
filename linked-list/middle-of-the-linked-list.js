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

//?linear ->  Time O(N),space O(1) -> faster than 34%
//  var middleNode = function(head) {
//     let len = 0;
//     let slow = head;
//     let fast = head
//     while(fast&& fast.next){
//         slow = slow.next;
//         fast = fast.next.next;
//     }
    
//     return slow;
// };
//*linear solution -> Time O(N),space O(N) -> faster than 86%
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