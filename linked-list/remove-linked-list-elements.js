/**
 * Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.
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
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
    if(!head) return head;
    let curr = head, prev = null;
    while(curr && head){
        if(curr.val===val){
            if(prev===null) {
                head = head.next;
                curr = head;
            }
            else {
                prev.next = curr.next;
                curr = prev.next;
            }
        }
        else {
            prev = curr;
            curr = curr.next;
        }
    }
    return head;
};git