// 876. Middle of the Linked List


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

link = [1,2,3,4,5]
var middleNode = function(head) {
    let slow = head
    let fast = head
    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
    }
    console.log(slow)
    return slow;
};

middleNode(link)

// unable to replicate leetcode solution, but algo is accepted.
// possibly the definitions of linked list must be adheard
// output of algo on on leetcode matches solution