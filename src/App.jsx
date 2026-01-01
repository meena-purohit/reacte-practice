import { useState } from "react";
import College from "./College";
import Student from "./Student";
import User from "./User";

 
 function App() {
  // let userName = "Meena Purohit";
  // let age = 29;
  // let email = "meena@test.com";
  let userObject1 = {
     name:"Meena Purohit",
     age:29,
     email:"meena@test.com"

  }
let userObject2 = {
     name:"Peater",
     age:20,
     email:"peater@test.com"

  }
  let userObject3 = {
     name:"bosh",
     age:24,
     email:"bosh@test.com"

  }
  // let collegeNames = ["IET","DU","ITI","NIT","NET"]
  const [student,setStudent]= useState()
  return(
    <div>
      <h1>Props in React Js</h1>
      {/* <User name={userName} age={age} email={email}/> */}
      {student && <Student name={student}/>}
      <button onClick={()=>setStudent("bhaskar")}>update student name</button>

      {/* <College name={collegeNames[0]}/>
      <College name={collegeNames[1]}/>
      <College name={collegeNames[2]}/>
      <College name={collegeNames[3]}/>
      <College name={collegeNames[4]}/> */}




      <User user={userObject1}/>
      <User user={userObject2}/>
      <User user={userObject3}/>
    </div>
  )
 }

 export default App;