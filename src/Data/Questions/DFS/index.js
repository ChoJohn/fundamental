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

export const DFSQuestions = [
    {
        title: 'DFS Pre-Order Traversal Recursively',
        test: [
            { input: [root], expected: '12453', description: 'Pre-order traversal Recursively.' },
        ],
        question: 'Write a pre-order traversal recursively.',
        examples: [],
        preCode: `function preOrderTraversal(node) {

        let result = '';
  function recursive(node) {
    if (!node) return;

    result += node.value;
    recursive(node.left);
    recursive(node.right);
  }
  recursive(node);
  return result;
}
`
    },
    {
        title: 'DFS Pre-Order Traversal Iteratively',
        test: [
            { input: [root], expected: '12453', description: 'Pre-order traversal Iteratively.' },
        ],
        question: 'Write a pre-order traversal Iteratively.',
        examples: [],
        preCode:`function iterativePreOrderTraversal(root) {
  if (!root) return;

  const stack = [root];
  let result = '';

  while (stack.length) {
    const node = stack.pop();
    result += node.value;

    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return result;
}
`
    },
    {
        title: 'DFS In-Order Traversal Recursively',
        test: [
            { input: [root], expected: '42513', description: 'In-order traversal Recursively.' },
        ],
        question: 'Write a in-order traversal recursively.',
        examples: [],
        preCode: `function inOrderTraversal(node) {

        let result = '';
  function recursive(node) {
    if (!node) return;

    recursive(node.left);
    result += node.value;
    recursive(node.right);
  }
  recursive(node);
  return result;
}
`
    },
    {
        title: 'DFS In-Order Traversal Iteratively',
        test: [
            { input: [root], expected: '42513', description: 'In-order traversal Iteratively.' },
        ],
        question: 'Write a in-order traversal Iteratively.',
        examples: [],
        preCode: `function iterativeInOrderTraversal(root) {
  const stack = [];
  let current = root;
  let result = '';

  while (current || stack.length) {
    while (current) {
      stack.push(current);
      current = current.left;
    }

    current = stack.pop();
    result += current.value;

    current = current.right;
  }
  return result;
}
`
    },
    {
        title: 'DFS Post-Order Traversal Recursively',
        test: [
            { input: [root], expected: '45231', description: 'Post-order traversal Recursively.' },
        ],
        question: 'Write a post-order traversal recursively.',
        examples: [],
        preCode: `function postOrderTraversal(node) {

        let result = '';
  function recursive(node) {
    if (!node) return;

    recursive(node.left);
    recursive(node.right);
    result += node.value;
  }
  recursive(node);
  return result;
}
`
    },
    {
        title: 'DFS Post-Oreder Traversal Iteratively',
        test: [
            { input: [root], expected: '45231', description: 'Post-order traversal Iteratively.' },
        ],
        question: 'Write a post-order traversal Iteratively.',
        examples: [],
        preCode: `function iterativePostOrderTraversal(root) {
  if (!root) return;

  const stack = [];
  let current = root;
  let lastVisited = null;
  let result = '';

  while (current || stack.length) {
    while (current) {
      stack.push(current);
      current = current.left;
    }

    const peekNode = stack[stack.length - 1];

    if (peekNode.right && lastVisited !== peekNode.right) {
      current = peekNode.right;
    } else {
      result += peekNode.value;
      lastVisited = stack.pop();
    }
  }
  return result;
}
`
    },
];
