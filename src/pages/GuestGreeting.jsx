import React from "react";
import Typography from "../components/Typography";
import Button from "../components/Button";
function GuestGreeting ({toggleShow}) {
    return (
        <>
        <Typography content="Well come Tan"/>
        <Button text ='Logout' handleClick={toggleShow}></Button>
        </>
    )
}
export default GuestGreeting