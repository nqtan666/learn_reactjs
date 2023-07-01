import React, { useState } from "react";
import Button from '../components/Button';
function HandelEvent(){
    const [count ,setCount] = React.useState(0);
    const handleIncrement = () => {
        setCount(prevState => prevState + 1)
    }
    const handleDecrement = () => {
        setCount(prevState => prevState - 1)
    }
    return (
        <>
        <div>{count}</div>
        <Button text="handleIncrement" handleClick={handleIncrement}/>
        <Button text="handleDecrement" handleClick={handleDecrement}/>
        </>
    
    )
}
export default HandelEvent;