import React, { useState} from "react";
import { useParams, Link , useNavigate } from "react-router-dom";
import "../style/register.css";
import { Form, Button } from "react-bootstrap";

const RegisterJobSeeker = () => {
  const baseurl = "http://amrit77.pythonanywhere.com/api";
    const params = useParams();
    const navigate=useNavigate();
    const [inpval, setInpval] = useState({
        'name': "",
        'email': "",
        'address': "",
       'date': "",
        'password': "",
        'phone': "",
        'userType':true
      });
      const [data]=useState([])
    
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
        // const { name, email, address, date, phone, password  ,userType} = inpval;
        // // console.log(inpval);
        // if (name === "") {
        //   alert("Name field is required");
        // } else if (email === "") {
        //   alert("Email is required");
        // } else if (!email.includes("@")) {
        //   alert("Please enter valid email address");
        // } else if (address === "") {
        //   alert("Address is required");
        // }else if (phone === "") {
        //   alert("Number is required");
        // }else if (phone.length <10){
        //   alert('Invalid Phone Number')
        // }
        // else if (date === "") {
        //   alert("Date is required");
        // }
        // else if (password === "") {
        //   alert("Password is required");
        // }else if (password.length <5){
        //   alert('Password length must be greater then five')
        // }
        // else{
        //   alert('Registered Successfully')
        //   console.log(inpval)

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
          });
        });



          localStorage.setItem('user-info', JSON.stringify([...data,inpval]))
          navigate(`/login/${params.name}`)

        
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
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={getData}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Enter Address"
                  name="address"
                  onChange={getData}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="number"
                  placeholder="Enter Phone Number"
                  name="phone"
                  onChange={getData}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="date"
                  placeholder="Enter Your Birth Date"
                  name="date"
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
              {/* Already have an account <span><Link  to={`/login/${params.name}`}>Login</Link></span>{" "} */}
              <Link  to={`/login/${params.name}`}>Already have an Account</Link>
            </p>
          </div>
          <div className="rightData ">
            <div className="registerimg"></div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default RegisterJobSeeker