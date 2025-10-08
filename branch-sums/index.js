// Define the BST (Binary Search Tree) class
class BST {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

// Function to calculate all branch sums
function branchSums(root) {
  const sums = []
  calculateBranchSums(root, 0, sums)
  return sums
}

// Recursive helper function
function calculateBranchSums(node, runningSum, sums) {
  if (node == null) return
   var newrunningSum = runningSum  + node.value;
   if(node.left == null && node.right == null){
    sums.push(newrunningSum)
    return
   }
   calculateBranchSums(node.left, newrunningSum, sums)
   calculateBranchSums(node.right, newrunningSum, sums)
}

// Create the BST structure
const root = new BST(10)
root.left = new BST(5)
root.right = new BST(15)

root.left.left = new BST(2)
root.left.right = new BST(5)
root.left.left.left = new BST(1)

root.right.left = new BST(13)
root.right.right = new BST(22)
root.right.left.right = new BST(14)

// Call the function
console.log(branchSums(root))  // [18, 20, 52, 47]
