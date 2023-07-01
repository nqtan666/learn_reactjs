import React, { Fragment } from "react";
import Button from "../components/Button";
import { v4 as uuidv4 } from 'uuid';
function List () {
    const [products, setProducts] = React.useState([
        {  name: 'banana', isFruit: true },
        {  name: 'iphone', isFruit: false },
        {  name: 'mango', isFruit: true },
      ]);
    const [input, setInput] = React.useState('');
    const onChangeInput = (e) =>{
        const value = e.target.value;
        setInput(value)
    }
   const addTodoList = () =>{
    const item = {
        name : input,
        isFruit : false
    }
       setProducts(prevState => [...prevState,item])
   }
   const renderItem = products.map((product) => {
        return {
            ...product,
            id : uuidv4()
        }
   }).map((product) => {
      return (
        <Fragment key = {product.id}>
            <div
             style={{ color: product.isFruit ? 'green' : 'red',}}
            >
            Id: {product.id} <br />
            Name: {product.name} <br />
            <Button text="Delete" />
            </div>
        </Fragment>
      )
   })
   
    return(
        <>
            <h3>Add List</h3>
            <input type="text" value={input} onChange={onChangeInput} />
            <br/>
            <Button text="Add_todo" handleClick={addTodoList}></Button>
            {renderItem}
        </>
    )
}
export default List