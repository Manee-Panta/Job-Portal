import React, { useEffect, useState, Fragment } from "react";
import JNav from "./JNav";
import "../../style/jobseeker.css";
import { Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
const JProfile = () => {
  const baseurl = "https://amrit77.pythonanywhere.com/api";
  const [display, setDisplay] = useState("");
  const [inpval, setInpval] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    education: "",
    interest: "",
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
  const updateProfile = (e) => {
    e.preventDefault();
    const { name, address, email, phone, education, interest } = inpval;
    if (name && address && email && phone && education && interest === "") {
      toast.error("Something went wrong !!", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } else {
      toast.success("Profile Updated !!", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      console.log(inpval);
    }
  };
  useEffect(() => {
    fetch(`${baseurl}/job/jobType/`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((response) => {
      response.json().then((result) => {
        console.log(result);
        setDisplay(result);
      });
    });
  }, []);
  return (
    <div>
      <JNav />
      <div className="jprofileMain">
        <div className="jprofileTop">
          <div className="jprofileLeft">
            <h6 style={{ padding: "20px", fontWeight: "lighter" }}>
              Identity Verification Photo
            </h6>

            <div className="jprofileImg">
              {/* <img  src={User} alt="img" /> */}
            </div>
          </div>
          <div className="jprofileRight">
            <Form>
              <Form.Group className="mb-4">
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  onChange={getData}
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Control
                  type="text"
                  placeholder="Enter Address"
                  name="address"
                  onChange={getData}
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  onChange={getData}
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Control
                  type="text"
                  placeholder="Enter Contact Number"
                  name="phone"
                  onChange={getData}
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Control
                  type="text"
                  placeholder="Enter Educational Background"
                  name="education"
                  onChange={getData}
                />
              </Form.Group>
              <Form.Select
                className=" mb-4"
                id="ctype"
                defaultValue={0}
                name="interest"
                onChange={getData}
              >
                <option disabled value={0} className="selectOption">
                  Your Interest
                </option>
                {display?.data?.map((item, i) => (
                  <Fragment key={i}>
                    <option value={item.uuid}>{item.name}</option>
                  </Fragment>
                ))}
              </Form.Select>

              <Button
                variant="primary"
                className="jprofileBtn"
                onClick={updateProfile}
              >
                {" "}
                Send{" "}
              </Button>
              <ToastContainer />
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JProfile;
