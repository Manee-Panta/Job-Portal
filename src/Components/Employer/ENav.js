import React, { useEffect, useState } from "react";
import { Link,NavLink } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import '../../style/employer.css'

const ENav = () => {
  // const{email , password, company}=React.useContext(AppContext)
  const [username, setUsername] = useState('');
  useEffect(() => {
    const user = localStorage.getItem("user-info");
    // console.log(user)
    const [userdata] = JSON.parse(user);
    // console.log(userdata)
    //   console.log(userdata.name)
    setUsername(userdata.email);
  }, [username]);
  return (
    <div>
             <Navbar bg="light" variant="light" expand="lg" className="navHead p-2">
        <Container className="navBody">
          <Link to="/">
            <Navbar.Brand className="brandName underline">
              Jagir4All 
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto me-auto-less">
              <Nav.Link className="username">
                <li className="navlist ">
                  <DropdownButton id="dropdown-basic-button" title={username }>
                    <Dropdown.Item>
                      <Link to="/eprofile">Profile</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/logout">logout</Link>
                    </Dropdown.Item>
                  </DropdownButton>
                </li>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="employer-nav">
        <div className="navList"><NavLink to='/employer'>Dashboard</NavLink></div>
        <div className="navList"><NavLink to='/eprofile'>Profile</NavLink></div>
        <div className="navList"><NavLink to='/epostjob'>Post Jobs</NavLink></div>
        <div className="navList"><NavLink to='/esetting'>Setting</NavLink></div>
      </div>
     
    </div>
  )
}

export default ENav