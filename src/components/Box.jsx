import React from "react";
//import css 
import "./box.css";
function Box ({handleChangeColor , color ,name}) {
    const boxStyle = {
        backgroundColor: color,
      };
    return (
        <>
            <div
             className="wrapper-box"
             style={boxStyle}
             onClick={handleChangeColor}
            >Box {name + 1}
            </div>
        </>
    )
}
export default Box