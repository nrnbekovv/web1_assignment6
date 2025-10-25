// ------------------
// Part 1 - Introduction
// ------------------

// Task 0 - First Script
console.log("Murat Narynbekov, SE-2420");
alert("Hello, JavaScript World!");

// Task 1 - Variables & Operators
let name = "Murat";
let age = 20;
let isStudent = true;

console.log("Name:", name);
console.log("Age:", age);
console.log("Student:", isStudent);

let a = 10;
let b = 5;
console.log("Addition:", a + b);
console.log("Multiplication:", a * b);

let firstName = "Murat";
let lastName = "Narynbekov";
console.log("Full name:", firstName + " " + lastName);


// ------------------
// Part 2 - DOM Manipulation
// ------------------

// Task 2 - Changing Content
function changeText() {
  document.getElementById("text").innerText = "The text has been successfully changed!";
}

// Task 3 - Changing Styles
function changeColor() {
  document.getElementById("box").style.backgroundColor = "lightblue";
}

function changeFontSize() {
  document.getElementById("box").style.fontSize = "24px";
}

// Task 4 - Creating & Removing Elements
function addItem() {
  const list = document.getElementById("itemList");
  const newItem = document.createElement("li");
  newItem.textContent = "New Item";
  list.appendChild(newItem);
}

function removeItem() {
  const list = document.getElementById("itemList");
  if (list.children.length > 0) {
    list.removeChild(list.lastElementChild);
  }
}


// ------------------
// Part 3 - Events
// ------------------

// Task 5 - Mouse Events
const box = document.getElementById("hoverBox");

box.addEventListener("mouseover", function() {
  box.style.backgroundColor = "green";
});

box.addEventListener("mouseout", function() {
  box.style.backgroundColor = "red";
});

// Task 6 - Keyboard Events
const input = document.getElementById("userInput");
const output = document.getElementById("displayText");

input.addEventListener("keyup", function() {
  output.innerText = "You typed: " + input.value;
});


// ------------------
// Task 7 - Form Validation (Optional)
// ------------------

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // отменяем отправку формы

  const name = document.getElementById("formName").value.trim();
  const email = document.getElementById("formEmail").value.trim();
  const message = document.getElementById("formMessage").value.trim();
  const feedback = document.getElementById("formFeedback");

  if (name === "" || email === "" || message === "") {
    feedback.style.color = "red";
    feedback.innerText = "Please fill in all fields.";
    return;
  }

  if (!email.includes("@")) {
    feedback.style.color = "red";
    feedback.innerText = "Please enter a valid email address.";
    return;
  }

  if (message.length < 10) {
    feedback.style.color = "red";
    feedback.innerText = "Message must be at least 10 characters long.";
    return;
  }

  feedback.style.color = "green";
  feedback.innerText = "Form submitted successfully!";
});


// ------------------
// Task 8 - Mini Project: To-Do List
// ------------------

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

let tasks = []; // временное хранилище задач

// Добавление задачи
addTaskBtn.addEventListener("click", function() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // создаём объект задачи
  const task = {
    id: Date.now(), // уникальный ID (по времени)
    text: taskText,
    completed: false
  };

  // добавляем в массив
  tasks.push(task);

  // очищаем поле
  taskInput.value = "";

  // перерисовываем список
  renderTasks();
});

// Отображение задач
function renderTasks() {
  taskList.innerHTML = ""; // очищаем перед обновлением

  tasks.forEach((task) => {
    const li = document.createElement("li");

    li.textContent = task.text;
    li.style.cursor = "pointer";

    if (task.completed) {
      li.style.textDecoration = "line-through";
      li.style.color = "gray";
    }

    // при клике отмечаем задачу выполненной
    li.addEventListener("click", function() {
      task.completed = !task.completed;
      renderTasks();
    });

    // кнопка удаления
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.style.background = "#c0392b";
    deleteBtn.style.color = "white";
    deleteBtn.style.border = "none";
    deleteBtn.style.padding = "3px 8px";
    deleteBtn.style.borderRadius = "4px";
    deleteBtn.style.cursor = "pointer";

    deleteBtn.addEventListener("click", function(e) {
      e.stopPropagation(); // предотвращает срабатывание клика по задаче
      tasks = tasks.filter(t => t.id !== task.id); // удаляем по ID
      renderTasks();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}
