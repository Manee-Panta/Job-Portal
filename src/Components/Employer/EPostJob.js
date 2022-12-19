import React, { useState, useEffect, Fragment, useRef , } from "react";
import { Form, Button } from "react-bootstrap";
import ENav from "./ENav";
import "../../style/employer.css";
import Swal from "sweetalert2";
import { Editor } from "@tinymce/tinymce-react";
import JoditEditor from "jodit-react";
import TurndownService from "turndown";
import { baseurl } from "../../BaseUrl";

const EPostJob = () => {
  // const turndownService = new TurndownService();

  const [jobType, setJobType] = useState('');
  // const editor = useRef(null);
  const [description, setDescription] = useState("");
  const[name,setName]=useState('')
  const[location,setLocation]=useState('')
  const[quantity,setQuantity]=useState('')
  const[clogo,setClogo]=useState('')
  const[jobtype,setjobtype]=useState('')


  // const contentFieldChange = (data) => {
  //   console.log(data)
  //   setDescription(turndownService.turndown(data))
  // };
 
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
    // console.log(inpval);
   const formData=new FormData()
   formData.append('name',name)
   formData.append('location',location)
   formData.append('quantity',quantity)
   formData.append('jobtype',jobtype)
   formData.append('description',description)
   formData.append('clogo',clogo)
   console.log(formData.get("clogo"));

console.log(formData)
 console.log(jobType)
    

    fetch(`${baseurl}/job/postJob/`, {
      method:'POST',
      // body:JSON.stringify(formData)
      body:formData
    }).then((response) => {
      response.json().then((result) => {
        console.log(result);
        result.message === "job is successfully saved"
          ? Swal.fire({
              title: "Successfully Posted!",
              text: "Do you want to continue",
              icon: "success",
              confirmButtonText: "Yes",
            })
          : Swal.fire({
              title: "Error!",
              text: "Failed to Post",
              icon: "error",
              confirmButtonText: "Ok",
            });
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
      <Form className="epostJob" encType="multipart/form-data">
        <Form.Group className="ejobList">
          <Form.Control
            type="text"
            placeholder="Enter Job Name"
            name="name"
            onChange={(e)=>setName(e.target.value)}
          />
        </Form.Group>

        <Form.Select
          className="ejobList ejobSelect"
          name="jobtype"
          id="ctype"
          // onChange={getData}
          onChange={(e)=>setjobtype(e.target.value)}
          defaultValue={0}
        >
          <option disabled value={0} className="selectOption">
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
            // onChange={getData}
            onChange={(e)=>setLocation(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="ejobList">
          <Form.Control
            type="number"
            placeholder="Enter No. of vaccancy "
            name="quantity"
            // onChange={getData}
            onChange={(e)=>setQuantity(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="ejobList erichText">
          {/* <JoditEditor
            className="jodit"
            ref={editor}
            value={description}
            onChange={contentFieldChange}
          /> */}
<Editor
onEditorChange={(newText)=>{setDescription(newText)}}
init={{
  menubar: true,
  placeholder: "Write your job description here..... ",
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
}}
/>

        </Form.Group>

        <Form.Group className="ejobList">
          <Form.Control
            type="file"
            placeholder=" Enter Your Company Logo"
            name="clogo"
          
            // onChange={getLogo}
            onChange={(e)=>setClogo(e.target.files[0])}
            encType='multipart/formData'
          />
        </Form.Group>
        
        <Button className="jobPostBtn" onClick={addData}>
          Post
        </Button>
      </Form>
    </div>
  );
};

export default EPostJob;
