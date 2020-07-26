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
import { getAllCategories } from "../../actions/categoryActions";

class Navigation extends Component {
  componentDidMount() {
    this.props.getAllCategories();
  }

  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  };

  render() {
    const { isAuthenticated } = this.props.auth;
    const { categories } = this.props.category;
    let { Controller, Ban } = this.props;

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
        <Nav variant="pills" className="ml-auto">
          <Nav.Link href="#home">Cursos</Nav.Link>
          <Nav.Link href="#link">Blog</Nav.Link>
          <Nav.Link href="#home">Agenda</Nav.Link>
          <Nav.Link href="#link">Contactanos</Nav.Link>
          <NavDropdown title="Certificaciones">
            {categories.map((category, index) =>
                category.idCategoria !== Controller && (
                  <NavDropdown
                    title={category.descripcionCategoria}
                    key={index}
                    href=""
                  >
                    {(Controller = category.idCategoria)}
                    {(Ban = true)}
                    {Ban === true &&
                      categories.map(
                        (categ, index) =>
                          Controller === categ.idCategoria && (
                            <NavDropdown.Item key={index} href="">
                              {categ.nombreCurso}
                            </NavDropdown.Item>
                          )
                      )}
                    {(Ban = false)}
                  </NavDropdown>
                )
            )}
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
  getAllCategories: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  category: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  category: state.category,
});

export default connect(mapStateToProps, {
  logoutUser,
  clearCurrentProfile,
  getAllCategories,
})(Navigation);
