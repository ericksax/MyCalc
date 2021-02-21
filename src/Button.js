import React from "react"
import "./button.css"


export default function Button(props) {

    let classes = "btn "
        classes += props.operation ? "operation" : ""
        classes += props.double ? "double" : ""
        classes += props.triple ? "triple" : ""

    return (
        <button
            onClick={()=> {if(props.click) props.click(props.contentButton)}}
            className={classes}>
            {props.contentButton}
        </button>
    )             
}



