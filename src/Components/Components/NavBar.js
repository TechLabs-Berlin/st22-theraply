import React from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: transparent !important;
  }
  .navbar-brand {
    font-weight: bold;
  }
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #0e0e73;

    &:hover {
      color: #ff7d34;
      font-weight: bold;
    }
  }

  .Register {
    color: #fbf6f0 !important;
    background-color: #ff7d34;
    border-color: #ff7d34;
    text-decoration: none;
    border: 1px solid #ff7d34;
    border-radius: 25px 25px 25px 0px;
    // margin-bottom: 10px;
    font-size: 15px;
    text-align: center;
    font-weight: 600;
    width: 120px;
  }

  @media (max-width: 576px) {
    #Login {
      justify-content: center;
      align-items: center;
      text-align: center;
      box-sizing: border-box;
      font-size: 15px;
      font-weight: 600;
      text-decoration: none;
      width: 100px;
      border: 1px solid #ff7d34;
      border-radius: 25px 25px 25px 0px;
      color: #ff7d34;
      margin-top: 10px;
    }
  }

  #Login {
     position: absolute;
   right: 8%;
    justify-content: center;
    align-items: center;
    text-align: center;
    box-sizing: border-box;
    font-size: 15px;
    font-weight: 600;
    text-decoration: none;
    width: 100px;
    border: 1px solid #ff7d34;
    border-radius: 25px 25px 25px 0px;
    color: #ff7d34;
  }
`;

export const NavBar = () => (
  <Styles>
    <>
      <Navbar expand="sm" variant="light" bg="light">
        <Container id="navbar-brand">
          <Navbar.Brand href="/">Theraply</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav activeKey="/" className="m-auto">
              <Nav.Item>
                <Link to="/" className="me-4 nav-link">
                  Home
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1" className="me-4">
                                    The Process 
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/search" className="me-4 nav-link">
                  Search
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-3">Psychological Tests</Nav.Link>
              </Nav.Item>
            </Nav> 
            <Nav className="ml-auto d-flex" style={{ width: "200px" }}>
              <Nav.Item>
                <Nav.Link as="a" size="sm" className="Register">
                  Register
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link size="sm" variant="light" id="Login">
                  Login
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  </Styles>
);

export default NavBar;
