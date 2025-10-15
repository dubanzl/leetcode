// class BST {
//   constructor(value) {
//     this.value = value
//     this.left = null
//     this.right = null
//   }
// }


// function nodeDepths(root) {
//   let sum = [];
//   helperNodeDepths(root,0, sum)
//   let numbers = 0
  
//   for (let i = 0; i < sum.length; i++) {
//     numbers += sum[i]
//   }
//   return numbers
// }

// function helperNodeDepths(root, distance, sum){
//   if(root !== null && root.value !== null){
//     sum.push(distance)
//   }
//   if(root == null){
//     return
//   }
//   if(root.left == null &&  root.right == null){
//     return
//   }
//   helperNodeDepths(root.left, distance + 1, sum)
//   helperNodeDepths(root.right, distance + 1, sum)
// }

// // Create the BST structure
// const root = new BST(10)
// root.left = new BST(5)
// root.right = new BST(15)

// root.left.left = new BST(2)
// root.left.right = new BST(5)
// root.left.left.left = new BST(1) 


// root.right.left = new BST(13)
// root.right.right = new BST(22)
// root.right.left.right = new BST(14)

// // Call the function
// console.log(nodeDepths(root))  // [18, 20, 52, 47]

// class BST {
//   constructor(value) {
//     this.value = value
//     this.left = null
//     this.right = null
//   }
// }


function nodeDepths(root) {
  let sumOfDepths = 0;
  const stack = [{ node: root, depth: 0 }];

  while (stack.length > 0) {
    const nodeInfo = stack.pop();
    const { node, depth } = nodeInfo;

    if (node === null) continue;

    sumOfDepths += depth;

    stack.push({ node: node.left, depth: depth + 1 });
    stack.push({ node: node.right, depth: depth + 1 });
  }

  return sumOfDepths;
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
console.log(nodeDepths(root))  // [18, 20, 52, 47]