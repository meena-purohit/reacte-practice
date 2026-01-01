import College from "./College";
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
     name:"Peater",
     age:20,
     email:"peater@test.com"

  }
  let collegeNames = ["IET","DU","ITI","NIT","NET"]
  return(
    <div>
      <h1>Props in React Js</h1>
      {/* <User name={userName} age={age} email={email}/> */}
      <College name={collegeNames[0]}/>
      <College name={collegeNames[1]}/>
      <College name={collegeNames[2]}/>
      <College name={collegeNames[3]}/>
      <College name={collegeNames[4]}/>



      <User user={userObject1}/>
      <User user={userObject2}/>
      <User user={userObject3}/>
    </div>
  )
 }

 export default App;