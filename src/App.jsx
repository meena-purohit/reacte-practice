import { Navigate, Route, Routes } from "react-router";
import Home from "./Home";
import Login from "./Login";
import About from "./About";
import NavBar from "./NavBar";
import PageNotFound from "./PageNotFound";
import College from "./College";
import Student from "./Student";
import Departments from "./Departments";
import Details from "./Details";

export default function App() {
  return (
    <div>
      {/* <NavBar /> */}

      <Routes>
        <Route element={<NavBar />}>
        <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
          <Route path="login" element={<Login />} />
        </Route>
        
       
        
        <Route  path="college" element={<College />}>
        <Route index element={<Student />}/>
        <Route  path="departments" element={<Departments />}/>
        <Route  path="details" element={<Details />}/>
        </Route>
        {/* <Route  path="/*" element={<PageNotFound />}/> */}
        <Route path="/*" element={<Navigate to='/login' />}/>
      </Routes>
    </div>
  );
}
