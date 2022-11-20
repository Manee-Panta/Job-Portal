import React, { useState, useEffect, Fragment } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import ENav from "./ENav";
import "../../style/employer.css";

const EPostJob = () => {
  const baseurl = "https://amrit77.pythonanywhere.com/api";
  const [jobType, setJobType] = useState()
  const [inpval, setInpval] = useState({
    name: "",
    jobtype: "",
    description: "",
    location: "",
    quantity: "",
    logo: "",
  });

  const getData = (e) => {
    const { value, name } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    fetch(`${baseurl}/job/jobType/`, {
      method: "GET",
      headers: {
        'Accept': "application/json",
        "Content-Type": "application/json",
      },
    }).then((response) => {
      response.json().then((getJobType) => {
        console.log(getJobType);
        setJobType(getJobType);
      });
    });
  }, []);

  const addData = (e) => {
    e.preventDefault();
    console.log(inpval);
    fetch(`${baseurl}/job/postJob/`, {
      method: "POST",
      headers: {
        'Accept': "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inpval),
    }).then((response) => {
      response.json().then((result) => {
        console.log(result);

      });
    });
  };
  return (
    <div>
      <ENav />
<div className="postHeading">
<h4 >Post a Job</h4>
<p>Choose Best Candidate For Your Job</p>
</div>
      <Form className="postJob" >
        <Form.Group className="jobList">
          <Form.Control
            type="text"
            placeholder="Enter Job Name"
            name="name"
            onChange={getData}
          />
        </Form.Group>
        {/* <Form.Group className="jobList">
          <Form.Control
            type="text"
            placeholder="Enter Job Type"
            name="jobtype"
            onChange={getData}
          />
        </Form.Group> */}

        <Form.Select
          className="jobList"
          name="jobtype"
          id="ctype"
          onChange={getData}
        >
          <option value="select" disabled selected hidden>
            Select Job Type
          </option>
          {jobType?.data?.map((item, i) => (
            <Fragment key={i}>
              <option value={item.uuid}>{item.name}</option>
            </Fragment>
          ))}
        </Form.Select>

        <Form.Group className="jobList">
          <Form.Control
            type="text"
            placeholder="Enter Job Description"
            name="description"
            onChange={getData}
          />
        </Form.Group>
        <Form.Group className="jobList">
          <Form.Control
            type="text"
            placeholder="Enter Location"
            name="location"
            onChange={getData}
          />
        </Form.Group>
        <Form.Group className="jobList">
          <Form.Control
            type="number"
            placeholder="Enter NO. of vaccancy "
            name="quantity"
            onChange={getData}
          />
        </Form.Group>

        <Form.Group className="jobList">
          <Form.Control
            type="file"
            placeholder=" Enter Your Company Logo"
            name="logo"
            onChange={getData}
            
          />
        </Form.Group>

        <Button className="registerbtn" onClick={addData}>
          Post
        </Button>
      </Form>
    </div>
  );
};

export default EPostJob;
