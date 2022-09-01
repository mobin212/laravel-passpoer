import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Profile = (props) => {

  const [userd, setUserd] = useState({});
  // const [us, setUs] = useState('');

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
  // console.log(userd)

  // let name
  // let email
  // if(props.user){
  //   name = props.user.name
  //   email = props.user.email
  // }
  return (
    <div>
      <div><br /><br />
      <div className='row'>
        <div className="jumbotron p-3  col-lg-4 offset-lg-4">
            <h3 className='text-center'>User Profile</h3>
            <ul className="list-group">
              <li className="list-group-item">Name : {userd.name}</li> 
              <li className="list-group-item">Email :{userd.email}</li>
            </ul>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Profile
