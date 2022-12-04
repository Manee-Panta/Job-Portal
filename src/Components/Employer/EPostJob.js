import React, { useState, useEffect, Fragment , useRef } from "react";
import { Form, Button } from "react-bootstrap";
import ENav from "./ENav";
import "../../style/employer.css";
import Swal from 'sweetalert2'
import JoditEditor from 'jodit-react';
import TurndownService from 'turndown';
const EPostJob = () => {
  const turndownService = new TurndownService()

  const baseurl = "https://amrit77.pythonanywhere.com/api";
  const [jobType, setJobType] = useState();
  const editor = useRef(null);
	const [description, setDescription] = useState('');

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

  const contentFieldChange=(data)=>{
setInpval({...inpval,'description':turndownService.turndown(data)})

  }

  useEffect(() => {
    fetch(`${baseurl}/job/jobType/`, {
      method: "GET",
      headers: {
        Accept: "application/json",
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
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inpval),
    }).then((response) => {
      response.json().then((result) => {
        console.log(result);
        result.message === "job is successfully saved"
        ? Swal.fire({
          title: 'Successfully Posted!',
          text: 'Do you want to continue',
          icon: 'success',
          confirmButtonText: 'Yes'
        
        })
        
        : Swal.fire({
          title: 'Error!',
          text: 'Failed to Post',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      });
    });
  };
  return (
    <div className="epostJobMain">
      <ENav />
      <div className="epostHeading">
        <h4>Post a Job</h4>
        <p>Choose Best Candidate For Your Job</p>
      </div>
      <Form className="epostJob">
        <Form.Group className="ejobList">
          <Form.Control
            type="text"
            placeholder="Enter Job Name"
            name="name"
            onChange={getData}
          />
        </Form.Group>

        <Form.Select
          className="ejobList ejobSelect"
          name="jobtype"
          id="ctype"
          onChange={getData}
          defaultValue={0}
        >
          <option
            
            disabled
           value={0}
            className="selectOption"
          >
            Select Job Type
          </option>
          {jobType?.data?.map((item, i) => (
            <Fragment key={i}>
              <option value={item.uuid}>{item.name}</option>
            </Fragment>
          ))}
        </Form.Select>

        <Form.Group className="ejobList">
          <Form.Control
            type="text"
            placeholder="Enter Location"
            name="location"
            onChange={getData}
          />
        </Form.Group>
        <Form.Group className="ejobList">
          <Form.Control
            type="number"
            placeholder="Enter NO. of vaccancy "
            name="quantity"
            onChange={getData}
          />
        </Form.Group>

        {/* <Form.Group className="ejobList erichText">
          <Form.Control
            type="text"
            placeholder="Enter Job Description"
            name="description"
            onChange={getData}
          >
          </Form.Control>
        </Form.Group> */}
        
        <Form.Group className="ejobList erichText">
        <JoditEditor
        className="jodit"
			ref={editor}
			value={description}
      onChange={contentFieldChange}	/>
        </Form.Group>


        <Form.Group className="ejobList">
          <Form.Control
            type="file"
            placeholder=" Enter Your Company Logo"
            name="logo"
            onChange={getData}
          />
        </Form.Group>

        <Button className="jobPostBtn" onClick={addData}>
          Post
        </Button>
      </Form>
      {/* {description} */}
    </div>
  );
};

export default EPostJob;
