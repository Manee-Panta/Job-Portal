import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import MainNav from "./MainNav";
import "../style/login.css";
import "../style/register.css";
import { Form, Button } from "react-bootstrap";
const Login = () => {
  const baseurl = "http://192.168.1.17:8000/api";
  const params = useParams();
  const navigate = useNavigate();
  const [inpval, setInpval] = useState({
    name: "",
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
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inpval),
    }).then((response) => {
      response.json().then((result) => {
        console.log(result);
      });
    });
    

    const getuserArr = localStorage.getItem("user-info");
    // console.log(getuserArr)
    const { name, cname, password, ename } = inpval;
    // console.log(inpval);
    if (name && ename && cname === "") {
      alert("Name field is required");
    } else if (password === "") {
      alert("Password is required");
    } else if (password.length < 5) {
      alert("Password length must be greater then five");
    } else {
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);
        console.log(userdata);
        const userlogin = userdata.filter((el, k) => {
          return params.name === "Jobseeker"
            ? el.name === name && el.password === password
            : el.ename === ename &&
                el.cname === cname &&
                el.password === password;
          // el.name ===name && el.password===password
        });
        if (userlogin.length === 0) {
          alert("Invalid details");
        } else {
          alert("Login Success !!!");

          params.name === "Jobseeker"
            ? navigate("/jobseeker")
            : navigate("/employer");
        }
      }
    }
  };
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
                  placeholder="Enter Your Username"
                  name={params.name === "Jobseeker" ? "name" : "ename"}
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
                      name="cname"
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
