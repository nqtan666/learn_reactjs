import React from "react";
import Button from "../components/Button";
import TodoList from "../components/TodoList";
import { v4 as uuidv4 } from 'uuid';

function LiftingStateUp(){
    const [todos, setTodos] = React.useState([
        { id: 1, title: 'learn javascript' }
      ])
    const [input, setInput] = React.useState('');
    const deleteItem =(params)=>{
        console.log(params);
    }
    const handleChange = (e) =>{
        const value = e.target.value;
        setInput(value);
    }
    const addTodo = ()=> {
        const item = {
            id : uuidv4(),
            title : input
        }
        setTodos([...todos,item])
    }
    return(
        <>
            <input type="text" value={input} onChange={handleChange} />
            <Button text="AddTodo" handleClick={addTodo}/>
            <h4>Render todo list</h4>
            {todos.map(todo => {
                return (<TodoList key={todo.id} todo={todo} deleteItem={deleteItem}/>)
            })}
        </>
    )
}
export default LiftingStateUp