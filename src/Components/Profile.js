import React,{useEffect} from 'react';
import "./Profile.css";

import {useNavigate} from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();
   
    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(()=>{
        // rediredt to signup page if token is not present
        if (!user || !user.accessToken) {
           navigate("/")
          };
    },[navigate,user]);
  
    const handleLogout = () => {
      // Clear user data from local storage and redirect to signup page
      localStorage.removeItem('user');
      //redirect to signup page
      navigate("/");
      
    };
  
   

    return (
        <div>
        <header>
        <div><p>Header</p></div>
        <div className='right'>
            <div><p>Signup</p></div>
            <div><p>Profile</p></div>   
        </div>
        </header>
      <hr /> 
          <div className='box2'>
          <h2>Profile</h2>
          <p>Full Name : {user.fullname}</p>
          <p>Email : {user.email}</p>
          <p>Password : {user.password}</p>
          <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      );

};    

export default Profile;