import { useState } from "react";
import Header from "./header";
import User from "./User";
function App(){
  alert(sum());
  const [counter,setCounter]=useState(0)
  return(
    <div>
      <User />
      <Header />
      <Fruit />
    <h1>hello{sum()}</h1>
    <h2>counter val :{counter} </h2>
    <button onClick={()=>setCounter(counter+1)}>Increse Counter Val</button>
    <h1>code step by step</h1>
    </div>
  );
}
function Fruit() {
  return(
    <h2>Apple</h2>
  )
}

function sum() {
  return(
    10+10
  )
}
export default App;