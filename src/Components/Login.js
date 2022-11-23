import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import MainNav from "./MainNav";
import "../style/login.css";
import "../style/register.css";
import { Form, Button } from "react-bootstrap";
import Swal from 'sweetalert2'
const Login = () => {
  const baseurl = "https://amrit77.pythonanywhere.com/api";
  const params = useParams();
  const navigate = useNavigate();
  const [inpval, setInpval] = useState({
    email: "",
    password: "",
    companyName: ""
  });
  // const [data, setData]=useState([])

  const getData = (e) => {
    const { value, name } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();


    fetch(`${baseurl}/account/login/`, {
      method: "POST",
      headers: {
        'Accept': "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inpval),
    }).then((response) => {
      response.json().then((result) => {
        console.log(result);
        result.status === "1"
        ? Swal.fire({
          title: 'Login Success!',
          text: 'Do you want to continue',
          icon: 'success',
          confirmButtonText: 'Yes'
        
        }).then((result) => { 
          if (result.isConfirmed) {
           params.name === "Jobseeker"
            ? navigate("/jobseeker")
            : navigate("/employer");
            localStorage.setItem("user-info", JSON.stringify([ inpval]));
          }
        })
        
        : Swal.fire({
          title: 'Error!',
          text: 'Login Failed',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      });
    });
        }
    
  return (
    <>
      <MainNav />
      <div className=" ">
        <section className="loginMain ">
          <div className="login-leftData ">
            <div className="loginimg"></div>
          </div>
          <div className="login-rightData ">
            <h3 className=" text-center">{params.name} Login</h3>
            <Form>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Email"
                  name={params.name === "Jobseeker" ? "email" : "email"}
                  // name='name'
                  onChange={getData}
                />
              </Form.Group>

              {params.name === "Employer" ? (
                <>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      placeholder="Enter Your Company Name"
                      name="companyName"
                      onChange={getData}
                    />
                  </Form.Group>
                </>
              ) : (
                <></>
              )}
              <Form.Group>
                <Form.Control
                  type="password"
                  placeholder="Enter Your Password"
                  name="password"
                  onChange={getData}
                />
              </Form.Group>

              <Button className="registerbtn" onClick={addData}>
                Login
              </Button>
            </Form>

            <p className="loginRedirect">
              <Link to={`/register/${params.name}`}>Don't have an Account</Link>
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
