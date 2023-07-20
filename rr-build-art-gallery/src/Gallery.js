import React from "react";

function Gallery(props) {
    return (
        <div style={{'width': '100%'}}>
            <img src={props.objectImg} alt={props.title} width={900} />
            <p>{props.artist}</p>
        </div>
    )
}

export default Gallery