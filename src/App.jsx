import College from "./College";
import Student from "./Student";


function App() {

const collegeData = [
  {
    name: "IET Alwar",
    city: "Alwer",
    website: "www.iet.com",
    student: [
      {
        name: "Meena Purohit",
        age: "29",
        email: "meena@test.com"
      },
       {
        name: "Peter",
        age: "27",
        email: "peter@test.com"
      },
       {
        name: "Bruce",
        age: "25",
        email: "bruce@test.com"
      }
    ]
  },
  {
    name: "IIT Delhi",
    city: "Delhi",
    website: "www.iit.com",
     student: [
      {
        name: "Meena Purohit",
        age: "29",
        email: "meena@test.com"
      },
       {
        name: "Peter",
        age: "27",
        email: "peter@test.com"
      },
       {
        name: "Bruce",
        age: "25",
        email: "bruce@test.com"
      }
    ]
  },
  {
    name: "KCIET Hissar",
    city: "Hisar",
    website: "www.kciet.com",
     student: [
      {
        name: "Meena Purohit",
        age: "29",
        email: "meena@test.com"
      },
       {
        name: "Peter",
        age: "27",
        email: "peter@test.com"
      },
       {
        name: "Bruce",
        age: "25",
        email: "bruce@test.com"
      }
    ]
  }
]


  return(
    <div>
      {/* <h1>Nested Looping with Component</h1> */}
      {
        collegeData.map((college,index)=>(
          <div key={index}>
            <College college= {college}/>
            </div>
        ))
      }
      
    </div>
  )


}

export default App; 
