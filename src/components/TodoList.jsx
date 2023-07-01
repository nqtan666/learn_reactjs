import React, { Fragment } from "react";
import Button from "./Button";
function TodoList({todo,deleteItem}){
    return (
     <>
        Id: {todo.id} <br/>
        Title: {todo.title} <br/>
        <Button
            text="deleteItem"
            handleClick={ () => deleteItem(todo.id) }
        />
        <br />
     </>   
    )
}
export default TodoList