'use strict';

console.log('funguju!');

let taskList = ['Uvařit si kávu', 'Nasadit si sluchátka', 'Pustit se do úkolu'];

function updateTasks(array) {
  const todoElm = document.querySelector('.todo__tasks');
  todoElm.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    todoElm.innerHTML += `<div class="task">${array[i]}<div>`
  }
}

function newTask() {
  const addedTask = document.getElementById("new-task");
  if (addedTask.value != "") {
  taskList.push(addedTask.value);
  updateTasks(taskList);
  addedTask.value = "";
  } 
}

const addBtn = document.querySelector(".btn-add");
addBtn.addEventListener("click", newTask);
updateTasks(taskList);
