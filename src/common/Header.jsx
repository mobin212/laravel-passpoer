import React from 'react'
import Navb from './Navb'
import { BrowserRouter ,Routes, Route, Link } from "react-router-dom";
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import Forget from '../components/Forget';
import Profile from '../components/Profile';


const Header = () => {
  return (
    <>
    
    <BrowserRouter >
    <Navb/>
    <div>
      
      
        <Routes>
          <Route  path="/" element={<Home />}/>
          <Route  path="/login" element={<Login />} />
          <Route  path="/forget" element={<Forget />} />
          <Route  path="/register" element={<Register />}/>
          <Route  path="/profile" element={<Profile />}/>
        </Routes>
      
    </div>
    </BrowserRouter>
    </>
  )
}

export default Header
