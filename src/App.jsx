import { useState } from "react";


function App() {

  const [data, setData] = useState({
    name:"Meena purohit",
    address:{
        city:"Delhi",
        country:"India"
    }
  })
  const handleName = (val)=>{
    data.name=val

    console.log(data);
    setData({...data})
}
const handleCity=(city)=>{
  data.address.city=city
  setData({...data,address:{...data.address,city}})
}
    return(

        <div>
            <h1>Updating Object in State React Js</h1>
            
            <input type="text" placeholder="update name" 
            onChange={(event)=>handleName(event.target.value)}/>

             <input type="text" placeholder="update city" 
            onChange={(event)=>handleCity(event.target.value)}/>
            <h2>Name:{data.name}</h2>
            <h2>City:{data.address.city}</h2>
            <h2>Country:{data.address.country}</h2>
        </div>
    )
}

export default App;