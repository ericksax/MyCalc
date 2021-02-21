import React from "react"
import "./display.css"

const visor = props => {
    return(
    <div className="display">{props.value}</div>
    )
}

export default visor