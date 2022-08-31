import React from 'react'

const Profile = (props) => {

  let name
  let email
  if(props.user){
    name = props.user.name
    email = props.user.email
  }
  return (
    <div>
      <div><br /><br />
      <div className='row'>
        <div className="jumbotron p-3  col-lg-4 offset-lg-4">
            <h3 className='text-center'>User Profile</h3>
            <ul className="list-group">
              <li className="list-group-item">Name : {name}</li>
              <li className="list-group-item">Email :{email}</li>
            </ul>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Profile
