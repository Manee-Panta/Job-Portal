import React from "react";
import "../style/navbar.css";
import { NavLink} from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  Dropdown,
  DropdownButton, 
} from "react-bootstrap";
// import Logout from "./Logout";
const MainNav = () => {

 
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
                  <NavLink to="/"> Home</NavLink>
                </li>
              </Nav.Link>
              <Nav.Link>
                <li className="navlist">
                  <NavLink to="/job"> Job</NavLink>
                </li>
              </Nav.Link>
             
              <Nav.Link>
                <li className="navlist">
                  <NavLink to="/explore">Explore</NavLink>
                </li>
              </Nav.Link>

              <Nav.Link>
                <li className="navlist">
                  <NavLink to="/contact"> Contact</NavLink>
                </li>
              </Nav.Link>
              <Nav.Link>
                <li className="navlist">
                  <NavLink to="/search"> Search</NavLink>
                </li>
              </Nav.Link>


              {/* {
                localStorage.getItem('user-info')  ? (
                  <Nav.Link>
                  <li className="navlist">
                    <Logout/>
                  </li>
                </Nav.Link>
                ): */}
                <>
                <Nav.Link>
                <li className="navlist navRegister">
                  <DropdownButton id="dropdown-basic-button" title="Register">
                    <Dropdown.Item>
                      <NavLink to="/register/Employer/">
                        Register as Employer
                      </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <NavLink to="/register/Jobseeker/">
                        Register as Jobseeker
                      </NavLink>
                    </Dropdown.Item>
                  </DropdownButton>
                </li>
              </Nav.Link>
              <Nav.Link>
                <li className="navlist navLogin">
                  <DropdownButton id="dropdown-basic-button" title="Login">
                    <Dropdown.Item>
                      <NavLink to="/login/Employer/">Login as Employer</NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <NavLink to="/login/Jobseeker/">Login as Jobseeker</NavLink>
                    </Dropdown.Item>
                  </DropdownButton>
                </li>
              </Nav.Link>
                </>
              {/* } */}
              


             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Navbar ends */}
    </div>
  );
};

export default MainNav;
