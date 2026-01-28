import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");
  const handleAddUsers = () => {
    setUsers([...users, user]);
    setUser("");
  };

  const total = users.length;
  const last = users[users.length-1];
  const unique =[...new Set(users)].length;
  return (
    <div>
      <h1>Derived State in React Js</h1>
      <h2>Total User :{total}</h2>
      <h2>Last User :{last}</h2>
      <h2>Unique User :{unique}</h2>
      <br />
      <br />
      <input
      value={user}
        type="text"
        onChange={(event) => setUser(event.target.value)}
        placeholder="add New User"
      />
      <button onClick={handleAddUsers}>Add User</button>
      {users.map((item, index) => (
        <h4 key={index}>{item}</h4>
      )
)}
    </div>
  );
}

export default App;
