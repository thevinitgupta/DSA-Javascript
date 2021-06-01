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

//* faster than 74% -> O(NlogN) time with merge sort
var sortList = function(head) {
    if(!head || !head.next) return head;
    let temp = head,fast = head,slow = head;

    //this loop is dividing the list into two halves 
    //left half = head -> temp
    //right half = slow -> fast
    //slow is the mid because for every 2 steps fast is taking, slow takes 1 step. So, when fast reaches the end of the list, half travels fast/2 = mid.
    while(fast!==null && fast.next!==null){
        temp = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    //setting thee end of left to be null
    temp.next = null;
    
    //recursively dividing the list into half for left(head) and right(slow)
    let leftNode = sortList(head);
    let rightNode  = sortList(slow);
    
    //calling the merge function to sort and merge the previously sorted left and right sub lists
    return merge(leftNode,rightNode);
};

function merge(left,right){

    //creating a temp node for initializing the sorted list
    let root = new ListNode(0);
    let pointer = root;
    /**
     * merge the smaller node in the `left` and `right` list first.
     * return the second node in the list because the first is a 
     * temparary node.
     */

    //this is similar to the merge sort loop where we compare the values of the two pointers and place the smaller one first
    while(left !== null || right !== null) {
        if (left === null) {
            pointer.next = right;
            right = right.next;
        } else if (right === null) {
            pointer.next = left;
            left = left.next;
        } else {
            if (left.val < right.val) {
                pointer.next = left;
                left = left.next;
            } else {
                pointer.next = right;
                right = right.next;
            }
        }
        pointer = pointer.next;
    }

    //we return root.next because while creating the root, we add a default zero value as initial
    return root.next;
}