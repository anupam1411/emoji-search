import React, { Fragment, PureComponent } from "react";
import "./Header.css";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import Logo from "./3220858.png";

export default class Header extends PureComponent {
  render() {
    return (
      <>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <Row>
                <Col>
              <img src={Logo} alt="no img" height={25} />
              </Col>
              <Col>

              SEARCH EMOJIS
              </Col>
              <Col>

              <img src={Logo} alt="no img" height={25} />
              </Col>
              </Row>
            </Navbar.Brand>
            <Nav className="me-auto"></Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}
