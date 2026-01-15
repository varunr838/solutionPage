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
};