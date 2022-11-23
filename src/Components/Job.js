import React, { Fragment, useEffect, useState } from "react";
import MainNav from "./MainNav";
import "../style/job.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation , faUser, faLaptopCode  } from "@fortawesome/free-solid-svg-icons";

const Job = () => {
  const baseurl = "https://amrit77.pythonanywhere.com/api";
  const [displayJob, setDisplayJob] = useState([]);
  const [companyType, setCompanyType] = useState([]);

  const displayCompanyType=()=>{
    fetch(`${baseurl}/job/companyList`,{ 
      method:'GET',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      }
    }).then((response)=>{
      response.json().then((getCompanyList)=>{
        // console.log(getCompanyList)
        setCompanyType(getCompanyList)
      })
    })
  }

  useEffect(() => {
    fetch(`${baseurl}/job/jobList`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((response) => {
      response.json().then((result) => {
        // console.log(result);
        setDisplayJob(result);
      });
    });
    displayCompanyType()
  },[]);

  const showDetails=(key)=>{
    // console.log(key)
    fetch(`${baseurl}/job/jobDetail/?uuid=` + key ,{
method:'GET',
headers:{
    'Accept':'application/json',
    'Content-Type':'application/json'
}
    }).then((response)=>{
        response.json().then((result)=>{
            console.log(result)
        })
    })
  }
  return (
    <div>
      <MainNav />
      <h3 className="jobHeading">Select Job of Your Choise</h3>
      <div className="jobListMain">
        <div className="jobListMainRight">
          <h5 style={{'textAlign':'center', 'padding':'10px'}}>Our Top Companies</h5>
          {
            companyType?.data?.map((item,i)=>
             <Fragment key={i}>
              <h5 className="companyType">{item.name}</h5>
             
             </Fragment>
            )
          }
       
        </div>
        <div className="jobList">
       
        {displayJob?.data?.map((items, id) => (
          <div className="singleJob" key={id}>
           <div className="companyLogo">
           <img src={items.clogo} alt="logo" className="logo" />
           </div>
            <div className="jobDetails">
            <h5 style={{'color':'#3389c7'}}>{items.jobtype.name}</h5>
           
            <h6> <FontAwesomeIcon icon={faLaptopCode} size='xs' className="setIcon"/>{items.name}</h6>
            <p style={{'marginTop':'-10px'}}> <FontAwesomeIcon icon={faLocation} className="setIcon"/>{items.location}</p>
            <p style={{'marginTop':'-20px'}}><FontAwesomeIcon icon={faUser} className="setIcon"/>{items.quantity}</p>
           <div className="applyBtn">
           <Link to={'/jobdetails/'+items.uuid} className='applyLink' onClick={()=>showDetails(items.uuid)}>Apply Now</Link>
            </div>
            </div>
            <div >

            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Job;
