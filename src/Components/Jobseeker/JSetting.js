import React, { useState } from "react";
import JNav from "./JNav";
import "../../style/jobseeker.css";
import { Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseurl } from "../../BaseUrl";
const JSetting = () => {
  const localData = localStorage.getItem("user-info");
  const [userdata] = JSON.parse(localData);
  const userId = userdata.uuid;
  const [inpval, setInpval] = useState({
    old_password: "",
    new_password: "",
    confirm_password: "",
    uuid: userId,
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

  const changePassword = (e) => {
    e.preventDefault();

    fetch(`${baseurl}/account/password/chanage/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inpval),
    }).then((response) => {
      response.json().then((result) => {
        console.log(result);

        result.status === 1 ?
           (toast.success("Password Changed !", {
            position: toast.POSITION.BOTTOM_CENTER,
          }))
         :
          (toast.error("Failed to change !", {
            position: toast.POSITION.BOTTOM_CENTER,
          })
  
          );
        
      });
    });

    console.log(inpval);
  };
  return (
    <div>
      <JNav />
      <div className="jsettingMain">
        <div className="jsettingForm">
          <Form>
            <Form.Group className="mb-4">
              <Form.Control
                type="password"
                placeholder="Enter Your Old Password"
                name="old_password"
                onChange={getData}
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Control
                type="password"
                placeholder="Enter Your New Password"
                name="new_password"
                onChange={getData}
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Control
                type="password"
                placeholder="Re-enter your password"
                name="confirm_password"
                onChange={getData}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="esettingBtn"
              onClick={changePassword}
            >
              Change
            </Button>
            <ToastContainer />
          </Form>
        </div>
      </div>
    </div> 
  );
};

export default JSetting;
