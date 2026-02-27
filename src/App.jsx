import { useState } from "react";
import "./App.css"

export default function App() {

  const [name,setName]= useState('');
  const [nameErr,setNameErr]= useState();

  const [password,setPassword]= useState('');
  const [passErr,setPassErr]= useState();

  const handleName=(event)=>{
    console.log(event.target.value);
    if(event.target.value.length>5) {
      setNameErr("Please enter valid username. 5 characters allowed")
    } else{
      setNameErr()
    }
    
  }

   const handlePassword=(event)=>{
    let rejex = /^[A-Z0-9]+$/i;
    if(rejex.test(event.target.value)) {
       setPassErr()
    } else{
      setPassErr("Only Numbers and Alphabates allowed")
    }
    
  }
 

  return (
    <div>
     <input className={nameErr?"error":''} type="text" onChange={handleName} placeholder="enter name" />
     <span className="red-color">{nameErr && nameErr}</span>
     <br /><br />
     <input  className={passErr?"error":''} type="text" onChange={handlePassword} placeholder="enter password" />
     <span className="red-color">{passErr && passErr}</span>
     <br /><br />
     <button disabled={nameErr || passErr}>Login</button>
    </div>
  );
}
