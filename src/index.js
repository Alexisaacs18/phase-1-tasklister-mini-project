const form = document.getElementById('create-task-form')

const tasks = document.getElementById('tasks')
// document.addEventListener("DOMContentLoaded", () => {
// your code here
// });

form.addEventListener('submit', (e) => {
  e.preventDefault()
  addTask(form.desc.value)
})

function addTask(tasksString) {
  task = document.createElement('li')
  head = document.createElement('h1')
  tasks.appendChild = tasks
  tasks.appendChild = head
  tasksString
}
