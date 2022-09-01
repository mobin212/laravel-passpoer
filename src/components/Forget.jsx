import React,{useState} from 'react'
import {Link} from "react-router-dom";
import axios from 'axios'


const Forget = () => {

  let resinit = {
    email:'',
    message:'',
    err:'',
    loggedIn:false
  }
  const [res, setRes] = useState(resinit);

  const formSubmit = async (e) =>{
    e.preventDefault()
    try {
      const resp = await axios.post(`http://localhost:8000/api/forgetpassword`,{email:res.email});
      setRes({email:'',message:'',err:'',loggedIn:false})
      setRes({message:resp.data.message})
      
  } catch (err) {
      // Handle Error Here
      setRes({email:'',message:'',err:'',loggedIn:false})
      setRes({err:err.response.data.message})
  }
  }

console.log(res)
  return (
    <div><br /><br />
      <div className='row'>
        <div className="jumbotron   col-lg-4 offset-lg-4">
            <h3 className='text-center'>Forget Account</h3>
            <div>{res.err}</div>
            <div>{res.message}</div>
            <form onSubmit={formSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input onChange={(e)=>{setRes({...res, email: e.target.value})}} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
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
