import React, { useState , useEffect } from "react";

function Lifecycle () {

    const [count,setcount]=useState(0);

    useEffect(()=>{
        console.log('count dec');

        return function () {
            console.log('unmounted')
        }
    },[])

    useEffect(()=>{
        console.log('count increse')
    },[count])

    return (
        <>
        <h1>{count}</h1>
            <button onClick={()=>setcount(count+1)}>inc</button>
            <button onClick={()=>setcount(count-1)}>dec</button>
        </>
    )
}

export default Lifecycle;