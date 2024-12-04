import { useState } from "react";

function Condition () {
const[login,setlogin]=useState(2);
return (
    <>
        {
            login==1? <h1>welcome 1</h1> :
            login==2? <h1>welcome 2</h1> :
            <h1>login in first</h1>
        }
    </>
)
}

export default Condition;