import React, { useEffect, useState  } from "react";
import JNav from "./JNav";
import "../../style/jobseeker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Table } from "react-bootstrap";
import { Link , useParams} from "react-router-dom";
import { AppContext } from "../CommonContext";
import Pagination from '../Pagination'
import { baseurl } from "../../BaseUrl";

const Jobseeker = () => {
  const {email,password,address, phone}=React.useContext(AppContext)
  const params = useParams()
  const [displayJob, setDisplayJob] = useState([]);
  const[currentPage,setCurrentPage]=useState(1)
  const[postsPerPage,setPostsPerPage]=useState(15)


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
        setDisplayJob(result.data);
      });
    });
   
   
  }, []);

  const lastPostIndex=currentPage * postsPerPage;
  const firstPostIndex= lastPostIndex - postsPerPage;
  const currentPosts = displayJob.slice (firstPostIndex,lastPostIndex)
  // console.log(currentPosts)
  
  return (
    <div>
      <JNav params= {params} />
      <div className="jdashboardMain">
        <div className="jFirst">
          <div className="jPhoto">
            <FontAwesomeIcon icon={faUser} size="6x"></FontAwesomeIcon>
          </div>
          <div className="jDetails">
            <h6 style={{ fontWeight: "bold", color: "#00737e" }}>
              Manita Panta {password}
            </h6>
            <h6 style={{ fontWeight: "lighter" }}>Address : {address}</h6>
            <h6 style={{ fontWeight: "lighter" }}>
              Email : {email}
            </h6>
            <h6 style={{ fontWeight: "lighter" }}>
              Contact Number : {phone}
            </h6>
          </div>
        </div>
        <div className="jSecond">
          <h6>Recommended Jobs</h6>
        </div>
        <div className="jThird">
          <Table className="jTable">
            <thead style={{'fontWeight':'bold', 'backgroundColor':''}}>
              <tr>
                <td>Job Type</td>
                <td>Job Position</td>
                <td>Vaccancy</td>
                <td>Location</td>
                <td>Job Details</td>
              </tr>
            </thead>
            <tbody>
              { currentPosts?.map((items, id) => (
                <tr key={id}>
                  <td>{items.jobtype.name}</td>
                  <td>{items.name}</td>
                  <td>{items.quantity}</td>
                  <td>{items.location}</td>
                  <td >
                   <Link className="viewLink" to={'/viewDetails/'+ items.uuid}> View</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          
        </div>
        <Pagination totalPosts={displayJob.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
      </div>
      
      
     
    </div>
  );
};

export default Jobseeker;
