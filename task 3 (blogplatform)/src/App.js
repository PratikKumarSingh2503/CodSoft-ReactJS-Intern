import React from "react";
import Topbar from "./components/Topbar/topbar";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Contact from "./pages/Contact/contact";
import Write from "./pages/Write/write";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/login";
import Register from "./pages/Register/register";
import Setting from "./pages/Setting/setting";
import Single from "./pages/Single/single";

function App() {
  const user = false;

  return (
    <div className="App">
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route exact path="/" element ={<Home />}>Home</Route>
          <Route path="/about" element ={<About />}>About</Route>
          <Route path="/contact" element ={<Contact />}>Contact</Route>
          <Route path="/post/:postId" element ={<Single />}></Route>
          <Route path="/write" element ={user ? <Write /> : <Register />}>Write</Route>
          <Route path="/setting" element ={user ? <Setting /> : <Register />}>Setting</Route>
          <Route path="/login" element ={user ? <Home /> : <Login />}>Login</Route>
          <Route path="/register" element ={user ? <Home /> : <Register />}>Register</Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
