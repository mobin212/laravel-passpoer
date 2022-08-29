import React from 'react'
import {BrowserRouter as Router,Route,Link} from "react-router-dom";


const Register = () => {
  return (
    <div><br /><br />
      <div className='row'>
        <div className="jumbotron   col-lg-4 offset-lg-4">
            <h3 className='text-center'>Register Account</h3>
            <form >
                <div className="form-group">
                    <label htmlFor="exampleInputPassword">User Name</label>
                    <input type="text" className="form-control" id="exampleInputPassword" placeholder="Password"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword2">Confirm Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password"/>
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
