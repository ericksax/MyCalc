import React from "react"
import "./button.css"

export default function Button(props) {
    return (
    <button onClick={() => props.click() && props.click(props.contentButton)} className={`
    btn
    ${props.triple ? "triple" : ""}
    ${props.double ? "double" : ""}
    ${props.operation ? 'operation' : ""}`}>
        {props.contentButton}
    </button>
    )  
}



