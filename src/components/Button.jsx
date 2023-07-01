import React from 'react'

function Button({text = "Submit",handleClick}){
    return (
        <button onClick={handleClick}>{text}</button>
    )
}
export default Button ;