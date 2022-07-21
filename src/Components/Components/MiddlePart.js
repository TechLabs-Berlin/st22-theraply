import React from "react";
import styled from "styled-components";

import { Col, Row, Button } from "react-bootstrap";

import { Link } from "react-router-dom";

const Styles = styled.div`
  width: 100vw;
  height: 90vh;
  position: relative;
  // background-color: #fbf6f0;
  background-size: 100% 100%;
  // display: flex;
  // justify-content: center;
  // align-items: center;

 
  .mid-section {
    width: 150px;
    height: 150px;
    color: #0e0e73;
    z-index: 1;
    border-radius: 50%;
    background-color: #fbf6f0;
  }
  .textContainer {
    font-family: "Hind";
    font-style: normal;
    font-weight: 520;
    font-size: 14px;
    width: 150px;
    height: 100px;
    display: grid;
    place-items: center;
    color: #0e0e73;
  }
  .cardContainer {
    width: 200px;
    height: 400px;
  }
  .sectionHeaders {
    font-family: "Hind";
    font-style: normal;
    font-weight: 1000;
    font-size: 16px;
    text-align: center;
  }
  .dotted {
    border: 4px dotted #ff0000;
    border-style: none none dotted;
    color: #fff;

    transform: rotate(40deg);
    position: absolute;
    top: 100px;
    right: 100px;
    width: 200px;
    background-color: #fff;
  }
`;

export const MiddlePart = () => (
  <Styles>
    <Row>
      <Col>
        <div
          style={{
            width: "100%",
            height: "500px",
            marginLeft: "40px",
            marginBottom: "10px",
          }}
        >
          <div style={{ height: "200px" }}></div>
          <div
            className=""
            style={{
              height: "150px",
              width: "150px",
              display: "flex",
              position: "relative",
            }}
          >
            <img
              src="/Illustrations/line.png"
              alt="logo"
              style={{
                width: "50%",
                height: "200px",
                transform: "rotate(-40deg",
               
                position: "absolute",
                left: "0px",
                bottom: "50px",
              }}
            />
            <img
              src="Illustrations/illustration_search.png"
              alt="stage1"
              style={{
                width: "150px",
                height: "150px",
                position: "absolute",
                top: "0px",
                left: "30px",
              }}
              className="mid-section img-fluid"
            />
          </div>
          <div className="textContainer" >
            <h5 className="sectionHeaders">Search </h5>
            <span style={{ textAlign: "center" }}>
              Our filters will guide you in your search to find a therapist
              according to your preferences.
            </span>
          </div>
        </div>
      </Col>
      <Col>
        <div style={{ width: "100%", height: "500px" }}>
          <div
            style={{
              height: "150px",
              width: "150px",
              marginTop: "50px",
              display: "flex",
              position: "relative",
            }}
          >
            <img
              src="Illustrations/illustration_send.png"
              alt="stage1"
              className="mid-section img-fluid"
            />
            <img
              src="/Illustrations/line.png"
              alt="logo"
              style={{
                width: "70px",
                height: "300px",
                transform: "rotate(60deg)",
              
                position: "absolute",
                left: "-110px",
                top: "-30px",
                bottom: "90px",
              }}
            />
            <img
              src="/Illustrations/line.png"
              alt="logo"
              style={{
                width: "70px",
                height: "400px",
                transform: "rotate(122deg)",
              
                position: "absolute",
                right: "-120px",
                top: "-60px",
                bottom: "90px",
              }}
            />
          </div>
          <div className="textContainer">
            <h5 className="sectionHeaders">Send </h5>
            <p style={{ textAlign: "center" }}>
              Use our prefill contact form and select your options to send an
              email to multiple therapist at once
            </p>
          </div>
          <div style={{ height: "200px" }}></div>
        </div>
      </Col>
      <Col>
        <div style={{ width: "100%", height: "500px" }}>
          <div style={{ height: "200px" }}></div>
          <div
            className=""
            style={{
              height: "150px",
              display: "flex",
              position: "relative",
              width: "150px",
              overflow: "hidden",
            }}
          >
            <img
              src="Illustrations/illustration_wait.png"
              alt="stage1"
              style={{
                width: "150px",
                height: "150px",
                position: "absolute",
                top: "0px",
                // left: "30px",
              }}
              className="mid-section img-fluid"
            />
          </div>
          <div className="textContainer">
            <h5 className="sectionHeaders">Relax </h5>
            <p style={{ textAlign: "center" }}>
              Track responses, confirmations, rejections and 'no-responses'
            </p>
          </div>
        </div>
      </Col>
      <Col>
        <div style={{ width: "100%", height: "500px" }}>
          <div
            className=""
            style={{
              height: "150px",
              display: "flex",
              position: "relative",
              width: "150px",
            }}
          >
            <img
              src="Illustrations/illustration_therapist.png"
              alt="stage1"
              className="mid-section img-fluid"
            />
            <img
              src="/Illustrations/line.png"
              alt="logo"
              style={{
                width: "70px",
                height: "400px",
                transform: "rotate(65deg)",
              
                position: "absolute",
                left: "-140px",
                top: "-10px",
                bottom: "90px",
              }}
            />
            <img
              src="/Illustrations/line.png"
              alt="logo"
              style={{
                width: "70px",
                height: "400px",
                transform: "rotate(65deg)",
              
                position: "absolute",
                right: "-140px",
                top: "-220px",
                bottom: "200px",
              }}
            />
          </div>
          <div className="textContainer">
            <h5 className="sectionHeaders">Find your Therapist </h5>
            <p style={{ textAlign: "center" }}>Now you have a therapist!</p>
          </div>
          <div style={{ height: "200px" }}></div>
        </div>
      </Col>
    </Row>
  </Styles>
);

export default MiddlePart;
