export const intQuestion =  {
    title: 'Problem: Two Sum',
    test: [
        { input: [[2, 7, 11, 15], 9], expected: [0, 1], description: 'finds indices of numbers that sum to target' },
        { input: [[3, 2, 4], 6], expected: [1, 2], description: 'finds another pair that sums to target' }
    ],
    question: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
    examples: [
        { input: '[2,7,11,15], 9', output: '[0,1]' },
        { input: '[3,2,4], 6', output: '[1,2]' }
    ],
    solution: `function twoSum(nums, target) {
        const map = new Map();
        for (let i = 0; i < nums.length; i++) {
            if (map.has(target - nums[i])) {
                return [map.get(target - nums[i]), i];
            }
            map.set(nums[i], i);
        }
    }`
};

export const floatQuestion = {
    title: 'Problem: Reverse a Linked List',
    test: [
        { input: [{ val: 1, next: { val: 2, next: { val: 3, next: null } } }], expected: { val: 3, next: { val: 2, next: { val: 1, next: null } } }, description: 'reverses a simple linked list' }
    ],
    question: 'Given the head of a singly linked list, reverse the list and return its head.',
    examples: [
        { input: '{ val: 1, next: { val: 2, next: { val: 3, next: null } } }', output: '{ val: 3, next: { val: 2, next: { val: 1, next: null } } }' }
    ],
    solution: `function reverseList(head) {
        let prev = null, curr = head;
        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }`
};

export const stringQuestion = {
    title: 'Problem: Longest Common Prefix',
    test: [
        { input: [['flower', 'flow', 'flight']], expected: 'fl', description: 'finds common prefix' },
        { input: [['dog', 'racecar', 'car']], expected: '', description: 'no common prefix' }
    ],
    question: 'Write a function to find the longest common prefix string amongst an array of strings.',
    examples: [
        { input: "['flower','flow','flight']", output: "'fl'" },
        { input: "['dog','racecar','car']", output: "''" }
    ],
    solution: `function longestCommonPrefix(strs) {
        if (!strs.length) return "";
        let prefix = strs[0];
        for (let i = 1; i < strs.length; i++) {
            while (strs[i].indexOf(prefix) !== 0) {
                prefix = prefix.slice(0, -1);
                if (!prefix) return "";
            }
        }
        return prefix;
    }`
};

export const arrayQuestion = {
    title: 'Problem: Valid Parentheses',
    test: [
        { input: ['()'], expected: true, description: 'valid simple parentheses' },
        { input: ['()[]{}'], expected: true, description: 'valid mixed parentheses' },
        { input: ['(]'], expected: false, description: 'invalid parentheses' }
    ],
    question: 'Given a string containing just the characters "(", ")", "{", "}", "[" and "]", determine if the input string is valid.',
    examples: [
        { input: "'()'", output: 'true' },
        { input: "'()[]{}'", output: 'true' },
        { input: "'(]'", output: 'false' }
    ],
    solution: `function isValid(s) {
        const stack = [];
        const map = { ')': '(', '}': '{', ']': '[' };
        for (let char of s) {
            if (map[char]) {
                if (stack.pop() !== map[char]) return false;
            } else {
                stack.push(char);
            }
        }
        return stack.length === 0;
    }`
};

export const objectQuestion = {
    title: 'Problem: Merge Two Sorted Lists',
    test: [
        { input: [[1, 2, 4], [1, 3, 4]], expected: [1, 1, 2, 3, 4, 4], description: 'merges two sorted lists' },
        { input: [[], [0]], expected: [0], description: 'merges empty list with single-element list' }
    ],
    question: 'Merge two sorted linked lists and return it as a new sorted list.',
    examples: [
        { input: '[1,2,4], [1,3,4]', output: '[1,1,2,3,4,4]' },
        { input: '[], [0]', output: '[0]' }
    ],
    solution: `function mergeTwoLists(list1, list2) {
        if (!list1 || !list2) return list1 || list2;
        if (list1[0] < list2[0]) return [list1[0], ...mergeTwoLists(list1.slice(1), list2)];
        return [list2[0], ...mergeTwoLists(list1, list2.slice(1))];
    }`
};