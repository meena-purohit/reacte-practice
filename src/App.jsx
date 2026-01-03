import { useState } from "react";

function App() {
  const [val,setVale]=useState("Meena Purohit")
  return (
    <div>
      <h1>Get Input field Value</h1>
      <input type="text" value={val} onChange={(event)=>setVale(event.target.value)} placeholder="Enter User Name" />
      <h1>{val}</h1>
      <button onClick={()=>setVale("")}>clear value</button>
    </div>
  )
}

export default App;