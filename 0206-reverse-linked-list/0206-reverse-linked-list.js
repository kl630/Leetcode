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
var reverseList = function(head) {
    // const dummyHead = new ListNode();
    // dummyHead.next = head;
    let prev = null;
    let cur = head;
    while (cur) {
        let nextNode = cur.next;
        cur.next = prev;
        prev = cur;
        cur = nextNode;
    }
    return prev;
};