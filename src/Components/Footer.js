import React from "react";
import { Card, CardGroup, Nav } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`

.card-link {
    color: #0E0E73;
    display: flex;
    align-items: center;
    justify-content: center;
}

.card {
height: 72px;
top: 1937px;
bottom: 38px;
border-radius: 0px;
}

.div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}


`

export const Footer = () => (
    <Styles>

        <Card className="justify-content-center" bg="light" >
            <div style={{ borderTop: "2px solid #0E0E73", marginLeft: 300, marginRight: 300 }}></div>

            <Card.Footer>
                <div>
                    <Card.Link eventKey="link-1">Berlin TechLabs</Card.Link>
                </div>
                <div>
                    <Card.Link eventKey="link-2">Contact</Card.Link>
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