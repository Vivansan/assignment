# README

## main
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Simple To-Do List</title>
</head>
<body>
  <div class="container">
    <h1>Simple To-Do List</h1>
    <div id="clock"></div>
    <input type="text" id="taskInput" placeholder="Add a new task">
    <button onclick="addTask()">Add Task</button>
    <ul id="taskList"></ul>
  </div>
  <script src="script.js"></script>
</body>
</html>

#### script.js

function updateClock() {
  const now = new Date();
  const clockElement = document.getElementById('clock');
  clockElement.innerText = now.toLocaleString();
}

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  if (taskInput.value.trim() !== '') {
    const newTask = document.createElement('li');
    newTask.innerHTML = `
      <span>${taskInput.value}</span>
      <button onclick="completeTask(this)">Complete</button>
      <button onclick="deleteTask(this)">Delete</button>
    `;
    taskList.appendChild(newTask);
    taskInput.value = '';
  }
}

function completeTask(button) {
  const task = button.parentNode;
  task.classList.toggle('completed');
}

function deleteTask(button) {
  const task = button.parentNode;
  task.remove();
}

// Initial clock update and interval setup
updateClock();
setInterval(updateClock, 1000);

###### style.css

body {
  font-family: 'Arial', sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.container {
  text-align: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

button {
  margin-top: 10px;
  padding: 8px 16px;
  cursor: pointer;
}
