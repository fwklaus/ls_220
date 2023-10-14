// Given a head of a linked list and a target value,
// remove all occurrences of the target value from the
// linked list.

// Input: 1 -> 2 -> 3 -> 2 -> 4 -> null, Target: 2
// Output: 1 -> 3 -> 4

// Input: 1 -> 3 -> 1, Target: 1
// Output: 3 -> null

// Input: null, Target: 3
// Output: null

// Initialize three pointers
  // dummy, prev and curr
  // Set dummy to a new node and its next pointer to head
  // Set prev to the dummy, and curr to the head of the linked list.
// Iterate through the linked list using a loop until curr becomes null
  // If the value of curr matches the target value
    // Set the next pointer of prev to curr.next to bypass curr and remove it from the list.
  // If the value of curr does not match the target value
    // Update the prev pointer to curr.
    // Move the curr pointer to the next node.
    // Return dummy.next which is the updated linked list

    function removeElements(head, target) {
      let dummy = new Node();
      dummy.next = head;
      let prev = dummy;
      let curr = head;
    
      while (curr) {
        if (curr.val === target) {
          prev.next = curr.next;
        } else {
          prev = curr;
        }
        curr = curr.next;
      }
    
      return dummy.next;
    }

    