import React, { Fragment, useState } from "react";
import Button from "../components/Button";
import { v4 as uuidv4 } from 'uuid';
import Box from "../components/Box";
import {getRandomColor} from "../helpers/getRandomColor"
import "../components/box.css"
//genarate box
function genarateBoxItems (numberBox){
    const newBoxItems = []
    for(let i = 0 ; i < numberBox ; i ++){
        const box = {
            id : uuidv4(),
            number :i
        }
        newBoxItems.push(box)
    }
    return newBoxItems
}
function GenarateBox(){
    const [input,setInput] = useState(0);
    const [boxItem,setBoxItem] = useState([]);
    const genarateBox = (numberBox) =>{
        setBoxItem(genarateBoxItems(numberBox))
    
    }
    console.log(boxItem);
    //change input
    function onChangeInput(e){
        let numericInput = Math.min(e.target.value, 128); // Enforce maximum value of 128
        setInput(numericInput);
    }
    function handleChangeColor(box){
        const boxUpdate = boxItem.map((item) => {
            if (item.id === box.id) {
              return { ...item, color: getRandomColor() };
            }
            return item;
          });
          if (boxUpdate.length > 0) {
            setBoxItem(boxUpdate);
          }
    }
return (
    <>
     <input type="text" value={input} onChange={onChangeInput} />
     <Button text="GenarateBox" handleClick={() => genarateBox(input)}/>
     <div className="container">
          <div className="container-box">
                {boxItem.length === 0 ?(
                    <h1>No Data</h1> 
                ) : (
                    boxItem.map((item,key) => {
                        return(
                        <Fragment key={item.id}>
                            <Box
                                handleChangeColor={()=>handleChangeColor(item)}
                                color ={item.color}
                                name = {key}
                            />
                        </Fragment>
                        )
                    })
                )}
          </div>
    </div>
    </>
)
}
export default GenarateBox