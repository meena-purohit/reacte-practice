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
      <h1>Loop in JSX with Map Function</h1>
      <table border='1'>
      <thead>
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Email</td>
          <td>Age</td>
        </tr>
      </thead>
      <tbody>
      {userData.map((user)=>(
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.age}</td>
        </tr>
      ))}
     </tbody>
      </table>
     
      <h1>Dummy Data</h1>
      <table border='1'>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Age</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Anil</td>
            <td>29</td>
            <td>anil@test.com</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Anil</td>
            <td>29</td>
            <td>anil@test.com</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Anil</td>
            <td>29</td>
            <td>anil@test.com</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Anil</td>
            <td>29</td>
            <td>anil@test.com</td>
          </tr>
        </tbody>
      </table>
    </div>

  )
}

export default App;