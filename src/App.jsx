import User from "./User";
function App() {
  const userName=['Anil','sam','peter','bruch'];
  const collegeData=['ITE','IIT','NIT'];
const userData=[
  {
    name: 'Anil',
    age: '29',
    email: 'anil@test.com',
    id: 1
  },
  {
    name: 'sam',
    age: '28',
    email: 'sam@test.com',
    id: 2
  },
  {
    name: 'peter',
    age: '30',
    email: 'peter@test.com',
    id: 3
  },
  {
    name: 'bruch',
    age: '20',
    email: 'bruch@test.com',
    id: 4
  },
]
  return (
    <div>
      <h1>Reuse component in loop</h1>
      {
        userData.map((user)=>(
          <div key={user.id}>
            <User data={user}/>
          </div>
        ))
      }
      
       </div>
  )
}
  export default App;