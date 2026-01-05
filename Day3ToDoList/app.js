// function addtodoitems(){
//     let todotext=document.getElementById("todoinput")
//     console.log("value in input==>",todotext.value);
//     if(todoitem.value.trim()===""){
//         console.log("plz enter properly swal lagana ha");
//     }
//     else{
//   let todolist=document.getElementById("todolist")
//     }
      
// }

function addtodoitems() {
    let todoText = document.getElementById("todoinput")
    // console.log("value in inputbox==> ",todoText.value)
    if (todoText.value.trim() === "") {
        Swal.fire("Please Enter a Value!");
        return
    } else {
        let todoList = document.getElementById("todoList")
        let todoItem = `<li class="todoItems">${todoText.value} <i onclick="deleteSingleTodo()" class="fa-solid fa-xmark"></i> </li>`
         todoList.innerHTML += todoItem;
         todoText.value = ""
    }


}


function deleteSingleTodo() {
    event.target.parentElement.remove()
}


function deleteAllTodoElem() {
    let todoList = document.getElementById("todoList")
    console.log(todoList.children)

    if (todoList.children.length === 0) {
        Swal.fire("There are no Items to Delete!");
    }

    for (let i = 0; i  < todoList.children.length ; i++) {
        todoList.children[i].remove()
        i--;
    }
}