// Given a head of a linked list and a target value,
// remove all occurrences of the target value from the
// linked list.

// Input: 1 -> 2 -> 3 -> 2 -> 4 -> null, Target: 2
// Output: 1 -> 3 -> 4

// Input: 1 -> 3 -> 1, Target: 1
// Output: 3 -> null

// Input: null, Target: 3
// Output: null


// initialize two pointers
  // prev and curr
    // set prev to null and curr to the head of the linked list
// if the head of the linked list is null, 
  // return null as there are no elements to remove
// iterate through the linked list using a loop until curr becomes null
  // if the value of curr matches the target value
    // check if prev is null
      // if so, update the head of the linked list to curr.next
      // otherwise, set prev.next to curr.next to bypass curr and remove it from the list
  // if the value of curr does not match the target value
    // update the prev pointer to curr
  // move the curr pointer to the next node
// return the updated link list

class Node {
  constructor(data, next) {
    this.val = data === undefined ? 0 : data;
    this.next = next === undefined ? null : next;
  }
}

function deleteFromLinkedList(head, target) {
  let prev = null;
  let curr = head;

  if (!head) {
    return head;
  }

  while (curr) {
    if (curr.val === target) {
      if (!prev) {
        head = curr.next;
      } else {
        prev.next = curr.next;
      }
    } else {
      prev = curr;
    }
    curr = curr.next;
  }

  return head;
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
head1.next.next.next = new Node(2);
head1.next.next.next.next = new Node(4);

console.log("Input: 1 -> 2 -> 3 -> 2 -> 4 -> null");
console.log("Target: 2");
console.log("Output:", printList(deleteFromLinkedList(head1, 2)));
// Output: 1 -> 3 -> 4

// Test case 2
const head2 = new Node(1);
head2.next = new Node(3);
head2.next.next = new Node(1);

console.log("Input: 1 -> 3 -> 1");
console.log("Target: 1");
console.log("Output:", printList(deleteFromLinkedList(head2, 1)));
// Output: 3 -> null
