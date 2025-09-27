// Define BST class
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findClosestValueInBst(tree, target) {
  return findClosestValueInBstHelper(tree, target, tree.value);
}

function findClosestValueInBstHelper(tree, target, closestValue) {
  if (tree === null) return closestValue;

  if (Math.abs(tree.value - target) < Math.abs(closestValue - target)) {
    closestValue = tree.value;
  }

  if (target < tree.value && tree.left !== null) {
    return findClosestValueInBstHelper(tree.left, target, closestValue);
  } else if (target > tree.value && tree.right !== null) {
    return findClosestValueInBstHelper(tree.right, target, closestValue);
  } else {
    return closestValue;
  }
}

// BST
const root = new BST(10);
root.left = new BST(5);
root.left.left = new BST(2);
root.left.left.left = new BST(1);
root.left.right = new BST(5);

root.right = new BST(15);
root.right.left = new BST(13);
root.right.left.right = new BST(14);
root.right.right = new BST(22);

console.log(findClosestValueInBst(root, 12)); // ✅ Expected: 13