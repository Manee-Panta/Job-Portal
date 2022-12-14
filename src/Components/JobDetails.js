import React, { useEffect, useState } from "react";
import MainNav from "./MainNav";
import { useParams,Link } from "react-router-dom";
// import ReactMarkdown from "react-markdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import "../style/job.css";
import Footer from '../Components/Footer'

import { baseurl } from "../BaseUrl";
const JobDetails = () => {

  const params = useParams();
  const [displayJob, setDisplayJob] = useState([]);
  useEffect(() => {
    // console.log(params.uuid)

    fetch(`${baseurl}/job/jobDetail/?uuid=` + params.uuid, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((response) => {
      response.json().then((result) => {
        const display = result.data;
        // console.log(display);
        setDisplayJob(display);
      });
    });
  }, []);

  return (
    <div>
      <MainNav />

      <div className="jobDescription">
      <span ><Link to='/job' style={{'color':'#264b5d'}} ><FontAwesomeIcon icon={faArrowLeftLong} size='1x'></FontAwesomeIcon></Link></span>
        {
          <div className="singleJobDes">
            <div className="displayLogo ">
              <img src={displayJob.clogo} alt="logo"  style={{'objectFit':'cover','width':'100%','height':'100%'}} />
            </div>
            <div className="singleJobDetail">
              <div className="singleJobTitle">
              <h3>{displayJob.name}</h3>
              <h6 >Location : {displayJob.location}</h6>
              <h6>Vaccancy : {displayJob.quantity}</h6>
              </div>

              <div className="des">
              {/* <ReactMarkdown>{displayJob.description}</ReactMarkdown> */}
              <div dangerouslySetInnerHTML={{__html: displayJob.description}}></div>
              </div>
            </div>
            <div></div>
          </div>
        }
      </div>
  <Footer/>
    </div>
  );
};

export default JobDetails;
