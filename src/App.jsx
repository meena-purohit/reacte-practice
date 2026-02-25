import { useEffect, useState } from "react";
import "./App.css"

export default function App() {
  const [userData, setUserData] = useState([]);
  const [loading,setLoading]=useState(false);

  useEffect(() => {
    getUserData();
    setLoading(true);
  }, []);

  const getUserData = async () => {
    const url = "http://localhost:3000/users";
    let response = await fetch(url);
    response = await response.json();
    setUserData(response);
    setLoading(false);
  };

  return (
    <div>
      <h1>Intergrate JSON Server API and Loader</h1>
      <ul className="user-list-h">
        <li>Name</li>
        <li>Age</li>
        <li>Email</li>
      </ul>
      {
      !loading?
      userData.map((user) => (
       <ul className="user-list">
        <li>{user.name}</li>
        <li>{user.age}</li>
        <li>{user.email}</li>
       </ul>
      ))
    :<h1>Data Loading...</h1>
    }
      
    </div>
  );
}
