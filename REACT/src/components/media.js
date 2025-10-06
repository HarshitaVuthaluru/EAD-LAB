import React from "react";


const Media = (props) => {
    return(
        <div>

            <h2> {props.name} </h2>
            <h2> {props.email} </h2>
            <h2> {props.phone} </h2>
            <h2> {props.age} </h2>
            <h2> {props.location} </h2>

        </div>
    )
} 
export default Media;  
