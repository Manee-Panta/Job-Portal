import React,{useState} from 'react'
import ENav from './ENav'
import { Form, Button } from "react-bootstrap";
import "../../style/employer.css";
import { ToastContainer, toast } from 'react-toastify';
const ESetting = () => {
  const [inpval,setInpval]=useState({
    pass:'',
    cpass:''
  })
   const getData=(e)=>{
const{value,name}=e.target;
setInpval(()=>{
  return{
    ...inpval,
    [name]:value
  }
})
console.log(inpval)
   }
   const changePassword=(e)=>{
e.preventDefault();
toast.success('Password Changed !! ',{
  position:toast.POSITION.BOTTOM_CENTER
})
   }
  return (
    <div>
        <ENav/>
        <div className="jsettingMain">
     <div className="jsettingForm">
   
     <Form>
              <Form.Group className="mb-4">
                <Form.Control type="password" placeholder="Enter Your New Password" name='pass' onChange={getData}/>
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Control type="password" placeholder="Re-enter your password" name='cpass' onChange={getData} />
              </Form.Group>
        
              <Button variant="primary"  className="esettingBtn" onClick={changePassword}>
                Change
              </Button>
              <ToastContainer/>
            </Form>
     </div>
      </div>
    </div>
  )
}

export default ESetting