/*

Depth-first Search

You're given a Node class that has a name and an array of optional children nodes. When put together, nodes form an acyclic tree-like structure.
Implement the depthFirstSearch method on the Node class, which takes in an empty array, traverses the tree using the Depth-first Search approach (specifically navigating the tree from left to right), stores all of the nodes' names in the input array, and returns it.
If you're unfamiliar with Depth-first Search, we recommend watching the Conceptual Overview section of this question's video explanation before starting to code.

Sample Input

graph = A
       / | \
      B  C  D
     / \   / \
    E   F G   H
       / \
      I   J   K

Sample Output

["A", "B", "E", "F", "I", "J", "C", "D", "G", "K", "H"]

*/

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    const child = new Node(name);
    this.children.push(child);
    return this; // allows chaining
  }

  depthFirstSearch(array) {
    array.push(this.name);
    for (const child of this.children) {
      child.depthFirstSearch(array);
    }
    return array;
  }
}

// Example data construction
const graph = new Node("A");
const B = new Node("B");
const C = new Node("C");
const D = new Node("D");
const E = new Node("E");
const F = new Node("F");
const G = new Node("G");
const H = new Node("H");
const I = new Node("I");
const J = new Node("J");

graph.children.push(B, C, D);
B.children.push(E, F);
F.children.push(I, J);
D.children.push(G, H);

// Run DFS
const result = graph.depthFirstSearch([]);
console.log(result);