import React, { useEffect } from "react";
import MainNav from "./MainNav";
import "../style/explore.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faUserTie,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";

const Explore = () => {
  useEffect(() => {
    const ifameData = document.getElementById("iframeId");
    const lat = 27.67445;
    const lon = 85.365135;
    ifameData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`;
  
  });

  return (
    <div>
      <MainNav />
      <div className="exploreMain">
        <div className="exploreTop">
          <div className="exploreRight">
            <h6 style={{ fontWeight: "bold", padding: "20px" }}>
              Welcome to the Jagir4All
            </h6>
            <p>
              Welcome to Jagir4All, the largest locally focused employment
              website in the nation! Our mission is to lead the Internet
              employment industry in Nepal by providing innovative information,
              superior resume management software and a comprehensive selection
              of services. Jobsnepal.com offers services to the recruiting and
              job-seeking community in Nepal.
            </p>
            <p>
              We are the only recruitment service provider with 100% free
              service to all the jobseekers. It is our mission to bring the
              burgeoning Nepalese Internet and computing talent to bear on
              international Web development.
            </p>
            <p>Jai Nepal!</p>
          </div>
          <div className="exploreLeft">
            <div className="exploreImg"></div>
          </div>
        </div>

        {/* Our Services Start */}
        <div className="serviceHeading">
          <h5>Our Services</h5>
        </div>
        <div className="serviceMain">
          <div className="serviceBox">
            <div className="serviceDetail">
              <FontAwesomeIcon icon={faUserTie} className="serviceIcon" />
              <h6>Direct Recuirement</h6>
              <p>
                The purpose of this procedure is to identify the direct
                recruitment and selection process for employing staffs...
              </p>
            </div>
          </div>
          <div className="serviceBox">
            <div className="serviceDetail">
              <FontAwesomeIcon icon={faPhoneVolume} className="serviceIcon" />
              <h6>Vaccancy Announcement</h6>
              <p>
                Jagir4All vacancy announcements are the means by which an
                organization advertises its vacancies..
              </p>
            </div>
          </div>
          <div className="serviceBox">
            <div className="serviceDetail">
              <FontAwesomeIcon icon={faImage} className="serviceIcon" />
              <h6>Banner Advertisement</h6>
              <p>
                Online website banner ads provide an instant global reach at
                relatively low cost. You have the opportunity...
              </p>
            </div>
          </div>
        </div>
        {/* Our Services End */}
        {/* Google maap start  */}

        <div>
          <iframe id="iframeId" height="500px" width="100%"></iframe>
        </div>
        {/* Google maap end */}
      </div>
      <Footer/>
    </div>
  );
};

export default Explore;
