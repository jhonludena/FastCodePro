import React, { Component } from "react";
import { Navbar, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import path from 'path';

import AuthNavbar from "./AuthNavbar";
import GuestNavbar from "./GuestNavbar";

class Navigation extends Component {
  componentDidMount() {}

  render() {
    const { isAuthenticated } = this.props.auth;

    const authLinks = <AuthNavbar />;

    const guestLinks = <GuestNavbar />;

    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
            <Image src="http://www.pngall.com/wp-content/uploads/2016/05/Laptop-PNG-Image.png" width="50" height= "50" rounded />
            <b>CodeWay</b>
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
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Navigation);
