import React from "react"

function Note(props) {
    return (
        <p style={{paddingTop: 20}}>{props.text}</p>
    )
}

export default Note