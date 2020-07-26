import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { saveInformation } from "../../actions/informationActions";
import { Container, Form, Col, Button } from "react-bootstrap";

class Information extends Component {
  state = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    country: "",
    provincia: "",
    age: "",
    interes: "",
  };

  componentDidMount() {}

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const Data = {
      nombres: this.state.firstName,
      apellidos: this.state.lastName,
      telefono: this.state.phone,
      correo_electronico: this.state.email,
      pais: this.state.country,
      provincia: this.state.provincia,
      edad: this.state.age,
      programa_interes: this.state.interes,
    };

    this.props.saveInformation(Data);

    this.setState({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      country: "",
      provincia: "",
      age: "",
      interes: "",
    });
  };

  render() {
    return (
      <Container>
        <Col>
          <h4>
            <b>Regístrate</b> a continuación
          </h4>
        </Col>
        <Form noValidate onSubmit={this.onSubmit}>
          <Form.Group>
            <Form.Label>Ingrese sus nombres</Form.Label>
            <Form.Control
              onChange={this.onChange}
              value={this.state.firstName}
              id="firstName"
              type="text"
              placeholder="Ingrese nombre completo"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Ingrese sus apellidos</Form.Label>
            <Form.Control
              onChange={this.onChange}
              value={this.state.lastName}
              id="lastName"
              type="text"
              placeholder="Ingrese apellido completo"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Ingrese numero telefonico</Form.Label>
            <Form.Control
              onChange={this.onChange}
              value={this.state.phone}
              id="phone"
              type="number"
              placeholder="Ingrese su numero de telefono"
            />
          </Form.Group>
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
            <Form.Label>Ingrese su pais de origen</Form.Label>
            <Form.Control
              onChange={this.onChange}
              value={this.state.country}
              id="country"
              type="text"
              placeholder="Ingrese su pais de nacionalidad"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Ingrese su provincia de origen</Form.Label>
            <Form.Control
              onChange={this.onChange}
              value={this.state.provincia}
              id="provincia"
              type="text"
              placeholder="Ingrese su provincia"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Ingrese su edad</Form.Label>
            <Form.Control
              onChange={this.onChange}
              value={this.state.age}
              id="age"
              type="number"
              placeholder="Ingrese su edad"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Ingrese programa de interes</Form.Label>
            <Form.Control
              onChange={this.onChange}
              value={this.state.interes}
              id="interes"
              type="text"
              placeholder="Ingrese el programa que le interesa"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Regístrate
          </Button>
        </Form>
      </Container>
    );
  }
}

Information.propTypes = {
  saveInformation: PropTypes.func.isRequired,
  //verification: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  //verification: state.verification,
});

export default connect(mapStateToProps, { saveInformation })(Information);
