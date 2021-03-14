import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import ListUsersByRole from "./ListUsersByRole";
import Register from "../auth/Register";

class UsersAdmin extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <ListUsersByRole />
          </Col>
          <Col>
            <Register />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default connect()(withRouter(UsersAdmin));
