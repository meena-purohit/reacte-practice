import { useState, useTransition } from "react";

function App() {
    const [pending,startTransition]= useTransition();

 
   
    const handleButton=()=>{
        startTransition(async()=>{
         await new Promise(res=>setTimeout(res,2000))
    })
        
    }

    return (
        <div>
            <h1>useTransition Hook in React Js 19</h1>
           {
            pending?
            <img style={{width:"100px"}} src="https://gifdb.com/images/high/minimalist-black-loading-screen-yrjqekpw1qvj8e6o.gif" alt=""/>:null
           }
            <button disabled={pending} onClick={handleButton}>Click</button>
        </div>
    )
}
export default App;
