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
},"valid-parentheses": {
  id: 20,
  title: "Valid Parentheses",
  difficulty: "Easy",
  acceptance: "41.9%",
  submissions: "6.1M",
  tags: ["String", "Stack"],
  description: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if open brackets are closed by the same type of brackets and in the correct order.",
  intuition: [
    {
      title: "Understand the problem:",
      text: "We need to check whether every opening bracket has a corresponding closing bracket of the same type, and that brackets close in the correct order."
    },
    {
      title: "Key observation:",
      text: "The most recent opening bracket must be closed first. This Last-In-First-Out (LIFO) behavior naturally suggests using a stack."
    },
    {
      title: "Stack-based approach:",
      text: "We iterate through the string. When we see an opening bracket, we push it onto the stack. When we see a closing bracket, we check whether it matches the top of the stack."
    },
    {
      title: "Final validation:",
      text: "At the end, the stack must be empty. If not, there are unmatched opening brackets, making the string invalid."
    }
  ],
  codeSnippets: {
    java: `public boolean isValid(String s) {\n    Stack<Character> stack = new Stack<>();\n    for (char c : s.toCharArray()) {\n        if (c == '(' || c == '{' || c == '[') {\n            stack.push(c);\n        } else {\n            if (stack.isEmpty()) return false;\n            char top = stack.pop();\n            if ((c == ')' && top != '(') ||\n                (c == '}' && top != '{') ||\n                (c == ']' && top != '[')) {\n                return false;\n            }\n        }\n    }\n    return stack.isEmpty();\n}`,
    python: `def isValid(s):\n    stack = []\n    mapping = {')': '(', '}': '{', ']': '['}\n    for char in s:\n        if char in mapping.values():\n            stack.append(char)\n        else:\n            if not stack or stack.pop() != mapping[char]:\n                return False\n    return not stack`
  },
  complexity: {
    time: {
      value: "O(n)",
      explanation: "Each character in the string is processed once."
    },
    space: {
      value: "O(n)",
      explanation: "In the worst case, all opening brackets are stored in the stack."
    }
  },
  visualSteps: [
    {
      desc: "Initialize: Start with an empty stack and the input string.",
      image: "/images/problem20/step1.png"
    },
    {
      desc: "Step 1: Read '(' → opening bracket, push to stack.",
      image: "/images/problem20/step2.png"
    },
    {
      desc: "Step 2: Read ')' → closing bracket, pop '(' from stack and match.",
      image: "/images/problem20/step3.png"
    },
    {
      desc: "Final Step: Stack is empty → string is valid.",
      image: "/images/problem20/step4.png"
    }
  ],
  mistakes: [
    {
      title: "Not checking empty stack:",
      text: "If a closing bracket appears when the stack is empty, the string is invalid."
    },
    {
      title: "Mismatched brackets:",
      text: "Make sure each closing bracket matches the correct type of opening bracket."
    },
    {
      title: "Ignoring order:",
      text: "Even if the count of brackets matches, incorrect nesting (e.g., '(]') makes the string invalid."
    },
    {
      title: "Forgetting final stack check:",
      text: "If the stack is not empty after processing the string, there are unmatched opening brackets."
    }
  ],
  related: [
    {
      id: 22,
      title: "Generate Parentheses",
      difficulty: "Medium",
      tags: ["String", "Backtracking"],
      link: "/problem/generate-parentheses"
    },
    {
      id: 32,
      title: "Longest Valid Parentheses",
      difficulty: "Hard",
      tags: ["String", "Stack", "Dynamic Programming"],
      link: "/problem/longest-valid-parentheses"
    },
    {
      id: 856,
      title: "Score of Parentheses",
      difficulty: "Medium",
      tags: ["Stack", "String"],
      link: "/problem/score-of-parentheses"
    }
  ],
  tips: [
    {
      title: "Think in terms of stack:",
      text: "Whenever you see problems involving matching pairs and order, consider using a stack."
    },
    {
      title: "Use a hashmap for matching:",
      text: "Mapping closing brackets to opening ones simplifies comparisons and avoids multiple condition checks."
    },
    {
      title: "Test edge cases:",
      text: "Check cases like empty string, single bracket, and strings starting with a closing bracket."
    },
    {
      title: "Explain with an example:",
      text: "Walk through a sample like '([{}])' to clearly demonstrate how the stack changes step by step."
    },
    {
      title: "Watch for early exits:",
      text: "Return false as soon as you detect an invalid condition to keep the solution efficient."
    }
  ]
}
,
"min-stack": {
  id: 155,
  title: "Min Stack",
  difficulty: "Easy",
  acceptance: "43.8%",
  submissions: "3.9M",
  tags: ["Stack", "Design"],
  description: "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.",
  intuition: [
    {
      title: "Understand the problem:",
      text: "We need to implement a stack that behaves like a normal stack but also allows retrieving the minimum element at any time in O(1) time."
    },
    {
      title: "Why a normal stack fails:",
      text: "In a regular stack, finding the minimum requires scanning all elements, which is O(n) time."
    },
    {
      title: "Optimized approach:",
      text: "Use an auxiliary stack to track the minimum values. When pushing a new element, also push it to the min stack if it's smaller than or equal to the current minimum."
    },
    {
      title: "Key insight:",
      text: "The top of the min stack always holds the current minimum. This allows O(1) retrieval while maintaining normal stack operations."
    }
  ],
  codeSnippets: {
    java: "class MinStack {\n    Stack<Integer> stack = new Stack<>();\n    Stack<Integer> minStack = new Stack<>();\n\n    public void push(int val) {\n        stack.push(val);\n        if (minStack.isEmpty() || val <= minStack.peek()) {\n            minStack.push(val);\n        }\n    }\n\n    public void pop() {\n        if (stack.pop().equals(minStack.peek())) {\n            minStack.pop();\n        }\n    }\n\n    public int top() {\n        return stack.peek();\n    }\n\n    public int getMin() {\n        return minStack.peek();\n    }\n}",
    python: "class MinStack:\n    def __init__(self):\n        self.stack = []\n        self.min_stack = []\n\n    def push(self, val: int) -> None:\n        self.stack.append(val)\n        if not self.min_stack or val <= self.min_stack[-1]:\n            self.min_stack.append(val)\n\n    def pop(self) -> None:\n        if self.stack.pop() == self.min_stack[-1]:\n            self.min_stack.pop()\n\n    def top(self) -> int:\n        return self.stack[-1]\n\n    def getMin(self) -> int:\n        return self.min_stack[-1]"
  },
  complexity: {
    time: {
      value: "O(1)",
      explanation: "All operations (push, pop, top, getMin) run in constant time."
    },
    space: {
      value: "O(n)",
      explanation: "Extra space is used for the auxiliary min stack."
    }
  },
  visualSteps: [
    {
      desc: "Initialize: Start with empty main stack and min stack.",
      image: "/images/problem 155/step1.png"
    },
    {
      desc: "Push 5: stack = [5], minStack = [5].",
      image: "/images/problem 155/step2.png"
    },
    {
      desc: "Push 3: stack = [5, 3], minStack = [5, 3] (new minimum).",
      image: "/images/problem 155/step3.png"
    },
    {
      desc: "Pop: remove 3 from both stacks, min becomes 5 again.",
      image: "/images/problem 155/step4.png"
    }
  ],
  mistakes: [
    {
      title: "Not tracking minimum separately:",
      text: "Without an auxiliary structure, retrieving the minimum element cannot be done in O(1) time."
    },
    {
      title: "Forgetting duplicate minimums:",
      text: "If the same minimum value appears multiple times, it must be pushed multiple times onto the min stack."
    },
    {
      title: "Incorrect pop logic:",
      text: "Always compare the popped value with the top of the min stack before popping from the min stack."
    },
    {
      title: "Assuming stack is never empty:",
      text: "Operations like pop, top, and getMin assume the stack is non-empty, as stated in the problem constraints."
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
      id: 739,
      title: "Daily Temperatures",
      difficulty: "Medium",
      tags: ["Stack", "Array"],
      link: "/problem/daily-temperatures"
    },
    {
      id: 84,
      title: "Largest Rectangle in Histogram",
      difficulty: "Hard",
      tags: ["Stack", "Array"],
      link: "/problem/largest-rectangle-histogram"
    }
  ],
  tips: [
    {
      title: "Explain the auxiliary stack clearly:",
      text: "Interviewers want to see how the min stack mirrors changes in the main stack."
    },
    {
      title: "Mention space-time tradeoff:",
      text: "Extra space is used to achieve constant-time minimum retrieval."
    },
    {
      title: "Walk through an example:",
      text: "Demonstrate push and pop operations with changing minimums."
    },
    {
      title: "Handle duplicates carefully:",
      text: "Always push equal minimum values to avoid losing track when popping."
    },
    {
      title: "Alternative approach:",
      text: "You can also store pairs (value, currentMin) in a single stack, which achieves the same result."
    }
  ]
}
,
"binary-search": {
  id: 704,
  title: "Binary Search",
  difficulty: "Easy",
  acceptance: "49.7%",
  submissions: "5.1M",
  tags: ["Array", "Binary Search"],
  description: "Given a sorted array of integers `nums` and a target value `target`, return the index of the target if it exists in the array. Otherwise, return -1.",
  intuition: [
    {
      title: "Understand the problem:",
      text: "We need to find the position of a target element in a sorted array. Linear search works, but we can do better with the sorted property."
    },
    {
      title: "Key observation:",
      text: "The array is sorted. This allows us to repeatedly divide the search space in half instead of checking each element sequentially."
    },
    {
      title: "Binary Search approach:",
      text: "Use two pointers (`low` and `high`). Compute `mid = (low + high) // 2`. Compare `nums[mid]` with the target and reduce the search space accordingly."
    },
    {
      title: "Termination condition:",
      text: "Repeat until `low > high`. If target is found, return `mid`. Otherwise, return -1."
    }
  ],
  codeSnippets: {
    java: "public int search(int[] nums, int target) {\n    int low = 0, high = nums.length - 1;\n    while (low <= high) {\n        int mid = low + (high - low) / 2;\n        if (nums[mid] == target) return mid;\n        else if (nums[mid] < target) low = mid + 1;\n        else high = mid - 1;\n    }\n    return -1;\n}",
    python: "def binarySearch(nums, target):\n    low, high = 0, len(nums) - 1\n    while low <= high:\n        mid = (low + high) // 2\n        if nums[mid] == target:\n            return mid\n        elif nums[mid] < target:\n            low = mid + 1\n        else:\n            high = mid - 1\n    return -1"
  },
  complexity: {
    time: {
      value: "O(log n)",
      explanation: "We halve the search space with each step."
    },
    space: {
      value: "O(1)",
      explanation: "Iterative implementation uses constant extra space."
    }
  },
  visualSteps: [
    {
      desc: "Initialize: low = 0, high = length-1.",
      image: "/images/problem 704/step1.png"
    },
    {
      desc: "Step 1: Compute mid = (low+high)//2, compare nums[mid] with target.",
      image: "/images/problem 704/step2.png"
    },
    {
      desc: "Step 2: Adjust low/high based on comparison.",
      image: "/images/problem 704/step3.png"
    },
    {
      desc: "Step 3: Repeat until low > high or target is found.",
      image: "/images/problem 704/step4.png"
    }
  ],
  mistakes: [
    {
      title: "Integer overflow when computing mid:",
      text: "Instead of mid = (low + high)/2, use mid = low + (high - low)/2 to avoid overflow."
    },
    {
      title: "Infinite loop due to wrong bounds update:",
      text: "Ensure `low = mid + 1` or `high = mid - 1` when adjusting the search space."
    },
    {
      title: "Not handling empty array:",
      text: "If the array is empty, return -1 immediately."
    },
    {
      title: "Assuming array is unsorted:",
      text: "Binary search only works on sorted arrays."
    }
  ],
  related: [
    {
      id: 33,
      title: "Search in Rotated Sorted Array",
      difficulty: "Medium",
      tags: ["Array", "Binary Search"],
      link: "/problem/search-rotated-sorted-array"
    },
    {
      id: 34,
      title: "Find First and Last Position of Element in Sorted Array",
      difficulty: "Medium",
      tags: ["Array", "Binary Search"],
      link: "/problem/find-first-last-position"
    },
    {
      id: 278,
      title: "First Bad Version",
      difficulty: "Easy",
      tags: ["Binary Search", "Interactive"],
      link: "/problem/first-bad-version"
    }
  ],
  tips: [
    {
      title: "Always verify boundaries:",
      text: "Double-check low, high, and mid updates to avoid infinite loops."
    },
    {
      title: "Use iterative approach first:",
      text: "Iterative binary search is less error-prone than recursive in interviews."
    },
    {
      title: "Visualize the array:",
      text: "Draw the low, high, mid pointers and how they move to explain the process clearly."
    },
    {
      title: "Check edge cases:",
      text: "Empty array, target smaller than smallest element, target larger than largest element."
    },
    {
      title: "Explain O(log n) reasoning:",
      text: "Halving the array each step is what gives binary search its logarithmic time complexity."
    }
  ]
}
,
"find-min-rotated-sorted-array": {
  id: 153,
  title: "Find Minimum in Rotated Sorted Array",
  difficulty: "Medium",
  acceptance: "44.1%",
  submissions: "2.3M",
  tags: ["Array", "Binary Search"],
  description: "Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand. Find the minimum element in O(log n) time.",
  intuition: [
    {
      title: "Understand the problem:",
      text: "We are given a rotated sorted array (e.g., [4,5,6,7,0,1,2]) and need to find the smallest element efficiently."
    },
    {
      title: "Key observation:",
      text: "The array is partially sorted. The minimum element is the only element where the previous element is greater than it."
    },
    {
      title: "Binary Search approach:",
      text: "Use binary search: compare mid element with the rightmost element to decide which half to search next. The unsorted half contains the minimum."
    },
    {
      title: "Termination condition:",
      text: "When low == high, we have found the minimum element."
    }
  ],
  codeSnippets: {
    java: "public int findMin(int[] nums) {\n    int low = 0, high = nums.length - 1;\n    while (low < high) {\n        int mid = low + (high - low) / 2;\n        if (nums[mid] > nums[high]) low = mid + 1;\n        else high = mid;\n    }\n    return nums[low];\n}",
    python: "def findMin(nums):\n    low, high = 0, len(nums) - 1\n    while low < high:\n        mid = (low + high) // 2\n        if nums[mid] > nums[high]:\n            low = mid + 1\n        else:\n            high = mid\n    return nums[low]"
  },
  complexity: {
    time: {
      value: "O(log n)",
      explanation: "Binary search halves the search space each iteration."
    },
    space: {
      value: "O(1)",
      explanation: "Only constant extra space is used."
    }
  },
  visualSteps: [
    {
      desc: "Initialize: low = 0, high = length-1.",
      image: "/images/problem 153/step1.png"
    },
    {
      desc: "Compare mid with high to decide which half contains the minimum.",
      image: "/images/problem 153/step2.png"
    },
    {
      desc: "Adjust low/high accordingly.",
      image: "/images/problem 153/step3.png"
    },
    {
      desc: "Repeat until low == high → minimum found.",
      image: "/images/problem 153/step4.png"
    }
  ],
  mistakes: [
    {
      title: "Using nums[mid] > nums[low] incorrectly:",
      text: "Always compare with nums[high] to identify the unsorted half containing the minimum."
    },
    {
      title: "Not handling already sorted array:",
      text: "If the array is not rotated, the first element is the minimum."
    },
    {
      title: "Incorrect termination:",
      text: "Loop should continue while low < high, not <=."
    }
  ],
  related: [
    {
      id: 33,
      title: "Search in Rotated Sorted Array",
      difficulty: "Medium",
      tags: ["Array", "Binary Search"],
      link: "/problem/search-rotated-sorted-array"
    },
    {
      id: 153,
      title: "Find Minimum in Rotated Sorted Array",
      difficulty: "Medium",
      tags: ["Array", "Binary Search"],
      link: "/problem/find-min-rotated-sorted-array"
    },
    {
      id: 154,
      title: "Find Minimum in Rotated Sorted Array II",
      difficulty: "Hard",
      tags: ["Array", "Binary Search"],
      link: "/problem/find-min-rotated-sorted-array-ii"
    }
  ],
  tips: [
    {
      title: "Always compare mid with rightmost element:",
      text: "This identifies the unsorted half containing the minimum efficiently."
    },
    {
      title: "Consider edge cases:",
      text: "Arrays with only one element or arrays not rotated."
    },
    {
      title: "Draw the array visually:",
      text: "Mark low, mid, high pointers to see which half is sorted and which is unsorted."
    }
  ]
}
,
"search-rotated-sorted-array": {
  id: 33,
  title: "Search in Rotated Sorted Array",
  difficulty: "Medium",
  acceptance: "43.2%",
  submissions: "3.2M",
  tags: ["Array", "Binary Search"],
  description: "Given a rotated sorted array `nums` and a target value, return its index if it exists. Otherwise, return -1. Must achieve O(log n) runtime.",
  intuition: [
    {
      title: "Understand the problem:",
      text: "We need to find a target in a rotated sorted array efficiently using binary search."
    },
    {
      title: "Key observation:",
      text: "At least one half of the array (left or right of mid) is always sorted."
    },
    {
      title: "Binary Search approach:",
      text: "Check which half is sorted. If the target is within the sorted half, search there; otherwise, search the other half."
    },
    {
      title: "Termination condition:",
      text: "If mid matches the target, return mid. Repeat until low > high."
    }
  ],
  codeSnippets: {
    java: "public int search(int[] nums, int target) {\n    int low = 0, high = nums.length - 1;\n    while (low <= high) {\n        int mid = low + (high - low) / 2;\n        if (nums[mid] == target) return mid;\n\n        if (nums[low] <= nums[mid]) {\n            if (target >= nums[low] && target < nums[mid]) high = mid - 1;\n            else low = mid + 1;\n        } else {\n            if (target > nums[mid] && target <= nums[high]) low = mid + 1;\n            else high = mid - 1;\n        }\n    }\n    return -1;\n}",
    python: "def search(nums, target):\n    low, high = 0, len(nums) - 1\n    while low <= high:\n        mid = (low + high) // 2\n        if nums[mid] == target:\n            return mid\n\n        if nums[low] <= nums[mid]:\n            if nums[low] <= target < nums[mid]:\n                high = mid - 1\n            else:\n                low = mid + 1\n        else:\n            if nums[mid] < target <= nums[high]:\n                low = mid + 1\n            else:\n                high = mid - 1\n    return -1"
  },
  complexity: {
    time: {
      value: "O(log n)",
      explanation: "Binary search halves the search space at each step."
    },
    space: {
      value: "O(1)",
      explanation: "Iterative implementation uses constant extra space."
    }
  },
  visualSteps: [
    {
      desc: "Initialize: low = 0, high = length-1.",
      image: "/images/problem 33/step1.png"
    },
    {
      desc: "Check mid element and compare with target.",
      image: "/images/problem 33/step2.png"
    },
    {
      desc: "Determine which half is sorted and narrow search accordingly.",
      image: "/images/problem 33/step3.png"
    },
    {
      desc: "Repeat until target is found or low > high.",
      image: "/images/problem 33/step4.png"
    }
  ],
  mistakes: [
    {
      title: "Not identifying the sorted half correctly:",
      text: "Always check if left <= mid or mid <= right to determine the sorted half."
    },
    {
      title: "Incorrect comparison with boundaries:",
      text: "Ensure target is compared correctly with low/mid/high when deciding which half to search."
    },
    {
      title: "Infinite loop due to wrong bounds update:",
      text: "Update low = mid+1 or high = mid-1 properly based on the target location."
    }
  ],
  related: [
    {
      id: 153,
      title: "Find Minimum in Rotated Sorted Array",
      difficulty: "Medium",
      tags: ["Array", "Binary Search"],
      link: "/problem/find-min-rotated-sorted-array"
    },
    {
      id: 81,
      title: "Search in Rotated Sorted Array II",
      difficulty: "Medium",
      tags: ["Array", "Binary Search"],
      link: "/problem/search-rotated-sorted-array-ii"
    },
    {
      id: 35,
      title: "Search Insert Position",
      difficulty: "Easy",
      tags: ["Array", "Binary Search"],
      link: "/problem/search-insert-position"
    }
  ],
  tips: [
    {
      title: "Always identify the sorted half first:",
      text: "This is key to reducing the search space efficiently."
    },
    {
      title: "Check if target lies in sorted half:",
      text: "If yes, continue binary search there; otherwise, search the other half."
    },
    {
      title: "Edge cases:",
      text: "Arrays with one element, not rotated, or all duplicates should be considered."
    },
    {
      title: "Visualize the array with low, mid, high pointers:",
      text: "Drawing helps explain your logic during an interview."
    }
  ]
}
,
"validate Binary Search Tree": {
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
