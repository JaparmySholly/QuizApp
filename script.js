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