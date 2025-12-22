import { useState } from "react";
import Header from "./header";
import User from "./User";
function App(){
  const [counter,setCounter]=useState(0)
  return(
    <div>
      <User />
      <Header />
    <h1>hello</h1>
    <h2>counter val :{counter} </h2>
    <button onClick={()=>setCounter(counter+1)}>Increse Counter Val</button>
    <h1>code step by step</h1>
    </div>
  );
}

export default App;