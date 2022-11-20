import React, { useEffect, useState } from "react";
import MainNav from "./MainNav";
import "../style/job.css";
import { Link } from "react-router-dom";

const Job = () => {
  const baseurl = "https://amrit77.pythonanywhere.com/api";
  const [displayJob, setDisplayJob] = useState([]);
  const [lastCLick, setLastCLick] = useState("");
  useEffect(() => {
    fetch(`${baseurl}/job/jobList`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((response) => {
      response.json().then((result) => {
        console.log(result);
        setDisplayJob(result);
      });
    });
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
      <div className="jobList">
        <h3 className="jobHeading">Select Job of Your Choise</h3>
        {displayJob?.data?.map((items, id) => (
          <div className="singleJob">
           <div className="companyLogo">
           <img src={items.clogo} alt="logo" className="logo" />
           </div>
            <div className="jobDetails">
            <h4>{items.jobtype.name}</h4>
            <h4>{items.name}</h4>
            <p>{items.location}</p>
            <p>{items.quantity}</p>
            {/* <Link to={"/update/" + item.id}> */}
            <Link to={'/jobdetails/'+items.uuid} className="applyBtn" onClick={()=>showDetails(items.uuid)}>Apply Now</Link>
            </div>
            <div >

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Job;
