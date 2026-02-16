import { Route, Routes } from "react-router";
import Home from "./Home";
import Login from "./Login";
import About from "./About";
import NavBar from "./NavBar";

export default function App() {
  return (
    <div>
     <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}
