import React from "react";
import "../style/navbar.css";
import { Link } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import Logout from "./Logout";
const MainNav = (userlogin) => {
 
  return (
    <div className="navMain">
      {/* Navbar start */}
      <Navbar bg="light" variant="light" expand="lg" className="navHead">
        <Container className="navBody">
          <Navbar.Brand className="brandName underline">Jagir4All</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto me-auto-less">
              <Nav.Link>
                <li className="navlist">
                  <Link to="/"> Home</Link>
                </li>
              </Nav.Link>
              <Nav.Link>
                <li className="navlist">
                  <Link to="/explore"> Explore</Link>
                </li>
              </Nav.Link>
              <Nav.Link>
                <li className="navlist">
                  <Link to="/find"> Find</Link>
                </li>
              </Nav.Link>
              <Nav.Link>
                <li className="navlist">
                  <Link to="/services"> Services</Link>
                </li>
              </Nav.Link>


              {
                localStorage.getItem('user-info') === userlogin ? (
                  <Nav.Link>
                  <li className="navlist">
                    <Logout/>
                  </li>
                </Nav.Link>
                ):<>
                <Nav.Link>
                <li className="navlist navRegister">
                  <DropdownButton id="dropdown-basic-button" title="Register">
                    <Dropdown.Item>
                      <Link to="/register/Employer/">
                        Register as Employer
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/register/Jobseeker/">
                        Register as Jobseeker
                      </Link>
                    </Dropdown.Item>
                  </DropdownButton>
                </li>
              </Nav.Link>
              <Nav.Link>
                <li className="navlist navLogin">
                  <DropdownButton id="dropdown-basic-button" title="Login">
                    <Dropdown.Item>
                      <Link to="/login/Employer/">Login as Employer</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/login/Jobseeker/">Login as Jobseeker</Link>
                    </Dropdown.Item>
                  </DropdownButton>
                </li>
              </Nav.Link>
                </>
              }

              
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Navbar ends */}
    </div>
  );
};

export default MainNav;
