/**
 * Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

For example, the following two linked lists begin to intersect at node c1:


It is guaranteed that there are no cycles anywhere in the entire linked structure.

Note that the linked lists must retain their original structure after the function returns.

 */

//*approach -> when a pointer reaches the end of listA, we change it to headB and similarly we do this to b pointer. This is conitnued until the value of a pointer and b pointer becomes same and then return the value of a pointer.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    if(headA===null || headB===null) return null;
    let a=headA;
    let b = headB;
    while(a!==b){
        if(a===null){
            a = headB;
        }
        else {
            a = a.next;
        }
        if(b===null){
            b = headA;
        }
        else {
            b = b.next;
        }
    }
    return a;
};