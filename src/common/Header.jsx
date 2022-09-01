import React,{useState,useEffect} from 'react'
import Navb from './Navb'
import { BrowserRouter ,Routes, Route, Link } from "react-router-dom";
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import Forget from '../components/Forget';
import Reset from '../components/Reset';
import Profile from '../components/Profile';
import axios from 'axios';


const Header = () => {

  const [userd, setUserd] = useState({});
  const [us, setUs] = useState('');

  useEffect(()=>{
    const fetchUser = async () =>{
      try {
        
        const resp = await axios.get(`http://localhost:8000/api/user`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        // console.log(resp.data)
        setUserd(resp.data)

    } catch (err) {
      console.log(err);
    }
    }
    fetchUser()
  },[])

  return (
    <>
    
    <BrowserRouter >
    <Navb user={userd} setUser={setUserd}/>
    <div>
      
      
        <Routes>
          <Route  path="/" element={<Home user={userd} setUser={setUserd}/>} />
          <Route  path="/login" element={<Login user={userd} setUser={setUserd}/>} />
          <Route  path="/forget" element={<Forget user={userd} setUser={setUserd}/>} />
          <Route  path="/reset/:id" element={<Reset user={userd} setUser={setUserd}/>} />
          <Route  path="/register" element={<Register user={userd} setUser={setUserd} fun={setUs}/>}/>
          <Route  path="/profile" element={<Profile user={userd} setUser={setUserd}/>}/>
        </Routes>
      
    </div>
    </BrowserRouter>
    </>
  )
}

export default Header
