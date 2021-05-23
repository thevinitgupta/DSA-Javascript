/**
 * Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.
 */


 var mergeTwoLists = function(l1, l2) {
    let dummyHead = new ListNode();
    let curr = dummyHead;
    while(l1 && l2){
        if(l1.val<=l2.val){
            curr.next = l1;
            l1=l1.next;
        }
        else {
            curr.next = l2;
            l2=l2.next;
        }
        curr = curr.next;
    }
    if(l1===null){
        curr.next = l2;
    }
    if(l2===null){
        curr.next = l1;
    }
    
    return dummyHead.next
};