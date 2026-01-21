import { useEffect } from "react";

const Counter =({count})=>{

    const handlCounter=()=>{
        console.log("counter called")
    }

    useEffect(()=>{
      handlCounter();  

    },[])


    return(
        <div>
            <h1>Counter Value{count}</h1>
        </div>

    )                
}

export default Counter;