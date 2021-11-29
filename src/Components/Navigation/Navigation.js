import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navigation = (props) => {
    return (
        <div>
        <div>
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
         <Nav.Link href="#education">Education</Nav.Link>
         <Nav.Link href="#projects">Projects</Nav.Link>
         <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
           </div>
        </div>
    );
};

export default Navigation;