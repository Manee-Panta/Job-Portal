import React from "react";
import "../../style/employer.css";
import ENav from "./ENav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowPointer, faBusinessTime, faEye, faFilter, faUsers } from "@fortawesome/free-solid-svg-icons";


const Employer = () => {

  return (
    <div>
      <ENav />
    
      <div className="edashboardMain">
        <div className="ebox">
          <div className="eboxLeft">
            <h3>2</h3>
            <h6>Job Posted</h6>
         
          </div>
          <div className="eboxRight">
            <FontAwesomeIcon icon={faBusinessTime} size='4x' style={{'color':'goldenrod'}}/>
          </div>
        </div>
        <div className="ebox">
          <div className="eboxLeft">
          <h3>100</h3>
            <h6>Job Views</h6>
          </div>
          <div className="eboxRight">
            <FontAwesomeIcon icon={faEye} size='4x' style={{'color':'rebeccapurple'}}/>
          </div>
        </div>
        <div className="ebox">
          <div className="eboxLeft">
          <h3>6</h3>
            <h6>Applications</h6>
          </div>
          <div className="eboxRight">
            <FontAwesomeIcon icon={faUsers} size='4x' style={{'color':'rgb(0.0.0)'}}/>
          </div>
        </div>
        <div className="ebox">
          <div className="eboxLeft">
          <h3>4</h3>
            <h6>Apply Clicks</h6>
          </div>
          <div className="eboxRight">
            <FontAwesomeIcon icon={faArrowPointer} size='4x'style={{'color':'purple'}}/>
          </div>
        </div>
        <div className="ebox">
          <div className="eboxLeft">
            <h3>100%</h3>
            <h6>Apply Rate</h6>
          </div>
          <div className="eboxRight">
            <FontAwesomeIcon icon={faFilter} size='4x' style={{'color':'yellowgreen'}}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employer;
