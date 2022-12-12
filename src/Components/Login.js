import React, { useState , useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import MainNav from "./MainNav";
import "../style/login.css";
import "../style/register.css";
import { Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { baseurl } from "../BaseUrl";
const Login = () => {
  const navigate = useNavigate();
  // const baseurl = "https://amrit77.pythonanywhere.com/api";
  const params = useParams();

  const [inpval, setInpval] = useState({
    email: "",
    'uuid':'',
    password: "",
    companyName: "",
    'name': "",
    'address': "",
    'date': "",
   'phone': "",
  userType:''
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


  const addData = (e) => {
    e.preventDefault();

    fetch(`${baseurl}/account/login/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inpval),
    }).then((response) => {
      response.json().then((result) => {
        console.log(result);
        const msg = result.message;


        if (msg === "User Not Found." || msg === "Invalid email or password") {
          Swal.fire({
            title: "Error!",
            text: "Check Username and Password",
            icon: "error",
            confirmButtonText: "Ok",
          });
        }
        // console.log(result.data.userType);
        const user = result.data.userType;
        const loginUser=result.data.uuid;
        const loginUserName=result.data.name;
        // console.log(loginUser)

      

        if (result.status === "1") {
          if (user === true && params.name === "Jobseeker") {
          
            Swal.fire({
              title: "Login Success!",
              text: "Do you want to continue",
              icon: "success",
              confirmButtonText: "Yes",
            }).then((result) => {
              if (result.isConfirmed) {
               
                navigate("/jobseeker/" );
             
                localStorage.setItem("user-info", JSON.stringify([{ ...inpval,name:loginUserName,userType:user, uuid:loginUser}]));
              }
            });
          } else if (user === false && params.name === "Employer") {
            Swal.fire({
              title: "Login Success!",
              text: "Do you want to continue",
              icon: "success",
              confirmButtonText: "Yes",
            }).then((result) => {
              if (result.isConfirmed) {
                navigate("/employer");
          
                localStorage.setItem("user-info", JSON.stringify([{ ...inpval,name:loginUserName,userType:user, uuid:loginUser}]));
              }
            });
          } else {
            Swal.fire({
              title: "Error!",
              text: "Login Failed",
              icon: "error",
              confirmButtonText: "Ok",
            });
          }
        } else {
          alert("sorry");
          Swal.fire({
            title: "Error!",
            text: "Check Username and Password",
            icon: "error",
            confirmButtonText: "Ok",
          });
        }

        // result.status === "1"?
        //  Swal.fire({
        //       title: "Login Success!",
        //       text: "Do you want to continue",
        //       icon: "success",
        //       confirmButtonText: "Yes",
        //     }).then((result) => {
        //       if (result.isConfirmed) {
        //         alert(user);

        //         if (user === true && params.name === "Jobseeker") {
        //           navigate("/jobseeker/");
        //           localStorage.setItem("user-info", JSON.stringify([inpval]));
        //         } else if (user === false && params.name === "Employer") {
        //           navigate("/employer");
        //           localStorage.setItem("user-info", JSON.stringify([inpval]));
        //         }

        //       }
        //     })
        //   : Swal.fire({
        //       title: "Error!",
        //       text: "Login Failed",
        //       icon: "error",
        //       confirmButtonText: "Ok",
        //     });
      });
    });
  };

  return (
    <div className="loginWrap ">
      <MainNav />
      {/* <AppContext.Provider value={inpval}></AppContext.Provider> */}
      <div className="loginCheck">
        <section className="loginMain ">
          <div className="login-leftData ">
            <div className="loginimg"></div>
          </div>
          <div className="login-rightData ">
            <h3 className=" text-center loginHead">{params.name} Login</h3>
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

              <Button className="loginbtn" onClick={addData}>
                Login
              </Button>
            </Form>

            <p className="registerRedirect">
              <Link to={`/register/${params.name}`}>Don't have an Account ?</Link>
              <Link to={`/forgetpassword/`}>Forget Password ?</Link>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
