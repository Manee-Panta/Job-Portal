import React, { useEffect, useState } from "react";
import JNav from "./JNav";
import "../../style/jobseeker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const Jobseeker = () => {
  const baseurl = "https://amrit77.pythonanywhere.com/api";
  const [displayJob, setDisplayJob] = useState([]);

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
              Manita Panta
            </h6>
            <h6 style={{ fontWeight: "lighter" }}>Address : Banepa</h6>
            <h6 style={{ fontWeight: "lighter" }}>
              Email : Pantamanee145@gmail.com
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
              {displayJob?.data?.map((items, id) => (
                <tr key={id}>
                  <td>{items.jobtype.name}</td>
                  <td>{items.name}</td>
                  <td>{items.quantity}</td>
                  <td>{items.location}</td>
                  <td>
                    View Details
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Jobseeker;
