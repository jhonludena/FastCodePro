import React, { Component } from "react";
import { Container, Nav, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authActions";
import { clearCurrentProfile } from "../../../actions/profileActions";

class AuthNavbar extends Component {
  componentDidMount() {}

  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <Container>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Perfil</Nav.Link>
          <Nav.Link href="#link">Categorias</Nav.Link>
        </Nav>
        <Form inline>
          <b>{user.nombres}</b>
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
  }
}

AuthNavbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  logoutUser,
  clearCurrentProfile,
})(AuthNavbar);
