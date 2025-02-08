class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Creating a simple binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

export const BFSQuestions = [
    {
        title: 'BFS Recursively',
        test: [
            { input: [root], expected: '12345', description: 'BFS Recursively.' },
        ],
        question: 'Write a BFS recursively.',
        examples: [],
        preCode: `function bfsRecursive(root) {
  if (!root) return;

  let result = '';
  const queue = [root]; // Use a queue to track nodes to process

  function processLevel() {
      const currentLevelSize = queue.length; // Track the size of the current level

      // Process all nodes at the current level
      for (let i = 0; i < currentLevelSize; i++) {
          const node = queue.shift(); // Dequeue the front node
          result += node.value; // Visit the node

          // Enqueue left and right children
          if (node.left) queue.push(node.left);
          if (node.right) queue.push(node.right);
      }

      // If there are more nodes to process, call the function recursively
      if (queue.length > 0) {
          processLevel();
      }
  }

  processLevel(); // Start processing levels
  return result;
}
`
    },
    {
        title: 'BFS Iteratively',
        test: [
            { input: [root], expected: '12345', description: 'BFS Iteratively.' },
        ],
        question: 'Write a BFS iteratively.',
        examples: [],
        preCode: `function bfsIterative(root) {
  if (!root) return;

  const queue = [root];
  let result = '';

  while (queue.length > 0) {
      const node = queue.shift(); // Dequeue the front node
      console.log(node.value); // Visit the node
      result += node.value;

      // Enqueue left and right children
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
  }

  return result;
}
`
    }
];
