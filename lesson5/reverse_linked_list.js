// Given the head of a linked list, reverse the list and return it.

// Input: 1 -> 2 -> 3 -> 4 -> null
// Output: 4 -> 3 -> 2 -> 1 -> null

// If the head of the linked list is null
  // return the head as there are no nodes in the linked list.
// Initialize two pointers: prev and curr
  // Set prev to null, and curr to head
// Iterate through the linked list until curr becomes null
  // Initialize the next variable to reference the curr.next node
  // Rewire the curr node so that its next pointer points to the prev node.
  // Slide the prev and curr pointers. The prev node should now reference curr, and curr should reference the next node.
// Return prev because once curr becomes null, the prev node will reference the new head node.


class Node {
  constructor(data) {
    this.val = data === undefined ? 0 : data;
    this.next = next === undefined ? null : next;
  }
}

function reverseLinkedList(head) {
  if (!head) {
    return null;
  }

  let prev = null;
  let curr = head;

  while (curr !== null) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

// Helper function to print the linked list
function printList(head) {
  let curr = head;
  let result = "";
  while (curr !== null) {
    result += curr.val + " -> ";
    curr = curr.next;
  }
  result += "null";
  return result;
}

// Test case 1
const head1 = new Node(1);
head1.next = new Node(2);
head1.next.next = new Node(3);
head1.next.next.next = new Node(4);

console.log("Input: 1 -> 2 -> 3 -> 4 -> null");
console.log("Output:", printList(reverseLinkedList(head1)));
// Output: 4 -> 3 -> 2 -> 1 -> null
