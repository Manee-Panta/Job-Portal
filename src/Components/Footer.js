import React from "react";
import "../style/footer.css";
import Image from "../img/logo2.png";
const Footer = () => {
  return (
    <div className="footerMain">
      <div className="footeritem">
        <img src={Image} alt="" className="footerLogo" />
        {/* <div className="logo1"></div> */}
        <p>
          {/* Jagir4All is the fastest-growing job portal in Nepal. Find your career
          opportunities here. Search among thousands of jobs from top companies,
          industries, and locations of your choice */}
        </p>
      </div>
      <div className="footeritem">
        <h3>Quick Links</h3>
        <li>About Us</li>
        <li>FAQ/Help</li>
        <li>Privacy Policy</li>
        <li>Terms & Condition</li>
      </div>
      <div className="footeritem">
        <h3>Companies</h3>
        <li>Hospitality</li>
        <li>Sales</li>
        <li>Hostels and Restaurent</li>
        <li>Data Entry</li>
      </div>
      <div className="footeritem">
        <h3>Follow Us</h3>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Twitter</li>
        <li>Tiktok</li>
      </div>
      <hr className="hr" />
     
     <div className="footerbottom">
 <div>
  {/* <hr className="hr"/> */}
  </div>
      <p className='copyright'>Copyright@2022 | Jagir4All - All right reserves</p>
     </div>
    </div>
  );
};

export default Footer;
