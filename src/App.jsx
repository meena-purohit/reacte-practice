import { useState } from "react";
import Counter from "./Counter";

function App() {

  const [count,setCount] = useState(0)
  
 
  return(

    <div>
      {/* <h1>Handel Props Side Effect with useEffect in component </h1> */}
      <button onClick={()=>setCount(count+1)}>Count</button>
     <Counter count={count}/>
    </div>

  )
}

export default App;