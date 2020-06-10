import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {

    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Link to="/"
              style={{ color: 'inherit', textDecoration: 'inherit' }}>
              <i className="material-icons left">keyboard_backspace</i>
                Volver a inicio
            </Link>
            <Col>
              <h4>
                <b>Inicie sesión</b> a continuación
              </h4>
              <p>
                ¿No tienes una cuenta? <Link to="/register" style={{ textDecoration: 'inherit' }}>Regístrate</Link>
              </p>
            </Col>
            <Form noValidate onSubmit={this.onSubmit}>
              <Form.Group>
                <Form.Label>Dirección de correo electrónico</Form.Label>
                <Form.Control
                  onChange={this.onChange}
                  value={this.state.email}
                  id="email"
                  type="email"
                  placeholder="Ingrese correo electrónico"
                  />
              </Form.Group>
              <Form.Group>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  onChange={this.onChange}
                  value={this.state.password}
                  id="password"
                  type="password"
                  placeholder="Contraseña"
                  />
              </Form.Group>
              <Button variant="primary" type="submit">
                Iniciar sesión
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
