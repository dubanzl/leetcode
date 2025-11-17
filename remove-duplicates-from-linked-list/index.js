/*
You're given the head of a Singly Linked List whose nodes are in sorted order with respect to their values. 

Write a function that returns a modified version of the Linked List that doesn’t contain any nodes with duplicate values. 

The Linked List should be modified in place (i.e., you shouldn't create a brand new list), and the modified Linked List should still have its nodes sorted with respect to their values.

Each LinkedList node has an integer value as well as a next node pointing to the next node in the list or to None / null if it's the tail of the list.

*/


// Create nodes
class Node {
  constructor(value) {
    this.value = value;
    this.next = null; // points to the next node
  }
}

const n1 = new Node(1);
const n2 = new Node(1);
const n3 = new Node(2);
const n4 = new Node(3);
const n5 = new Node(3);
const n6 = new Node(4);
const n7 = new Node(4);
const n8 = new Node(4);
const n9 = new Node(5);

// Link them (create the chain)
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;
n6.next = n7;
n7.next = n8;
n8.next = n9;

// The head of the list:
const head = n1;

function removeDuplicatesFromLinkedList(head) {
  let current = head;

  while (current && current.next) {
    if (current.value === current.next.value) {
      current.next = current.next.next; // skip duplicate
    } else {
      current = current.next;
    }
  }

  return head;
}

const newList = removeDuplicatesFromLinkedList(head);
console.log(newList);


// function removeDuplicatesFromLinkedList(linkedList) {
//   let currentNode = linkedList;

//   while (currentNode !== null) {
//     let nextDistinctNode = currentNode.next;

//     while (
//       nextDistinctNode !== null &&
//       nextDistinctNode.value === currentNode.value
//     ) {
//       nextDistinctNode = nextDistinctNode.next;
//     }

//     currentNode.next = nextDistinctNode;
//     currentNode = nextDistinctNode;
//   }

//   return linkedList;
// }