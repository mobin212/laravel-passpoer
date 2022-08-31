import React,{useState} from 'react'
import axios from 'axios';
import {BrowserRouter as Router,Route,Link,Navigate} from "react-router-dom";


const Register = (props) => {

  let resinit = {
    name:'',
    email:'',
    password:'',
    password_confirmation:'',
    message:'',
    loggedIn:false
  }
  const [rg, setRg] = useState(resinit);

  const formSubmit = async (e) =>{
    e.preventDefault()
    const data = {
      name:rg.email,
      email:rg.email,
      password:rg.password,
      password_confirmation:rg.password_confirmation,
    }
    try {
      const resp = await axios.post(`http://localhost:8000/api/register`,data);
      console.log(resp)
      localStorage.setItem('token',resp.data.token);
      setRg({...rg,loggedIn:true})
  } catch (err) {
      // Handle Error Here
      console.error(err);
  }
    
  }
  if(rg.loggedIn){
    // return <Navigate to={'/profile'}/>
    window.location = '/profile';
  }
  
  return (
    <div><br /><br />
      <div className='row'>
        <div className="jumbotron   col-lg-4 offset-lg-4">
            <h3 className='text-center'>Register Account</h3>
            <form onSubmit={formSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword">User Name</label>
                    <input type="text" onChange={(e)=>{setRg({...rg, name: e.target.value})}} required className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" onChange={(e)=>{setRg({...rg, email: e.target.value})}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" required onChange={(e)=>{setRg({...rg, password: e.target.value})}} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword2">Confirm Password</label>
                    <input type="password" required onChange={(e)=>{setRg({...rg, password_confirmation: e.target.value})}} className="form-control" id="exampleInputPassword2" placeholder="Password"/>
                </div>
                {/* <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div> */}
                <button type="submit" className="btn m-1 btn-primary">Register</button><br />
                Have an Account? <Link to='/login'>Login Here</Link><br />
                Forget Password <Link to='/forget'>Click Here</Link>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Register
