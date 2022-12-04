import "./App.css";
import React from "react";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Employer from "./Components/Employer/Employer";
import Jobseeker from "./Components/Jobseeker/Jobseeker";
import JProfile from "./Components/Jobseeker/JProfile";
import JSetting from "./Components/Jobseeker/JSetting";
import JAppliedJob from "./Components/Jobseeker/JAppliedJob";
import Logout from "./Components/Logout";
import EProfile from "./Components/Employer/EProfile";
import EPostJob from "./Components/Employer/EPostJob";
import ESetting from "./Components/Employer/ESetting";
import Job from "./Components/Job";
import JobDetails from "./Components/JobDetails";
import Search from "./Components/Search";
import Contact from "./Components/Contact";
import Explore from "./Components/Explore";

// import Pratice from "./Pratice";

function App() {

  return (
    <div className="App">
      
        <Router>
          <Routes>
            {/* <Route path="/practice" element={<Pratice />}></Route> */}
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/register/:name/" element={<Register />}></Route>
            <Route path="/login/:name/" element={<Login />}></Route>

            <Route path="/employer/:user/" element={<Employer />}></Route>
            <Route path="/jobseeker" element={<Jobseeker />}></Route>

            <Route path="/job" element={<Job />}></Route>

            <Route path="/jprofile" element={<JProfile />}></Route>
            <Route path="/jappliedjob" element={<JAppliedJob />}></Route>
            <Route path="/jsetting" element={<JSetting />}></Route>

            <Route path="/eprofile" element={<EProfile />}></Route>
            <Route path="/epostjob" element={<EPostJob />}></Route>
            <Route path="/esetting" element={<ESetting />}></Route>
            <Route path="/jobdetails/:uuid/" element={<JobDetails />}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path="/explore" element={<Explore />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/logout" element={<Logout />}></Route>
          </Routes>
        </Router>
     
    </div>
  );
}

export default App;
