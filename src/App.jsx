import { useReducer } from "react";

const emptyData={
  name:'',
  passwoed:'',
  email:'',
  city:'',
  address:''
}

const reducer = (data,action)=>{
 return {...data,[action.type]:action.val}
  
}
export default function App () {
  const [state,dispatch]=useReducer(reducer,emptyData)
  
  
  return(
    <div>
      <h1>Use Reduser</h1>
      <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'name'})}
       placeholder="enter name" />
      <br /><br />
      <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'password'})} placeholder="enter password" />
      <br /><br />
      <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'email'})} placeholder="enter email" />
      <br /><br />
      <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'city'})} placeholder="enter city" />
      <br /><br />
      <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'address'})} placeholder="enter address" />
      <br /><br />
     <button onClick={()=>console.log(state)
     }>Add Details</button>
     <ul>
      <li><h4>Name:{state.name}</h4></li>
       <li><h4>Password:{state.password}</h4></li>
        <li><h4>Email:{state.email}</h4></li>
         <li><h4>City:{state.city}</h4></li>
          <li><h4>Address:{state.address}</h4></li>
     </ul>
    </div>
  )
}