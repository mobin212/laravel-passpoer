import React from 'react'
import {Link} from "react-router-dom";


const Forget = () => {
  return (
    <div><br /><br />
      <div className='row'>
        <div className="jumbotron   col-lg-4 offset-lg-4">
            <h3 className='text-center'>Forget Account</h3>
            <form >
                {/* <div className="form-group">
                    <label htmlFor="exampleInputPassword">User Name</label>
                    <input type="text" className="form-control" id="exampleInputPassword" placeholder="Password"/>
                </div> */}
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                {/* <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div> */}
                <button type="submit" className="btn m-1 btn-primary">Forget Password</button><br />
                Have an Account? <Link to='/login'>Login Here</Link><br />
                Dont Have an Account? <Link to='/register'>Register</Link>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Forget
