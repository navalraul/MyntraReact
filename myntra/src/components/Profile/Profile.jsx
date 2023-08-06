
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

    const { Login, state } = useContext(AuthContext);

    const [userData, setUserData] = useState({});
    const router = useNavigate();


    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("MynCurrent-user"));
        if (!currentUser) {
          router('/login')
        }
        const allUsers = JSON.parse(localStorage.getItem("Myntra-Users"));
        if (currentUser && allUsers) {
          for (var i = 0; i < allUsers.length; i++) {
            if (allUsers[i].email == currentUser.email && allUsers[i].password == currentUser.password) {
              setUserData(allUsers[i])
            }
          }
        }
      }, [])
    
    
      function handleChange(event) {
        setUserData({ ...userData, [event.target.name]: event.target.value })
      }
    
    
      function handleSubmit(event) {
        event.preventDefault();
        const currentUser = JSON.parse(localStorage.getItem("MynCurrent-user"));
        const allUsers = JSON.parse(localStorage.getItem("Myntra-Users"));
    
        for (var i = 0; i < allUsers.length; i++) {
          if (allUsers[i].email == currentUser.email && allUsers[i].password == currentUser.password) {
            allUsers[i].name = userData.name;
            allUsers[i].password = userData.password;
            currentUser.password = userData.password;
            currentUser.name = userData.name;
          }
        }
        Login(currentUser)
        localStorage.setItem("MynCurrent-user", JSON.stringify(currentUser));
        localStorage.setItem("Myntra-Users", JSON.stringify(allUsers));
        router('/')
        setUserData({});
        alert("Profile Updated")
      }


    return (
        <div style={{ display:'flex', justifyContent:'center',alignItems:'center', height: '300px', backgroundColor:'#fdefeb'}}>
            <form onSubmit={handleSubmit}>
                {/* <h2>UserName : {userData.name}</h2> */}
                <label>Change Name:</label><br />
                <input type='text'  name='name' onChange={handleChange} /><br />
                <label>Change Password:</label><br />
                <input type='text'  name='password' onChange={handleChange} /><br />
                <input type='submit' />
            </form>
        </div>
    )
}

export default Profile
