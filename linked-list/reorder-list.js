/**
 * You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.
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
 * @return {void} Do not return anything, modify head in-place instead.
 */

//? faster than 25% -> O(3N) solution
 var reorderList = function(head) {
    if (head === null) {
   return;
 }
 /**
  * The goal is to reverse the second half of the list and merge it onto
  * the first half of the list. The first half will have at most one more
  * element than the second half.
  */
 let second = split(head);
 second = reverse(second);
 merge(head, second);
};

function split(node) {
 let fast = node;
 let slow = node;
 
 while (fast !== null) {
   if (fast.next !== null && fast.next.next !== null) {
     slow = slow.next;
     fast = fast.next.next;
   } else {
     fast = null;
   }
 }
 
 const secondHalf = slow.next;
 slow.next = null;
 
 return secondHalf;
}

function reverse(node) {
 let curr = node;
 let prev = null;
 let next = null;
 
 while (curr !== null) {
   next = curr.next;
   curr.next = prev;
   prev = curr;
   curr = next;
 }
 
 return prev;
}

function merge (l1, l2) {
 let l1Next = null;
 let l2Next = null;
 
 while(l2 !== null) {
   l1Next = l1.next;
   l2Next = l2.next;
   
   l1.next = l2;
   l2.next = l1Next;
   
   l1 = l1Next;
   l2 = l2Next;
 }
}

//* faster than 65% -> O(2N) solution
var reorderList = function(head) {
  if (!head || !head.next) return head;
let prev = head;
let tail = head.next;
while (tail) {
 tail.prev = prev;
 prev = tail;
 tail = tail.next;
}
let cur = head;
while (cur !== prev && cur.prev !== prev) {
 const next = cur.next;
 cur.next = prev;
 prev.next = next;
 prev = prev.prev;
 cur = next;
}
cur.next = null;
return head;
}; 