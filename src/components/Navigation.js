import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = () => {
  return (
    <>
      <Navbar variant='dark' sticky='top' data-bs-theme="dark" className='navbar'>
        <Container fluid>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar">
            <Nav className='m-auto'>
              <LinkContainer to="/">
                <Nav.Link className="text-center"> Hej! </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/profile">
                <Nav.Link className='text-center'> Profile </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/security">
                <Nav.Link className='text-center'> Security </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/projects">
                <Nav.Link className='text-center'> Projects </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/gallery">
                <Nav.Link className='text-center'> Gallery </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link className='text-center'> Contact </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation