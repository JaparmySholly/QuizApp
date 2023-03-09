// An array of objects representing the quiz data
const quizData = [{
    question: "Which of the following is/are the levels of implemtation of data structure?",
    a: "Abstract level",
    b: "Application level",
    c: "Implementation level",
    d: "All of the above",
    correct: "d",
},
{
    question: "A binary search tree whose left subtree and right subtree differ in height by at most 1 unit is called____?",
    a: "AVL tree",
    b: "Red-black tree",
    c: "Lemma tree",
    d: "None of the above",
    correct: "a",
},
{
    question: "______ level is where the model becomes compatible executable code",
    a: "Abstract level",
    b: "Application level",
    c: "Implementation level",
    d: "All of the above",
    correct: "c",
},
{
    question: "Stack is also called?",
    a: "Last in first out",
    b: "First in last out",
    c: "Last in last out",
    d: "First in first out",
    correct: "a",
},
{
    question: "Inserting an item into the stack when the stack is not full is called ____ Operation, and deletion of items from the stack when the stack is not empty is called ____ operation",
    a: "push, pop",
    b: "pop, push",
    c: "insert, delete",
    d: "delete, insert",
    correct: "a",
},
{
    question: "____ is a pile in which items are added at one end and removed from the other.",
    a: "Stack",
    b: "Queue",
    c: "List",
    d: "None of the above",
    correct: "b",
},
{
    question: "____ is very useful in situation when data have to be stored and then retrieved in reverse order",
    a: "Stack",
    b: "Queue",
    c: "List",
    d: "Link list",
    correct: "a",
},
{
    question: "Which data structure allows deleting data elements from and inserting at the rear?",
    a: "Stacks",
    b: "Queues",
    c: "Dequeues",
    d: "Binary search tree",
    correct: "b",
},
{
    question: "Which of the following data structure can't store the non-homogeneous data elements",
    a: "Arrays",
    b: "Recored",
    c: "Pointers",
    d: "Stacks",
    correct: "a",
},
{
    question: "Which of the following is a non-linear data structure?",
    a: "Stacks",
    b: "List",
    c: "Strings",
    d: "Trees",
    correct: "d",
},
{
    question: "A ____ is a data structure that organizes data similar to a line in the supermarket, where the first one in line is the first one out.",
    a: "Queue linked list",
    b: "Stacks linked list",
    c: "Both of them",
    d: "Neither of them",
    correct: "a",
},
{
    question: "In ____, search starts at the beginning of the list and checks every element in the list.",
    a: "Linear search",
    b: "Binary search",
    c: "Hash search",
    d: "Binary Tree search",
    correct: "a",
},
{
    question: "Which of the following is the correct way of declaring an array?",
    a: "javatpoint{20};",
    b: "int javatpoint;",
    c: "int javatpoint[10];",
    d: "array javatpoint[10];",
    correct: "c",
},
{
    question: " Which one of the following is the size of int arr[9] assuming that int is of 4 bytes?",
    a: "9",
    b: "36",
    c: "35",
    d: "None of the above",
    correct: "b",
},
{
    question: "When the user tries to delete the element from the empty stack then the condition is said to be a ____",
    a: "Underflow",
    b: "Garbage collection",
    c: "Overflow",
    d: "None of the above",
    correct: "a",
},
{
    question: "Which one of the following is not the application of the stack data structure",
    a: "String reversal",
    b: "Recursion",
    c: "Backtracking",
    d: "Asynchronous data transfer",
    correct: "d",
},
{
    question: "Which data structure is mainly used for implementing the recursive algorithm?",
    a: "Queue",
    b: "Stack",
    c: "Binary tree",
    d: "Linked list",
    correct: "b",
},
{
    question: "Which data structure is required to convert the infix to prefix notation?",
    a: "Stack",
    b: "Linked list",
    c: "Binary tree",
    d: "Queue",
    correct: "a",
},
{
    question: "Which of the following is the infix expression?",
    a: "A+B*C",
    b: "+A*BC",
    c: "ABC+*",
    d: "None of the above",
    correct: "a",
},
{
    question: "Which of the following is the prefix form of A+B*C?",
    a: "A+(BC*)",
    b: "+AB*C",
    c: "ABC+*",
    d: "+A*BC",
    correct: "d",
},
{
    question: "Which of the following is not the correct statement for a stack data structure?",
    a: "Arrays can be used to implement the stack",
    b: "Stack follows FIFO",
    c: "Elements are stored in a sequential manner",
    d: "Top of the stack contains the last inserted element",
    correct: "b",
},
{
    question: "If the elements '1', '2', '3' and '4' are added in a stack, so what would be the order for the removal?",
    a: "1234",
    b: "2134",
    c: "4321",
    d: "None of the above",
    correct: "c",
},
{
    question: "Which one of the following node is considered the top of the stack if the stack is implemented using the linked list?",
    a: "First node",
    b: "Second node",
    c: "Last node",
    d: "None of the above",
    correct: "a",
},
{
    question: "What is another name for the circular queue among the following options?",
    a: "Square buffer",
    b: "Rectangle buffer",
    c: "Ring buffer",
    d: "None of the above",
    correct: "c",
},
{
    question: "Which of the following principle does Queue use?",
    a: "LIFO principle",
    b: "FIFO principle",
    c: "Linear tree",
    d: "Ordered array",
    correct: "b",
},
{
    question: "Which one of the following is not the type of the Queue?",
    a: "Linear Queue",
    b: "Circular Queue",
    c: "Double ended Queue",
    d: "Single ended Queue",
    correct: "d",
},
{
    question: "Which one of the following is the overflow condition if a circular queue is implemented using array having size MAX?",
    a: "rear= MAX-1",
    b: "rear=MAX",
    c: "front=(rear+1) mod max",
    d: "None of the above",
    correct: "c",
},
{
    question: "The time complexity of enqueue operation in Queue is ____",
    a: "O(1)",
    b: "O(n)",
    c: "O(logn)",
    d: "O(logn)",
    correct: "a",
},
{
    question: "In the linked list implementation of queue, where will the new element be inserted?",
    a: "At the middle position of the linked list",
    b: "At the head position of the linked list",
    c: "At the tail position of the linked list",
    d: "None of the above",
    correct: "c",
},
{
    question: "How many Queues are required to implement a Stack?",
    a: "3",
    b: "2",
    c: "1",
    d: "4",
    correct: "b",
},
{
    question: "Which one of the following is not the application of the Queue data structure?",
    a: "Resource shared between various systems",
    b: "Data is transferred asynchronously",
    c: "Load balancing",
    d: "Balancing of symbols",
    correct: "d",
},
{
    question: "Which data structure is the best for implementing a priority queue?",
    a: "Stack",
    b: "Linked list",
    c: "Array",
    d: "Heap",
    correct: "d",
},
{
    question: "In the Deque implementation using singly linked list, what would be the time complexity of deleting an element from the rear end?",
    a: "O(1)",
    b: "O(n2)",
    c: "O(n)",
    d: "O(nlogn)",
    correct: "c",
},
{
    question: "Which of the following data structure allows you to insert the elements from both the ends while deletion from only one end?",
    a: "Input-restricted queue",
    b: "Output-restricted queue",
    c: "Priority queue",
    d: "None of the above",
    correct: "b",
},
{
    question: "In a circular queue implementation using array of size 5, the array index starts with 0 where front and rear values are 3 and 4 respectively. Determine the array index at which the insertion of the next element will take place.",
    a: "5",
    b: "0",
    c: "1",
    d: "2",
    correct: "b",
},
{
    question: "If circular queue is implemented using array having size MAX_SIZE in which array index starts with 0, front points to the first element in the queue, and rear points to the last element in the queue. Which one of the following conditions used to specify that the circular queue is empty?",
    a: "Front=rear= -1",
    b: "Front=rear=0",
    c: "Front=rear+1",
    d: "None of the above",
    correct: "a",
},
{
    question: "Which of the following is the time complexity to search an element in the linked list?",
    a: "O(1)",
    b: "O(n)",
    c: "O(logn)",
    d: "O(nlogn)",
    correct: "b",
},
{
    question: "Which of the following statement is not true about the doubly linked list?",
    a: "We can traverse in both the directions.",
    b: "It requires extra space",
    c: "Implementation of doubly linked list is easier than the singly linked list",
    d: "It stores the addresses of the next and the previous node",
    correct: "c",
},
{
    question: "What is the maximum number of children that a node can have in a binary tree?",
    a: "3",
    b: "1",
    c: "4",
    d: "2",
    correct: "d",
},
{
    question: "An adaptive sorting algorithm ____",
    a: "adapts to new computers",
    b: "takes advantage of already sorted elements",
    c: "takes input which is already sorted",
    d: "None of the above",
    correct: "b",
}
];

let index = 0;      // A variable to track the current question index
let correct = 0;        // A variable to track the number of correct answers
incorrect = 0;      // A variable to track the number of incorrect answers
total = quizData.length     // A variable to store the total number of questions in the quiz
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")


// A function to load the question and its corresponding answers
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

// Add a click event listener to the submit button
document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

// Function to get the user's answer from the radio button inputs
const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

// Function to reset all radio button inputs
const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

// Function to display the final quiz score
const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col1">
        <h3 class="w-100", text-align="center"> Hello, you scored ${correct} / ${total} ! </h3>
    </div>
`
}
loadQuestion(index);