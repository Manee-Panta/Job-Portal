import React,{useEffect, useState} from 'react'
import MainNav from './MainNav'
import { useParams, Link } from 'react-router-dom';

const JobDetails = () => {
    const baseurl = "https://amrit77.pythonanywhere.com/api";
    const params = useParams()
    const [displayJob, setDisplayJob] = useState([]);
    useEffect(() => {
      console.log(params.uuid)
  

      fetch(`${baseurl}/job/jobDetail/?uuid=`+params.uuid, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }).then((response) => {
        response.json().then((result) => {
         
          const display= result.data
          console.log(display);
          setDisplayJob(display);
        });
      });
    },[]);
  
  return (
    <div>
        <MainNav/>
        <h3>Job Details</h3>
        {
        
          <div className="singleJob">
           <div className="companyLogo">
           <img src={displayJob.clogo} alt="logo" className="logo" />
           </div>
            <div className="jobDetails">
            {/* <h4>{displayJob.jobtype.name}</h4> */}
            <h4>{displayJob.name}</h4>
            <p>{displayJob.location}</p>
            <p>{displayJob.quantity}</p>
            <p>{displayJob.description}</p>
          
            </div>
            <div >

            </div>
          </div>

        }

        
    </div>
  )
}

export default JobDetails