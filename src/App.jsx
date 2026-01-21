import { useEffect, useState } from "react";

function App() {

  const [counter,setCounter] = useState(0);
  const [data,setData] = useState(0);

  useEffect(()=>{
    //  callOnce();  
     counterFunction();

  },[counter])
  function callOnce(){
    console.log("callOnce function called");
  }

  
   function counterFunction() {
    console.log("counterFunction",counter)
   }
 
  return(

    <div>
      <h1>useEffect Hook</h1>
      <button onClick={()=>setCounter(counter+1)}>counter {counter}</button>
      <button onClick={()=>setData(data+1)}>Data {data}</button>
    </div>

  )
}

export default App;