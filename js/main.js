import Todo from "./Todo.js";
import TodoList from "./TodoList.js";

const todoList = new TodoList();

const renderTodoList = () => {
    let completeLiArray = [];
    let todoLiArray = todoList.todoArray.map((todo, index) => {
        let liStr = `<li>
                     <span>${todo.content}</span>
                    <div class="buttons">
                    <button onclick="removeTodoMain('${todo.id}')"><span class="remove"><i class="fa-solid fa-trash-can remove"></i></span></button>
                     <button onclick="updateTodoMain('${todo.id}')" ><span class="complete"><i class="fa-regular fa-circle-check"></i></span></button>
                    </div>
                     </li>`
        if (todo.status == 0) {
            // status chưa làm
            return liStr;
        } else {
            // status đã làm
            completeLiArray.push(liStr);
        }
    })
    document.getElementById("todo").innerHTML = todoLiArray.join("");
    document.getElementById("completed").innerHTML = completeLiArray.join("");
}

renderTodoList();

const addTodoMain = () => {
    console.log("btn add");
    let newTask = document.getElementById("newTask").value;
    let newId = 1;
    if(todoList.todoArray.length > 0){
        newId = todoList.todoArray[todoList.todoArray.length-1].id + 1;
        console.log("todoList length > 0");
    }
    let todo = new Todo(newId, newTask, 0);
    todoList.addTodo(todo);
    renderTodoList();
}

document.getElementById("addItem").onclick = addTodoMain;

const removeTodoMain = (id) => {
    todoList.removeTodo(id);
    renderTodoList();
}
window.removeTodoMain = removeTodoMain;

const updateTodoMain = (id) => {
    let todo = todoList.todoArray.find((todoItem) => { 
        return todoItem.id == id;
     })
    todoList.updateTodo(todo);
    renderTodoList();
    console.log(todoList.todoArray);
}
window.updateTodoMain = updateTodoMain;

const sortTodoMain = (isDes) => {
    let orderTodoArr = todoList.sortTodo(isDes);
    let liOrderTodoArr = orderTodoArr.map((todo) => { 
        return `<li>
                <span>${todo.content}</span>
                 <div class="buttons">
                <button onclick="removeTodoMain('${todo.id}')"><span class="remove"><i class="fa-solid fa-trash-can remove"></i></span></button>
                 <button onclick="updateTodoMain('${todo.id}')" ><span class="complete"><i class="fa-regular fa-circle-check"></i></span></button>
                 </div>
                </li>`
     })
    document.getElementById("todo").innerHTML = liOrderTodoArr.join("");
}   
 document.getElementById("two").onclick = () => { 
    sortTodoMain(false);
 }
 document.getElementById("three").onclick = () => { 
    sortTodoMain(true);
 }