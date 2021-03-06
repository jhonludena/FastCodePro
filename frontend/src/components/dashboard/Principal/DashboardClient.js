import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authActions";
import { Container, Row, Col, Button } from "react-bootstrap";

import Category from "../Category";

class DashboardClient extends Component {
  state = {
    controller: "",
  };

  componentDidMount() {
    //const { user } = this.props.auth;
  }

  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    //const { categories } = this.props.category;

    return (
      <Container fluid="md" style={{ height: "75vh" }}>
        <Row>
          <Col sm={12} className="justify-content-md-center">
            <h1>BIENVENIDO..!</h1>
            <h4>
              <b>Hola,</b> {user.nombres}
              <p className="flow-text grey-text text-darken-1">
                <span style={{ fontFamily: "monospace" }}>SISTEMA WEB DE </span>
                APRENDIZAJE{" "}
                <span style={{ fontFamily: "monospace" }}>VIRTUAL </span>
                👏
              </p>
            </h4>
          </Col>
          <Col>
            <Category />
          </Col>
        </Row>
        <Button
          variant="light"
          style={{
            width: "150px",
            borderRadius: "3px",
            letterSpacing: "1.5px",
            marginTop: "1rem",
          }}
          onClick={this.onLogoutClick}
        >
          Logout
        </Button>
      </Container>
    );
  }
}

DashboardClient.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(DashboardClient);
