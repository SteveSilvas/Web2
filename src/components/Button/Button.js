import "./Button.css";
import React from "react";

const Button =(props)=>{
    let classe = props.className === undefined ? "Button" : props.className;

    return(
        <button
            className={classe}
            onClick={props.onClick}
        >
            {props.text}
        </button>
    );
}

export default Button;