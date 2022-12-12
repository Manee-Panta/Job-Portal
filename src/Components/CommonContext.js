import React, { useState, useEffect } from "react";
import { baseurl } from "../BaseUrl";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [useremail, setEmail] = useState("");
  const [username, setName] = useState("");
  const [pass, setPass] = useState("");
  const [company, setCompany] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [uuid, setUuid] = useState("");
  const[userType, setUserType]=useState()

  useEffect(() => {
    const user = localStorage.getItem("user-info");
    if (user) {
      const [userdata] = JSON.parse(user);
      fetch(`${baseurl}/account/userdetails/?uuid=` + userdata.uuid, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }).then((response) => {
        response.json().then((result) => {
          console.log(result);
          setAddress(result.address);
          setPhone(result.phone);
          setEmail(result.email);
          setName(result.first_name);
          setPass(result.password);
          setCompany(result.companyName);
          setUuid(result.uuid);
          setUserType(result.userType)
        });
      });
    }
  }, [useremail,userType,username,pass,address,company,uuid,phone]);

  return (
    <AppContext.Provider
      value={{
        username:username,
        email: useremail,
        password: pass,
        company: company,
        phone: phone,
        address: address,
        uuid: uuid,
        company:company,
        userType:userType,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export { AppContext, AppProvider };
