import React, { useState} from "react";
import { useParams, Link , useNavigate } from "react-router-dom";
import "../style/register.css";
import { Form, Button } from "react-bootstrap";
import Swal from 'sweetalert2'
import { baseurl } from "../BaseUrl";
const RegisterJobSeeker = () => {
  // const baseurl = "https://amrit77.pythonanywhere.com/api";
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

        fetch(`${baseurl}/account/register/`, {
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



          // localStorage.setItem('user-info', JSON.stringify([...data,inpval]))
        

        
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