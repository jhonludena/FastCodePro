import React, { Component } from "react";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";

class Navigation extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  };

  render() {
    const { isAuthenticated } = this.props.auth;

    const authLinks = (
      <Container>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Perfil</Nav.Link>
          <Nav.Link href="#link">Categorias</Nav.Link>
        </Nav>
        <Form inline>
          <Link
            to="/login"
            className="btn btn-outline-primary"
            onClick={this.onLogoutClick}
          >
            Cerrar Sesión
          </Link>
        </Form>
      </Container>
    );

    const guestLinks = (
      <Container>
        <Row>
          <Col md="auto">
            <Form inline className="ml-auto">
              <FormControl
                type="text"
                placeholder="Busqueda..."
                className="mr-sm-2"
              />
              <Button variant="outline-primary">Buscar</Button>
            </Form>
          </Col>
        </Row>
        <Nav className="ml-auto">
          <Nav.Link href="#home">Cursos</Nav.Link>
          <Nav.Link href="#link">Blog</Nav.Link>
          <Nav.Link href="#home">Agenda</Nav.Link>
          <Nav.Link href="#link">Contactanos</Nav.Link>
          <NavDropdown title="Iniciar mi plan" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <Row>
            <Col md="auto">
              <Link to="/register" className="btn btn-outline-primary">
                Registrarse
              </Link>
            </Col>
            <Col md="auto">
              <Link to="/login" className="btn btn-outline-primary">
                Iniciar Sesión
              </Link>
            </Col>
          </Row>
        </Form>
      </Container>
    );

    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
            <i className="material-icons">airplay</i>
            Sushi Rolls
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {isAuthenticated ? authLinks : guestLinks}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

Navigation.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(
  Navigation
);
