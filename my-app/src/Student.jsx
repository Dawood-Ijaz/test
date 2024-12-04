import React,{useState} from "react";

function Student () {
    const [data,setdata]=useState(null);
    const [print,setprint]=useState(false);

    function getData (event) {
        console.log(event.target.value)
        setdata(event.target.value)
        setprint(false) 
    }
    return (
        <>
        {
             print ? <h1>{data} </h1> : null
        }
        <br></br>
       <input type="text" onChange={getData}/> 
       <button onClick={()=>setprint(!print)}>print</button>
        </>
    )
}

export default Student;