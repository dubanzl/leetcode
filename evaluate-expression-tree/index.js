// Define BST class
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function evaluateTree(tree){
 // If it's a positive number, return it
 if(tree.value >=0 ) return tree.value

// Evaluate left and right sides
 const leftValue =  evaluateTree(tree.left)
 const rightValue =  evaluateTree(tree.right)

  // Apply the operation
 if (tree.value == -1)
    return leftValue + rightValue
 if (tree.value == -2)
    return leftValue - rightValue
 if (tree.value == -3)
    return  parseInt(leftValue / rightValue)
 if(tree.value == -4)
    return leftValue * rightValue
}

// Build tree
const root = new BST(-1);
root.left = new BST(-2);
root.right = new BST(-3);
root.left.left = new BST(-4);
root.left.right = new BST(2);
root.right.left = new BST(8);
root.right.right = new BST(3);
root.left.left.left = new BST(2);
root.left.left.right = new BST(3);

console.log(evaluateTree(root));
