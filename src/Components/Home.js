import React, { useState, useEffect } from "react";
import "../style/home.css";
import MainNav from "./MainNav";
import Footer from "./Footer";


const Home = () => {
  const baseurl='http://192.168.1.17:8000/api'
  // Practice Start
 
 
  return (
    <>
      <MainNav />
      <div className="homeMain">
        <div>
          <div className="homeimg">
            <div className="textLayer">
              <h1>Get your </h1>
              <h1>dream Job </h1>
              <h1>Today</h1>
            </div>
            {/* <h2>"Choose a job you love, and you will never have to work a day in your life</h2> */}
          </div>
          
          {/* Hero Section Start */}
          <div className="heroSection">
            <div className="heroElement">
              <h1>19K+</h1>
              <h3 style={{ fontSize: "15px" }}>Ready Job Vaccancy</h3>
            </div>
            <div className="heroElement">
              <h1>276K+</h1>
              <h3 style={{ fontSize: "15px" }}>Job Seekers Active</h3>
            </div>
            <div className="heroElement">
              <h1>34K+</h1>
              <h3 style={{ fontSize: "15px" }}>Incorporated Company</h3>
            </div>
          </div>
          {/* Hero Section End */}
          <div className="jobCategoty">
            <h3>Popular Job Categories</h3>
            <p>A better career is out there. we'll help ypu find it . We are your first step to becomimg everything you want to be</p>
            <div className="content">
              <div className="contentBox">
                <img src="" alt="no image" />
                <h3>frontend developer</h3>
                <h5>(4 vacancies)</h5>
              </div>
            </div>

          </div>

          
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
