/**
 * You are given the head of a linked list, and an integer k.

Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).

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
 * @param {number} k
 * @return {ListNode}
 */
 var swapNodes = function(head, k) {
    let arr =[];
    let curr = head;
    while(curr.next!==null){
        arr.push(curr.val);
        curr = curr.next;
    }
    arr.push(curr.val);
    let temp = arr[k-1];
    arr[k-1]=arr[arr.length-k]; 
    arr[arr.length-k]  = temp;
    curr = head;
    let ind = 0;
    while(curr){
      if(ind===k-1){
         curr.val = arr[ind] 
      }
        if(ind===arr.length-k){
            curr.val = arr[ind]
        }
        curr = curr.next;
        ind++;
    }
    return head;
};