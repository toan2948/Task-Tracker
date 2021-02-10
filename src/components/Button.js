import React from 'react'

const Button = ({ backgroundColor, text, onClick}) => {

    return (
        <div>
           <button onClick={onClick} style = {{backgroundColor: backgroundColor}} className="btn">{text}</button>
        </div>
    )
}

export default Button
