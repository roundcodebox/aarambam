import React, { useState } from 'react';
import { Container, Row, Col, Toast, Button } from 'react-bootstrap';

function ToastsAutohide() {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <Row>
        <Col xs={6}>
          <h4>Autohidable toasts</h4>
          <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={3000}
            autohide
          >
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>
              Woohoo, you're reading this text in a Toast!
            </Toast.Body>
          </Toast>
          <Button onClick={() => setShow(true)}>Show Toast</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ToastsAutohide;