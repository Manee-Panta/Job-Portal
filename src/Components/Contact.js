import React ,{useState} from "react";
import MainNav from "./MainNav";
import "../style/contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer ,toast } from "react-toastify";
import {
  faHouse,
  faMailBulk,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";
const Contact = () => {
  const [inpval,setInpval]=useState({
    name:'',
    email:'',
    message:''
  })
  const getData=(e)=>{
    const{value,name}=e.target;
    setInpval(()=>{
      return{
        ...inpval,
        [name]:value
      }
    })
  }
  const sendMsg=(e)=>{
    e.preventDefault()
toast.success('Message Sent Successfully',{
  position:toast.POSITION.TOP_RIGHT
})
console.log(inpval)
  }
  return (
    <div className='mainDiv'>
      <MainNav />
      <section className="contactMain">
        <div className="contactContent">
          <h2>Contact Us</h2>
          <p className="contactPara">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse cum
            velit excepturi iusto expedita atque,
          </p>
        </div>
        <div className="contactContainer">
          <div className="contactInfo">

            <div className="box">
              <div className="icon">
                <FontAwesomeIcon icon={faHouse} />
                 </div>
              <div className="text">
                <h3>Address</h3>
                <p>
                  Balkot , <br /> kausaltar, Bhaktapur
                </p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
              <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="text">
                <h3>Phone</h3>
                <p>011-264048</p>
              </div>
            </div>
            <div className="box">
              <div className="icon"> 
              <FontAwesomeIcon icon={faMailBulk} /></div>
              <div className="text">
                <h3>Email</h3>
                <p>jagir4all@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="contactForm">
            <h2>Send Message</h2>
            <div className="inputBox">
              <input type="text" name='name' onChange={getData} required='required' />
              <span>Full Name</span>
            </div>
            <div className="inputBox">
              <input type="text" name='email' onChange={getData} required='required' />
              <span>Email</span>
            </div>
            <div className="inputBox">
              <textarea name="message" onChange={getData} id="" required='required'></textarea>
              <span>Type your message.....</span>
            </div>
            <div className="inputBox">
              <input type="submit" name='' required='required' value='Send' onClick={sendMsg}/>
              <ToastContainer />
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Contact;
