import React from "react";
import Typography from "../components/Typography";
import Button from "../components/Button";
function UserGreeting ({toggleShow}) {
    return (
        <>
        <Typography content="Please Sign Up"/>
        <Button text ='Sign Up' handleClick={toggleShow}></Button>
        </>
    )
}
export default UserGreeting