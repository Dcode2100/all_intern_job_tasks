import { Routes, Route, Link, Outlet } from "react-router-dom";
import Home from "./components/Home";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import "./style.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<NavWrapper/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/Page1" element={<Page1/>}/>
        <Route path="/page2" element={<Page2/>}/>
        
      </Route>
    </Routes> 
  );
}



function NavWrapper(){
  return(
    <>
    <nav className="nav__wrapper">
      <Link to="/">Home</Link>
      <Link to="/Page1">Page2</Link>
      <Link to="/Page2">Page2</Link>
    </nav>
    <Outlet/>

    </>
  )
}