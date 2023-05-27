import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Signup from './Components/Signup';
import Profile from './Components/Profile';
import "./App.css";


const App = () =>{
  return (
   
      <div>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
      </div>
  
  );
};


export default App;