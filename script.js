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