/**
 * Given the head of a singly linked list, sort the list using insertion sort, and return the sorted list's head.

The steps of the insertion sort algorithm:
Insertion sort iterates, consuming one input element each repetition and growing a sorted output list.
At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list and inserts it there.
It repeats until no input elements remain.
The following is a graphical example of the insertion sort algorithm. The partially sorted list (black) initially contains only the first element in the list. One element (red) is removed from the input data and inserted in-place into the sorted list with each iteration.
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

//* O(N^2) solution -> faster than 56%
 var insertionSortList = function(head) {
    let dHead = new ListNode(0);
    let curr = dHead,prev = dHead;
    while(head!=null){
        curr = dHead;
        while(curr.next!==null && curr.next.val<=head.val){
            curr = curr.next;
        }
        let newNode = new ListNode(head.val);
        newNode.next = curr? curr.next : null;
        curr.next = newNode;
        head = head.next;
    }
    return dHead.next;
};