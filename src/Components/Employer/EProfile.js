import React, { useEffect, useState, Fragment } from "react";
import ENav from "./ENav";
import "../../style/employer.css";
import { Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { baseurl } from "../../BaseUrl";
import { AppContext } from "../CommonContext";
import UserImage from '../../img/login.jpg'
import img from '../../img/user.png'
const EProfile = () => {
  const { username, email, address, phone, company, uuid } =
    React.useContext(AppContext);

  const [display, setDisplay] = useState("");
  const [inpval, setInpval] = useState({
    // cname: "",
    //  cemail: "",
    clocation: "",
    cphone: "",
    cdate: "",
    ctype: "",
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

  const addProfile = (e) => {
    e.preventDefault();
    setInpval({
      ...inpval,
      clocation: address,
      cphone: phone,
      cemail: email,
      cname: company,
    });
    console.log(inpval);
    // toast.success('Profile Updated',{
    //   position:toast.POSITION.TOP_CENTER
    // })
  };
  useEffect(() => {
    fetch(`${baseurl}/job/companyList/`, {
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

  const [file, setFile] = useState();
  function handleChange(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div>
      <ENav />
      <div className="jprofileMain">
        <div className="jprofileTop">
          <div className="jprofileLeft">
            <h6 style={{ padding: "20px", fontWeight: "lighter" }}>
              Identity Verification Photo
            </h6>

            <div >
            
            <img src={file ? file: img}  className="jprofileImg"
        />
            <input type="file" onChange={handleChange} />
            </div>
          </div>
          <div className="jprofileRight eprofileRight">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Enter Company Name</Form.Label>
                <Form.Control   style={{ backgroundColor: "#bec2c5" }}
                  type="text"
                  placeholder=""
                  name="cname"
                  defaultValue={company}
                  readOnly
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Enter official Email</Form.Label>
                <Form.Control   style={{ backgroundColor: "#bec2c5" }}
                  type="email"
                  placeholder=""
                  name="cemail"
                  defaultValue={email}
                  // onChange={getData}
                  readOnly
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Enter Company Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  name="clocation"
                  defaultValue={address}
                  onChange={getData}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Enter Contact Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  name="cphone"
                  defaultValue={phone}
                  onChange={getData}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Enter Established Date</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Enter Established Date"
                  name="cdate"
                  onChange={getData}
                />
              </Form.Group>
              <Form.Select
                className=" mb-3  ejobSelect mt-4"
                id="ctype"
                name="ctype"
                onChange={getData}
                defaultValue={0}
              >
                <option disabled value={0} className="selectOption">
                  {" "}
                  Company Type{" "}
                </option>
                {display?.data?.map((item, i) => (
                  <Fragment key={i}>
                    <option value={item.uuid}>{item.name}</option>
                  </Fragment>
                ))}
              </Form.Select>

              <Button
                variant="primary"
                type="submit"
                className="eprofileBtn"
                onClick={addProfile}
              >
                Send
              </Button>
              <ToastContainer />
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EProfile;
