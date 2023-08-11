import React, { PureComponent } from "react";
import { InputGroup, FormControl, Container, Row, Col } from "react-bootstrap";

export class Searchbar extends PureComponent {

  handleText=(event)=>{
    this.props.handleChange(event)
  }

  render() {
    return (
      <div className="search-input">
        <>
          <Container fluid>
            <Row>
              <Col>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="inputGroup-sizing-default">
                  <i className="bi bi-search"></i>
                  </InputGroup.Text>
                  <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    onChange={this.handleText}
                    placeholder="Search Emoji Here"
                  />
                </InputGroup>
              </Col>
            </Row>
          </Container>
        </>
      </div>
    );
  }
}

export default Searchbar;
