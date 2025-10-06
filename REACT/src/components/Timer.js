import React, {useState} from "react";

const Timer=() =>{
    const [Timer,setTimer]=useState(0)
    return(
        <div>
            <button>Start</button>
           
            <button>Stop</button>
            <button>Reset</button>
        </div>
    );
}
export default Timer;
