/**
 * Given the head of a singly linked list, reverse the list, and return the reversed list.

 
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

//? faster than 29% and memory efficient more than 95%g
 var reverseList = function(head) {
    let prev = null,next;
    while(head!==null){
        next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    head = prev;
    return head;
};

//* faster than 84%
var reverseList = function(head){
    if(!head) return null;
    let current = head;
    let prev = null;
    let next = null;
    
    while(current)
    {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    head = prev;
    return head;
}