import React from 'react'
import ENav from './ENav'
import { Form, Button } from "react-bootstrap";
import "../../style/employer.css";
const ESetting = () => {
  return (
    <div>
        <ENav/>
        <div className="jsettingMain">
     <div className="jsettingForm">
   
     <Form>
              <Form.Group className="mb-4">
                <Form.Control type="password" placeholder="Enter Your New Password" />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Control type="password" placeholder="Re-enter your password" />
              </Form.Group>
        
              <Button variant="primary" type="submit" className="esettingBtn">
                Change
              </Button>
            </Form>
     </div>
      </div>
    </div>
  )
}

export default ESetting