import React from 'react';
import MyProfile from './MyProfile';
import LeftBar from './LeftBar';
import './Home.css';
import HeaderLog from './HeaderLog';

function Home() {
  
  return (
    <div>
      <HeaderLog />
        <div className="container-home">
          <LeftBar />
          <div className="company-info"> 
          <MyProfile />
          </div>
        </div>
    </div>
  )
}

export default Home
