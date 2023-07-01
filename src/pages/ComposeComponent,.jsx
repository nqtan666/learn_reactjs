import React from "react";
import Button from "../components/Button";
import Typography from "../components/Typography";
import Avatar from "../components/Avatar";
function ComposeComponent (){
    const comment = {
        date: new Date(),
        text: 'I hope you enjoy learning React!',
        author: {
          name: 'Hello Kitty',
          avatarUrl: 'https://placekitten.com/g/64/64',
        },
      };
    return(
        <>
            <Typography content={comment.date.toDateString()}/>
            <Typography content={comment.text}/>
            <Typography content={comment.author.name}/>
            <Avatar src={comment.author.avatarUrl}/>
        </>
    )
}
export default ComposeComponent