console.log(this)
const addButton = document.getElementById("addButton")
const taskTextbox = document.getElementById("taskTextbox")
const taskName = document.getElementById("taskName")
const tasksUL = document.getElementById("tasksUL")

document.get



addButton.addEventListener("click", function () {
    const task = taskTextbox.value
    const nameLI = document.createElement("li")
    nameLI.tasksUL = task
    tasksUL.appendChild(nameLI)
    nameLI.innerHTML = task
    console.log(task)

    
})