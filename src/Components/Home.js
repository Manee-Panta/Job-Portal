import React, { useState, useEffect, Fragment , useContext } from "react";
import "../style/home.css";
import MainNav from "./MainNav";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { baseurl } from "../BaseUrl";


const Home = () => {
  // const baseurl = "https://amrit77.pythonanywhere.com/api";
  const [jobType, setJobType] = useState();



  const getJob = () => {
    fetch(`${baseurl}/job/jobType/`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((response) => {
      response.json().then((getJobType) => {
        // console.log(getJobType);
        setJobType(getJobType);
      });
    });
  };

  useEffect(() => {

    getJob();
  }, []);

  return (
    <>
      <MainNav />
      <div className="homeMain">
        <div>
          <div className="homeimg">
            <div className="textLayer">
              <h1 className="title">Get your dream Job Today </h1>
              <h2 className="quote">
                "Choose a job you love, and you will never have to work a day in
                your life"{" "}
              </h2>
            </div>
          </div>

          {/* Hero Section Start */}
          <div className="heroSection">
            <div className="heroElement">
              <h1>19K+</h1>
              <h3 style={{ fontSize: "15px" }}>Ready Job Vaccancy</h3>
            </div>
            <div className="heroElement">
              <h1>276K+</h1>
              <h3 style={{ fontSize: "15px" }}>Job Seekers Active</h3>
            </div>
            <div className="heroElement">
              <h1>34K+</h1>
              <h3 style={{ fontSize: "15px" }}>Incorporated Company</h3>
            </div>
          </div>
          {/* Hero Section End */}
          {/* Start JOb Category */}
          <div className="jobCategoty">
            <div className="categoryHeading">
              <h3>Popular Job Categories</h3>
              <p>
                A better career is out there. we'll help you find it. We are
                your first step to becomimg everything you want to be.
              </p>
            </div>

            <div className="content">
              {jobType?.data?.map((item, i) => (
                <div className="contentBox" key={i}>
                  <Fragment key={i}>
                    <img src={item.image} alt="img" className="jobImage" />
                    <div className="jobData">
                      <h5 className="jobName">{item.name}</h5>
                      <p className="jobVaccancy">({item.count} Vacancies)</p>
                    </div>
                  </Fragment>
                </div>
              ))}
            </div>
          </div>
          {/* End Job Category  */}

          {/* Problem Solution Section Start */}

          <div className="problemMain">
            <div className="problemLeft">
              <div className="problemImg"></div>
            </div>
            <div className="problemRight">
              <h5>What's Your Problem</h5>
              <p style={{ fontWeight: "lighter", marginTop: "-15px" }}>
                Are you searching for your dream job ??
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
                ut recusandae blanditiis. Quo dolor iusto, odit ullam eaque
                harum fugiat debitis quia placeat ratione repellat soluta. Qui
                similique earum nostrum. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Nam perferendis itaque quia dignissimos dolor
                perspiciatis nostrum quisquam tempora vitae, saepe officia
                corrupti nemo illo natus reprehenderit consequuntur facere, qui
                delectus.
              </p>
            </div>
          </div>

          <div className="solutionMain">
            <div className="solutionLeft">
              <h5>Here is the Solution</h5>
              <p style={{ fontWeight: "lighter", marginTop: "-15px" }}>
                Get your dream job here !!
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
                ut recusandae blanditiis. Quo dolor iusto, odit ullam eaque
                harum fugiat debitis quia placeat ratione repellat soluta. Qui
                similique earum nostrum. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Nam perferendis itaque quia dignissimos dolor
                perspiciatis nostrum quisquam tempora vitae, saepe officia
                corrupti nemo illo natus reprehenderit consequuntur facere, qui
                delectus.
              </p>
            </div>
            <div className="solutionRight">
              <div className="solutionImg"></div>
            </div>
          </div>
          {/* Problem Solution Section End */}


          {/* Client Feedback Start */}
          <div className="clientFeedback">
            <h5 style={{'fontWeight':'bold', 'marginTop':'20px', 'textDecoration':'underline' }}>Our Client Say !!</h5>
            <div className="clientBox">
              <div className="clientDetail">
                <div className="flip-card-front">
                <h5>Manita Panta</h5>
                <h5>Bhaktapur</h5>
                <p >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptas, enim cum illum, aspernatur corporis possimus
                  accusantium tenetur similique earum, quae aperiam? Nostrum
                  mollitia quos sint odio ad cupiditate quidem totam.
                </p>
                </div>
                <div className="flip-card-back">
           <FontAwesomeIcon icon={faUser} size='8x'/>
           <h6 style={{'marginTop':'10px'}}>Manita Panta</h6>
                </div>
              </div>
              <div className="clientDetail">
           
              <div className="flip-card-front">
                <h5>Amrit Thapa</h5>
                <h5>Bhaktapur</h5>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptas, enim cum illum, aspernatur corporis possimus
                  accusantium tenetur similique earum, quae aperiam? Nostrum
                  mollitia quos sint odio ad cupiditate quidem totam.
                </p>
                </div>
                <div className="flip-card-back">
                <FontAwesomeIcon icon={faUser} size='8x'/>
           <h6 style={{'marginTop':'10px'}}>Amrit Thapa</h6>
                </div>
              </div>
              <div className="clientDetail">
              <div className="flip-card-front">
                <h5>Rajesh Hamal</h5>
                <h5>Bhaktapur</h5>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptas, enim cum illum, aspernatur corporis possimus
                  accusantium tenetur similique earum, quae aperiam? Nostrum
                  mollitia quos sint odio ad cupiditate quidem totam.
                </p>
                </div>
                <div className="flip-card-back">
                <FontAwesomeIcon icon={faUser} size='8x'/>
           <h6 style={{'marginTop':'10px'}}>Rajesh Hamal</h6>
                </div>
              </div>
            </div>
          </div>
          {/* Client Feedback Ends */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
