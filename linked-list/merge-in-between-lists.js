/**
 * You are given two linked lists: list1 and list2 of sizes n and m respectively.

Remove list1's nodes from the ath node to the bth node, and put list2 in their place.
Build the result list and return its head.

Example 1:
Input: list1 = [0,1,2,3,4,5], a = 3, b = 4, list2 = [1000000,1000001,1000002]
Output: [0,1,2,1000000,1000001,1000002,5]
Explanation: We remove the nodes 3 and 4 and put the entire list2 in their place. The blue edges and nodes in the above figure indicate the result.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */

//?O(M*N) solution 
 var mergeInBetween = function(list1, a, b, list2) {
    let left=list1,right=list2,curr = list1;
    let c1=0,c2=0;
    while(curr){
        if(c1+1===a){
            left = curr.next;
            curr.next = list2;
            while(curr.next!==null){
                curr=curr.next;
            }
            curr.next = left;
            c1++;
            while(c1<b){
                    left = left.next;
                    c1++;
                  }
            curr.next = left.next;
            return list1;
        }
        curr = curr.next;
        c1++;
    }
};

//* O(N) solution
var mergeInBetween = function(l1, a, b, l2) {
    const root = l1
  let aFound = null, bFound = null, prv = null, idx = 0
  while(l1){
    if(idx === a){
      aFound = prv
    }
    if(idx === b){
      bFound = l1.next
      break
    }
    prv = l1
    l1 = l1.next
    idx++
  }
  aFound.next = l2
  prv = null
  while(l2){
    prv = l2
    l2 = l2.next    
  }
  prv.next = bFound
  return root
};