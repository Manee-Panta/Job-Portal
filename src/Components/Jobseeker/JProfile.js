import React, { useEffect, useState ,Fragment} from "react";
import JNav from "./JNav";
import "../../style/jobseeker.css";
import { Form, Button } from "react-bootstrap";
const JProfile = () => {
  const baseurl = "https://amrit77.pythonanywhere.com/api";
  const [display, setDisplay] = useState("");
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
                <Form.Control type="text" placeholder="Enter Name" />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Control type="text" placeholder="Enter Address" />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Control type="email" placeholder="Enter Email" />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Control type="text" placeholder="Enter Contact Number" />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Control
                  type="text"
                  placeholder="Enter Educational Background"
                />
              </Form.Group>
              <Form.Select
                className=" mb-4"
                id="ctype"
                defaultValue={0}
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

              <Button variant="primary" type="submit" className="jprofileBtn">
                Send
              </Button>
            </Form>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default JProfile;
