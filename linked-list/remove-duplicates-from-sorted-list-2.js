/**
 * Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.
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

//[1,2,4,4,4,4,5,6]
var deleteDuplicates = function(head) {
    let curr = head, arr = [];
    while(curr){
        arr.push(curr.val);
        curr = curr.next;
    }
    let i=0,j=1;
    while(i<j && j<arr.length){
        if(arr[i]===arr[j]){
            while(arr[i]===arr[j]) j++;
            arr.splice(i,j-i);
            j=i+1;
        }
        else {
            i++;
            j = i+1;
        }
        
    }
    let dHead = new ListNode(0);
    curr = dHead;
    for(let i=0;i<arr.length;i++){
        let newNode = new ListNode(arr[i]);
        curr.next = newNode;
        curr = curr.next;
    }
    return dHead.next;
};