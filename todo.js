let input = document.querySelector("#textbox")
let addBtn = document.querySelector(".addBtn")
let deleteBtns = []
let todoContainer = document.querySelector(".todoContainer")

addBtn.addEventListener("click", () => {
    input.value && addTodo(input.value)
    deleteBtns = document.querySelectorAll(".dltBtn")
    deleteTodo()
    input.value = ""
})

function addTodo(value) {
    let todoCard = document.createElement("div")
    let text = document.createElement("p")
    let deleteBtn = document.createElement("button")
    let todo = document.createTextNode(value)
    let btn = document.createTextNode("delete")
    todoCard.className = "todoCard"
    deleteBtn.className = "dltBtn"
    text.appendChild(todo)
    deleteBtn.appendChild(btn)
    todoCard.append(text, deleteBtn)
    todoContainer.append(todoCard)
}

//adding delete functionality to every delete btn
function deleteTodo() {
    deleteBtns.forEach((removeButton) => {
        removeButton.addEventListener('click', (e) => {
            e.target.parentNode.remove()
        });
    });
}
