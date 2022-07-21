import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .card-link {
    color: #0e0e73;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
    &:hover {
      font-weight: bold;
      cursor: pointer;
      border: 1px solid #0e0e73 !important;
     
    }
  }

  .div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Footer = () => (
  <Styles>
    <Card className="justify-content-center" bg="light">
      <div
        style={{
          borderTop: "2px solid #0E0E73",
          marginLeft: 300,
          marginRight: 300,
        }}
      ></div>

      <Card.Footer style={{ display: "flex", alignSelf: "center" }}>
        <div>
          <Card.Link eventKey="link-1" style={{ marginRight: "15px" }}>
            Berlin TechLabs
          </Card.Link>
        </div>
        <div>
          <Card.Link eventKey="link-2" style={{ marginRight: "15px" }}>
            Contact
          </Card.Link>
        </div>
        <div>
          <Card.Link eventKey="link-3">About Us</Card.Link>
        </div>
      </Card.Footer>

      <br />
    </Card>
  </Styles>
);

export default Footer;
