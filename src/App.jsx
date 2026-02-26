
import { NavLink, Route, Routes } from "react-router";
import "./App.css"
import UserAdd from "./UserAdd";
import UserList from "./UserList";

export default function App() {
 

  return (
    <div>
      <ul className="nav-list">
        <li>
          <NavLink style={{textDecoration:"none"}} to="/">List</NavLink>
        </li>
        <li>
          <NavLink style={{textDecoration:"none"}} to="/add">Add User</NavLink>
        </li>
      </ul>
      {/* <h1>Make Routes and Pages for Add User and User List UI  </h1>
      <UserList /> */}
     
     <Routes>
      <Route path="/" element={<UserList />}/>
      <Route path="/add" element={<UserAdd />}/>
     </Routes>
    </div>
  );
}
