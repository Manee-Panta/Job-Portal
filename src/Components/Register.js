import React, {  } from "react";
import { useParams,} from "react-router-dom";
import MainNav from "./MainNav";
import "../style/register.css";
import RegisterJobSeeker from "./RegisterJobSeeker";
import RegisterEmployer from "./RegisterEmployer";

const Register = () => {
  const params = useParams();
  
  return (
    <>
      <MainNav />
      {
        params.name==='Jobseeker'? <RegisterJobSeeker/> : <RegisterEmployer/>
      }
     
    </>
  );
};

export default Register;
