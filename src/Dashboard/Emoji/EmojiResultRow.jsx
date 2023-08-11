import React, { PureComponent } from "react";
import { Row, Col, Container,Button } from "react-bootstrap";

export class EmojiResultRow extends PureComponent {
  render() {
    const { title, symbol } = this.props;
    const codePointHex = symbol.codePointAt(0).toString(16);
    const src = `https://cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
    return (
      <div className="copy-it" data-clipboard-text={symbol}>
        <Container>
          <Row>
            <Col>
              <img src={src} alt={title} height="35" />
            </Col>
            <Col>
              <span className="title">{title}</span>
            </Col>
            <Col>
              <span className="INFO">
                <Button variant="outline-info">Click to Copy</Button>
              </span>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default EmojiResultRow;
