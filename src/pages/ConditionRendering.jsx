import React from "react";
import Button from "../components/Button";
function ConditionRendering(){
    function LoginButton(){
        return <Button text="Login"/>
    }
    function LogoutButton(){
        return <Button text="Logout"/>
    
    }
    function renderButtonFnc() {
        return <div>render button with func</div>;
      }
    const [todos, setTodos] = React.useState([]);
    let renderButton = <LogoutButton />; // initial value

    if (todos.length > 0) {
        renderButton = <LoginButton />;
    }
    const handleAddTodo = () =>{
       const item = {
            id: Date.now(),
            title: "Learn javascript",
        }
        setTodos(prevState => {
            return [...prevState,item]
        })
    }
    console.log("Conditional Rendering: ", todos);
    return (
        <>
        {todos.length > 0 && <div>has data</div>}
        {todos.length > 0 ? <div>has data</div> : <div>not data</div>}
        {renderButtonFnc()}
        {renderButton}
        <br/>
        <Button text="add_todo" handleClick={handleAddTodo}/>
        </>
    )
}
export default ConditionRendering