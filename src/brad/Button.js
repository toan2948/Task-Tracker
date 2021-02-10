import React from 'react'

const Button = ({ backgroundColor, text, onClick}) => {
   /*  const onClick = (e) => {
        console.log(e);
    } */


    return (
        <div>
           {/* <button onClick={onClick} style = {{backgroundColor: backgroundColor}} className="btn">{text}</button> */}
           <button onClick={onClick} style = {{backgroundColor: backgroundColor}} className="btn">{text}</button>
        </div>
    )
}

export default Button
