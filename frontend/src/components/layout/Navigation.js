import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <i className="material-icons">airplay</i>
              Sushi Rolls
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline className="ml-auto">
            <FormControl type="text" placeholder="Busqueda..." className="mr-sm-2" />
            <Button variant="outline-primary">Buscar</Button>
          </Form>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Cursos</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <Nav.Link href="#home">Agenda</Nav.Link>
            <Nav.Link href="#link">Contactanos</Nav.Link>
            <NavDropdown title="Iniciar mi plan" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <Row>
              <Col md="auto">
                <Link
                  to="/register"
                  className="btn btn-outline-primary">
                  Registrarse
                </Link>
              </Col>
              <Col md="auto">
                <Link
                  to="/login"
                  className="btn btn-outline-primary">
                  Iniciar Sesión
                </Link>
              </Col>
            </Row>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Navigation;