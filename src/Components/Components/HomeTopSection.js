import React from "react";
import styled from "styled-components";

import { Col, Row } from "react-bootstrap";

import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Styles = styled.div`
  font-family: "Hindi";
  
  .h6 {
    font-family: "Hindi";
    font-style: italic;
    font-weight: 200;
    line-height: 30px;
    color: #0e0e73;
  }
  .p-spacing {
    line-height: 15px;
    font-size: 18px;
    color: #0e0e73;
    font-weight: 400;
  }

  .second-Paragraph {
    font-family: "Hindi";
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
    color: #0e0e73;
    margin-top: 50px;
    width: 50%;
  }

  .header {
    color: #0e0e73;
    font-family: "Hindi";
    font-style: italic;
    font-weight: 800;
    font-size: 28px;
    margin-bottom: 30px;
  }
  .Register2 {
    color: #fbf6f0 !important;
    background-color: #ff7d34;
    border-color: #ff7d34;
    text-decoration: none;
    border: 1px solid #ff7d34;
    border-radius: 25px 25px 25px 0px;
    font-size: 18px;
    text-align: center;
    font-weight: 600;
    width: 200px;
    padding: 10px;
    // padding-horizontal: 20px;
  }
  @media (max-width: 576px) {
    .second-Paragraph {
      display: grid;
      place-items: center;
    }
  }
`;

export const HomeTopSection = () => (
  <Styles>
    <NavBar />
    <div style={{ marginTop: "140px", width: "90vh" }}>
   
    </div>
    <Row>
      <Col style={{ display: "grid", placeItems: "center" }} md={6}>
        <img
          src="/Illustrations/picture_sofa.png"
          alt="logo"
          className="img-fluid"
          style={{ width: "400px", height: "400px", alignSelf: "center" }}
        />
      </Col>
      <Col md={6}>
        <div style={{ marginLeft: "20px" }}>
          <h2 className="header">The easy way to Therapy</h2>
          <p className="p-spacing">
            Finding a therapy place can be an arduous and lengthy process
          </p>
          <p className="p-spacing">
            this complicates mental health efforts for those who have managed
          </p>
          <p className="p-spacing">
            to take the step of seeking therapy in the first place.
          </p>
          <div className="second-Paragraph">
            <p>
              Register today to get full use of use system, <br />
              it's easy and free!
            </p>

            <a href="https://www.google.com/" className="Register2 shadow">
              sign up today
            </a>
          </div>
        </div>
      </Col>
    </Row>
  </Styles>
);

export default HomeTopSection;
