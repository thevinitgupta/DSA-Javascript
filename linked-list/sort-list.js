/**
 * Given the head of a linked list, return the list after sorting it in ascending order.

Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?
 */

//!time limit exceeded -> O(N^2) time, space -> O(1)
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
 var sortList = function(head) {
    if(!head || !head.next) return head;
    let dHead = head,curr=head,next = head.next;
    let n =0;
    while(dHead){
       n++;
        dHead = dHead.next;
    }
    let i=0;
    while(i<n){
        while(curr && next){
            if(curr.val>next.val){
                let temp = curr.val;
                curr.val = next.val;
                next.val = temp;
            }
            curr = next;
            next = next.next;
        }
        curr = head;
        next = curr.next;
        i++;
    }
    return head;
};