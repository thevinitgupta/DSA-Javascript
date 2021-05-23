/**
 * Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
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
 var deleteDuplicates = function(head) {
    if(!head) return head;
    let curr = head.next,prev = head;
    while(curr){
        if(prev.val===curr.val){
            prev.next = curr.next;
            curr = prev.next;
        }
        else {
            prev = curr;
            curr = curr.next;
        }
    }
    return head;
};