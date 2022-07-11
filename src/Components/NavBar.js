import React from "react";
import { Nav, Navbar, Container, Button } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.navbar {
    background-color: #D9D9D9;
}

.navbar-brand, .navbar-nav .nav-link {
    color: #000047;

    &:hover {
        color: #FF7D34;
    }
}

#Register {
    position: absolute;
    left: 77%;
    right: 14%;
    color: #FBF6F0;
    background-color: #FF7D34;
    border-color: #FF7D34;
    border-radius: 25px 25px 25px 0px;
}

#Login {
    box-sizing: border-box;
    position: absolute;
    left: 85%;
    right 6%;
    border: 1px solid #FF7D34;
    border-radius: 25px 25px 25px 0px;
    color: #FF7D34;
}

}
`;

export const NavBar = () => (
    <Styles>
        <>
            <Navbar expand="sm" variant="light" bg="light">
                <Container id="navbar-brand">
                    <Navbar.Brand href="/home">theraply</Navbar.Brand>
                </Container>
                <Container>
                    <Nav activeKey="/home">
                            <Nav.Item>
                                <Nav.Link href="/home">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-1">The Process</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-2">Search</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-3">
                                    Psychological Tests
                                </Nav.Link>
                            </Nav.Item>
                            </Nav>
                        </Container>
                        <Container>
                        <Button size="sm" id="Register">Register</Button>
                        <Button size="sm" variant="light" id="Login">Login</Button>
                        </Container>

            </Navbar>
        </>
    </Styles >
);

export default NavBar;