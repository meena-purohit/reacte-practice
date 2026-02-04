import { useId } from "react";

function App () {

  
  return(
    <div>
      
      <UserForm/>
      <hr />
      <UserForm/>
    </div>
  )
}

export default App;

function UserForm () {

  const user =useId();
   
  return(
    <div>
      {/* <h1>useId Hook</h1> */}
      <form action="">
      <label htmlFor={user+"name"}>Enter User Name</label>
      <input id={user+"name"} type="text" placeholder="Enter name" />
      <br /><br />
       <label htmlFor={user+"password"}>Enter User Password</label>
      <input id={user+"password"} type="text" placeholder="Enter password" />
      <br /><br />
      <label htmlFor={user+"skills"}>Enter User Skills</label>
      <input id={user+"skills"} type="text" placeholder="Enter skills" />
       <br /><br />
      
      <input id={user+"terms"} type="checkbox" placeholder="Enter name" />
       <label htmlFor={user+"terms"}>Terms & Condition</label>
     
       
      </form>
    </div>
  )
}

