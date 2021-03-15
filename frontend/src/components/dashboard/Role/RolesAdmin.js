import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import ListUsersByRole from "../User/ListUsersByRole";
import ListRolesByRole from "../Role/ListRolesByRole";

class RolesAdmin extends Component {
  render() {
    return (
      <>
        <Container>
          <Row className="justify-content-md-center">
            <h1>Usuarios</h1>
            <ListUsersByRole />
          </Row>
          <Row className="justify-content-md-center">
            <h1>Roles</h1>
            <ListRolesByRole />
          </Row>
        </Container>
      </>
    );
  }
}

export default connect()(withRouter(RolesAdmin));
