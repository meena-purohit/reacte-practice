// import { useState } from "react";

import { useState } from "react";

// function App() {
//   const [val,setVale]=useState("Meena Purohit")
//   return (
//     <div>
//       <h1>Get Input field Value</h1>
//       <input type="text" value={val} onChange={(event)=>setVale(event.target.value)} placeholder="Enter User Name" />
//       <h1>{val}</h1>
//       <button onClick={()=>setVale("")}>clear value</button>
//     </div>
//   )
// }

// export default App;

function App() {
const [name,setName]= useState("");
const [pas,setPas]= useState("");
const [email,setEmail]= useState("");
  return (
    <div>
      <h1>Controller Component</h1>
      <form action="" method="get">
        <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Name" />
        <br />
         <br />
        <input type="password" value={pas} onChange={(event)=>setPas(event.target.value)} placeholder="password" />
         <br />
          <br />
        <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="email" />
         <br />
          <br />
        <button >submit</button>
        <button onClick={()=>{setName(""),setPas(""),setEmail("")}}>clear</button>
        <h3>{name}</h3>
        <h3>{pas}</h3>
        <h3>{email}</h3>
      </form>
    </div>
  )
}
export default App;