document.addEventListener("DOMContentLoaded", () => {
  loadTasks();
});

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim(); // loại bỏ kí tự trống

  const taskList = document.getElementById("taskList");

  if (taskText === "") {
    alert("Task cannot be empty!");
    return;
  }
  // Create task element
  const li = document.createElement("li");
  li.innerHTML = `${taskText} <button class="delete" onclick="deleteTask(this)">Delete</button>`;

  taskList.appendChild(li);
  saveTask();

  taskInput.value = ""; // clear input field
}

function deleteTask(element) {
  element.parentElement.remove();
  saveTask();
}

function saveTask() {
  const tasks = [];
  document.querySelectorAll("#taskList li").forEach((li) => {
    tasks.push(li.innerText.replace("Delete", "").trim());
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const taskList = document.getElementById("taskList");

  tasks.forEach((taskText) => {
    const li = document.createElement("li");
    li.innerHTML = `${taskText} <button class="delete" onclick="deleteTask(this)">Delete</button>`;
    taskList.appendChild(li);
  });
}
