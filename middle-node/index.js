/*

You're given a Linked List with at least one node. Write a function that returns the middle node of the Linked List. If there are two middle nodes (i.e. an even length list), your function should return the second of these nodes.

Each LinkedList node has an integer value as well as a next node pointing to the next node in the list or to None / null if it's the tail of the list.

linkedList = 2 → 7 → 3 → 3 → 5

// The middle could be 7 or 3,
// so we return the second middle node

3 → 3 → 5
*/


function middleNode(linkedList) {
  // 1. Count the number of nodes
  let count = 0;
  let currentNode = linkedList;

  while (currentNode !== null) {
    count += 1;
    currentNode = currentNode.next;
  }

  // 2. Walk to the middle
  let middleNode = linkedList;
  for (let i = 0; i < Math.floor(count / 2); i++) {
    middleNode = middleNode.next;
  }

  return middleNode;
}