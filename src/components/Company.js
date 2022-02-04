import React from 'react';
import CompanyInfo from './CompanyInfo';
import LeftBar from './LeftBar';
import './Home.css';
import HeaderLog from './HeaderLog';
// import { Link } from "react-router-dom";

function Company() {
  return (
    <div>
      <HeaderLog />
        <div className="container-home">
          <LeftBar />
          <div className="company-info"> 
          <CompanyInfo />
          </div>
        </div>
    </div>
  )
}

export default Company