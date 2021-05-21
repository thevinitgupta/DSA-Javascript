/**
 * Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

Return the decimal value of the number in the linked list.
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
 * @return {number}
 */

//?accepted -> slow, faster than 6%
 var getDecimalValue = function(head) {
    let binary = [];
    while(head.next!==null){
        binary = [head.val,...binary];
        head = head.next;
    }
    binary = [head.val,...binary];
    let dec = 0;
    for(let i=0;i<binary.length;i++){
        dec += binary[i]*Math.pow(2,i);
    }
    return dec;
};
