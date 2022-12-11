import React ,{useState, useEffect} from 'react'
import JNav from './JNav'
import { AppContext } from "../CommonContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser , faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useParams , Link } from 'react-router-dom';
import ReactMarkdown from "react-markdown";
import { baseurl } from '../../BaseUrl';
const ViewDetails = () => {
    const {email,password}=React.useContext(AppContext)
    // const baseurl = "https://amrit77.pythonanywhere.com/api";
    const params = useParams();
    const [displayJob, setDisplayJob] = useState([]);
    useEffect(() => {

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
        <JNav />
        <div className="jdashboardMain">
        <div className="jFirst">
          <div className="jPhoto">
            <FontAwesomeIcon icon={faUser} size="6x"></FontAwesomeIcon>
          </div>
          <div className="jDetails">
            <h6 style={{ fontWeight: "bold", color: "#00737e" }}>
              Manita Panta {password}
            </h6>
            <h6 style={{ fontWeight: "lighter" }}>Address : Banepa</h6>
            <h6 style={{ fontWeight: "lighter" }}>
              Email : {email}
            </h6>
            <h6 style={{ fontWeight: "lighter" }}>
              Contact Number : 9840264048
            </h6>
          </div>
        </div>
        <div className="jSecond">
          <h6>Recommended Jobs</h6>
        </div>
        <div className="jThird">
        <div className="jobDescription">
            <span ><Link to='/jobseeker' style={{'color':'#264b5d'}} ><FontAwesomeIcon icon={faArrowLeftLong} size='2x'></FontAwesomeIcon></Link></span>
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
              <ReactMarkdown>{displayJob.description}</ReactMarkdown>
              </div>
            </div>
            <div></div>
          </div>
        }
      </div>
            </div>
        </div>
        </div>
  )
}

export default ViewDetails