import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './Components/Register'
import Login from './Components/Login'
import Employer from "./Components/Employer";
import Jobseeker from "./Components/Jobseeker/Jobseeker";
import JDashboard from "./Components/Jobseeker/JDashboard";
import JProfile from "./Components/Jobseeker/JProfile";
import JSetting from "./Components/Jobseeker/JSetting";
import JAppliedJob from "./Components/Jobseeker/JAppliedJob";
import Logout from "./Components/Logout";
// import JAppliedJob from "./Components/Jobseeker/jAppliedJob";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route  path="/register/:name/" element={<Register/>}></Route>
          <Route path='/login/:name/' element={<Login/>}></Route>
          <Route path='/employer' element={<Employer/>}></Route>
          <Route path='/jobseeker' element={<Jobseeker/>}></Route>
          <Route path='/jdashboard' element={<JDashboard/>}></Route>
          <Route path="/jprofile" element={<JProfile/>}></Route>
         <Route path='/jappliedjob' element={<JAppliedJob/>}></Route>
          <Route path="/jsetting" element={<JSetting/>}></Route>
          <Route path='/logout' element={<Logout/>}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
