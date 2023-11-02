const form = document.getElementById('create-task-form')

const li = document.getElementById('tasks')
// document.addEventListener("DOMContentLoaded", () => {
// your code here
// });

form.addEventListener('submit', (e) => {
  e.preventDefault()
  // console.log(form.desc.value)
  addTask(form.desc.value)
})

function addTask(taskString) {
  let task = document.createElement('li')
  task.textContent = taskString
  li.append(task)
}
