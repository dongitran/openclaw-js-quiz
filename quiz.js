/** JavaScript & TypeScript Quiz - 100 Questions */
const quizData = [
    // JavaScript Questions (1-50)
    {
        id: 1,
        category: "JS",
        question: "What will be logged to the console?",
        code: "console.log(typeof typeof 1);",
        options: [
            "\"number\"",
            "\"string\"",
            "\"object\"",
            "undefined"
        ],
        correct: 1,
        explanation: "<code>typeof 1</code> returns <code>\"number\"</code> (a string). Then <code>typeof \"number\"</code> returns <code>\"string\"</code>."
    },
    {
        id: 2,
        category: "JS",
        question: "What is the output of this code?",
        code: "console.log(0.1 + 0.2 === 0.3);\nconsole.log(0.1 + 0.2);",
        options: [
            "true, 0.3",
            "false, 0.3",
            "false, 0.30000000000000004",
            "true, 0.30000000000000004"
        ],
        correct: 2,
        explanation: "Floating-point precision issues in IEEE 754 representation cause <code>0.1 + 0.2</code> to equal <code>0.30000000000000004</code>, making the comparison <code>false</code>."
    },
    {
        id: 3,
        category: "JS",
        question: "What will be the result of these expressions?",
        code: "[] + [];\n[] + {};\n{} + [];",
        options: [
            "\"\", \"[object Object]\", 0",
            "0, \"[object Object]\", 0",
            "undefined, \"[object Object]\", undefined",
            "\"\", \"\", 0"
        ],
        correct: 0,
        explanation: "<code>[] + []</code> → <code>\"\"</code> (empty string)<br><code>[] + {}</code> → <code>\"[object Object]\"</code><br><code>{} + []</code> → <code>0</code> (in console, {} is parsed as empty block)"
    },
    {
        id: 4,
        category: "JS",
        question: "What is the event loop in JavaScript?",
        code: null,
        options: [
            "A loop that runs all JavaScript code synchronously",
            "A mechanism that handles asynchronous code execution",
            "A library for creating animations",
            "A debugging tool for tracking function calls"
        ],
        correct: 1,
        explanation: "The <strong>Event Loop</strong> is the mechanism that handles asynchronous code execution. Order: 1) Execute synchronous code, 2) Process microtasks (Promises), 3) Execute one macrotask (setTimeout), 4) Repeat."
    },
    {
        id: 5,
        category: "JS",
        question: "What is the output and why?",
        code: "console.log('start');\nsetTimeout(() => console.log('timeout'), 0);\nPromise.resolve().then(() => console.log('promise'));\nconsole.log('end');",
        options: [
            "start, end, timeout, promise",
            "start, end, promise, timeout",
            "start, promise, end, timeout",
            "start, timeout, promise, end"
        ],
        correct: 1,
        explanation: "Output: <code>start, end, promise, timeout</code>. Synchronous code runs first, then Promises (microtasks) run before setTimeout (macrotask) even with 0ms delay."
    },
    {
        id: 6,
        category: "JS",
        question: "What does this code output?",
        code: "var x = 10;\nfunction foo() {\n    console.log(x);\n    var x = 20;\n}\nfoo();",
        options: [
            "10",
            "20",
            "undefined",
            "ReferenceError"
        ],
        correct: 2,
        explanation: "Output: <code>undefined</code>. Variable hoisting - the <code>var x</code> inside foo is hoisted to the top, shadowing the global x. At console.log, it's declared but not initialized."
    },
    {
        id: 7,
        category: "JS",
        question: "What is a closure in JavaScript?",
        code: null,
        options: [
            "A function that closes the browser window",
            "A function that has access to outer scope variables even after outer function returns",
            "A way to prevent memory leaks",
            "A method to stop event propagation"
        ],
        correct: 1,
        explanation: "A <strong>closure</strong> is a function that has access to variables from its outer (enclosing) scope even after the outer function has returned."
    },
    {
        id: 8,
        category: "JS",
        question: "What will this output?",
        code: "const obj = {\n    value: 42,\n    getValue: () => this.value\n};\nconsole.log(obj.getValue());",
        options: [
            "42",
            "undefined",
            "obj",
            "ReferenceError"
        ],
        correct: 1,
        explanation: "Output: <code>undefined</code>. Arrow functions don't have their own <code>this</code>; they inherit from the enclosing scope. Here, <code>this</code> refers to the global object (or undefined in strict mode)."
    },
    {
        id: 9,
        category: "JS",
        question: "Explain the difference between == and ===.",
        code: null,
        options: [
            "No difference, both do the same thing",
            "== compares values, === compares references",
            "== compares with type coercion, === compares values and types",
            "== is faster than ==="
        ],
        correct: 2,
        explanation: "<strong>== (loose equality):</strong> Compares values after type coercion.<br><strong>=== (strict equality):</strong> Compares values and types. No type coercion.<br>Best practice: Always use ===."
    },
    {
        id: 10,
        category: "JS",
        question: "What is the output?",
        code: "console.log(1 < 2 < 3);\nconsole.log(3 > 2 > 1);",
        options: [
            "true, true",
            "false, false",
            "true, false",
            "false, true"
        ],
        correct: 2,
        explanation: "Output: <code>true, false</code>. Operations are left-to-right.<br><code>1 < 2</code> → <code>true</code>, then <code>true < 3</code> → <code>1 < 3</code> → <code>true</code><br><code>3 > 2</code> → <code>true</code>, then <code>true > 1</code> → <code>1 > 1</code> → <code>false</code>"
    },
    {
        id: 11,
        category: "JS",
        question: "What is the difference between null and undefined?",
        code: null,
        options: [
            "They are exactly the same",
            "undefined means variable not declared, null means variable is empty",
            "undefined is for uninitialized variables, null is intentional absence of value",
            "null is a type, undefined is not"
        ],
        correct: 2,
        explanation: "<strong>undefined:</strong> Variable declared but not assigned. <strong>null:</strong> Explicitly assigned to represent 'no value'. Note: <code>typeof null</code> is <code>'object'</code> (a known bug)."
    },
    {
        id: 12,
        category: "JS",
        question: "What will this code output?",
        code: "const a = { x: 1 };\nconst b = a;\nb.x = 2;\nconsole.log(a.x);",
        options: [
            "1",
            "2",
            "undefined",
            "ReferenceError"
        ],
        correct: 1,
        explanation: "Output: <code>2</code>. Objects are passed by reference. Both <code>a</code> and <code>b</code> point to the same object in memory."
    },
    {
        id: 13,
        category: "JS",
        question: "Explain 'this' keyword behavior.",
        code: null,
        options: [
            "this always refers to the current function",
            "this depends on how the function is called",
            "this always refers to the global object",
            "this is only used in classes"
        ],
        correct: 1,
        explanation: "<code>this</code> depends on context:<br>• Global: global object<br>• Function: global (or undefined in strict)<br>• Method: the object<br>• Constructor: new instance<br>• Arrow: inherits from enclosing scope"
    },
    {
        id: 14,
        category: "JS",
        question: "What is the output?",
        code: "function Person(name) {\n    this.name = name;\n}\nconst person = Person('John');\nconsole.log(person);\nconsole.log(name);",
        options: [
            "Person {name: 'John'}, undefined",
            "undefined, 'John'",
            "ReferenceError, undefined",
            "Person {name: 'John'}, 'John'"
        ],
        correct: 1,
        explanation: "Called without <code>new</code>, Person is a regular function. <code>this</code> refers to global object, creating a global variable. No return value means person is undefined."
    },
    {
        id: 15,
        category: "JS",
        question: "What is debouncing and throttling?",
        code: null,
        options: [
            "Both are the same - limit function calls",
            "Debounce: call after delay since last call. Throttle: call once per time period",
            "Debounce is for clicks, throttle is for scrolls",
            "Throttle waits for stop, debounce calls at intervals"
        ],
        correct: 1,
        explanation: "<strong>Debouncing:</strong> Call after delay has passed since last call (search input).<br><strong>Throttling:</strong> Call at most once per time period (scroll events)."
    },
    {
        id: 16,
        category: "JS",
        question: "What will this output?",
        code: "const arr = [1, 2, 3];\narr[10] = 10;\nconsole.log(arr.length);\nconsole.log(arr[5]);",
        options: [
            "3, undefined",
            "11, undefined",
            "4, null",
            "10, undefined"
        ],
        correct: 1,
        explanation: "Output: <code>11, undefined</code>. Setting index 10 expands array to length 11. Indices 3-9 are empty slots, accessing them returns undefined."
    },
    {
        id: 17,
        category: "JS",
        question: "Explain the difference between var, let, and const.",
        code: null,
        options: [
            "No difference, all declare variables",
            "var is function-scoped, let/const are block-scoped",
            "const is faster than let and var",
            "var and let can be redeclared, const cannot"
        ],
        correct: 1,
        explanation: "<strong>var:</strong> Function-scoped, hoisted, can be redeclared.<br><strong>let:</strong> Block-scoped, TDZ, cannot redeclare.<br><strong>const:</strong> Block-scoped, must initialize, cannot reassign."
    },
    {
        id: 18,
        category: "JS",
        question: "What is the Temporal Dead Zone (TDZ)?",
        code: "console.log(a);\nlet a = 5;",
        options: [
            "A period where code runs slower",
            "The time between hoisting and declaration for let/const",
            "A browser security feature",
            "The time between script load and execution"
        ],
        correct: 1,
        explanation: "The <strong>TDZ</strong> is the period between entering a scope and the actual declaration of a <code>let</code> or <code>const</code> variable. Accessing during TDZ throws ReferenceError."
    },
    {
        id: 19,
        category: "JS",
        question: "What will this output?",
        code: "console.log([] == ![]);\nconsole.log([] == []);",
        options: [
            "true, true",
            "true, false",
            "false, false",
            "false, true"
        ],
        correct: 1,
        explanation: "<code>[] == ![]</code> → <code>[] == false</code> → <code>'' == 0</code> → <code>true</code>.<br><code>[] == []</code> → <code>false</code> (different object references)."
    },
    {
        id: 20,
        category: "JS",
        question: "What are Promises? Explain the states.",
        code: null,
        options: [
            "A guarantee that code will run fast",
            "An object representing eventual completion of an async operation",
            "A way to pause JavaScript execution",
            "A callback function wrapper"
        ],
        correct: 1,
        explanation: "A <strong>Promise</strong> represents the eventual completion or failure of an async operation. States: Pending → Fulfilled/Rejected. Once settled, cannot change."
    },
    {
        id: 21,
        category: "JS",
        question: "What will be logged?",
        code: "const promise = new Promise((resolve) => {\n    console.log('A');\n    resolve('B');\n    console.log('C');\n});\nconsole.log('D');\npromise.then(value => console.log(value));\nconsole.log('E');",
        options: [
            "A, B, C, D, E",
            "A, C, D, E, B",
            "D, E, A, B, C",
            "A, C, B, D, E"
        ],
        correct: 1,
        explanation: "Output: <code>A, C, D, E, B</code>. Promise constructor runs synchronously. <code>.then()</code> is a microtask that runs after synchronous code."
    },
    {
        id: 22,
        category: "JS",
        question: "Is async/await really asynchronous?",
        code: null,
        options: [
            "Yes, it runs on a separate thread",
            "No, it's syntactic sugar over Promises, still single-threaded",
            "Yes, it creates a new process",
            "It depends on the JavaScript engine"
        ],
        correct: 1,
        explanation: "<code>async/await</code> is syntactic sugar over Promises. JavaScript is single-threaded; async means non-blocking, not parallel. Code after <code>await</code> goes to microtask queue."
    },
    {
        id: 23,
        category: "JS",
        question: "What is the output?",
        code: "async function test() {\n    return 1;\n}\ntest().then(console.log);\nconsole.log(2);",
        options: [
            "1, 2",
            "2, 1",
            "Promise {1}, 2",
            "undefined, 2"
        ],
        correct: 1,
        explanation: "Output: <code>2, 1</code>. <code>async</code> function returns a Promise. The <code>.then()</code> callback is a microtask queued for later. Synchronous code runs first."
    },
    {
        id: 24,
        category: "JS",
        question: "What is prototype inheritance in JavaScript?",
        code: null,
        options: [
            "A way to create classes like in Java",
            "Objects inherit from other objects via prototype chain",
            "A method to copy object properties",
            "A type of function closure"
        ],
        correct: 1,
        explanation: "JavaScript uses <strong>prototypal inheritance</strong> where objects can inherit from other objects. Each object has an internal [[Prototype]] link forming the prototype chain."
    },
    {
        id: 25,
        category: "JS",
        question: "What is the difference between Object.freeze(), seal(), and preventExtensions()?",
        code: null,
        options: [
            "They all do the same thing",
            "freeze: no changes. seal: no add/delete. preventExtensions: no new properties",
            "freeze is for arrays, seal for objects, preventExtensions for functions",
            "preventExtensions is the most restrictive, freeze the least"
        ],
        correct: 1,
        explanation: "<strong>preventExtensions:</strong> No new properties.<br><strong>seal:</strong> No add/delete, can modify.<br><strong>freeze:</strong> No changes at all (most restrictive)."
    },
    {
        id: 26,
        category: "JS",
        question: "What will this output?",
        code: "const obj = { a: 1 };\nconst frozen = Object.freeze(obj);\nfrozen.a = 2;\nconsole.log(frozen.a);\nconsole.log(Object.isFrozen(frozen));",
        options: [
            "2, true",
            "1, true",
            "2, false",
            "1, false"
        ],
        correct: 1,
        explanation: "Output: <code>1, true</code>. <code>Object.freeze()</code> prevents modification. In non-strict mode, assignment silently fails. Freeze is shallow - nested objects can still be mutated."
    },
    {
        id: 27,
        category: "JS",
        question: "What is the output?",
        code: "const obj = {\n    [Symbol('a')]: 'symbol a',\n    b: 'regular b'\n};\nconsole.log(Object.keys(obj));\nconsole.log(Object.getOwnPropertySymbols(obj));",
        options: [
            "['a', 'b'], []",
            "['b'], [Symbol('a')]",
            "['a', 'b'], [Symbol('a')]",
            "[], ['b', Symbol('a')]"
        ],
        correct: 1,
        explanation: "Symbol properties are not enumerable and don't show in <code>Object.keys()</code>. Use <code>Object.getOwnPropertySymbols()</code> to access them."
    },
    {
        id: 28,
        category: "JS",
        question: "Explain Generators in JavaScript.",
        code: null,
        options: [
            "Functions that generate random numbers",
            "Functions that can pause and resume with yield",
            "A tool for creating CSS generators",
            "Functions that auto-generate documentation"
        ],
        correct: 1,
        explanation: "<strong>Generators</strong> are functions declared with <code>function*</code> that can pause execution with <code>yield</code> and resume later with <code>.next()</code>."
    },
    {
        id: 29,
        category: "JS",
        question: "What is the output?",
        code: "function* gen() {\n    yield 1;\n    yield 2;\n    yield 3;\n}\nconst g = gen();\nconsole.log(g.next().value);\nconsole.log(g.next().value);\nconsole.log([...gen()]);",
        options: [
            "1, 2, [1, 2, 3]",
            "1, 2, [2, 3]",
            "undefined, undefined, []",
            "1, 2, 3"
        ],
        correct: 0,
        explanation: "Output: <code>1, 2, [1, 2, 3]</code>. Generators are iterators. Each <code>.next()</code> advances to the next yield. Spread operator consumes the entire generator."
    },
    {
        id: 30,
        category: "JS",
        question: "What is a WeakMap and when should you use it?",
        code: null,
        options: [
            "A Map that has fewer methods",
            "A Map where keys are weakly referenced and can be garbage collected",
            "A Map that stores only primitive values",
            "A faster version of regular Map"
        ],
        correct: 1,
        explanation: "<strong>WeakMap</strong> keys are held weakly - if no other references exist, they can be garbage collected. Not iterable, no .size. Use for private data and caching."
    },
    {
        id: 31,
        category: "JS",
        question: "What is the output?",
        code: "const map = new Map();\nconst key1 = { id: 1 };\nconst key2 = { id: 1 };\nmap.set(key1, 'first');\nmap.set(key2, 'second');\nconsole.log(map.get(key1));\nconsole.log(map.size);",
        options: [
            "\"first\", 1",
            "\"second\", 1",
            "\"first\", 2",
            "\"second\", 2"
        ],
        correct: 2,
        explanation: "Output: <code>\"first\", 2</code>. Map keys are compared by reference. <code>key1</code> and <code>key2</code> are different objects, so two separate entries are created."
    },
    {
        id: 32,
        category: "JS",
        question: "Explain Memoization.",
        code: null,
        options: [
            "Writing notes in code comments",
            "Caching function results to avoid redundant calculations",
            "Converting sync functions to async",
            "A memory management technique"
        ],
        correct: 1,
        explanation: "<strong>Memoization</strong> caches function results to avoid redundant computations. Best for pure functions with expensive calculations."
    },
    {
        id: 33,
        category: "JS",
        question: "What will this output?",
        code: "console.log(1);\nsetTimeout(() => console.log(2), 0);\nPromise.resolve().then(() => {\n    console.log(3);\n    Promise.resolve().then(() => console.log(4));\n});\nconsole.log(5);",
        options: [
            "1, 5, 2, 3, 4",
            "1, 5, 3, 4, 2",
            "1, 2, 3, 4, 5",
            "1, 3, 4, 5, 2"
        ],
        correct: 1,
        explanation: "Output: <code>1, 5, 3, 4, 2</code>. Sync (1,5) → Microtasks (3 creates another microtask 4) → Macrotasks (2). Microtasks are processed until empty before macrotasks."
    },
    {
        id: 34,
        category: "JS",
        question: "What is the difference between call(), apply(), and bind()?",
        code: null,
        options: [
            "They all do the same thing",
            "call: args list. apply: args array. bind: returns new function",
            "call is for objects, apply for arrays, bind for functions",
            "bind calls immediately, call/apply return new function"
        ],
        correct: 1,
        explanation: "<strong>call(this, arg1, arg2):</strong> Individual args.<br><strong>apply(this, [args]):</strong> Array of args.<br><strong>bind(this):</strong> Returns new function with bound this."
    },
    {
        id: 35,
        category: "JS",
        question: "What is currying in JavaScript?",
        code: null,
        options: [
            "A cooking technique",
            "Transforming a function with multiple args into nested single-arg functions",
            "A way to combine multiple functions",
            "A method to prevent function execution"
        ],
        correct: 1,
        explanation: "<strong>Currying</strong> transforms a function with multiple arguments into a sequence of functions that each take a single argument. Example: <code>add(a)(b)(c)</code>"
    },
    {
        id: 36,
        category: "JS",
        question: "What is the output?",
        code: "const add = a => b => a + b;\nconst add5 = add(5);\nconsole.log(add5(10));\nconsole.log(add(5)(10));",
        options: [
            "5, 10",
            "15, 15",
            "undefined, 15",
            "10, 5"
        ],
        correct: 1,
        explanation: "Output: <code>15, 15</code>. Curried function. <code>add(5)</code> returns <code>b => 5 + b</code>. <code>add5(10)</code> returns <code>15</code>. Both calls produce the same result."
    },
    {
        id: 37,
        category: "JS",
        question: "Explain the module pattern and IIFE.",
        code: null,
        options: [
            "IIFE is a type of loop, module pattern is for imports",
            "IIFE creates private scope, module pattern encapsulates code",
            "They are the same as ES6 modules",
            "IIFE is for async code, module pattern for sync"
        ],
        correct: 1,
        explanation: "<strong>IIFE (Immediately Invoked Function Expression):</strong> Creates private scope.<br><strong>Module Pattern:</strong> Uses IIFE to create encapsulated modules with private and public members."
    },
    {
        id: 38,
        category: "JS",
        question: "What is the output?",
        code: "(function() {\n    var a = b = 3;\n})();\nconsole.log(typeof a);\nconsole.log(typeof b);",
        options: [
            "\"number\", \"number\"",
            "\"undefined\", \"number\"",
            "\"number\", \"undefined\"",
            "\"undefined\", \"undefined\""
        ],
        correct: 1,
        explanation: "Output: <code>\"undefined\", \"number\"</code>. <code>var a = b = 3</code> is <code>b = 3; var a = b;</code>. <code>b</code> becomes global, <code>a</code> is function-scoped."
    },
    {
        id: 39,
        category: "JS",
        question: "What is hoisting in JavaScript?",
        code: null,
        options: [
            "Moving DOM elements up",
            "Moving declarations to the top of their scope during compilation",
            "A performance optimization technique",
            "Lifting functions to the global scope"
        ],
        correct: 1,
        explanation: "<strong>Hoisting</strong> moves declarations to the top of their scope. <code>var</code> is hoisted and initialized with undefined. <code>let/const</code> are hoisted but in TDZ. Functions are fully hoisted."
    },
    {
        id: 40,
        category: "JS",
        question: "What will this output?",
        code: "foo();\nfunction foo() {\n    console.log('foo');\n}\nbar();\nvar bar = function() {\n    console.log('bar');\n};",
        options: [
            "foo, bar",
            "\"foo\", TypeError",
            "ReferenceError, ReferenceError",
            "\"foo\", \"bar\""
        ],
        correct: 1,
        explanation: "Output: <code>\"foo\"</code> then TypeError. Function declarations are fully hoisted. Function expressions are hoisted as variables (undefined), so calling bar throws TypeError."
    },
    {
        id: 41,
        category: "JS",
        question: "Explain shallow copy vs deep copy.",
        code: null,
        options: [
            "They are the same",
            "Shallow: top-level copy. Deep: complete independent copy including nested",
            "Shallow is for primitives, deep for objects",
            "Deep copy is faster than shallow"
        ],
        correct: 1,
        explanation: "<strong>Shallow Copy:</strong> New object, but nested objects are still references.<br><strong>Deep Copy:</strong> Completely independent copy including all nested objects."
    },
    {
        id: 42,
        category: "JS",
        question: "What is the output?",
        code: "const a = { x: { y: 1 } };\nconst b = { ...a };\nb.x.y = 2;\nconsole.log(a.x.y);\nconst c = JSON.parse(JSON.stringify(a));\nc.x.y = 3;\nconsole.log(a.x.y);",
        options: [
            "1, 1",
            "2, 2",
            "2, 3",
            "1, 3"
        ],
        correct: 1,
        explanation: "Output: <code>2, 2</code>. Spread creates shallow copy - <code>b.x</code> references same object. JSON method creates deep copy, so <code>c</code> is independent."
    },
    {
        id: 43,
        category: "JS",
        question: "What is JSON and its methods?",
        code: null,
        options: [
            "A JavaScript framework",
            "A lightweight data interchange format with stringify and parse methods",
            "A database query language",
            "A type of JavaScript object"
        ],
        correct: 1,
        explanation: "<strong>JSON.stringify():</strong> Converts JS value to JSON string.<br><strong>JSON.parse():</strong> Parses JSON string to JS value. Skips functions, undefined, Symbols."
    },
    {
        id: 44,
        category: "JS",
        question: "What will this output?",
        code: "const obj = {\n    value: 1,\n    toString() {\n        return String(this.value++);\n    }\n};\nif (obj == 1 && obj == 2 && obj == 3) {\n    console.log('Magic!');\n}",
        options: [
            "Nothing (condition is false)",
            "\"Magic!\"",
            "TypeError",
            "undefined"
        ],
        correct: 1,
        explanation: "Output: <code>\"Magic!\"</code>. Loose equality triggers <code>toString()</code>. Each comparison calls it, incrementing and returning the value. First: 1==1 ✓, second: 2==2 ✓, third: 3==3 ✓."
    },
    {
        id: 45,
        category: "JS",
        question: "Explain the Fetch API vs XMLHttpRequest.",
        code: null,
        options: [
            "They are identical",
            "Fetch is Promise-based, XHR is event-based and older",
            "XHR is faster than Fetch",
            "Fetch only works in Node.js"
        ],
        correct: 1,
        explanation: "<strong>Fetch:</strong> Modern Promise-based API, cleaner syntax.<br><strong>XHR:</strong> Older, event-based, supports progress tracking.<br>Fetch doesn't reject on HTTP error status, only on network failure."
    },
    {
        id: 46,
        category: "JS",
        question: "What is CORS? Why does it exist?",
        code: null,
        options: [
            "A way to make requests faster",
            "A security mechanism restricting cross-origin requests",
            "A method to compress data",
            "A type of caching strategy"
        ],
        correct: 1,
        explanation: "<strong>CORS (Cross-Origin Resource Sharing)</strong> restricts web pages from making requests to different domains. Prevents malicious sites from reading data using your authenticated session."
    },
    {
        id: 47,
        category: "JS",
        question: "What is XSS and how to prevent it?",
        code: null,
        options: [
            "A performance technique - use caching",
            "Cross-Site Scripting attack - sanitize input, use CSP headers",
            "A module bundler - use webpack",
            "A CSS technique - use external stylesheets"
        ],
        correct: 1,
        explanation: "<strong>XSS (Cross-Site Scripting)</strong> injects malicious scripts. Prevention: sanitize input, use <code>textContent</code> instead of <code>innerHTML</code>, CSP headers, HttpOnly cookies."
    },
    {
        id: 48,
        category: "JS",
        question: "What will this output?",
        code: "const p = new Promise((resolve, reject) => {\n    reject('Error!');\n    resolve('Success!');\n});\np.then(console.log).catch(console.error);",
        options: [
            "Success!",
            "Error!",
            "Both Success! and Error!",
            "Nothing"
        ],
        correct: 1,
        explanation: "Output: <code>Error!</code>. A Promise can only settle once. After <code>reject()</code>, the Promise is in rejected state. Subsequent <code>resolve()</code> calls are ignored."
    },
    {
        id: 49,
        category: "JS",
        question: "Explain the Virtual DOM and how React uses it.",
        code: null,
        options: [
            "A real DOM stored in memory",
            "A lightweight JS representation of the DOM for efficient updates",
            "A browser feature for faster rendering",
            "A database for storing UI state"
        ],
        correct: 1,
        explanation: "<strong>Virtual DOM</strong> is an in-memory representation of the actual DOM. React creates new Virtual DOM on changes, diffs it with old, and applies minimal DOM mutations."
    },
    {
        id: 50,
        category: "JS",
        question: "What is the value returned from this function?",
        code: "function check() {\n    const a = Number('Hello there!');\n    return a == NaN;\n}",
        options: [
            "true",
            "false",
            "undefined",
            "NaN"
        ],
        correct: 1,
        explanation: "Returns: <code>false</code>. <code>NaN == NaN</code> is always <code>false</code> - this is a quirk of JavaScript. Use <code>Number.isNaN()</code> to check for NaN."
    },
    // TypeScript Questions (51-100)
    {
        id: 51,
        category: "TS",
        question: "What is TypeScript and why use it over JavaScript?",
        code: null,
        options: [
            "A faster JavaScript engine",
            "A superset of JavaScript that adds static type checking",
            "A replacement for JavaScript that runs in the browser",
            "A framework for building user interfaces"
        ],
        correct: 1,
        explanation: "<strong>TypeScript</strong> is a superset of JavaScript that adds static type checking. It compiles to plain JavaScript and provides better IDE support, error catching at compile time, and easier maintenance."
    },
    {
        id: 52,
        category: "TS",
        question: "What is the difference between interface and type in TypeScript?",
        code: null,
        options: [
            "They are exactly the same",
            "interface can be extended/merged, type can do unions/intersections",
            "interface is faster than type",
            "type can only be used for primitives"
        ],
        correct: 1,
        explanation: "<strong>interface:</strong> Can extend with 'extends', can be merged (declaration merging), better for object shapes.<br><strong>type:</strong> Can do unions, intersections, mapped types, can represent primitives."
    },
    {
        id: 53,
        category: "TS",
        question: "What will this code output?",
        code: "type ID = string | number;\nlet userId: ID = 123;\nuserId = 'abc';\nconsole.log(typeof userId);",
        options: [
            "\"number\"",
            "\"string\"",
            "\"ID\"",
            "undefined"
        ],
        correct: 1,
        explanation: "Output: <code>\"string\"</code>. TypeScript's union types allow a variable to be one of several types. At runtime, it's just JavaScript, so typeof returns the actual runtime type."
    },
    {
        id: 54,
        category: "TS",
        question: "Explain Generics in TypeScript.",
        code: null,
        options: [
            "A random number generator",
            "Reusable components that work with multiple types while maintaining type safety",
            "A way to generate code automatically",
            "A method for creating loops"
        ],
        correct: 1,
        explanation: "<strong>Generics</strong> allow creating reusable components that work with multiple types while maintaining type safety. Example: <code>function identity&lt;T&gt;(arg: T): T</code>"
    },
    {
        id: 55,
        category: "TS",
        question: "What is the difference between 'any' and 'unknown'?",
        code: null,
        options: [
            "They are the same",
            "any disables type checking, unknown requires type narrowing before use",
            "unknown is faster than any",
            "any can only be used for objects"
        ],
        correct: 1,
        explanation: "<strong>any:</strong> Disables type checking completely.<br><strong>unknown:</strong> Type-safe counterpart - cannot use until type is narrowed. Prefer unknown over any."
    },
    {
        id: 56,
        category: "TS",
        question: "What will happen with this code?",
        code: "let value: unknown = 'hello';\nconsole.log(value.toUpperCase());",
        options: [
            "Outputs 'HELLO'",
            "Compile-time error: Object is of type 'unknown'",
            "Runtime error",
            "Outputs undefined"
        ],
        correct: 1,
        explanation: "<strong>Compile-time error:</strong> Object is of type 'unknown'. You must narrow the type first with type guards or use type assertion."
    },
    {
        id: 57,
        category: "TS",
        question: "Explain Type Guards in TypeScript.",
        code: null,
        options: [
            "Security features for web apps",
            "Checks that narrow down the type of a variable",
            "Functions that prevent errors",
            "TypeScript compiler settings"
        ],
        correct: 1,
        explanation: "<strong>Type Guards</strong> are checks that narrow down the type of a variable. Built-in: <code>typeof</code>, <code>instanceof</code>, <code>in</code>. User-defined: type predicate functions."
    },
    {
        id: 58,
        category: "TS",
        question: "What does this type represent?",
        code: "type Nullable<T> = T | null | undefined;\nlet name: Nullable<string>;",
        options: [
            "A string that cannot be null",
            "A value that can be T, null, or undefined",
            "A required string parameter",
            "A type that removes null and undefined"
        ],
        correct: 1,
        explanation: "<strong>Nullable&lt;T&gt;</strong> represents a value which can be of type T, null, or undefined. Useful for modeling values that might not exist."
    },
    {
        id: 59,
        category: "TS",
        question: "What are Utility Types in TypeScript?",
        code: null,
        options: [
            "Helper functions for DOM manipulation",
            "Built-in types for common type transformations",
            "Performance optimization tools",
            "Debugging utilities"
        ],
        correct: 1,
        explanation: "<strong>Utility Types</strong> provide convenient type transformations: Partial, Readonly, Pick, Omit, Record, Exclude, ReturnType, etc."
    },
    {
        id: 60,
        category: "TS",
        question: "What does Partial<User> do?",
        code: "interface User {\n    name: string;\n    age: number;\n    email: string;\n}\nfunction updateUser(user: Partial<User>) { }",
        options: [
            "Makes all properties required",
            "Makes all properties optional",
            "Removes all properties",
            "Makes the type read-only"
        ],
        correct: 1,
        explanation: "<strong>Partial&lt;User&gt;</strong> makes all properties optional. Perfect for update functions where you only provide the fields you want to change."
    },
    {
        id: 61,
        category: "TS",
        question: "Explain the 'readonly' modifier.",
        code: null,
        options: [
            "Prevents the variable from being declared",
            "Prevents reassignment of properties after initialization",
            "Makes the property private",
            "Converts the type to a string"
        ],
        correct: 1,
        explanation: "<strong>readonly</strong> prevents reassignment of properties after initialization. Compile-time only - at runtime values can still be modified."
    },
    {
        id: 62,
        category: "TS",
        question: "What is the difference between 'enum' and 'const enum'?",
        code: "enum Color { Red, Green, Blue }\nconst enum Direction { Up, Down }",
        options: [
            "No difference",
            "const enum is inlined at compile time, enum generates runtime object",
            "enum is for strings, const enum for numbers",
            "const enum can be modified at runtime"
        ],
        correct: 1,
        explanation: "<strong>enum:</strong> Generates JavaScript object at runtime, has reverse mapping.<br><strong>const enum:</strong> Inlined at compile time, smaller bundle, better performance."
    },
    {
        id: 63,
        category: "TS",
        question: "What are Mapped Types?",
        code: null,
        options: [
            "Types for geographic maps",
            "Types that create new types by transforming properties",
            "Array types with fixed sizes",
            "Function types with mapped parameters"
        ],
        correct: 1,
        explanation: "<strong>Mapped Types</strong> create new types by transforming properties. Example: <code>type Optional&lt;T&gt; = { [P in keyof T]?: T[P] }</code>"
    },
    {
        id: 64,
        category: "TS",
        question: "What does this mapped type do?",
        code: "type EventPayloads = {\n    click: { x: number; y: number };\n    resize: { width: number; height: number };\n};\ntype EventHandlers = {\n    [K in keyof EventPayloads as `on${Capitalize<K>}`]:\n        (payload: EventPayloads[K]) => void;\n};",
        options: [
            "Creates union types",
            "Creates event handler types with 'on' prefix",
            "Removes all properties",
            "Makes properties optional"
        ],
        correct: 1,
        explanation: "Creates event handler types with 'on' prefix: <code>onClick</code>, <code>onResize</code>. Uses key remapping with template literal types."
    },
    {
        id: 65,
        category: "TS",
        question: "Explain Conditional Types in TypeScript.",
        code: null,
        options: [
            "Types that change based on runtime conditions",
            "Types that select based on a type condition",
            "Types for if-else statements",
            "Types that are always optional"
        ],
        correct: 1,
        explanation: "<strong>Conditional Types</strong> select a type based on a condition: <code>type IsString&lt;T&gt; = T extends string ? true : false</code>. Can use 'infer' to extract type information."
    },
    {
        id: 66,
        category: "TS",
        question: "What does this conditional type extract?",
        code: "type ArrayElement<T> = T extends (infer U)[] ? U : never;\ntype Str = ArrayElement<string[]>;",
        options: [
            "The array length",
            "The element type from an array",
            "The array index type",
            "The array constructor"
        ],
        correct: 1,
        explanation: "Extracts the element type from an array. <code>type Str = string</code>. The 'infer' keyword extracts the type information."
    },
    {
        id: 67,
        category: "TS",
        question: "What is 'never' type in TypeScript?",
        code: null,
        options: [
            "A type that represents any value",
            "A type representing values that never occur",
            "A type for null values",
            "A type for undefined values"
        ],
        correct: 1,
        explanation: "<strong>never</strong> represents a value that never occurs. Use cases: functions that throw, exhaustiveness checking, filtering types. It's the bottom type."
    },
    {
        id: 68,
        category: "TS",
        question: "Explain Exhaustiveness Checking with an example.",
        code: "type Shape = \n    | { kind: 'circle'; radius: number }\n    | { kind: 'square'; side: number };\nfunction getArea(shape: Shape): number {\n    switch(shape.kind) {\n        case 'circle': return Math.PI * shape.radius ** 2;\n        case 'square': return shape.side ** 2;\n    }\n}",
        options: [
            "Checking if code runs fast",
            "Ensuring all cases in a union are handled",
            "Validating user input",
            "Checking memory usage"
        ],
        correct: 1,
        explanation: "Exhaustiveness checking ensures all cases are handled. Add <code>const _exhaustiveCheck: never = shape;</code> in default to get compile errors if you miss a case."
    },
    {
        id: 69,
        category: "TS",
        question: "What is the difference between 'implements' and 'extends'?",
        code: null,
        options: [
            "They are the same",
            "extends: inheritance. implements: contract enforcement",
            "implements is for classes, extends for interfaces",
            "extends is for types, implements for values"
        ],
        correct: 1,
        explanation: "<strong>extends:</strong> Class inheritance - gets all parent properties.<br><strong>implements:</strong> Contract enforcement - must implement all interface members, can implement multiple."
    },
    {
        id: 70,
        category: "TS",
        question: "What are Abstract Classes?",
        code: null,
        options: [
            "Classes that cannot be used",
            "Classes that cannot be instantiated, may contain abstract methods",
            "Classes with only static methods",
            "Classes without constructors"
        ],
        correct: 1,
        explanation: "<strong>Abstract classes</strong> cannot be instantiated directly and may contain abstract methods (no implementation). Can have both abstract and concrete methods."
    },
    {
        id: 71,
        category: "TS",
        question: "What is the 'as const' assertion?",
        code: "const config = {\n    host: 'localhost',\n    port: 3000\n} as const;",
        options: [
            "Converts the object to a string",
            "Creates a readonly literal type",
            "Makes the object mutable",
            "Converts to JSON"
        ],
        correct: 1,
        explanation: "<strong>as const</strong> creates a readonly literal type. Types become <code>readonly host: 'localhost'</code> instead of <code>string</code>. Prevents widening."
    },
    {
        id: 72,
        category: "TS",
        question: "Explain Module Resolution in TypeScript.",
        code: null,
        options: [
            "A way to resolve conflicts",
            "How TypeScript finds modules when importing",
            "A debugging tool",
            "A type checking algorithm"
        ],
        correct: 1,
        explanation: "<strong>Module Resolution</strong> is how TypeScript finds modules. Classic: searches parent directories. Node (default): follows Node.js resolution with @types packages and tsconfig paths."
    },
    {
        id: 73,
        category: "TS",
        question: "What is the 'declare' keyword used for?",
        code: "declare const $: any;",
        options: [
            "To create new variables",
            "To tell TypeScript a variable exists without implementation",
            "To delete variables",
            "To export variables"
        ],
        correct: 1,
        explanation: "<strong>declare</strong> tells TypeScript that a variable/module exists (usually from external source) without providing implementation. No JavaScript is generated."
    },
    {
        id: 74,
        category: "TS",
        question: "What are Decorators in TypeScript?",
        code: null,
        options: [
            "CSS styling rules",
            "Experimental features that add metadata or modify classes/methods",
            "Function parameters",
            "Type annotations"
        ],
        correct: 1,
        explanation: "<strong>Decorators</strong> are experimental features that add metadata or modify classes/methods. Types: Class, Method, Property, Parameter decorators. Enable with <code>\"experimentalDecorators\": true</code>."
    },
    {
        id: 75,
        category: "TS",
        question: "What is strict mode in TypeScript?",
        code: null,
        options: [
            "A runtime performance mode",
            "Enables all strict type-checking options",
            "A security feature",
            "A minification setting"
        ],
        correct: 1,
        explanation: "<strong>strict mode</strong> enables all strict type-checking options: strictNullChecks, noImplicitAny, strictFunctionTypes, strictPropertyInitialization, noImplicitThis. Always enable for new projects."
    },
    {
        id: 76,
        category: "TS",
        question: "What is noImplicitAny and why enable it?",
        code: "function greet(name) {\n    console.log('Hello ' + name);\n}",
        options: [
            "Makes all types explicit",
            "Prevents TypeScript from inferring 'any' type",
            "Converts any to unknown",
            "Disables type checking"
        ],
        correct: 1,
        explanation: "<strong>noImplicitAny</strong> prevents TypeScript from inferring 'any' when it cannot determine a type. Forces explicit typing, catching potential errors early."
    },
    {
        id: 77,
        category: "TS",
        question: "Explain strictNullChecks with an example.",
        code: "interface User {\n    name: string;\n    email?: string;\n}\nfunction getEmail(user: User): string {\n    return user.email;\n}",
        options: [
            "Allows null in all types",
            "Makes null and undefined separate types that must be checked",
            "Removes null from all types",
            "Converts undefined to null"
        ],
        correct: 1,
        explanation: "With <strong>strictNullChecks</strong>, <code>user.email</code> is <code>string | undefined</code>. You must check if it exists before using. Forces safer code."
    },
    {
        id: 78,
        category: "TS",
        question: "What is Type Narrowing?",
        code: null,
        options: [
            "Making types wider",
            "Refining a broader type to a more specific type",
            "Removing types from code",
            "Adding types to JavaScript"
        ],
        correct: 1,
        explanation: "<strong>Type Narrowing</strong> is refining a broader type to a more specific type within a conditional block. Methods: typeof, instanceof, in operator, custom type guards, discriminated unions."
    },
    {
        id: 79,
        category: "TS",
        question: "What are Discriminated Unions?",
        code: "type Result = \n    | { success: true; data: string }\n    | { success: false; error: string };",
        options: [
            "Unions that exclude each other",
            "Unions using a common literal property to distinguish members",
            "Unions of only primitive types",
            "Unions that cannot be used in switch statements"
        ],
        correct: 1,
        explanation: "<strong>Discriminated Unions</strong> use a common literal property (discriminant) to distinguish between union members. Enables type-safe branching and exhaustiveness checking."
    },
    {
        id: 80,
        category: "TS",
        question: "What is a Tuple Type?",
        code: null,
        options: [
            "An array with unlimited elements",
            "An array with fixed length and known types at each position",
            "A type for key-value pairs",
            "A type for function arguments"
        ],
        correct: 1,
        explanation: "<strong>Tuple</strong> represents an array with fixed length and known types at each position. Example: <code>let point: [number, number] = [10, 20];</code>"
    },
    {
        id: 81,
        category: "TS",
        question: "What does this tuple type enforce?",
        code: "type HTTPResponse = [number, string, object?];\nconst response: HTTPResponse = [200, 'OK'];",
        options: [
            "All elements are required",
            "First: number, Second: string, Third: optional object",
            "Elements can be in any order",
            "All elements are optional"
        ],
        correct: 1,
        explanation: "<strong>HTTPResponse</strong> is a tuple where first is number (status), second is string (text), third is optional object (body). Optional elements use <code>?</code>."
    },
    {
        id: 82,
        category: "TS",
        question: "What is Function Overloading?",
        code: null,
        options: [
            "Having too many functions",
            "Defining multiple function signatures for different parameter combinations",
            "Functions that override built-in methods",
            "Functions that can be called multiple times"
        ],
        correct: 1,
        explanation: "<strong>Function Overloading</strong> allows defining multiple function signatures for different parameter combinations. Only the implementation has a body; overloads define types."
    },
    {
        id: 83,
        category: "TS",
        question: "Explain Template Literal Types.",
        code: null,
        options: [
            "Types for HTML templates",
            "Building types from string literals like template literals",
            "Types that are always strings",
            "Types for regular expressions"
        ],
        correct: 1,
        explanation: "<strong>Template Literal Types</strong> build types from string literals. Example: <code>type EventName&lt;T&gt; = \`on\${Capitalize&lt;T&gt;}\`</code>. Useful for generating event names, route paths."
    },
    {
        id: 84,
        category: "TS",
        question: "What type does this template literal produce?",
        code: "type Lang = 'en' | 'vi';\ntype Page = 'home' | 'about';\ntype Route = `/${Lang}/${Page}`;",
        options: [
            "string",
            "Union of all combinations: '/en/home' | '/en/about' | '/vi/home' | '/vi/about'",
            "never",
            "any"
        ],
        correct: 1,
        explanation: "<strong>Route</strong> is a union of all combinations. Template literal types distribute over unions, creating the Cartesian product of all combinations."
    },
    {
        id: 85,
        category: "TS",
        question: "What is the 'satisfies' operator (TypeScript 4.9+)?",
        code: "const config = {\n    host: 'localhost',\n    port: 3000\n} satisfies { host: string; port: number };",
        options: [
            "Converts the type",
            "Checks type without widening - validates while keeping literal types",
            "Makes the type mutable",
            "Removes the type"
        ],
        correct: 1,
        explanation: "<strong>satisfies</strong> checks that a value matches a type without widening it. Unlike type annotation, it keeps literal types for better autocomplete and type safety."
    },
    {
        id: 86,
        category: "TS",
        question: "What is keyof operator?",
        code: null,
        options: [
            "Checks if a key exists in an object",
            "Extracts all keys of a type as a union of string literals",
            "Creates new keys for a type",
            "Deletes keys from a type"
        ],
        correct: 1,
        explanation: "<strong>keyof</strong> extracts all keys of a type as a union of string literals. Example: <code>type UserKeys = keyof User</code> gives <code>'name' | 'age'</code>."
    },
    {
        id: 87,
        category: "TS",
        question: "What does 'typeof' do in type position?",
        code: "const user = {\n    name: 'John',\n    age: 30\n};\ntype User = typeof user;",
        options: [
            "Returns the runtime type string",
            "Extracts the static type of a value",
            "Converts the value to a type",
            "Checks if the value is defined"
        ],
        correct: 1,
        explanation: "In <strong>type position</strong>, typeof extracts the static type of a value. Useful for deriving types from existing objects without duplicating definitions."
    },
    {
        id: 88,
        category: "TS",
        question: "What are the 'in' and 'is' operators in TypeScript?",
        code: null,
        options: [
            "Both check for property existence",
            "in: checks property. is: custom type guard return type",
            "Both create new types",
            "in is for objects, is for primitives"
        ],
        correct: 1,
        explanation: "<strong>in:</strong> Checks if property exists (type guard).<br><strong>is:</strong> Custom type guard return type that narrows types in conditionals."
    },
    {
        id: 89,
        category: "TS",
        question: "What is the difference between void and undefined?",
        code: "function log1(): void {\n    console.log('hi');\n}\nfunction log2(): undefined {\n    console.log('hi');\n    return;\n}",
        options: [
            "They are the same",
            "void: returns nothing meaningful. undefined: must explicitly return undefined",
            "void is for async, undefined for sync",
            "undefined is for objects, void for primitives"
        ],
        correct: 1,
        explanation: "<strong>void:</strong> Function returns nothing meaningful, can return undefined or nothing.<br><strong>undefined:</strong> Must explicitly return undefined. Use void for side-effect functions."
    },
    {
        id: 90,
        category: "TS",
        question: "Explain the difference between interface merging and type intersection.",
        code: null,
        options: [
            "They are the same",
            "interface merging: declaration merging. type intersection: combines with &",
            "interface is faster",
            "type can be merged, interface cannot"
        ],
        correct: 1,
        explanation: "<strong>Interface Merging:</strong> Multiple interfaces with same name are merged.<br><strong>Type Intersection (&):</strong> Combines multiple types into one. Creates new type with all properties."
    },
    {
        id: 91,
        category: "TS",
        question: "What is an Index Signature?",
        code: "interface StringDictionary {\n    [key: string]: string;\n}",
        options: [
            "A method signature",
            "Defines types for dynamic property access",
            "A constructor signature",
            "A generic type constraint"
        ],
        correct: 1,
        explanation: "<strong>Index Signature</strong> defines types for dynamic property access when property names aren't known ahead. Example: <code>[key: string]: string</code>."
    },
    {
        id: 92,
        category: "TS",
        question: "What are the triple-slash directives?",
        code: "/// <reference path=\"./types.d.ts\" />",
        options: [
            "Comments that are ignored",
            "Compiler instructions for including files/types",
            "Documentation strings",
            "Testing directives"
        ],
        correct: 1,
        explanation: "<strong>Triple-slash directives</strong> provide compiler instructions: <code>reference path</code> (include file), <code>reference types</code> (@types package), <code>reference lib</code> (built-in lib). Must be at top of file."
    },
    {
        id: 93,
        category: "TS",
        question: "What is tsconfig.json and what are important compiler options?",
        code: null,
        options: [
            "A build script",
            "TypeScript configuration file with target, module, strict, paths",
            "A package manager file",
            "A testing configuration"
        ],
        correct: 1,
        explanation: "<strong>tsconfig.json</strong> configures TypeScript compiler. Important options: target, module, strict, esModuleInterop, skipLibCheck, outDir, rootDir, paths."
    },
    {
        id: 94,
        category: "TS",
        question: "What is the difference between .ts and .d.ts files?",
        code: null,
        options: [
            "No difference",
            ".ts: source code. .d.ts: declaration files (types only)",
            ".ts is for TypeScript, .d.ts for JavaScript",
            ".d.ts is compiled from .ts"
        ],
        correct: 1,
        explanation: "<strong>.ts files:</strong> Regular TypeScript source code.<br><strong>.d.ts files:</strong> Declaration files (types only). No implementation, just type signatures. Used for libraries."
    },
    {
        id: 95,
        category: "TS",
        question: "Explain TypeScript's support for JSX/TSX.",
        code: null,
        options: [
            "TypeScript doesn't support JSX",
            "TSX is TypeScript with JSX support, with typed components and props",
            "JSX must be converted before TypeScript can use it",
            "TSX only works with Angular"
        ],
        correct: 1,
        explanation: "<strong>TSX</strong> is TypeScript with JSX support. Component props are type-checked, children validated, event handlers typed. Configure with <code>\"jsx\": \"react\"</code>."
    },
    {
        id: 96,
        category: "TS",
        question: "What does this React TypeScript code type-check?",
        code: "interface Props {\n    title: string;\n    count?: number;\n}\nconst MyComponent: React.FC<Props> = ({ title, count = 0 }) => {\n    return <div>{title}: {count}</div>;\n};",
        options: [
            "Only the return type",
            "title is required string, count is optional number, default 0",
            "Nothing, React.FC is not typed",
            "Only prop types, not defaults"
        ],
        correct: 1,
        explanation: "Type checking includes: title is required string, count is optional number with default 0, return type is ReactElement. Props.children included via React.FC."
    },
    {
        id: 97,
        category: "TS",
        question: "What is Covariance and Contravariance in TypeScript?",
        code: null,
        options: [
            "Types of variance in statistics",
            "Type relationships for subtyping in function parameters and returns",
            "Types of generic constraints",
            "Types of module resolution"
        ],
        correct: 1,
        explanation: "<strong>Covariance:</strong> preserves subtype relationship (return types).<br><strong>Contravariance:</strong> reverses subtype relationship (parameter types with strictFunctionTypes)."
    },
    {
        id: 98,
        category: "TS",
        question: "What are Branded Types (Opaque Types)?",
        code: "type UserId = string & { __brand: 'UserId' };\ntype OrderId = string & { __brand: 'OrderId' };",
        options: [
            "Types with logos",
            "Nominal typing in TypeScript's structural type system",
            "Types that can only be used in branding",
            "Types for CSS styling"
        ],
        correct: 1,
        explanation: "<strong>Branded Types</strong> create nominal typing in TypeScript's structural system. At runtime they're strings, but TypeScript treats UserId and OrderId as incompatible types."
    },
    {
        id: 99,
        category: "TS",
        question: "What is the 'unique symbol' type?",
        code: "const sym1 = Symbol('key');\nconst sym2: unique symbol = Symbol('key');",
        options: [
            "A symbol that is globally unique",
            "A subtype of symbol where each is a distinct type",
            "A symbol that can be changed",
            "A symbol for unique values only"
        ],
        correct: 1,
        explanation: "<strong>unique symbol</strong> is a subtype of symbol where each unique symbol is a distinct type. Used for opaque property keys. Must use const declaration."
    },
    {
        id: 100,
        category: "TS",
        question: "Explain the Pick and Omit utility types.",
        code: null,
        options: [
            "They are the same",
            "Pick: select properties. Omit: remove properties",
            "Pick: remove properties. Omit: select properties",
            "Pick is for objects, Omit for arrays"
        ],
        correct: 1,
        explanation: "<strong>Pick&lt;T, K&gt;:</strong> Selects a subset of properties from T.<br><strong>Omit&lt;T, K&gt;:</strong> Removes specified properties from T.<br>Both create new types by transforming existing ones."
    }
];

// Quiz State
let currentQuestion = 0;
let userAnswers = new Array(quizData.length).fill(null);
let answerRevealed = new Array(quizData.length).fill(false);

// DOM Elements
const questionCounter = document.getElementById('questionCounter');
const categoryBadge = document.getElementById('categoryBadge');
const questionText = document.getElementById('questionText');
const codeBlock = document.getElementById('codeBlock');
const optionsContainer = document.getElementById('optionsContainer');
const answerSection = document.getElementById('answerSection');
const correctAnswer = document.getElementById('correctAnswer');
const explanation = document.getElementById('explanation');
const progressFill = document.getElementById('progressFill');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const showAnswerBtn = document.getElementById('showAnswerBtn');
const quizComplete = document.getElementById('quizComplete');
const quizCard = document.querySelector('.quiz-card');

// Initialize
function init() {
    renderQuestion();
    updateNavigation();
}

// Render current question
function renderQuestion() {
    const q = quizData[currentQuestion];
    
    // Update header
    questionCounter.textContent = `Question ${currentQuestion + 1}/${quizData.length}`;
    categoryBadge.textContent = q.category === 'JS' ? 'JavaScript' : 'TypeScript';
    categoryBadge.className = 'category-badge ' + q.category.toLowerCase();
    questionText.textContent = q.question;
    
    // Update progress
    const progress = ((currentQuestion + 1) / quizData.length) * 100;
    progressFill.style.width = `${progress}%`;
    
    // Render code block if present
    if (q.code) {
        codeBlock.style.display = 'block';
        codeBlock.textContent = q.code;
    } else {
        codeBlock.style.display = 'none';
    }
    
    // Render options
    optionsContainer.innerHTML = '';
    const labels = ['A', 'B', 'C', 'D'];
    
    q.options.forEach((option, index) => {
        const optionEl = document.createElement('div');
        optionEl.className = 'option';
        
        // Add classes based on state
        if (userAnswers[currentQuestion] === index) {
            optionEl.classList.add('selected');
        }
        
        if (answerRevealed[currentQuestion]) {
            if (index === q.correct) {
                optionEl.classList.add('correct');
            } else if (userAnswers[currentQuestion] === index && index !== q.correct) {
                optionEl.classList.add('wrong');
            }
        }
        
        optionEl.innerHTML = `
            <span class="option-letter">${labels[index]}</span>
            <span class="option-text">${escapeHtml(option)}</span>
        `;
        
        optionEl.onclick = () => selectOption(index);
        optionsContainer.appendChild(optionEl);
    });
    
    // Show/hide answer section
    if (answerRevealed[currentQuestion]) {
        answerSection.style.display = 'block';
        correctAnswer.textContent = `Correct answer: ${labels[q.correct]}`;
        explanation.innerHTML = q.explanation;
        showAnswerBtn.textContent = 'Hide Answer';
    } else {
        answerSection.style.display = 'none';
        showAnswerBtn.textContent = 'Show Answer';
    }
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Select an option
function selectOption(index) {
    userAnswers[currentQuestion] = index;
    renderQuestion();
}

// Show/hide answer
function showAnswer() {
    if (answerRevealed[currentQuestion]) {
        answerRevealed[currentQuestion] = false;
    } else {
        answerRevealed[currentQuestion] = true;
    }
    renderQuestion();
}

// Navigation
function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion();
        updateNavigation();
    }
}

function nextQuestion() {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        renderQuestion();
        updateNavigation();
    } else {
        // Show completion
        showCompletion();
    }
}

function updateNavigation() {
    prevBtn.disabled = currentQuestion === 0;
    nextBtn.textContent = currentQuestion === quizData.length - 1 ? 'Finish →' : 'Next →';
}

function showCompletion() {
    quizCard.style.display = 'none';
    quizComplete.style.display = 'block';
}

function restartQuiz() {
    currentQuestion = 0;
    userAnswers = new Array(quizData.length).fill(null);
    answerRevealed = new Array(quizData.length).fill(false);
    quizCard.style.display = 'flex';
    quizComplete.style.display = 'none';
    renderQuestion();
    updateNavigation();
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (quizComplete.style.display === 'block') return;
    
    if (e.key === 'ArrowLeft' && !prevBtn.disabled) {
        prevQuestion();
    } else if (e.key === 'ArrowRight') {
        nextQuestion();
    } else if (e.key >= '1' && e.key <= '4') {
        selectOption(parseInt(e.key) - 1);
    } else if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        showAnswer();
    }
});

// Start
init();
