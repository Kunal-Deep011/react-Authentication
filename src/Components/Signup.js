import React,{useState} from 'react';
import "./Signup.css";

import {useNavigate} from "react-router-dom";

const Signup =()=>{
const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  


  const handleSignup = () => {

   
    if (!fullname || !email || !password || !confirmPassword) {
      setError('All the fields are mandatory.');
      return;
    };

    if (password !== confirmPassword) {
        setError('Passwords do not match.');
        return;
      };

      // generate access token

      const accessToken = Array.from(crypto.getRandomValues(new Uint8Array(16)), (byte) => byte.toString(16).padStart(2, '0')).join('');
      
      //save user details

      const user = {
        fullname,
        email,
        password,
        accessToken
      };

      localStorage.setItem('user',JSON.stringify(user));

      // clearing the feild area after suceessfull submission
      setFullname('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setError('');
      setSuccess('Successfully Signed Up!');

      //redirect to profile page
      setTimeout(()=>{
        navigate("/profile");
      },1000)
      
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
      
      <div className='box1'>
        <div><h2>Signup</h2></div>
        <div>
        <label>Full Name :</label>
        <input type="text" value={fullname} onChange={(e) => setFullname(e.target.value)} />
      </div>
      <hr />
      <div>
        <label>Email :</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <hr />
      <div>
        <label>Password :</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <hr />
      <div>
        <label>Confirm Password :</label>
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      </div>
      <hr />
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <div><button onClick={handleSignup}>Signup</button></div>
      </div>
    </div>
)
  
};

export default Signup;