import React, { useEffect, useState ,Fragment} from "react";
import ENav from './ENav'
import "../../style/employer.css";
import { Form, Button } from "react-bootstrap";
const EProfile = () => {
  const baseurl = "https://amrit77.pythonanywhere.com/api";
  const [display, setDisplay] = useState("");
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
  return (
    <div>
        <ENav/>
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
          <div className="jprofileRight eprofileRight">
            <Form>
              <Form.Group className="mb-3">
              <Form.Label>Enter Company Name</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
              <Form.Group className="mb-3">
              <Form.Label>Enter Company Location</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
              <Form.Group className="mb-3">
              <Form.Label>Enter official Email</Form.Label>
                <Form.Control type="email" placeholder="" />
              </Form.Group>
              <Form.Group className="mb-3">
              <Form.Label>Enter Contact Number</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
              <Form.Group className="mb-3">
              <Form.Label>Enter Established Date</Form.Label>
                <Form.Control type="date" placeholder="Enter Established Date" />
              </Form.Group>
              <Form.Select
                className=" mb-3  ejobSelect mt-4"
                id="ctype"
                defaultValue={0}
              >
                <option disabled value={0} className="selectOption">
               Company Type
                </option>
                {display?.data?.map((item, i) => (
                  <Fragment key={i}>
                    <option value={item.uuid}>{item.name}</option>
                  </Fragment>
                ))}
              </Form.Select>

              <Button variant="primary" type="submit" className="eprofileBtn">
                Send
              </Button>
            </Form>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default EProfile