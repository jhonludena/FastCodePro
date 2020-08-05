import React, { Component } from "react";
import {
  Container,
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
import { getAllCategories } from "../../../actions/categoryActions";

class GuestNavbar extends Component {
  componentDidMount() {
    this.props.getAllCategories();
  }

  render() {
    const { categories } = this.props.category;
    let { Controller, Ban } = this.props;

    return (
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
            {categories.map(
              (category, index) =>
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
  }
}

GuestNavbar.propTypes = {
  getAllCategories: PropTypes.func.isRequired,
  category: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  category: state.category,
});

export default connect(mapStateToProps, {
  getAllCategories,
})(GuestNavbar);
