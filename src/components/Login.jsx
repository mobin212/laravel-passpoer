import axios from 'axios';
import React, {useState} from 'react'
import {Link} from "react-router-dom";
import {instance} from '../axios'


const Login = () => {
  
  let resinit = {
    email:'',
    password:'',
    message:''
  }
  const [res, setRes] = useState(resinit);
  const data = {
    email:res.email,
    password:res.password
  }

  const formSubmit = async (e) =>{
    e.preventDefault()
    try {
      const resp = await axios.post(`http://localhost:8000/api/login`,data);
      console.log(resp);
  } catch (err) {
      // Handle Error Here
      console.error(err);
  }
    
  }


  return (
    <div><br /><br />
      <div className='row p-2'>
        <div className="jumbotron p-2  col-lg-4 offset-lg-4">
            <h3 className='text-center'>Login Account</h3>
            <form onSubmit={formSubmit}>
                <div className="form-group p-2">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" value={res.email} onChange={(e)=>{setRes({...res, email: e.target.value})}} className="form-control" name='email' required aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group p-2">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input value={res.password} onChange={(e)=>{setRes({...res, password: e.target.value})}} type="password" className="form-control" name='password' id="exampleInputPassword1" placeholder="Password"/>
                </div>
                
                <button type="submit" className="btn btn-primary p-2 d-block">Login</button>
                Forget Password <Link to='/forget'>Click Here</Link>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login
