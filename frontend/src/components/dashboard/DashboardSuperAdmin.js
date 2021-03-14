import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Container, Row, Col, Button } from "react-bootstrap";

import IndexSuperAdmin from "./IndexSuperAdmin";

class DashboardSuperAdmin extends Component {
  state = {};

  componentDidMount() {
    //const { user } = this.props.auth;
    //console.log(user);
  }

  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <>
        <Container fluid>
          <Row>
            <Col>
              <IndexSuperAdmin />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

DashboardSuperAdmin.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(DashboardSuperAdmin);
