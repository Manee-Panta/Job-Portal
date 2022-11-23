import React, { useState, useEffect, Fragment } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "../style/register.css";
import { Form, Button } from "react-bootstrap";
import Swal from 'sweetalert2'
const RegisterEmployer = () => {
  const baseurl = "https://amrit77.pythonanywhere.com/api";
  const params = useParams();
  const navigate = useNavigate();
  const [companyType, setCompanyType] = useState([]);
  const [inpval, setInpval] = useState({
    name: "",
    companyName: "",
    email: "",
    address: "",
    companyType: "",
    password: "",
    phone: "",
    userType: false,
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
    fetch(`${baseurl}/job/companyList/`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((response) => {
      response.json().then((getCompanyList) => {
        console.log(getCompanyList);
        setCompanyType(getCompanyList);
      });
    });
  }, []);

  const addData = (e) => {
    e.preventDefault();
   
    console.log(inpval);
    fetch(`${baseurl}/account/register/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inpval),
    }).then((response) => {
      response.json().then((result) => {
        console.log(result);
        result.status === "1"
          ? Swal.fire({
            title: 'Registration Success!',
            text: 'Do you want to continue',
            icon: 'success',
            confirmButtonText: 'Yes'
          
          }).then((result) => { 
            if (result.isConfirmed) {
              navigate(`/login/${params.name}`);
            }
          })
          
          : Swal.fire({
            title: 'Error!',
            text: 'Registration Failed',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
      });
    });

  
  };
  return (
    <div>
      <div className=" ">
        <section className="registerMain ">
          <div className="leftData ">
            <h3 className=" text-center">Create {params.name} Account</h3>
            <Form>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Full Name"
                  name="name"
                  onChange={getData}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Company Name"
                  name="companyName"
                  onChange={getData}
                />
              </Form.Group>

              <Form.Group>
                <Form.Select
                  className="selectInput"
                  name="companyType"
                  id="ctype"
                  onChange={getData}
                  defaultValue={'DEFAULT'}
                >
                  <option value="DEFAULT" disabled hidden>
                    Select Company Type
                  </option>
                  {companyType?.data?.map((item, i) => (
                    <Fragment key={i}>
                      <option value={item.uuid}>{item.name}</option>
                    </Fragment>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Company Address"
                  name="address"
                  onChange={getData}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="number"
                  placeholder="Enter Contact Number"
                  name="phone"
                  onChange={getData}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="email"
                  placeholder="Enter Your Official Email"
                  name="email"
                  onChange={getData}
                />
              </Form.Group>

              <Form.Group>
                <Form.Control
                  type="password"
                  placeholder=" Enter Your Password"
                  name="password"
                  onChange={getData}
                />
              </Form.Group>

              <Button className="registerbtn" onClick={addData}>
                Register
              </Button>
            </Form>

            <p className="loginRedirect">
              <Link to={`/login/${params.name}`}>Already have an Account</Link>
            </p>
          </div>
          <div className="rightData ">
            <div className="registerimg"></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RegisterEmployer;
