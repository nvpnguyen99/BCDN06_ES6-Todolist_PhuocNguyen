export default class TodoList {
    constructor() {
        this.todoArray = [];
    }

    addTodo = (todo) => {
        this.todoArray.push(todo);
        console.log(this.todoArray);
    }

    timViTri = (id) => {
        let viTri = -1;
        viTri = this.todoArray.findIndex((todo) => { 
            return id == todo.id;
         })
         return viTri;
    }

    removeTodo = (id) => {
        let viTri = this.timViTri(id);
        if(viTri != -1){
            this.todoArray.splice(viTri,1);
        }
    }

    updateTodo = (todo) => {
        let viTri = this.timViTri(todo.id);
        if(viTri != -1){
            if(this.todoArray[viTri].status == 1){
                this.todoArray[viTri].status = 0;
            } else{
                this.todoArray[viTri].status = 1;
            }
        }
    }

    sortTodo = (isDes) => {
        let orderTodoArr = this.todoArray.filter((todo) => { 
            return todo.status == 0;
         });
        
         orderTodoArr.sort((todo1, todo2) => { 
            if(todo1.content < todo2.content){
                return -1;
            }
            if(todo1.content > todo2.content){
                return 1;
            }
            return 0;
          });
         console.log(orderTodoArr);
         if(isDes){
            orderTodoArr.reverse();
         }
         return orderTodoArr;
    }
}