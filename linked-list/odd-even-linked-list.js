/**
 * Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.
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
 var oddEvenList = function(head) {
    if (!head) return head;
    
    let odd = head,oddHead = head,
        even = head.next,evenHead = head.next;
     while(even && even.next){
         odd.next = odd.next.next;
         even.next = even.next.next;
         odd = odd.next;
         even = even.next;
     }   
    odd.next = evenHead;
     return oddHead;
};