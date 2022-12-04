import React,{useState} from 'react'
import JNav from './JNav'
import "../../style/jobseeker.css";
import { Form, Button } from "react-bootstrap";
import { ToastContainer ,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const JSetting = () => {
  const [inpval,setInpval]=useState(
    {
      'pass':'',
      'cpass':''
    }
  )
  const getData = (e) => {
    const { value, name } = e.target;
setInpval(() => {
  return {
    ...inpval,
    [name]: value,
  };
});
  }

  const changePassword=(e)=>{ 
    e.preventDefault();
      toast.success('Password Changed !', {
        position: toast.POSITION.BOTTOM_CENTER
    })
    console.log(inpval)
    
  
}
  return (
    <div>
        <JNav/>
      <div className="jsettingMain">
     <div className="jsettingForm">
   
     <Form>
              <Form.Group className="mb-4">
                <Form.Control type="password" placeholder="Enter Your New Password" name='pass' onChange={getData}/>
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Control type="password" placeholder="Re-enter your password" name='cpass' onChange={getData} />
              </Form.Group>
        
              <Button variant="primary" type="submit" className="esettingBtn" onClick={changePassword}>
                Change 
              </Button>
              <ToastContainer />
            </Form>
     </div>
      </div>

    </div>
  )
}

export default JSetting