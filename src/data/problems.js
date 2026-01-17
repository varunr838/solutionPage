export const problemsData = {
  "two-sum": {
    id: 1,
    title: "Two Sum",
    difficulty: "Medium",
    acceptance: "52.3%",
    submissions: "2.4M",
    tags: ["Array", "Hash Table"],
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    intuition: [
      { title: "Understand the problem:", text: "We need to find two numbers in an array that sum to a target value. The key constraint is that we must return their indices, not the values themselves." },
      { title: "Brute force approach:", text: "The naive solution would check every pair of numbers, which gives us O(n²) time complexity. For each number, we'd check all remaining numbers." },
      { title: "Optimized approach:",text: "Instead of checking pairs, we can use a hash map (dictionary) to store numbers we've seen along with their indices. As we iterate, for each number, we check if its complement (target - current number) exists in our map."},
      { title: "Key insight:", text: "By storing numbers as we iterate, we can check for complements in O(1) time, reducing overall complexity from O(n²) to O(n). This is a classic space-time tradeoff."}
    ],
    codeSnippets: {
      java: `public int[] twoSum(int[] nums, int target) {\n    Map<Integer, Integer> map = new HashMap<>();\n    for (int i = 0; i < nums.length; i++) {\n        int comp = target - nums[i];\n        if (map.containsKey(comp)) return new int[] { map.get(comp), i };\n        map.put(nums[i], i);\n    }\n    return new int[0];\n}`,
      python: `def twoSum(nums, target):\n    hashmap = {}\n    for i, num in enumerate(nums):\n        comp = target - num\n        if comp in hashmap: return [hashmap[comp], i]\n        hashmap[num] = i`
    },
    complexity: {
      time: { value: "O(n)", explanation: "One pass through the array." },
      space: { value: "O(n)", explanation: "Storing elements in a hash map." }
    },
    visualSteps: [
        {
          desc: "Initialize: We start with an empty hashmap and the input array.",
          image: "/images/two-sum-step1.jpeg"
        },
        {
          desc: "Step 1: Check nums[0] (value 2). Complement 9 - 2 = 7 is NOT in map. Store {2: 0}.",
          image: "/images/two-sum-step2.jpeg"
        },
        {
          desc: "Step 2: Check nums[1] (value 7). Complement 9 - 7 = 2 IS in map! Return [0, 1].",
          image: "/images/two-sum-step3.jpeg"
        }
      ],
    mistakes : [
      {
        title: "Returning values instead of indices:",
        text: "The problem specifically asks for indices, not the actual numbers. Make sure you're storing and returning indices in your hash map."
      },
      {
        title: "Using the same element twice:",
        text: "Ensure the two indices are different. The problem states \"you may not use the same element twice.\""
      },
      {
        title: "Not handling duplicates correctly:",
        text: "When storing in hash map, later occurrences overwrite earlier ones. This is actually correct behavior - we want the most recent index for each value."
      },
      {
        title: "Assuming sorted array:",
        text: "The array is not necessarily sorted, so a two-pointer approach won't work directly. You'd need to sort first, which changes the indices."
      },
      {
        title: "Checking complement before storing:",
        text: "Make sure you check if the complement exists BEFORE storing the current number. Otherwise, you might match a number with itself."
      }
    ],
    related: [
      { 
        id: 15, 
        title: "3Sum", 
        difficulty: "Medium", 
        tags: ["Array", "Two Pointers", "Sorting"],
        link: "/problem/3sum" 
      },
      { 
        id: 167, 
        title: "Two Sum II - Input Array Is Sorted", 
        difficulty: "Medium", 
        tags: ["Array", "Two Pointers", "Binary Search"],
        link: "/problem/two-sum-ii" 
      },
      { 
        id: 653, 
        title: "Two Sum IV - Input is a BST", 
        difficulty: "Easy", 
        tags: ["Hash Table", "Tree", "Binary Search Tree"],
        link: "/problem/two-sum-iv" 
      },
      { 
        id: 560, 
        title: "Subarray Sum Equals K", 
        difficulty: "Medium", 
        tags: ["Array", "Hash Table", "Prefix Sum"],
        link: "/problem/subarray-sum" 
      }
    ],
    tips: [
      {
        title: "Clarify edge cases first:",
        text: "Always ask about edge cases - empty arrays, no solution exists, multiple solutions, negative numbers, or very large numbers. This shows thorough thinking."
      },
      {
        title: "Start with brute force:",
        text: "Mention the O(n²) approach first, then optimize. This demonstrates problem-solving progression and shows you can think through solutions systematically."
      },
      {
        title: "Explain the hash map approach clearly:",
        text: "Walk through how storing complements helps reduce time complexity. Draw out an example if needed."
      },
      {
        title: "Discuss space-time tradeoff:",
        text: "Mention when you might prefer O(1) space with O(n²) time vs. O(n) space with O(n) time. This shows understanding of tradeoffs."
      },
      {
        title: "Test with examples:",
        text: "Walk through the algorithm with a concrete example (e.g., nums = [2,7,11,15], target = 9) to verify your logic."
      },
    ]
  },
  "valid-palindrome": {
    id: 125,
    title: "Valid Palindrome",
    difficulty: "Easy",
    acceptance: "45.2%",
    submissions: "7.1M",
    tags: ["String", "Two Pointers"],
    description: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers. Given a string s, return true if it is a palindrome, or false otherwise.",
    intuition: [
      { title: "Clean the string:", text: "The primary challenge is ignoring non-alphanumeric characters and case. We can either build a new 'cleaned' string or handle this on-the-fly." },
      { title: "Two-pointer technique:", text: "A palindrome is symmetrical. By placing one pointer at the start and one at the end, we can move toward the middle and compare characters at each step." },
      { title: "Efficiency:", text: "By using two pointers and skipping invalid characters, we avoid the extra space needed to create a new filtered string, achieving O(1) space complexity." }
    ],
    codeSnippets: {
      java: `public boolean isPalindrome(String s) {\n    int left = 0, right = s.length() - 1;\n    while (left < right) {\n        while (left < right && !Character.isLetterOrDigit(s.charAt(left))) left++;\n        while (left < right && !Character.isLetterOrDigit(s.charAt(right))) right--;\n        if (Character.toLowerCase(s.charAt(left)) != Character.toLowerCase(s.charAt(right))) return false;\n        left++;\n        right--;\n    }\n    return true;\n}`,
      python: `def isPalindrome(self, s: str) -> bool:\n    l, r = 0, len(s) - 1\n    while l < r:\n        while l < r and not s[l].isalnum(): l += 1\n        while l < r and not s[r].isalnum(): r -= 1\n        if s[l].lower() != s[r].lower(): return false\n        l += 1\n        r -= 1\n    return True`
    },
    complexity: {
      time: { value: "O(n)", explanation: "We traverse the string at most once with two pointers." },
      space: { value: "O(1)", explanation: "No extra space is used regardless of input size (if pointers are used on-the-fly)." }
    },
    visualSteps: [
      {
        desc: "Initial State: Pointers start at the very ends. Left at 'A', Right at '.'.",
        svg: (
          <g>
            <text x="400" y="100" textAnchor="middle" fill="var(--text-primary)" fontSize="24" fontFamily="monospace" letterSpacing="5">A man, a plan, a canal: Panama.</text>
            {/* Left Pointer */}
            <path d="M 120 120 L 120 140" stroke="#3B82F6" strokeWidth="3" markerEnd="url(#arrowhead)" />
            <text x="120" y="160" textAnchor="middle" fill="#3B82F6" fontSize="14" fontWeight="bold">L</text>
            {/* Right Pointer */}
            <path d="M 675 120 L 675 140" stroke="#EF4444" strokeWidth="3" markerEnd="url(#arrowhead)" />
            <text x="675" y="160" textAnchor="middle" fill="#EF4444" fontSize="14" fontWeight="bold">R</text>
          </g>
        )
      },
      {
        desc: "Skip Non-Alphanumeric: Right pointer skips '.' and moves to 'a'. Left is already at 'A'.",
        svg: (
          <g>
            <text x="400" y="100" textAnchor="middle" fill="var(--text-primary)" fontSize="24" fontFamily="monospace" letterSpacing="5">A man, a plan, a canal: Panama.</text>
            {/* L stays */}
            <path d="M 120 120 L 120 140" stroke="#3B82F6" strokeWidth="3" />
            {/* R moves from '.' to 'a' */}
            <path d="M 660 120 L 660 140" stroke="#EF4444" strokeWidth="3" />
            <text x="660" y="160" textAnchor="middle" fill="#EF4444" fontSize="14" fontWeight="bold">R</text>
            <text x="400" y="200" textAnchor="middle" fill="#94A3B8" fontSize="14 italic">Skipping '.' at the end</text>
          </g>
        )
      },
      {
        desc: "Comparison 1: Highlight 'A' and 'a'. Ignoring case, they match! Move both pointers.",
        svg: (
          <g>
            <text x="400" y="100" textAnchor="middle" fill="var(--text-primary)" fontSize="24" fontFamily="monospace" letterSpacing="5">A man, a plan, a canal: Panama.</text>
            {/* Highlighting specific letters */}
            <rect x="110" y="75" width="25" height="35" fill="#10B981" opacity="0.4" rx="4" />
            <rect x="650" y="75" width="25" height="35" fill="#10B981" opacity="0.4" rx="4" />
            <text x="400" y="200" textAnchor="middle" fill="#10B981" fontWeight="bold" fontSize="18">Match: 'A' == 'a'</text>
          </g>
        )
      },
      {
        desc: "Skip Spaces/Commas: Left pointer skips ' ' and moves to 'm'. Right moves to 'm'.",
        svg: (
          <g>
            <text x="400" y="100" textAnchor="middle" fill="var(--text-primary)" fontSize="24" fontFamily="monospace" letterSpacing="5">A man, a plan, a canal: Panama.</text>
            {/* New Positions */}
            <path d="M 155 120 L 155 140" stroke="#3B82F6" strokeWidth="3" />
            <text x="155" y="160" textAnchor="middle" fill="#3B82F6" fontSize="14" fontWeight="bold">L</text>
            <path d="M 635 120 L 635 140" stroke="#EF4444" strokeWidth="3" />
            <text x="635" y="160" textAnchor="middle" fill="#EF4444" fontSize="14" fontWeight="bold">R</text>
          </g>
        )
      },
      {
        desc: "Comparison 2: Highlight 'm' and 'm'. They match! Continue scanning.",
        svg: (
          <g>
            <text x="400" y="100" textAnchor="middle" fill="var(--text-primary)" fontSize="24" fontFamily="monospace" letterSpacing="5">A man, a plan, a canal: Panama.</text>
            <rect x="145" y="75" width="25" height="35" fill="#10B981" opacity="0.4" rx="4" />
            <rect x="625" y="75" width="25" height="35" fill="#10B981" opacity="0.4" rx="4" />
            <text x="400" y="200" textAnchor="middle" fill="#10B981" fontWeight="bold" fontSize="18">Match: 'm' == 'm'</text>
          </g>
        )
      },
      {
        desc: "Conclusion: Pointers continue until they meet. All valid characters matched symmetrically.",
        svg: (
          <g>
            <rect x="250" y="250" width="300" height="60" rx="30" fill="#10B981" />
            <text x="400" y="288" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">Result: Valid Palindrome</text>
            <text x="400" y="100" textAnchor="middle" fill="#10B981" fontSize="24" fontFamily="monospace" letterSpacing="5" opacity="0.3">A man, a plan, a canal: Panama.</text>
          </g>
        )
      }
    ],
    mistakes : [
      { title: "RegEx Overuse:", text: "Using heavy RegEx for cleaning can sometimes be slower than simple character checks in a loop." },
      { title: "Extra Space:", text: "Creating a completely new reversed string is O(n) space; the two-pointer approach is more efficient at O(1)." },
      { title: "Non-Alphanumeric Logic:", text: "Forgetting that 'alphanumeric' includes numbers (0-9), not just letters." }
    ],
    related: [
      { id: 9, title: "Palindrome Number", difficulty: "Easy", tags: ["Math"], link: "/problem/palindrome-number" },
      { id: 680, title: "Valid Palindrome II", difficulty: "Easy", tags: ["Two Pointers", "String"], link: "/problem/valid-palindrome-ii" }
    ],
    tips: [
      { title: "Built-in functions:", text: "In an interview, mention you know `Character.isLetterOrDigit` (Java) or `.isalnum()` (Python) rather than writing a manual ASCII range check." },
      { title: "One-liner vs. Efficiency:", text: "A one-liner like `s == s[::-1]` is elegant but uses extra space. Be ready to discuss this trade-off." },
      { title: "Empty Strings:", text: "Confirm with the interviewer if an empty string or a string with only spaces is considered a palindrome (usually true)." }
    ]
},
"valid-parentheses": {
  id: 20,
  title: "Valid Parentheses",
  difficulty: "Easy",
  acceptance: "41.9%",
  submissions: "11.8M",
  tags: ["Stack", "String"],
  description:
    "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if open brackets are closed by the same type of brackets and in the correct order.",
  intuition: [
    {
      title: "Understand the structure:",
      text: "Every opening bracket must have a corresponding closing bracket, and they must be closed in the correct order."
    },
    {
      title: "Why stack works:",
      text: "Parentheses are a classic LIFO (Last In First Out) problem. The most recently opened bracket must be closed first."
    },
    {
      title: "Processing the string:",
      text: "When we see an opening bracket, we push it onto the stack. When we see a closing bracket, we check if it matches the top of the stack."
    },
    {
      title: "Final validation:",
      text: "At the end, the stack should be empty. Any leftover opening brackets mean the string is invalid."
    }
  ],
  codeSnippets: {
    java: `public boolean isValid(String s) {
    Stack<Character> stack = new Stack<>();
    for (char c : s.toCharArray()) {
        if (c == '(' || c == '{' || c == '[') {
            stack.push(c);
        } else {
            if (stack.isEmpty()) return false;
            char top = stack.pop();
            if (c == ')' && top != '(') return false;
            if (c == '}' && top != '{') return false;
            if (c == ']' && top != '[') return false;
        }
    }
    return stack.isEmpty();
}`,
    python: `def isValid(self, s: str) -> bool:
    stack = []
    mapping = {')': '(', '}': '{', ']': '['}

    for char in s:
        if char in mapping:
            if not stack or stack.pop() != mapping[char]:
                return False
        else:
            stack.append(char)

    return not stack`
  },
  complexity: {
    time: {
      value: "O(n)",
      explanation: "Each character is processed once."
    },
    space: {
      value: "O(n)",
      explanation: "In the worst case, all characters are opening brackets stored in the stack."
    }
  },
  visualSteps: [
    {
      desc: "Initialize: Start with an empty stack.",
      svg: (
        <g>
          <rect x="400" y="100" width="200" height="120" rx="8" fill="#F1F5F9" stroke="#94A3B8" />
          <text x="500" y="130" textAnchor="middle" fill="#64748b" fontWeight="bold">Stack</text>
          <text x="500" y="170" textAnchor="middle" fill="#94A3B8">{ "Empty" }</text>

          <text x="200" y="160" fontSize="20" fill="var(--text-primary)">Input: "()[]{}"</text>
        </g>
      )
    },
    {
      desc: "Read '(' → opening bracket → push onto stack.",
      svg: (
        <g>
          <rect x="400" y="100" width="200" height="120" rx="8" fill="#DBEAFE" stroke="#3B82F6" />
          <text x="500" y="130" textAnchor="middle" fill="#1E3A8A" fontWeight="bold">Stack</text>
          <text x="500" y="170" textAnchor="middle" fill="#1E3A8A">(</text>

          <text x="200" y="160" fontSize="20" fill="var(--text-primary)">Reading: (</text>
        </g>
      )
    },
    {
      desc: "Read ')' → closing bracket → pop and match '(' ✔",
      svg: (
        <g>
          <rect x="400" y="100" width="200" height="120" rx="8" fill="#D1FAE5" stroke="#10B981" />
          <text x="500" y="130" textAnchor="middle" fill="#064E3B" fontWeight="bold">Stack</text>
          <text x="500" y="170" textAnchor="middle" fill="#064E3B">Empty</text>

          <text x="200" y="160" fontSize="20" fill="#10B981">Match Found ✔</text>
        </g>
      )
    },
    {
      desc: "Continue for all characters. Stack is empty at the end.",
      svg: (
        <g>
          <rect x="250" y="250" width="300" height="60" rx="30" fill="#10B981" />
          <text x="400" y="288" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">
            Result: Valid Parentheses
          </text>
        </g>
      )
    }
  ],
  mistakes: [
    {
      title: "Not checking empty stack:",
      text: "If a closing bracket appears when the stack is empty, the string is invalid."
    },
    {
      title: "Ignoring order:",
      text: "A string like '(]' is invalid even though it has one opening and one closing bracket."
    },
    {
      title: "Forgetting final stack check:",
      text: "An input like '(((' should return false because not all brackets are closed."
    },
    {
      title: "Using counters instead of stack:",
      text: "Counters fail for cases like '([)]' where order matters."
    }
  ],
  related: [
    {
      id: 32,
      title: "Longest Valid Parentheses",
      difficulty: "Hard",
      tags: ["Stack", "Dynamic Programming"],
      link: "/problem/longest-valid-parentheses"
    },
    {
      id: 678,
      title: "Valid Parenthesis String",
      difficulty: "Medium",
      tags: ["Stack", "Greedy"],
      link: "/problem/valid-parenthesis-string"
    }
  ],
  tips: [
    {
      title: "Use a map for matching:",
      text: "Mapping closing → opening brackets simplifies comparison logic."
    },
    {
      title: "Explain why stack is needed:",
      text: "Interviewers love hearing the LIFO reasoning behind the stack choice."
    },
    {
      title: "Edge cases:",
      text: "Empty string is valid. A single bracket is invalid."
    },
    {
      title: "Dry run examples:",
      text: "Walk through '()[]{}' and '([)]' to clearly demonstrate correctness."
    }
  ]
},
"min-stack": {
  id: 155,
  title: "Min Stack",
  difficulty: "Medium",
  acceptance: "45.1%",
  submissions: "2.8M",
  tags: ["Stack", "Design"],
  description:
    "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time. Implement the MinStack class:\n\n- push(val) pushes the element val onto the stack.\n- pop() removes the element on top of the stack.\n- top() gets the top element of the stack.\n- getMin() retrieves the minimum element in the stack.",
  intuition: [
    {
      title: "Stack basics:",
      text: "A normal stack allows push, pop, and top operations. The challenge here is tracking the minimum element efficiently."
    },
    {
      title: "Why naive approach fails:",
      text: "If we scan the stack each time to find the minimum, getMin() becomes O(n). We need O(1) for all operations."
    },
    {
      title: "Using an auxiliary stack:",
      text: "We can use an extra stack to keep track of the minimum at each point. Whenever we push a new element, also push the new minimum so far."
    },
    {
      title: "Key insight:",
      text: "By maintaining the current minimum at each push, getMin() becomes O(1). Space complexity is O(n) due to the auxiliary stack."
    }
  ],
  codeSnippets: {
    java: `class MinStack {
    private Stack<Integer> stack;
    private Stack<Integer> minStack;

    public MinStack() {
        stack = new Stack<>();
        minStack = new Stack<>();
    }

    public void push(int val) {
        stack.push(val);
        if (minStack.isEmpty() || val <= minStack.peek()) {
            minStack.push(val);
        } else {
            minStack.push(minStack.peek());
        }
    }

    public void pop() {
        stack.pop();
        minStack.pop();
    }

    public int top() {
        return stack.peek();
    }

    public int getMin() {
        return minStack.peek();
    }
}`,
    python: `class MinStack:
    def __init__(self):
        self.stack = []
        self.minStack = []

    def push(self, val: int) -> None:
        self.stack.append(val)
        if not self.minStack or val <= self.minStack[-1]:
            self.minStack.append(val)
        else:
            self.minStack.append(self.minStack[-1])

    def pop(self) -> None:
        self.stack.pop()
        self.minStack.pop()

    def top(self) -> int:
        return self.stack[-1]

    def getMin(self) -> int:
        return self.minStack[-1]`
  },
  complexity: {
    time: {
      value: "O(1)",
      explanation: "All operations (push, pop, top, getMin) are constant time."
    },
    space: {
      value: "O(n)",
      explanation: "We use an auxiliary stack to store the minimum at each step."
    }
  },
  visualSteps: [
    {
      desc: "Initialize: Both main stack and min stack are empty.",
      svg: (
        <g>
          <rect x="250" y="100" width="200" height="120" rx="8" fill="#F1F5F9" stroke="#94A3B8" />
          <text x="350" y="130" textAnchor="middle" fill="#64748b" fontWeight="bold">Stack</text>
          <text x="350" y="170" textAnchor="middle" fill="#94A3B8">Empty</text>

          <rect x="500" y="100" width="200" height="120" rx="8" fill="#F1F5F9" stroke="#94A3B8" />
          <text x="600" y="130" textAnchor="middle" fill="#64748b" fontWeight="bold">Min Stack</text>
          <text x="600" y="170" textAnchor="middle" fill="#94A3B8">Empty</text>
        </g>
      )
    },
    {
      desc: "Push 5: Stack = [5], MinStack = [5]",
      svg: (
        <g>
          <rect x="250" y="100" width="200" height="120" rx="8" fill="#DBEAFE" stroke="#3B82F6" />
          <text x="350" y="130" textAnchor="middle" fill="#1E3A8A" fontWeight="bold">Stack</text>
          <text x="350" y="170" textAnchor="middle" fill="#1E3A8A">[5]</text>

          <rect x="500" y="100" width="200" height="120" rx="8" fill="#DBEAFE" stroke="#3B82F6" />
          <text x="600" y="130" textAnchor="middle" fill="#1E3A8A" fontWeight="bold">Min Stack</text>
          <text x="600" y="170" textAnchor="middle" fill="#1E3A8A">[5]</text>
        </g>
      )
    },
    {
      desc: "Push 3: Stack = [5,3], MinStack = [5,3]",
      svg: (
        <g>
          <rect x="250" y="100" width="200" height="120" rx="8" fill="#D1FAE5" stroke="#10B981" />
          <text x="350" y="130" textAnchor="middle" fill="#064E3B" fontWeight="bold">Stack</text>
          <text x="350" y="170" textAnchor="middle" fill="#064E3B">[5,3]</text>

          <rect x="500" y="100" width="200" height="120" rx="8" fill="#D1FAE5" stroke="#10B981" />
          <text x="600" y="130" textAnchor="middle" fill="#064E3B" fontWeight="bold">Min Stack</text>
          <text x="600" y="170" textAnchor="middle" fill="#064E3B">[5,3]</text>
        </g>
      )
    },
    {
      desc: "Push 7: Stack = [5,3,7], MinStack = [5,3,3]",
      svg: (
        <g>
          <rect x="250" y="100" width="200" height="120" rx="8" fill="#FDE68A" stroke="#F59E0B" />
          <text x="350" y="130" textAnchor="middle" fill="#78350F" fontWeight="bold">Stack</text>
          <text x="350" y="170" textAnchor="middle" fill="#78350F">[5,3,7]</text>

          <rect x="500" y="100" width="200" height="120" rx="8" fill="#FDE68A" stroke="#F59E0B" />
          <text x="600" y="130" textAnchor="middle" fill="#78350F" fontWeight="bold">Min Stack</text>
          <text x="600" y="170" textAnchor="middle" fill="#78350F">[5,3,3]</text>
        </g>
      )
    },
    {
      desc: "Pop: Remove 7 → Stack = [5,3], MinStack = [5,3], getMin() = 3",
      svg: (
        <g>
          <rect x="250" y="250" width="300" height="60" rx="30" fill="#10B981" />
          <text x="400" y="288" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">
            Current Min: 3
          </text>
        </g>
      )
    }
  ],
  mistakes: [
    {
      title: "Tracking min incorrectly:",
      text: "Don't just store the minimum in a single variable, because popping the minimum requires updating it."
    },
    {
      title: "Push order mismatch:",
      text: "Always update the minStack even if the new value is greater, by pushing the current minimum again."
    },
    {
      title: "Pop mismatch:",
      text: "Both stacks must pop simultaneously to maintain correct min tracking."
    },
    {
      title: "Assuming no duplicates:",
      text: "Duplicates are allowed. Make sure minStack duplicates values as needed."
    }
  ],
  related: [
    {
      id: 20,
      title: "Valid Parentheses",
      difficulty: "Easy",
      tags: ["Stack", "String"],
      link: "/problem/valid-parentheses"
    },
    {
      id: 42,
      title: "Trapping Rain Water",
      difficulty: "Hard",
      tags: ["Stack", "Two Pointers"],
      link: "/problem/trapping-rain-water"
    }
  ],
  tips: [
    {
      title: "Explain auxiliary stack approach:",
      text: "Interviewers expect O(1) min retrieval, so show you know how to track min efficiently."
    },
    {
      title: "Edge cases:",
      text: "Empty stack operations should be handled (pop/top/getMin). Clarify with interviewer."
    },
    {
      title: "Consider space optimization:",
      text: "You can optimize by storing only new minima instead of duplicating values in minStack."
    }
  ]
},
"binary-search": {
  id: 704,
  title: "Binary Search",
  difficulty: "Easy",
  acceptance: "52.8%",
  submissions: "5.7M",
  tags: ["Array", "Binary Search", "Divide and Conquer"],
  description:
    "Given a sorted array of integers `nums` and an integer `target`, return the index of `target` if it exists in `nums`, otherwise return -1. You must write an algorithm with O(log n) runtime complexity.",
  intuition: [
    {
      title: "Leverage the sorted property:",
      text: "Since the array is sorted, we can eliminate half of the search space at each step."
    },
    {
      title: "Divide and conquer:",
      text: "Binary search repeatedly checks the middle element and decides whether to search left or right."
    },
    {
      title: "Loop vs Recursion:",
      text: "Binary search can be implemented iteratively (preferred in interviews) or recursively."
    },
    {
      title: "Edge cases:",
      text: "Empty array, target not present, target at first or last index, duplicate elements (return any valid index)."
    }
  ],
  codeSnippets: {
    java: `public int search(int[] nums, int target) {
    int left = 0, right = nums.length - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) return mid;
        else if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}`,
    python: `def search(nums: List[int], target: int) -> int:
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = left + (right - left) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1`
  },
  complexity: {
    time: {
      value: "O(log n)",
      explanation: "Each iteration halves the search space, so logarithmic time complexity."
    },
    space: {
      value: "O(1)",
      explanation: "Iterative version uses constant space."
    }
  },
  visualSteps: [
    {
      desc: "Initial State: Full array with pointers at both ends.",
      svg: (
        <g>
          <text x="400" y="100" textAnchor="middle" fill="var(--text-primary)" fontSize="24" fontFamily="monospace">nums = [1,3,5,7,9,11,13]</text>
          <text x="100" y="140" fill="#3B82F6" fontWeight="bold">L</text>
          <text x="700" y="140" fill="#EF4444" fontWeight="bold">R</text>
        </g>
      )
    },
    {
      desc: "Step 1: Check middle element. mid = 3, nums[3] = 7. Target = 9 → search right.",
      svg: (
        <g>
          <text x="400" y="100" textAnchor="middle" fill="var(--text-primary)" fontSize="24" fontFamily="monospace">nums = [1,3,5,7,9,11,13]</text>
          <rect x="320" y="80" width="50" height="40" fill="#FBBF24" opacity="0.4" rx="4" />
          <text x="345" y="105" textAnchor="middle" fill="#78350F" fontWeight="bold">7</text>
          <text x="400" y="160" fill="#10B981" fontWeight="bold">Searching Right</text>
        </g>
      )
    },
    {
      desc: "Step 2: Update left pointer. Now L = 4, R = 6. Mid = 5, nums[5] = 11 → search left.",
      svg: (
        <g>
          <text x="400" y="100" textAnchor="middle" fill="var(--text-primary)" fontSize="24" fontFamily="monospace">nums = [1,3,5,7,9,11,13]</text>
          <rect x="580" y="80" width="50" height="40" fill="#F87171" opacity="0.4" rx="4" />
          <text x="605" y="105" textAnchor="middle" fill="#7F1D1D" fontWeight="bold">11</text>
          <text x="400" y="160" fill="#10B981" fontWeight="bold">Searching Left</text>
        </g>
      )
    },
    {
      desc: "Step 3: Mid = 4, nums[4] = 9 → target found! Return 4.",
      svg: (
        <g>
          <rect x="500" y="80" width="50" height="40" fill="#10B981" opacity="0.4" rx="4" />
          <text x="525" y="105" textAnchor="middle" fill="white" fontWeight="bold">9</text>
          <rect x="250" y="250" width="300" height="60" rx="30" fill="#10B981" />
          <text x="400" y="288" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">Result: 4</text>
        </g>
      )
    }
  ],
  mistakes: [
    {
      title: "Infinite loop due to mid calculation:",
      text: "Always use mid = left + (right - left) / 2 to avoid overflow in languages like Java."
    },
    {
      title: "Off-by-one errors:",
      text: "Ensure left <= right in while loop. Using < instead can skip last element."
    },
    {
      title: "Confusing left/right updates:",
      text: "When nums[mid] < target, move left = mid + 1; when nums[mid] > target, move right = mid - 1."
    },
    {
      title: "Assuming unsorted array:",
      text: "Binary search only works on sorted arrays. Always clarify this with interviewer."
    }
  ],
  related: [
    {
      id: 35,
      title: "Search Insert Position",
      difficulty: "Easy",
      tags: ["Array", "Binary Search"],
      link: "/problem/search-insert-position"
    },
    {
      id: 278,
      title: "First Bad Version",
      difficulty: "Easy",
      tags: ["Binary Search", "Interactive"],
      link: "/problem/first-bad-version"
    },
    {
      id: 367,
      title: "Valid Perfect Square",
      difficulty: "Easy",
      tags: ["Binary Search", "Math"],
      link: "/problem/valid-perfect-square"
    }
  ],
  tips: [
    {
      title: "Dry run example:",
      text: "Walk through a small array like [1,3,5,7,9] and target=9 to explain pointer updates."
    },
    {
      title: "Explain edge cases:",
      text: "Empty array, target smaller than all elements, target larger than all elements."
    },
    {
      title: "Iterative vs recursive:",
      text: "Iterative is simpler and avoids stack overhead; recursion is also acceptable."
    }
  ]
},
"find-minimum-in-rotated-sorted-array": {
  id: 153,
  title: "Find Minimum in Rotated Sorted Array",
  difficulty: "Medium",
  acceptance: "47.2%",
  submissions: "1.7M",
  tags: ["Array", "Binary Search", "Divide and Conquer"],
  description:
    "Suppose an array of length n sorted in ascending order is rotated between 1 and n times. Given the rotated array nums, return the minimum element. You must write an algorithm that runs in O(log n) time.",
  intuition: [
    {
      title: "Identify the pivot:",
      text: "The array is sorted but rotated. The smallest element is the pivot point where the rotation happened."
    },
    {
      title: "Use binary search:",
      text: "We can use binary search to locate the minimum. Compare middle element with rightmost element to determine which side contains the minimum."
    },
    {
      title: "Decision logic:",
      text: "If nums[mid] > nums[right], the minimum is in the right half. Otherwise, it's in the left half (including mid)."
    },
    {
      title: "Edge cases:",
      text: "Array not rotated at all (already sorted). Single element array."
    }
  ],
  codeSnippets: {
    java: `public int findMin(int[] nums) {
    int left = 0, right = nums.length - 1;
    while (left < right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] > nums[right]) left = mid + 1;
        else right = mid;
    }
    return nums[left];
}`,
    python: `def findMin(nums: List[int]) -> int:
    left, right = 0, len(nums) - 1
    while left < right:
        mid = left + (right - left) // 2
        if nums[mid] > nums[right]:
            left = mid + 1
        else:
            right = mid
    return nums[left]`
  },
  complexity: {
    time: { value: "O(log n)", explanation: "Binary search halves the array each iteration." },
    space: { value: "O(1)", explanation: "Constant space used." }
  },
  visualSteps: [
    {
      desc: "Initial Array: nums = [4,5,6,7,0,1,2]",
      svg: (
        <g>
          <text x="400" y="100" textAnchor="middle" fill="var(--text-primary)" fontSize="24" fontFamily="monospace">[4,5,6,7,0,1,2]</text>
          <text x="100" y="140" fill="#3B82F6" fontWeight="bold">L</text>
          <text x="700" y="140" fill="#EF4444" fontWeight="bold">R</text>
        </g>
      )
    },
    {
      desc: "Check mid = 6 (nums[3]=7) > nums[right]=2 → min in right half.",
      svg: (
        <g>
          <rect x="300" y="80" width="50" height="40" fill="#FBBF24" opacity="0.4" rx="4" />
          <text x="325" y="105" textAnchor="middle" fill="#78350F" fontWeight="bold">7</text>
          <text x="400" y="160" fill="#10B981" fontWeight="bold">Searching Right</text>
        </g>
      )
    },
    {
      desc: "Continue search: left=4, right=6, mid=5 → nums[5]=1 ≤ nums[right]=2 → min in left half.",
      svg: (
        <g>
          <rect x="520" y="80" width="50" height="40" fill="#D1FAE5" opacity="0.4" rx="4" />
          <text x="545" y="105" textAnchor="middle" fill="#064E3B" fontWeight="bold">1</text>
          <text x="400" y="160" fill="#10B981" fontWeight="bold">Searching Left</text>
        </g>
      )
    },
    {
      desc: "Found minimum: nums[4]=0",
      svg: (
        <g>
          <rect x="460" y="250" width="300" height="60" rx="30" fill="#10B981" />
          <text x="610" y="288" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">Result: 0</text>
        </g>
      )
    }
  ],
  mistakes: [
    { title: "Using full linear scan", text: "Binary search is required for O(log n) time." },
    { title: "Mid comparison logic", text: "Compare nums[mid] with nums[right], not nums[left]." },
    { title: "Off-by-one errors", text: "Use while(left < right) instead of <= to avoid infinite loop." },
    { title: "Edge cases", text: "Single element or already sorted array must return nums[0]." }
  ],
  related: [
    { id: 33, title: "Search in Rotated Sorted Array", difficulty: "Medium", tags: ["Array", "Binary Search"], link: "/problem/search-rotated-array" },
    { id: 81, title: "Search in Rotated Sorted Array II", difficulty: "Medium", tags: ["Array", "Binary Search"], link: "/problem/search-rotated-array-ii" }
  ],
  tips: [
    { title: "Explain why mid vs right", text: "Compare middle with right to decide which half contains the minimum." },
    { title: "Dry run", text: "Use small arrays like [3,4,5,1,2] to illustrate the binary search process." },
    { title: "Avoid linear scan", text: "Emphasize O(log n) solution to interviewers." }
  ]
},
"search-in-rotated-sorted-array": { 
  id: 33,
  title: "Search in Rotated Sorted Array",
  difficulty: "Medium",
  acceptance: "44.7%",
  submissions: "2.3M",
  tags: ["Array", "Binary Search", "Divide and Conquer"],
  description:
    "Given a rotated sorted array nums and an integer target, return its index if it exists, otherwise return -1. You must write an algorithm with O(log n) runtime complexity.",
  intuition: [
    {
      title: "Identify sorted half",
      text: "At least one half (left or right) of the array is sorted in any rotated array."
    },
    {
      title: "Binary search with rotation",
      text: "Check which half is sorted, then decide whether to search left or right."
    },
    {
      title: "Decision logic",
      text: "If target lies in the sorted half, narrow search to that half; otherwise search the other half."
    },
    {
      title: "Edge cases",
      text: "Target not present, single element array, duplicates if allowed."
    }
  ],
  codeSnippets: {
    java: `public int search(int[] nums, int target) {
    int left = 0, right = nums.length - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) return mid;

        if (nums[left] <= nums[mid]) { // Left half sorted
            if (nums[left] <= target && target < nums[mid]) right = mid - 1;
            else left = mid + 1;
        } else { // Right half sorted
            if (nums[mid] < target && target <= nums[right]) left = mid + 1;
            else right = mid - 1;
        }
    }
    return -1;
}`,
    python: `def search(nums: List[int], target: int) -> int:
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = left + (right - left) // 2
        if nums[mid] == target:
            return mid
        if nums[left] <= nums[mid]:
            if nums[left] <= target < nums[mid]:
                right = mid - 1
            else:
                left = mid + 1
        else:
            if nums[mid] < target <= nums[right]:
                left = mid + 1
            else:
                right = mid - 1
    return -1`
  },
  complexity: {
    time: { value: "O(log n)", explanation: "Binary search halves the search space each step." },
    space: { value: "O(1)", explanation: "Iterative solution uses constant space." }
  },
  visualSteps: [
    {
      desc: "Initial Array: nums = [4,5,6,7,0,1,2], target=0",
      svg: (
        <g>
          <text x="400" y="100" textAnchor="middle" fill="var(--text-primary)" fontSize="24" fontFamily="monospace">[4,5,6,7,0,1,2]</text>
          <text x="100" y="140" fill="#3B82F6" fontWeight="bold">L</text>
          <text x="700" y="140" fill="#EF4444" fontWeight="bold">R</text>
        </g>
      )
    },
    {
      desc: "Mid = 6 (nums[3]=7). Left half sorted. Target 0 not in [4..7] → search right half.",
      svg: (
        <g>
          <rect x="320" y="80" width="50" height="40" fill="#FBBF24" opacity="0.4" rx="4" />
          <text x="345" y="105" textAnchor="middle" fill="#78350F" fontWeight="bold">7</text>
          <text x="400" y="160" fill="#10B981" fontWeight="bold">Searching Right</text>
        </g>
      )
    },
    {
      desc: "New search: left=4, right=6, mid=5 → nums[5]=1. Right half sorted. Target 0 in left? yes → search left.",
      svg: (
        <g>
          <rect x="560" y="80" width="50" height="40" fill="#D1FAE5" opacity="0.4" rx="4" />
          <text x="585" y="105" textAnchor="middle" fill="#064E3B" fontWeight="bold">1</text>
          <text x="400" y="160" fill="#10B981" fontWeight="bold">Searching Left</text>
        </g>
      )
    },
    {
      desc: "Found target: nums[4]=0 → return index 4",
      svg: (
        <g>
          <rect x="460" y="250" width="300" height="60" rx="30" fill="#10B981" />
          <text x="610" y="288" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">Result: 4</text>
        </g>
      )
    }
  ],
  mistakes: [
    { title: "Not checking which half is sorted", text: "You must first identify the sorted half each step." },
    { title: "Off-by-one errors", text: "Use while(left <= right) to ensure last element is checked." },
    { title: "Assuming full array sorted", text: "Rotated array is partially sorted; normal binary search won't work." },
    { title: "Edge cases", text: "Empty array or single element arrays must be handled." }
  ],
  related: [
    { id: 153, title: "Find Minimum in Rotated Sorted Array", difficulty: "Medium", tags: ["Array", "Binary Search"], link: "/problem/find-min-rotated" },
    { id: 81, title: "Search in Rotated Sorted Array II", difficulty: "Medium", tags: ["Array", "Binary Search"], link: "/problem/search-rotated-array-ii" }
  ],
  tips: [
    { title: "Explain sorted half check", text: "Always show interviewer how you identify which side is sorted." },
    { title: "Dry run examples", text: "Use arrays like [4,5,6,7,0,1,2] and [6,7,0,1,2,4,5] for explanation." },
    { title: "Iterative preferred", text: "Iterative binary search avoids recursion overhead." }
  ]
}
   "validate-binary-search-tree": {
        id: 98,
        title: "Validate Binary Search Tree",
        difficulty: "Medium",
        acceptance: "32.6%",
        submissions: "2.1M",
        tags: ["Tree", "DFS", "BFS", "Binary Search Tree", "Binary Tree"],
        description: "<p>Given the root of a binary tree, determine if it is a valid binary search tree (BST).</p><p>A <strong>valid BST</strong> is defined as follows:</p><ul><li>The left subtree of a node contains only nodes with keys <strong>strictly less than</strong> the node's key.</li><li>The right subtree of a node contains only nodes with keys <strong>strictly greater than</strong> the node's key.</li><li>Both the left and right subtrees must also be binary search trees.</li></ul>",
        intuition: [
            {
                title: "Global Constraints",
                text: "Validating a BST is not just about comparing a node to its immediate children. A node must satisfy constraints imposed by *all* its ancestors."
            },
            {
                title: "Range Propagation",
                text: "We can define a valid range (low, high) for each node. As we traverse, we tighten these bounds. For the root, the range is (-∞, +∞). Moving left updates high, moving right updates low."
            },
            {
                title: "Validity Check",
                text: "At each node, we simply check if it falls strictly within the inherited range: low < node.val < high."
            }
        ],
        codeSnippets: {
            python: `class Solution:\n    def isValidBST(self, root: Optional[TreeNode]) -> bool:\n        def validate(node, low=-float('inf'), high=float('inf')):\n            if not node:\n                return True\n            if not (low < node.val < high):\n                return False\n            return (validate(node.left, low, node.val) and\n                    validate(node.right, node.val, high))\n        \n        return validate(root)`,
            java: `class Solution {\n    public boolean isValidBST(TreeNode root) {\n        return validate(root, null, null);\n    }\n    \n    private boolean validate(TreeNode node, Integer low, Integer high) {\n        if (node == null) return true;\n        \n        if ((low != null && node.val <= low) || \n            (high != null && node.val >= high)) {\n            return false;\n        }\n        \n        return validate(node.left, low, node.val) && \n               validate(node.right, node.val, high);\n    }\n}`,
            cpp: `class Solution {\npublic:\n    bool isValidBST(TreeNode* root) {\n        return validate(root, LONG_MIN, LONG_MAX);\n    }\n    \n    bool validate(TreeNode* node, long low, long high) {\n        if (!node) return true;\n        if (node->val <= low || node->val >= high) return false;\n        return validate(node->left, low, node->val) && \n               validate(node->right, node->val, high);\n    }\n};`,
            javascript: `/**\n * @param {TreeNode} root\n * @return {boolean}\n */\nvar isValidBST = function(root) {\n    const validate = (node, low, high) => {\n        if (!node) return true;\n        if ((low !== null && node.val <= low) || \n            (high !== null && node.val >= high)) {\n            return false;\n        }\n        return validate(node.left, low, node.val) && \n               validate(node.right, node.val, high);\n    };\n    return validate(root, null, null);\n};`
        },
        complexity: {
            time: { value: "O(N)", explanation: "We visit every node exactly once to validate it against the range." },
            space: { value: "O(H)", explanation: "H is the height of the tree. Used by the recursion stack." }
        },
        visualSteps: [
            {
                desc: "Step 1: Start Validation. Initial Range: (-∞, +∞)",
                svg: (
                    <g>
                        <text x="400" y="30" textAnchor="middle" fill="#6B7280" fontSize="14">Step 1: Start Validation</text>
                        <rect x="250" y="215" width="300" height="36" rx="4" fill="#DBEAFE" stroke="#3B82F6" />
                        <text x="400" y="238" textAnchor="middle" fill="#1E3A8A" fontSize="12">Range: (-∞, +∞)</text>
                        <line x1="400" y1="80" x2="250" y2="180" stroke="#E5E7EB" strokeWidth="2" />
                        <line x1="400" y1="80" x2="550" y2="180" stroke="#E5E7EB" strokeWidth="2" />
                        <line x1="250" y1="180" x2="150" y2="280" stroke="#E5E7EB" strokeWidth="2" />
                        <line x1="250" y1="180" x2="350" y2="280" stroke="#E5E7EB" strokeWidth="2" />
                        <line x1="550" y1="180" x2="450" y2="280" stroke="#E5E7EB" strokeWidth="2" />
                        <line x1="550" y1="180" x2="650" y2="280" stroke="#E5E7EB" strokeWidth="2" />
                        <circle cx="400" cy="80" r="30" fill="#10B981" stroke="#059669" strokeWidth="4" />
                        <text x="400" y="85" textAnchor="middle" fill="white" fontWeight="600" fontSize="14">5</text>
                        <circle cx="250" cy="180" r="25" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2" />
                        <text x="250" y="185" textAnchor="middle" fill="#6B7280" fontWeight="600" fontSize="14">1</text>
                        <circle cx="550" cy="180" r="25" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2" />
                        <text x="550" y="185" textAnchor="middle" fill="#6B7280" fontWeight="600" fontSize="14">7</text>
                        <circle cx="150" cy="280" r="25" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2" />
                        <text x="150" y="285" textAnchor="middle" fill="#6B7280" fontWeight="600" fontSize="14">null</text>
                        <circle cx="350" cy="280" r="25" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2" />
                        <text x="350" y="285" textAnchor="middle" fill="#6B7280" fontWeight="600" fontSize="14">null</text>
                        <circle cx="450" cy="280" r="25" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2" />
                        <text x="450" y="285" textAnchor="middle" fill="#6B7280" fontWeight="600" fontSize="14">3</text>
                        <circle cx="650" cy="280" r="25" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2" />
                        <text x="650" y="285" textAnchor="middle" fill="#6B7280" fontWeight="600" fontSize="14">8</text>
                    </g>
                )
            },
            {
                desc: "Step 2: Validate Root (5). 5 is within (-∞, +∞).",
                svg: (
                    <g>
                        <text x="400" y="30" textAnchor="middle" fill="#6B7280" fontSize="14">Step 2: Validate Root (5)</text>
                        <rect x="250" y="215" width="300" height="36" rx="4" fill="#DBEAFE" stroke="#3B82F6" />
                        <text x="400" y="238" textAnchor="middle" fill="#1E3A8A" fontSize="12">Range: (-∞, +∞)</text>
                        <line x1="400" y1="80" x2="250" y2="180" stroke="#E5E7EB" strokeWidth="2" />
                        <line x1="400" y1="80" x2="550" y2="180" stroke="#E5E7EB" strokeWidth="2" />
                        <line x1="250" y1="180" x2="150" y2="280" stroke="#E5E7EB" strokeWidth="2" />
                        <line x1="250" y1="180" x2="350" y2="280" stroke="#E5E7EB" strokeWidth="2" />
                        <line x1="550" y1="180" x2="450" y2="280" stroke="#E5E7EB" strokeWidth="2" />
                        <line x1="550" y1="180" x2="650" y2="280" stroke="#E5E7EB" strokeWidth="2" />
                        <circle cx="400" cy="80" r="30" fill="#10B981" stroke="#059669" strokeWidth="4" />
                        <text x="400" y="85" textAnchor="middle" fill="white" fontWeight="600" fontSize="14">5</text>
                        <circle cx="250" cy="180" r="25" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2" />
                        <text x="250" y="185" textAnchor="middle" fill="#6B7280" fontWeight="600" fontSize="14">1</text>
                        <circle cx="550" cy="180" r="25" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2" />
                        <text x="550" y="185" textAnchor="middle" fill="#6B7280" fontWeight="600" fontSize="14">7</text>
                        <circle cx="450" cy="280" r="25" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2" />
                        <text x="450" y="285" textAnchor="middle" fill="#6B7280" fontWeight="600" fontSize="14">3</text>
                        <circle cx="650" cy="280" r="25" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2" />
                        <text x="650" y="285" textAnchor="middle" fill="#6B7280" fontWeight="600" fontSize="14">8</text>
                    </g>
                )
            },
            {
                desc: "Step 3: Check Left (1). Max becomes 5. Range (-∞, 5). Valid.",
                svg: (
                    <g>
                        <text x="400" y="30" textAnchor="middle" fill="#6B7280" fontSize="14">Step 3: Validate Left Child (1)</text>
                        <rect x="150" y="215" width="160" height="36" rx="4" fill="#DBEAFE" stroke="#3B82F6" />
                        <text x="230" y="238" textAnchor="middle" fill="#1E3A8A" fontSize="12">Range: (-∞, 5)</text>
                        <line x1="400" y1="80" x2="250" y2="180" stroke="#3B82F6" strokeWidth="3" />
                        <line x1="400" y1="80" x2="550" y2="180" stroke="#E5E7EB" strokeWidth="2" />
                        <line x1="250" y1="180" x2="150" y2="280" stroke="#E5E7EB" strokeWidth="2" />
                        <line x1="250" y1="180" x2="350" y2="280" stroke="#E5E7EB" strokeWidth="2" />
                        <line x1="550" y1="180" x2="450" y2="280" stroke="#E5E7EB" strokeWidth="2" />
                        <line x1="550" y1="180" x2="650" y2="280" stroke="#E5E7EB" strokeWidth="2" />
                        <circle cx="400" cy="80" r="25" fill="#10B981" opacity="0.3" />
                        <text x="400" y="85" textAnchor="middle" fill="#1E3A8A" fontWeight="600" opacity="1">5</text>
                        <circle cx="250" cy="180" r="30" fill="#10B981" stroke="#059669" strokeWidth="4" />
                        <text x="250" y="185" textAnchor="middle" fill="white" fontWeight="600" fontSize="14">1</text>
                        <circle cx="550" cy="180" r="25" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2" />
                        <text x="550" y="185" textAnchor="middle" fill="#6B7280" fontWeight="600" fontSize="14">7</text>
                        <circle cx="450" cy="280" r="25" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2" />
                        <text x="450" y="285" textAnchor="middle" fill="#6B7280" fontWeight="600" fontSize="14">3</text>
                        <circle cx="650" cy="280" r="25" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2" />
                        <text x="650" y="285" textAnchor="middle" fill="#6B7280" fontWeight="600" fontSize="14">8</text>
                    </g>
                )
            },
            {
                desc: "Step 4: Check Right (7). Min becomes 5. Range (5, +∞). Valid.",
                svg: (
                    <g>
                        <text x="400" y="30" textAnchor="middle" fill="#6B7280" fontSize="14">Step 4: Validate Right Child (7)</text>
                        <rect x="600" y="165" width="160" height="36" rx="4" fill="#DBEAFE" stroke="#3B82F6" />
                        <text x="680" y="188" textAnchor="middle" fill="#1E3A8A" fontSize="12">Range: (5, +∞)</text>
                        <line x1="400" y1="80" x2="550" y2="180" stroke="#3B82F6" strokeWidth="3" />
                        <line x1="400" y1="80" x2="250" y2="180" stroke="#E5E7EB" strokeWidth="2" />
                        <line x1="550" y1="180" x2="450" y2="280" stroke="#E5E7EB" strokeWidth="2" />
                        <line x1="550" y1="180" x2="650" y2="280" stroke="#E5E7EB" strokeWidth="2" />
                        <circle cx="400" cy="80" r="25" fill="#10B981" opacity="0.3" />
                        <text x="400" y="85" textAnchor="middle" fill="#1E3A8A" fontWeight="600" opacity="1">5</text>
                        <circle cx="250" cy="180" r="25" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2" />
                        <text x="250" y="185" textAnchor="middle" fill="#6B7280" fontWeight="600" fontSize="14">1</text>
                        <circle cx="550" cy="180" r="30" fill="#10B981" stroke="#059669" strokeWidth="4" />
                        <text x="550" y="185" textAnchor="middle" fill="white" fontWeight="600" fontSize="14">7</text>
                        <circle cx="450" cy="280" r="25" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2" />
                        <text x="450" y="285" textAnchor="middle" fill="#6B7280" fontWeight="600" fontSize="14">3</text>
                        <circle cx="650" cy="280" r="25" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2" />
                        <text x="650" y="285" textAnchor="middle" fill="#6B7280" fontWeight="600" fontSize="14">8</text>
                    </g>
                )
            },
            {
                desc: "Step 5: Check Right->Left (3). Range (5, 7). 3 < 5! Invalid.",
                svg: (
                    <g>
                        <text x="400" y="30" textAnchor="middle" fill="#EF4444" fontSize="14" fontWeight="700">Step 5: Violation! 3 is not {'>'} 5</text>
                        <rect x="250" y="215" width="160" height="36" rx="4" fill="#FEE2E2" stroke="#EF4444" />
                        <text x="330" y="238" textAnchor="middle" fill="#991B1B" fontSize="12">Range: (5, 7)</text>
                        <line x1="400" y1="80" x2="550" y2="180" stroke="#3B82F6" strokeWidth="2" />
                        <line x1="550" y1="180" x2="450" y2="280" stroke="#EF4444" strokeWidth="3" />
                        <line x1="400" y1="80" x2="250" y2="180" stroke="#E5E7EB" strokeWidth="2" />
                        <line x1="550" y1="180" x2="650" y2="280" stroke="#E5E7EB" strokeWidth="2" />
                        <circle cx="400" cy="80" r="25" fill="#10B981" opacity="0.3" />
                        <text x="400" y="85" textAnchor="middle" fill="#1E3A8A" fontWeight="600" opacity="1">5</text>
                        <circle cx="550" cy="180" r="25" fill="#10B981" opacity="0.3" />
                        <text x="550" y="185" textAnchor="middle" fill="#1E3A8A" fontWeight="600" opacity="1">7</text>
                        <circle cx="250" cy="180" r="25" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2" />
                        <text x="250" y="185" textAnchor="middle" fill="#6B7280" fontWeight="600" fontSize="14">1</text>
                        <circle cx="650" cy="280" r="25" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2" />
                        <text x="650" y="285" textAnchor="middle" fill="#6B7280" fontWeight="600" fontSize="14">8</text>
                        <circle cx="450" cy="280" r="30" fill="#EF4444" stroke="#B91C1C" strokeWidth="4" />
                        <text x="450" y="285" textAnchor="middle" fill="white" fontWeight="600" fontSize="14">3</text>
                        <text x="450" y="330" textAnchor="middle" fill="#EF4444" fontWeight="600">3 {'<'} 5 (Invalid)</text>
                    </g>
                )
            }
        ],
        tips: [
            {
                title: "Inorder Traversal",
                text: "An inorder traversal of a valid BST yields a sorted sequence."
            },
            {
                title: "Initial Range",
                text: "Start with (-∞, +∞)."
            },
            {
                title: "Integer Overflow",
                text: "Be careful with INT_MIN/MAX."
            },
            {
                title: "Iterative Solution",
                text: "Use a Stack to simulate recursion."
            }
        ],
        mistakes: [
            {
                title: "Local Check Only",
                text: "Only checking left < root < right is insufficient."
            },
            {
                title: "Handling Duplicates",
                text: "BST definitions vary on equality."
            },
            {
                title: "Binary Tree vs BST",
                text: "Don't assume input is already a BST."
            }
        ],
        related: []
    },
    "invert-binary-tree": {
        id: 226,
        title: "Invert Binary Tree",
        difficulty: "Easy",
        acceptance: "77.0%",
        submissions: "2.5M",
        tags: ["Tree", "DFS", "BFS", "Binary Tree"],
        description: "<p>Given the root of a binary tree, invert the tree, and return its root.</p>",
        intuition: [
            {
                title: "Recursive Structure",
                text: "A binary tree is defined recursively. The inversion operation is also recursive: the inverted tree is the root with its inverted left and right subtrees swapped."
            },
            {
                title: "Base Case",
                text: "If a node is null, there's nothing to invert. This is our recursion stopper."
            },
            {
                title: "Swap Step",
                text: "For any non-null node, we simply swap its left and right child pointers."
            },
            {
                title: "Propagation",
                text: "We repeat this process for all children, effectively mirroring the entire structure."
            }
        ],
        codeSnippets: {
            python: `class Solution:\n    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:\n        if not root:\n            return None\n        root.left, root.right = root.right, root.left\n        self.invertTree(root.left)\n        self.invertTree(root.right)\n        return root`,
            java: `class Solution {\n    public TreeNode invertTree(TreeNode root) {\n        if (root == null) {\n            return null;\n        }\n        TreeNode right = invertTree(root.right);\n        TreeNode left = invertTree(root.left);\n        root.left = right;\n        root.right = left;\n        return root;\n    }\n}`,
            cpp: `class Solution {\npublic:\n    TreeNode* invertTree(TreeNode* root) {\n        if (root == nullptr) {\n            return nullptr;\n        }\n        TreeNode* temp = root->left;\n        root->left = root->right;\n        root->right = temp;\n        invertTree(root->left);\n        invertTree(root->right);\n        return root;\n    }\n}`,
            javascript: `/**\n * @param {TreeNode} root\n * @return {TreeNode}\n */\nvar invertTree = function(root) {\n    if (!root) return null;\n    let temp = root.left;\n    root.left = root.right;\n    root.right = temp;\n    invertTree(root.left);\n    invertTree(root.right);\n    return root;\n};`
        },
        complexity: {
            time: { value: "O(N)", explanation: "We visit each node exactly once to swap its children." },
            space: { value: "O(N)", explanation: "Depth of recursion stack. O(N) worst case (skewed), O(log N) best case (balanced)." }
        },
        visualSteps: [
            {
                desc: "Step 1: Start at Root (4). Swap children 2 and 7.",
                svg: (
                    <g>
                        <defs>
                            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                <polygon points="0 0, 10 3.5, 0 7" fill="#3B82F6" />
                            </marker>
                        </defs>
                        <text x="400" y="30" textAnchor="middle" fill="#6B7280" fontSize="14">Input: [4,2,7,1,3,6,9]</text>
                        <line x1="400" y1="60" x2="250" y2="130" stroke="#9CA3AF" strokeWidth="2" />
                        <line x1="400" y1="60" x2="550" y2="130" stroke="#9CA3AF" strokeWidth="2" />
                        <line x1="250" y1="130" x2="175" y2="220" stroke="#9CA3AF" strokeWidth="2" />
                        <line x1="250" y1="130" x2="325" y2="220" stroke="#9CA3AF" strokeWidth="2" />
                        <line x1="550" y1="130" x2="475" y2="220" stroke="#9CA3AF" strokeWidth="2" />
                        <line x1="550" y1="130" x2="625" y2="220" stroke="#9CA3AF" strokeWidth="2" />
                        <circle cx="400" cy="60" r="20" fill="#3B82F6" stroke="white" strokeWidth="2" />
                        <text x="400" y="65" textAnchor="middle" fill="white" fontWeight="600" fontSize="14">4</text>
                        <circle cx="250" cy="130" r="20" fill="#10B981" stroke="white" strokeWidth="2" />
                        <text x="250" y="135" textAnchor="middle" fill="white" fontWeight="600" fontSize="14">2</text>
                        <circle cx="550" cy="130" r="20" fill="#F59E0B" stroke="white" strokeWidth="2" />
                        <text x="550" y="135" textAnchor="middle" fill="white" fontWeight="600" fontSize="14">7</text>
                        <circle cx="175" cy="220" r="20" fill="#EF4444" stroke="white" strokeWidth="2" />
                        <text x="175" y="225" textAnchor="middle" fill="white" fontWeight="600" fontSize="14">1</text>
                        <circle cx="325" cy="220" r="20" fill="#8B5CF6" stroke="white" strokeWidth="2" />
                        <text x="325" y="225" textAnchor="middle" fill="white" fontWeight="600" fontSize="14">3</text>
                        <circle cx="475" cy="220" r="20" fill="#EC4899" stroke="white" strokeWidth="2" />
                        <text x="475" y="225" textAnchor="middle" fill="white" fontWeight="600" fontSize="14">6</text>
                        <circle cx="625" cy="220" r="20" fill="#6366F1" stroke="white" strokeWidth="2" />
                        <text x="625" y="225" textAnchor="middle" fill="white" fontWeight="600" fontSize="14">9</text>
                        <text x="400" y="320" textAnchor="middle" fill="#6B7280" fontSize="16">Start at Root (4)</text>
                    </g>
                )
            },
            {
                desc: "Step 2: Recurse Left (now 7). Swap its children 6 and 9.",
                svg: (
                    <g>
                        <defs>
                            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                <polygon points="0 0, 10 3.5, 0 7" fill="#3B82F6" />
                            </marker>
                        </defs>
                        <text x="400" y="30" textAnchor="middle" fill="#6B7280" fontSize="14">Processing Root (4)</text>
                        <line x1="400" y1="60" x2="250" y2="130" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="4" />
                        <line x1="400" y1="60" x2="550" y2="130" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="4" />
                        <g opacity="0.8">
                            <line x1="250" y1="130" x2="175" y2="220" stroke="#9CA3AF" strokeWidth="2" />
                            <line x1="250" y1="130" x2="325" y2="220" stroke="#9CA3AF" strokeWidth="2" />
                            <circle cx="250" cy="130" r="20" fill="#10B981" stroke="white" strokeWidth="2" />
                            <text x="250" y="135" textAnchor="middle" fill="white" fontWeight="600" fontSize="14">2</text>
                            <circle cx="175" cy="220" r="20" fill="#EF4444" stroke="white" strokeWidth="2" />
                            <text x="175" y="225" textAnchor="middle" fill="white" fontWeight="600" fontSize="14">1</text>
                            <circle cx="325" cy="220" r="20" fill="#8B5CF6" stroke="white" strokeWidth="2" />
                            <text x="325" y="225" textAnchor="middle" fill="white" fontWeight="600" fontSize="14">3</text>
                        </g>
                        <g opacity="0.8">
                            <line x1="550" y1="130" x2="475" y2="220" stroke="#9CA3AF" strokeWidth="2" />
                            <line x1="550" y1="130" x2="625" y2="220" stroke="#9CA3AF" strokeWidth="2" />
                            <circle cx="550" cy="130" r="20" fill="#F59E0B" stroke="white" strokeWidth="2" />
                            <text x="550" y="135" textAnchor="middle" fill="white" fontWeight="600" fontSize="14">7</text>
                            <circle cx="475" cy="220" r="20" fill="#EC4899" stroke="white" strokeWidth="2" />
                            <text x="475" y="225" textAnchor="middle" fill="white" fontWeight="600" fontSize="14">6</text>
                            <circle cx="625" cy="220" r="20" fill="#6366F1" stroke="white" strokeWidth="2" />
                            <text x="625" y="225" textAnchor="middle" fill="white" fontWeight="600" fontSize="14">9</text>
                        </g>
                        <circle cx="400" cy="60" r="20" fill="#3B82F6" stroke="white" strokeWidth="2" />
                        <text x="400" y="65" textAnchor="middle" fill="white" fontWeight="600" fontSize="14">4</text>
                        <path d="M 270 130 Q 400 180 530 130" stroke="#3B82F6" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
                        <path d="M 530 110 Q 400 60 270 110" stroke="#F59E0B" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
                        <text x="400" y="320" textAnchor="middle" fill="#6B7280" fontSize="16">Swap children of 4: (2) and associated subtree swaps with (7)'s subtree.</text>
                    </g>
                )
            },
            {
                desc: "Step 3: Recurse Right (now 2). Swap its children 1 and 3.",
                svg: (
                    <g>
                        <defs>
                            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                <polygon points="0 0, 10 3.5, 0 7" fill="#3B82F6" />
                            </marker>
                        </defs>
                        <text x="400" y="30" textAnchor="middle" fill="#6B7280" fontSize="14">Processing Subtrees (7) and (2)</text>
                        <line x1="400" y1="60" x2="250" y2="130" stroke="#9CA3AF" strokeWidth="2" />
                        <line x1="400" y1="60" x2="550" y2="130" stroke="#9CA3AF" strokeWidth="2" />
                        <line x1="250" y1="130" x2="175" y2="220" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="4" />
                        <line x1="250" y1="130" x2="325" y2="220" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="4" />
                        <line x1="550" y1="130" x2="475" y2="220" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="4" />
                        <line x1="550" y1="130" x2="625" y2="220" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="4" />
                        <circle cx="400" cy="60" r="20" fill="#3B82F6" stroke="white" strokeWidth="2" />
                        <text x="400" y="65" textAnchor="middle" fill="white" fontWeight="600" fontSize="14">4</text>
                        <circle cx="250" cy="130" r="20" fill="#F59E0B" stroke="white" strokeWidth="2" />
                        <text x="250" y="135" textAnchor="middle" fill="white" fontWeight="600" fontSize="14">7</text>
                        <circle cx="550" cy="130" r="20" fill="#10B981" stroke="white" strokeWidth="2" />
                        <text x="550" y="135" textAnchor="middle" fill="white" fontWeight="600" fontSize="14">2</text>
                        <circle cx="175" cy="220" r="20" fill="#EC4899" stroke="white" strokeWidth="2" />
                        <text x="175" y="225" textAnchor="middle" fill="white" fontWeight="600" fontSize="14">6</text>
                        <circle cx="325" cy="220" r="20" fill="#6366F1" stroke="white" strokeWidth="2" />
                        <text x="325" y="225" textAnchor="middle" fill="white" fontWeight="600" fontSize="14">9</text>
                        <circle cx="475" cy="220" r="20" fill="#EF4444" stroke="white" strokeWidth="2" />
                        <text x="475" y="225" textAnchor="middle" fill="white" fontWeight="600" fontSize="14">1</text>
                        <circle cx="625" cy="220" r="20" fill="#8B5CF6" stroke="white" strokeWidth="2" />
                        <text x="625" y="225" textAnchor="middle" fill="white" fontWeight="600" fontSize="14">3</text>
                        <path d="M 190 220 Q 250 250 310 220" stroke="#EC4899" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
                        <path d="M 490 220 Q 550 250 610 220" stroke="#EF4444" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
                        <text x="400" y="320" textAnchor="middle" fill="#6B7280" fontSize="16">Recursively swap children of 7 (6&9) and children of 2 (1&3).</text>
                    </g>
                )
            },
            {
                desc: "Step 4: Process complete. Tree inverted.",
                svg: (
                    <g>
                        <defs>
                            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                <polygon points="0 0, 10 3.5, 0 7" fill="#3B82F6" />
                            </marker>
                        </defs>
                        <text x="400" y="30" textAnchor="middle" fill="#6B7280" fontSize="14">Output: [4,7,2,9,6,3,1]</text>
                        <line x1="400" y1="60" x2="250" y2="130" stroke="#9CA3AF" strokeWidth="2" />
                        <line x1="400" y1="60" x2="550" y2="130" stroke="#9CA3AF" strokeWidth="2" />
                        <line x1="250" y1="130" x2="175" y2="220" stroke="#9CA3AF" strokeWidth="2" />
                        <line x1="250" y1="130" x2="325" y2="220" stroke="#9CA3AF" strokeWidth="2" />
                        <line x1="550" y1="130" x2="475" y2="220" stroke="#9CA3AF" strokeWidth="2" />
                        <line x1="550" y1="130" x2="625" y2="220" stroke="#9CA3AF" strokeWidth="2" />
                        <circle cx="400" cy="60" r="20" fill="#3B82F6" stroke="white" strokeWidth="2" />
                        <text x="400" y="65" textAnchor="middle" fill="white" fontWeight="600" fontSize="14">4</text>
                        <circle cx="250" cy="130" r="20" fill="#F59E0B" stroke="white" strokeWidth="2" />
                        <text x="250" y="135" textAnchor="middle" fill="white" fontWeight="600" fontSize="14">7</text>
                        <circle cx="550" cy="130" r="20" fill="#10B981" stroke="white" strokeWidth="2" />
                        <text x="550" y="135" textAnchor="middle" fill="white" fontWeight="600" fontSize="14">2</text>
                        <circle cx="175" cy="220" r="20" fill="#6366F1" stroke="white" strokeWidth="2" />
                        <text x="175" y="225" textAnchor="middle" fill="white" fontWeight="600" fontSize="14">9</text>
                        <circle cx="325" cy="220" r="20" fill="#EC4899" stroke="white" strokeWidth="2" />
                        <text x="325" y="225" textAnchor="middle" fill="white" fontWeight="600" fontSize="14">6</text>
                        <circle cx="475" cy="220" r="20" fill="#8B5CF6" stroke="white" strokeWidth="2" />
                        <text x="475" y="225" textAnchor="middle" fill="white" fontWeight="600" fontSize="14">3</text>
                        <circle cx="625" cy="220" r="20" fill="#EF4444" stroke="white" strokeWidth="2" />
                        <text x="625" y="225" textAnchor="middle" fill="white" fontWeight="600" fontSize="14">1</text>
                        <text x="400" y="320" textAnchor="middle" fill="#6B7280" fontSize="16">Inversion complete.</text>
                        <text x="400" y="340" textAnchor="middle" fill="#10B981" fontSize="14" fontWeight="600">Runtime: 32ms (Beats 85%)</text>
                    </g>
                )
            }
        ],
        tips: [
            { title: "Interactive Approach", text: "Explain post-order or pre-order traversal concepts." },
            { title: "Iterative Solution", text: "Be prepared to implement using a Queue (BFS) or Stack (DFS)." },
            { title: "Edge Cases", text: "Explicitly mention empty tree and leaf nodes." },
            { title: "In-Place vs New Tree", text: "Clarify if you should modify in-place." }
        ],
        mistakes: [
            { title: "Forgetting return value", text: "Main function must return the new root." },
            { title: "Swapping only values", text: "Swap pointers, not just values, for correct object semantics." },
            { title: "Null Pointer Exceptions", text: "Forget to check if not root." }
        ],
        related: []
    },
    "maximum-depth-of-binary-tree": {
        id: 104,
        title: "Maximum Depth of Binary Tree",
        difficulty: "Easy",
        acceptance: "75.0%",
        submissions: "3.2M",
        tags: ["Tree", "DFS", "BFS", "Binary Tree"],
        description: "<p>Given the root of a binary tree, return its maximum depth.</p><p>A binary tree's <strong>maximum depth</strong> is the number of nodes along the longest path from the root node down to the farthest leaf node.</p>",
        intuition: [
            {
                title: "Recursive Definition",
                text: "The depth of a node is 1 + max(depth_left, depth_right)."
            },
            {
                title: "Base Case",
                text: "If a node is null, it contributes 0 to the depth."
            },
            {
                title: "Traversal",
                text: "We explore the tree (DFS). We go deep, finding the height of subtrees, and bubble the values up."
            }
        ],
        codeSnippets: {
            python: `class Solution:\n    def maxDepth(self, root: Optional[TreeNode]) -> int:\n        if not root:\n            return 0\n        return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))`,
            java: `class Solution {\n    public int maxDepth(TreeNode root) {\n        if (root == null) {\n            return 0;\n        }\n        return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));\n    }\n}`,
            cpp: `class Solution {\npublic:\n    int maxDepth(TreeNode* root) {\n        if (root == nullptr) {\n            return 0;\n        }\n        return 1 + max(maxDepth(root->left), maxDepth(root->right));\n    }\n}`,
            javascript: `/**\n * @param {TreeNode} root\n * @return {number}\n */\nvar maxDepth = function(root) {\n    if (!root) return 0;\n    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));\n};`
        },
        complexity: {
            time: { value: "O(N)", explanation: "We visit every node to ensure we find the longest path." },
            space: { value: "O(H)", explanation: "Recursion stack depth is equal to height of tree." }
        },
        visualSteps: [
            {
                desc: "Step 1: Start at Root (3). Calculate depth of left and right.",
                svg: (
                    <g>
                        <defs>
                            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                <polygon points="0 0, 10 3.5, 0 7" fill="#F59E0B" />
                            </marker>
                        </defs>
                        <text x="400" y="30" textAnchor="middle" fill="#6B7280" fontSize="14">Step 1: Start Depth Calculation</text>
                        <line x1="400" y1="60" x2="200" y2="160" stroke="#E5E7EB" strokeWidth="2" />
                        <line x1="400" y1="60" x2="600" y2="160" stroke="#E5E7EB" strokeWidth="2" />
                        <line x1="600" y1="160" x2="500" y2="260" stroke="#E5E7EB" strokeWidth="2" />
                        <line x1="600" y1="160" x2="700" y2="260" stroke="#E5E7EB" strokeWidth="2" />
                        <circle cx="400" cy="60" r="30" fill="#3B82F6" stroke="#2563EB" strokeWidth="4" />
                        <text x="400" y="65" textAnchor="middle" fill="white" fontWeight="600" fontSize="14">3</text>
                        <circle cx="200" cy="160" r="25" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2" />
                        <text x="200" y="165" textAnchor="middle" fill="#6B7280" fontWeight="600" fontSize="14">9</text>
                        <circle cx="600" cy="160" r="25" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2" />
                        <text x="600" y="165" textAnchor="middle" fill="#6B7280" fontWeight="600" fontSize="14">20</text>
                        <circle cx="500" cy="260" r="25" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2" />
                        <text x="500" y="265" textAnchor="middle" fill="#6B7280" fontWeight="600" fontSize="14">15</text>
                        <circle cx="700" cy="260" r="25" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2" />
                        <text x="700" y="265" textAnchor="middle" fill="#6B7280" fontWeight="600" fontSize="14">7</text>
                    </g>
                )
            },
            {
                desc: "Step 2: Go Left (9). Leaf node. Returns 1.",
                svg: (
                    <g>
                        <text x="400" y="30" textAnchor="middle" fill="#6B7280" fontSize="14">Step 2: Leaf Node (9)</text>
                        <line x1="400" y1="60" x2="200" y2="160" stroke="#F59E0B" strokeWidth="3" markerEnd="url(#arrowhead)" />
                        <line x1="400" y1="60" x2="600" y2="160" stroke="#E5E7EB" strokeWidth="2" />
                        <rect x="140" y="190" width="120" height="36" rx="4" fill="#DBEAFE" stroke="#3B82F6" />
                        <text x="200" y="213" textAnchor="middle" fill="#1E3A8A" fontSize="12">Return 1</text>
                        <circle cx="200" cy="160" r="30" fill="#10B981" stroke="#059669" strokeWidth="4" />
                        <text x="200" y="165" textAnchor="middle" fill="white" fontWeight="600" fontSize="14">9</text>
                        <circle cx="400" cy="60" r="25" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2" />
                        <text x="400" y="65" textAnchor="middle" fill="#6B7280" fontWeight="600" fontSize="14">3</text>
                    </g>
                )
            },
            {
                desc: "Step 3: Go Right (20). Calculate depth of children (15, 7).",
                svg: (
                    <g>
                        <text x="400" y="30" textAnchor="middle" fill="#6B7280" fontSize="14">Step 3: Calculate Depth of Node 20</text>
                        <line x1="600" y1="160" x2="500" y2="260" stroke="#F59E0B" strokeWidth="3" markerEnd="url(#arrowhead)" />
                        <line x1="600" y1="160" x2="700" y2="260" stroke="#F59E0B" strokeWidth="3" markerEnd="url(#arrowhead)" />
                        <rect x="650" y="140" width="140" height="40" rx="4" fill="#FEF3C7" stroke="#F59E0B" />
                        <text x="720" y="165" textAnchor="middle" fill="#92400E" fontSize="12">max(1, 1) + 1 = 2</text>
                        <circle cx="600" cy="160" r="30" fill="#F59E0B" stroke="#D97706" strokeWidth="4" />
                        <text x="600" y="165" textAnchor="middle" fill="white" fontWeight="600" fontSize="14">20</text>
                        <text x="600" y="210" textAnchor="middle" fill="#F59E0B" fontWeight="600" fontSize="14">d=2</text>
                        <circle cx="200" cy="160" r="25" fill="#10B981" opacity="0.5" />
                        <text x="200" y="165" textAnchor="middle" fill="white" opacity="0.5">9</text>
                        <text x="200" y="200" textAnchor="middle" fill="#10B981" opacity="0.5">d=1</text>
                    </g>
                )
            },
            {
                desc: "Step 4: Children 15 and 7 are leaves (return 1). Node 20 returns 1+1=2. Root returns 1+2=3.",
                svg: (
                    <g>
                        <text x="400" y="30" textAnchor="middle" fill="#6B7280" fontSize="14">Step 4: Final Calculation</text>
                        <rect x="330" y="100" width="140" height="40" rx="4" fill="#FEF3C7" stroke="#F59E0B" />
                        <text x="400" y="125" textAnchor="middle" fill="#92400E" fontSize="12">max(1, 2) + 1 = 3</text>
                        <line x1="400" y1="60" x2="200" y2="160" stroke="#10B981" strokeWidth="3" />
                        <line x1="400" y1="60" x2="600" y2="160" stroke="#10B981" strokeWidth="3" />
                        <circle cx="400" cy="60" r="30" fill="#10B981" stroke="#059669" strokeWidth="4" />
                        <text x="400" y="65" textAnchor="middle" fill="white" fontWeight="600" fontSize="14">3</text>
                        <text x="400" y="160" textAnchor="middle" fill="#10B981" fontWeight="600" fontSize="16">Depth = 3</text>
                        <circle cx="200" cy="160" r="25" fill="#10B981" opacity="0.5" />
                        <text x="200" y="165" textAnchor="middle" fill="white" opacity="0.5">9</text>
                        <text x="200" y="200" textAnchor="middle" fill="#10B981" opacity="0.5">d=1</text>
                        <circle cx="600" cy="160" r="25" fill="#10B981" opacity="0.5" />
                        <text x="600" y="165" textAnchor="middle" fill="white" opacity="0.5">20</text>
                        <text x="600" y="200" textAnchor="middle" fill="#10B981" opacity="0.5">d=2</text>
                    </g>
                )
            }
        ],
        tips: [
            { title: "Iterative Approaches", text: "Know how to solve using BFS (Level Order) or DFS with Stack." },
            { title: "Tail Recursion", text: "Discuss if the language supports it (usually requires accumulator)." },
            { title: "Balanced vs Skewed", text: "Space complexity varies from log(N) to N." }
        ],
        mistakes: [
            { title: "Off-by-one", text: "Confusing counting edges vs nodes. Problem asks for nodes." },
            { title: "Base Case", text: "Forgetting if not root: return 0." },
            { title: "Stack Overflow", text: "Deep recursion on very skewed trees without iterative fallback." }
        ],
        related: []
    },
    "kth-smallest-element-in-a-bst": {
        id: 230,
        title: "Kth Smallest Element in a BST",
        difficulty: "Medium",
        acceptance: "73.5%",
        submissions: "2.1M",
        tags: ["Tree", "DFS", "BST", "Binary Tree"],
        description: "<p>Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.</p>",
        intuition: [
            {
                title: "BST Property",
                text: "In a Binary Search Tree (BST), the left subtree contains values smaller than the root, and the right subtree contains values larger."
            },
            {
                title: "Inorder Traversal",
                text: "Performing an inorder traversal (Left -> Root -> Right) on a BST visits the nodes in ascending sorted order."
            },
            {
                title: "Finding k-th",
                text: "Therefore, the k-th node visited during an inorder traversal is the k-th smallest element in the tree."
            }
        ],
        codeSnippets: {
            python: `class Solution:\n    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:\n        def inorder(node):\n            return inorder(node.left) + [node.val] + inorder(node.right) if node else []\n        \n        return inorder(root)[k - 1]`,
            java: `class Solution {\n    public int kthSmallest(TreeNode root, int k) {\n        ArrayList<Integer> nums = new ArrayList<Integer>();\n        inorder(root, nums);\n        return nums.get(k - 1);\n    }\n    public void inorder(TreeNode root, ArrayList<Integer> arr) {\n        if (root == null) return;\n        inorder(root.left, arr);\n        arr.add(root.val);\n        inorder(root.right, arr);\n    }\n}`,
            cpp: `class Solution {\npublic:\n    void inorder(TreeNode* root, vector<int>& nums) {\n        if (!root) return;\n        inorder(root->left, nums);\n        nums.push_back(root->val);\n        inorder(root->right, nums);\n    }\n    int kthSmallest(TreeNode* root, int k) {\n        vector<int> nums;\n        inorder(root, nums);\n        return nums[k - 1];\n    }\n}`,
            javascript: `/**\n * @param {TreeNode} root\n * @param {number} k\n * @return {number}\n */\nvar kthSmallest = function(root, k) {\n    let result = [];\n    const inorder = (node) => {\n        if (!node) return;\n        inorder(node.left);\n        result.push(node.val);\n        inorder(node.right);\n    };\n    inorder(root);\n    return result[k - 1];\n};`
        },
        complexity: {
            time: { value: "O(H + k)", explanation: "We traverse down the height H to the leftmost node, then process k nodes." },
            space: { value: "O(H)", explanation: "Recursion stack depth is proportional to height of the tree." }
        },
        visualSteps: [
            {
                desc: "Step 1: Start with the BST structure. Target k=3.",
                svg: (
                    <g>
                        <defs>
                            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                <polygon points="0 0, 10 3.5, 0 7" fill="#3B82F6" />
                            </marker>
                        </defs>
                        <text x="400" y="30" textAnchor="middle" fill="#6B7280" fontSize="14">Input: k = 3</text>
                        <line x1="400" y1="60" x2="250" y2="160" stroke="#E5E7EB" strokeWidth="2" />
                        <line x1="400" y1="60" x2="550" y2="160" stroke="#E5E7EB" strokeWidth="2" />
                        <line x1="250" y1="160" x2="150" y2="260" stroke="#E5E7EB" strokeWidth="2" />
                        <line x1="250" y1="160" x2="350" y2="260" stroke="#E5E7EB" strokeWidth="2" />
                        <circle cx="400" cy="60" r="25" fill="#3B82F6" stroke="white" strokeWidth="2" />
                        <text x="400" y="65" textAnchor="middle" fill="white" fontWeight="600" fontSize="14">3</text>
                        <circle cx="250" cy="160" r="25" fill="#3B82F6" stroke="white" strokeWidth="2" />
                        <text x="250" y="165" textAnchor="middle" fill="white" fontWeight="600" fontSize="14">1</text>
                        <circle cx="550" cy="160" r="25" fill="#3B82F6" stroke="white" strokeWidth="2" />
                        <text x="550" y="165" textAnchor="middle" fill="white" fontWeight="600" fontSize="14">4</text>
                        <circle cx="150" cy="260" r="25" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2" />
                        <text x="150" y="265" textAnchor="middle" fill="#6B7280" fontWeight="600" fontSize="14">null</text>
                        <circle cx="350" cy="260" r="25" fill="#3B82F6" stroke="white" strokeWidth="2" />
                        <text x="350" y="265" textAnchor="middle" fill="white" fontWeight="600" fontSize="14">2</text>
                    </g>
                )
            },
            {
                desc: "Step 2: Traverse all the way left. Node 1 is the 1st smallest.",
                svg: (
                    <g>
                        <text x="400" y="30" textAnchor="middle" fill="#6B7280" fontSize="14">Step 2: Inorder Traversal - Visit Left</text>
                        <line x1="400" y1="60" x2="250" y2="160" stroke="#E5E7EB" strokeWidth="2" />
                        <line x1="400" y1="60" x2="550" y2="160" stroke="#E5E7EB" strokeWidth="2" />
                        <line x1="250" y1="160" x2="150" y2="260" stroke="#3B82F6" strokeWidth="3" markerEnd="url(#arrowhead)" />
                        <line x1="250" y1="160" x2="350" y2="260" stroke="#E5E7EB" strokeWidth="2" />
                        <circle cx="250" cy="160" r="25" fill="#10B981" stroke="white" strokeWidth="2" />
                        <text x="250" y="165" textAnchor="middle" fill="white" fontWeight="600" fontSize="14">1</text>
                        <text x="250" y="200" textAnchor="middle" fill="#10B981" fontSize="14" fontWeight="600">k=1</text>
                        <circle cx="400" cy="60" r="25" fill="#3B82F6" stroke="white" strokeWidth="2" />
                        <text x="400" y="65" textAnchor="middle" fill="white" fontWeight="600" fontSize="14">3</text>
                        <circle cx="550" cy="160" r="25" fill="#3B82F6" stroke="white" strokeWidth="2" />
                        <text x="550" y="165" textAnchor="middle" fill="white" fontWeight="600" fontSize="14">4</text>
                        <circle cx="150" cy="260" r="25" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2" />
                        <text x="150" y="265" textAnchor="middle" fill="#6B7280" fontWeight="600" fontSize="14">null</text>
                        <circle cx="350" cy="260" r="25" fill="#3B82F6" stroke="white" strokeWidth="2" />
                        <text x="350" y="265" textAnchor="middle" fill="white" fontWeight="600" fontSize="14">2</text>
                    </g>
                )
            },
            {
                desc: "Step 3: Backtrack to parent Node 2. Node 2 is the 2nd smallest.",
                svg: (
                    <g>
                        <text x="400" y="30" textAnchor="middle" fill="#6B7280" fontSize="14">Step 3: Inorder Traversal - Visit Node 2</text>
                        <line x1="400" y1="60" x2="250" y2="160" stroke="#E5E7EB" strokeWidth="2" />
                        <line x1="400" y1="60" x2="550" y2="160" stroke="#E5E7EB" strokeWidth="2" />
                        <line x1="250" y1="160" x2="150" y2="260" stroke="#E5E7EB" strokeWidth="2" />
                        <line x1="250" y1="160" x2="350" y2="260" stroke="#3B82F6" strokeWidth="3" markerEnd="url(#arrowhead)" />
                        <rect x="290" y="240" width="120" height="40" rx="4" fill="#DBEAFE" stroke="#3B82F6" />
                        <text x="350" y="265" textAnchor="middle" fill="#1E3A8A" fontSize="12">Right Child (2)</text>
                        <circle cx="350" cy="260" r="30" fill="#10B981" stroke="white" strokeWidth="3" />
                        <text x="350" y="265" textAnchor="middle" fill="white" fontWeight="600" fontSize="16">2</text>
                        <text x="350" y="310" textAnchor="middle" fill="#10B981" fontSize="14" fontWeight="600">k=2</text>
                        <circle cx="250" cy="160" r="25" fill="#10B981" opacity="0.5" />
                        <text x="250" y="165" textAnchor="middle" fill="white" opacity="0.5">1</text>
                    </g>
                )
            },
            {
                desc: "Step 4: Backtrack to parent Node 3. Node 3 is the 3rd smallest. Target!",
                svg: (
                    <g>
                        <text x="400" y="30" textAnchor="middle" fill="#6B7280" fontSize="14">Step 4: Visit Root (3). Target Reached!</text>
                        <line x1="400" y1="60" x2="250" y2="160" stroke="#3B82F6" strokeWidth="3" />
                        <line x1="400" y1="60" x2="550" y2="160" stroke="#E5E7EB" strokeWidth="2" />
                        <rect x="440" y="40" width="120" height="40" rx="4" fill="#D1FAE5" stroke="#10B981" />
                        <text x="500" y="65" textAnchor="middle" fill="#047857" fontSize="12" fontWeight="600">Found k=3!</text>
                        <circle cx="400" cy="60" r="30" fill="#F59E0B" stroke="#D97706" strokeWidth="4" />
                        <text x="400" y="65" textAnchor="middle" fill="white" fontWeight="600" fontSize="16">3</text>
                        <circle cx="250" cy="160" r="25" fill="#10B981" opacity="0.5" />
                        <text x="250" y="165" textAnchor="middle" fill="white" opacity="0.5">1</text>
                        <circle cx="350" cy="260" r="25" fill="#10B981" opacity="0.5" />
                        <text x="350" y="265" textAnchor="middle" fill="white" opacity="0.5">2</text>
                        <text x="400" y="120" textAnchor="middle" fill="#D97706" fontSize="16" fontWeight="700">Result: 3</text>
                    </g>
                )
            }
        ],
        tips: [
            { title: "Constraint Optimization", text: "If BST modified often, store count of nodes in left subtree." },
            { title: "Iterative Solution", text: "Use stack-based inorder traversal to stop early." },
            { title: "k vs N", text: "If k is small, complexity is dominated by H." }
        ],
        mistakes: [
            { title: "Indexing", text: "1-based indexing for k vs 0-based arrays." },
            { title: "Not using BST property", text: "Sorting all nodes is O(N log N), inorder is O(N)." }
        ],
        related: []
    },
    "binary-tree-level-order-traversal": {
        id: 102,
        title: "Binary Tree Level Order Traversal",
        difficulty: "Medium",
        acceptance: "68.4%",
        submissions: "2.8M",
        tags: ["Tree", "BFS", "Binary Tree"],
        description: "<p>Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).</p>",
        intuition: [
            {
                title: "Level-by-Level",
                text: "Group nodes by their depth level, from top to bottom."
            },
            {
                title: "BFS Strategy",
                text: "Breadth-First Search (BFS) is the natural choice for exploring a tree or graph layer by layer."
            },
            {
                title: "Queue Usage",
                text: "Use a queue to store nodes of the current level. For each node processed, enqueue its children."
            }
        ],
        codeSnippets: {
            python: `class Solution:\n    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:\n        if not root:\n            return []\n        \n        result = []\n        queue = collections.deque([root])\n        \n        while queue:\n            level_size = len(queue)\n            current_level = []\n            \n            for _ in range(level_size):\n                node = queue.popleft()\n                current_level.append(node.val)\n                \n                if node.left:\n                    queue.append(node.left)\n                if node.right:\n                    queue.append(node.right)\n            \n            result.append(current_level)\n            \n        return result`,
            java: `class Solution {\n    public List<List<Integer>> levelOrder(TreeNode root) {\n        List<List<Integer>> result = new ArrayList<>();\n        if (root == null) return result;\n        \n        Queue<TreeNode> queue = new LinkedList<>();\n        queue.add(root);\n        \n        while (!queue.isEmpty()) {\n            int levelSize = queue.size();\n            List<Integer> currentLevel = new ArrayList<>();\n            \n            for (int i = 0; i < levelSize; i++) {\n                TreeNode node = queue.poll();\n                currentLevel.add(node.val);\n                \n                if (node.left != null) queue.add(node.left);\n                if (node.right != null) queue.add(node.right);\n            }\n            result.add(currentLevel);\n        }\n        return result;\n    }\n}`,
            cpp: `class Solution {\npublic:\n    vector<vector<int>> levelOrder(TreeNode* root) {\n        vector<vector<int>> result;\n        if (!root) return result;\n        \n        queue<TreeNode*> q;\n        q.push(root);\n        \n        while (!q.empty()) {\n            int levelSize = q.size();\n            vector<int> currentLevel;\n            \n            for (int i = 0; i < levelSize; i++) {\n                TreeNode* node = q.front();\n                q.pop();\n                currentLevel.push_back(node->val);\n                \n                if (node->left) q.push(node->left);\n                if (node->right) q.push(node->right);\n            }\n            result.push_back(currentLevel);\n        }\n        return result;\n    }\n}`,
            javascript: `/**\n * @param {TreeNode} root\n * @return {number[][]}\n */\nvar levelOrder = function(root) {\n    if (!root) return [];\n    \n    const result = [];\n    const queue = [root];\n    \n    while (queue.length > 0) {\n        const levelSize = queue.length;\n        const currentLevel = [];\n        \n        for (let i = 0; i < levelSize; i++) {\n            const node = queue.shift();\n            currentLevel.push(node.val);\n            \n            if (node.left) queue.push(node.left);\n            if (node.right) queue.push(node.right);\n        }\n        result.push(currentLevel);\n    }\n    return result;\n};`
        },
        complexity: {
            time: { value: "O(N)", explanation: "Process each node exactly once." },
            space: { value: "O(W)", explanation: "W is max width. Queue can hold N/2 nodes in worst case." }
        },
        visualSteps: [
            {
                desc: "Step 1: Start BFS with Root in Queue.",
                svg: (
                    <g>
                        <defs>
                            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                                <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
                                <feOffset dx="1" dy="1" result="offsetblur" />
                                <feFlood floodOpacity="0.1" />
                                <feComposite in2="offsetblur" operator="in" />
                                <feMerge>
                                    <feMergeNode />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>
                        <text x="400" y="20" textAnchor="middle" fill="#6B7280" fontSize="14">Level 1: Process Root (3)</text>
                        <line x1="400" y1="60" x2="250" y2="160" stroke="#E5E7EB" strokeWidth="2" />
                        <line x1="400" y1="60" x2="550" y2="160" stroke="#E5E7EB" strokeWidth="2" />
                        <line x1="550" y1="160" x2="480" y2="260" stroke="#E5E7EB" strokeWidth="2" />
                        <line x1="550" y1="160" x2="620" y2="260" stroke="#E5E7EB" strokeWidth="2" />
                        <circle cx="400" cy="60" r="30" fill="#3B82F6" stroke="#2563EB" strokeWidth="4" />
                        <text x="400" y="61" textAnchor="middle" fill="white" fontWeight="600" fontSize="16">3</text>
                        <circle cx="250" cy="160" r="25" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2" />
                        <text x="250" y="165" textAnchor="middle" fill="#6B7280" fontWeight="600" fontSize="14">9</text>
                        <circle cx="550" cy="160" r="25" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2" />
                        <text x="550" y="165" textAnchor="middle" fill="#6B7280" fontWeight="600" fontSize="14">20</text>
                        <circle cx="480" cy="260" r="25" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2" />
                        <text x="480" y="265" textAnchor="middle" fill="#6B7280" fontWeight="600" fontSize="14">15</text>
                        <circle cx="620" cy="260" r="25" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2" />
                        <text x="620" y="265" textAnchor="middle" fill="#6B7280" fontWeight="600" fontSize="14">7</text>
                        <rect x="50" y="320" width="300" height="50" rx="8" fill="white" stroke="#E5E7EB" strokeWidth="1" filter="url(#shadow)" />
                        <text x="70" y="350" fill="#374151" fontSize="14" fontFamily="monospace">
                            <tspan fontWeight="600" fill="#6B7280">Result:</tspan> []
                        </text>
                        <rect x="450" y="320" width="300" height="50" rx="8" fill="white" stroke="#E5E7EB" strokeWidth="1" filter="url(#shadow)" />
                        <text x="470" y="350" fill="#374151" fontSize="14" fontFamily="monospace">
                            <tspan fontWeight="600" fill="#6B7280">Queue Next:</tspan> [3]
                        </text>
                    </g>
                )
            },
            {
                desc: "Step 2: Level 1: Process Root. Add children to Queue.",
                svg: (
                    <g>
                        <text x="400" y="20" textAnchor="middle" fill="#6B7280" fontSize="14">Level 2: Process Nodes 9, 20</text>
                        <line x1="400" y1="60" x2="250" y2="160" stroke="#10B981" opacity="0.5" strokeWidth="2" />
                        <line x1="400" y1="60" x2="550" y2="160" stroke="#10B981" opacity="0.5" strokeWidth="2" />
                        <line x1="550" y1="160" x2="480" y2="260" stroke="#E5E7EB" strokeWidth="2" />
                        <line x1="550" y1="160" x2="620" y2="260" stroke="#E5E7EB" strokeWidth="2" />
                        <circle cx="400" cy="60" r="25" fill="#10B981" opacity="0.5" />
                        <text x="400" y="65" textAnchor="middle" fill="white" opacity="0.5">3</text>
                        <circle cx="250" cy="160" r="30" fill="#3B82F6" stroke="#2563EB" strokeWidth="4" />
                        <text x="250" y="161" textAnchor="middle" fill="white" fontWeight="600" fontSize="16">9</text>
                        <circle cx="550" cy="160" r="30" fill="#3B82F6" stroke="#2563EB" strokeWidth="4" />
                        <text x="550" y="161" textAnchor="middle" fill="white" fontWeight="600" fontSize="16">20</text>
                        <circle cx="480" cy="260" r="25" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2" />
                        <text x="480" y="265" textAnchor="middle" fill="white" fontWeight="600" fontSize="14">15</text>
                        <circle cx="620" cy="260" r="25" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2" />
                        <text x="620" y="265" textAnchor="middle" fill="white" fontWeight="600" fontSize="14">7</text>
                        <rect x="50" y="320" width="300" height="50" rx="8" fill="white" stroke="#E5E7EB" strokeWidth="1" filter="url(#shadow)" />
                        <text x="70" y="350" fill="#374151" fontSize="14" fontFamily="monospace">
                            <tspan fontWeight="600" fill="#6B7280">Result:</tspan> [[3]]
                        </text>
                        <rect x="450" y="320" width="300" height="50" rx="8" fill="white" stroke="#E5E7EB" strokeWidth="1" filter="url(#shadow)" />
                        <text x="470" y="350" fill="#374151" fontSize="14" fontFamily="monospace">
                            <tspan fontWeight="600" fill="#6B7280">Queue Next:</tspan> [9, 20]
                        </text>
                    </g>
                )
            },
            {
                desc: "Step 3: Level 2: Process nodes in Queue. Add their children.",
                svg: (
                    <g>
                        <text x="400" y="20" textAnchor="middle" fill="#6B7280" fontSize="14">Level 3: Process Nodes 15, 7</text>
                        <line x1="400" y1="60" x2="250" y2="160" stroke="#10B981" opacity="0.5" strokeWidth="2" />
                        <line x1="400" y1="60" x2="550" y2="160" stroke="#10B981" opacity="0.5" strokeWidth="2" />
                        <line x1="550" y1="160" x2="480" y2="260" stroke="#10B981" strokeWidth="2" />
                        <line x1="550" y1="160" x2="620" y2="260" stroke="#10B981" strokeWidth="2" />
                        <circle cx="400" cy="60" r="25" fill="#10B981" opacity="0.5" />
                        <text x="400" y="65" textAnchor="middle" fill="white" opacity="0.5">3</text>
                        <circle cx="250" cy="160" r="25" fill="#10B981" opacity="0.5" />
                        <text x="250" y="165" textAnchor="middle" fill="white" opacity="0.5">9</text>
                        <circle cx="550" cy="160" r="25" fill="#10B981" opacity="0.5" />
                        <text x="550" y="165" textAnchor="middle" fill="white" opacity="0.5">20</text>
                        <circle cx="480" cy="260" r="30" fill="#3B82F6" stroke="#2563EB" strokeWidth="4" />
                        <text x="480" y="261" textAnchor="middle" fill="white" fontWeight="600" fontSize="16">15</text>
                        <circle cx="620" cy="260" r="30" fill="#3B82F6" stroke="#2563EB" strokeWidth="4" />
                        <text x="620" y="261" textAnchor="middle" fill="white" fontWeight="600" fontSize="16">7</text>
                        <rect x="50" y="320" width="300" height="50" rx="8" fill="white" stroke="#E5E7EB" strokeWidth="1" filter="url(#shadow)" />
                        <text x="70" y="350" fill="#374151" fontSize="14" fontFamily="monospace">
                            <tspan fontWeight="600" fill="#6B7280">Result:</tspan> [[3], [9, 20]]
                        </text>
                        <rect x="450" y="320" width="300" height="50" rx="8" fill="white" stroke="#E5E7EB" strokeWidth="1" filter="url(#shadow)" />
                        <text x="470" y="350" fill="#374151" fontSize="14" fontFamily="monospace">
                            <tspan fontWeight="600" fill="#6B7280">Queue Next:</tspan> [15, 7]
                        </text>
                    </g>
                )
            },
            {
                desc: "Step 4: Level 3: Process remaining nodes. Done.",
                svg: (
                    <g>
                        <text x="400" y="20" textAnchor="middle" fill="#6B7280" fontSize="14">Traversal Complete</text>
                        <line x1="400" y1="60" x2="250" y2="160" stroke="#10B981" opacity="0.5" strokeWidth="2" />
                        <line x1="400" y1="60" x2="550" y2="160" stroke="#10B981" opacity="0.5" strokeWidth="2" />
                        <line x1="550" y1="160" x2="480" y2="260" stroke="#10B981" opacity="0.5" strokeWidth="2" />
                        <line x1="550" y1="160" x2="620" y2="260" stroke="#10B981" opacity="0.5" strokeWidth="2" />
                        <circle cx="400" cy="60" r="25" fill="#10B981" opacity="0.5" />
                        <text x="400" y="65" textAnchor="middle" fill="white" opacity="0.5">3</text>
                        <circle cx="250" cy="160" r="25" fill="#10B981" opacity="0.5" />
                        <text x="250" y="165" textAnchor="middle" fill="white" opacity="0.5">9</text>
                        <circle cx="550" cy="160" r="25" fill="#10B981" opacity="0.5" />
                        <text x="550" y="165" textAnchor="middle" fill="white" opacity="0.5">20</text>
                        <circle cx="480" cy="260" r="25" fill="#10B981" opacity="0.5" />
                        <text x="480" y="265" textAnchor="middle" fill="white" opacity="0.5">15</text>
                        <circle cx="620" cy="260" r="25" fill="#10B981" opacity="0.5" />
                        <text x="620" y="265" textAnchor="middle" fill="white" opacity="0.5">7</text>
                        <rect x="150" y="320" width="500" height="50" rx="8" fill="#ECFDF5" stroke="#10B981" strokeWidth="2" filter="url(#shadow)" />
                        <text x="400" y="350" textAnchor="middle" fill="#065F46" fontSize="16" fontFamily="monospace" fontWeight="600">
                            Result: [[3], [9, 20], [15, 7]]
                        </text>
                    </g>
                )
            }
        ],
        tips: [
            { title: "DFS vs BFS", text: "BFS is cleaner for level-order." },
            { title: "Queue Size", text: "Capture queue.size() to separate levels." },
            { title: "ZigZag Variation", text: "Common follow-up (Problem 103)." }
        ],
        mistakes: [
            { title: "Forgetting Level Loop", text: "Must have inner loop for level separation." },
            { title: "Empty Root", text: "Handle null root first." }
        ],
        related: []
    }
};
