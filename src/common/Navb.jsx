import React,{useState,useEffect} from 'react'
import {BrowserRouter as Router,Route,Link} from "react-router-dom";


const Navb = (props) => {
  const [mt, setMt] = useState(true)

  
  

const logout = () =>{
  // localStorage.clear()
  localStorage.removeItem('token')
  setMt(true)
  // window.location='/login'
}

useEffect(()=>{
  if(localStorage.getItem('token')){
    setMt(false)
  }else{setMt(true)}
},[localStorage.getItem('token')])
  

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand text-light" to="/">Home</Link>
    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link text-light" to="/profile">Profile</Link>
        </li>
      </ul>
      {mt ? <><span className="navbar-text ms-4 text-light">
        <Link to="/register" className='text-light'>Register</Link>
      </span>
      <span className="navbar-text ms-4 text-light">
        <Link to="/login" className='text-light'>Login</Link>
      </span></> : <span onClick={logout} className="navbar-text ms-4 text-light">
        <Link to="/login" className='text-light'>Logout</Link>
      </span> }
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navb