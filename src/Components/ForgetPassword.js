import React, { useState } from "react";
import MainNav from "./MainNav";
import "../style/forgetpassword.css";
import { Form, Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadTear } from "@fortawesome/free-solid-svg-icons";
import { baseurl } from "../BaseUrl";
import { ToastContainer, toast } from "react-toastify";
const ForgetPassword = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [inpval, setInpval] = useState({
    email: "",
    new_password: "",
    otp: "",
  });

  const forgetPass = (e) => {
    e.preventDefault();
    console.log(inpval);

    fetch(`${baseurl}/account/send-otp/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inpval),
    }).then((response) => {
      response.json().then((result) => {
        console.log(result);

        inpval.email === ""
          ? toast.error("Please enter email address !", {
              position: toast.POSITION.BOTTOM_CENTER,
            })
          : setShow(true);
      });
    });
  };

  const checkOTP = () => {
    fetch(`${baseurl}/account/password-forget/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inpval),
    }).then((response) => {
      response.json().then((result) => {
        console.log(result);
        if (result.message === "User not found.") {
          toast.error("User not found !", {
            position: toast.POSITION.BOTTOM_CENTER,
          });
        } else if (result.message === "Otp is not matched") {
          toast.error("Enter correct OTP !", {
            position: toast.POSITION.BOTTOM_CENTER,
          });
        } else {
          result.message === "Done"
            ? toast.success("Password Changed !", {
                position: toast.POSITION.BOTTOM_CENTER,
              })
            : toast.error("Failed to change !", {
                position: toast.POSITION.BOTTOM_CENTER,
              });
        }
      });
    });
  };

  return (
    <div>
      <MainNav />
      <div className="forgetPassMain">
        <div className="forgetBox">
          <FontAwesomeIcon
            icon={faFaceSadTear}
            size="3x"
            className="faceIcon"
          ></FontAwesomeIcon>
          <h6 className="forgetHeading">Forget Your Password ?</h6>
          <p className="forgetPara">
            Fear not. We'll email you instruction to reset your password.
          </p>
          <Form.Group className="forgetPasswordForm">
            {/* <Form.Label className="forgetPasswordLabel">Enter your email address</Form.Label> */}
            <Form.Control
              type="email"
              placeholder="Enter your email address"
              name="email"
              onChange={(e) => setInpval({ ...inpval, email: e.target.value })}
            />
          </Form.Group>
          <Button className="forgetPasswordBtn" onClick={forgetPass}>
            Send
          </Button>
          <ToastContainer />

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title className="modalHeading">Recover Password</Modal.Title>
            </Modal.Header>
            <Modal.Body className="displayModal">
              <p className="modalPara">We have send you OTP in your email.</p>
              <Form.Group>
                <Form.Control
                  type="email"
                  placeholder="Enter OTP"
                  name="otp"
                  onChange={(e) =>
                    setInpval({ ...inpval, otp: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="password"
                  placeholder="Enter new password"
                  name="new_password"
                  onChange={(e) =>
                    setInpval({ ...inpval, new_password: e.target.value })
                  }
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" className="modalBtn" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" className="modalBtn" onClick={checkOTP}>
                Send
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
