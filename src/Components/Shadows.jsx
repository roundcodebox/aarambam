import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Shadows() {
  return (
    <Container>
      <Row>
        <h4>Shadows</h4>
        <Col sm={6}>
          <div className="shadow-none p-3 mb-5 bg-light rounded">No shadow</div>
        </Col>
        <Col sm={6}>
          <div className="shadow-sm p-3 mb-5 bg-body rounded">Small shadow</div>
        </Col>
        <Col sm={6}>
          <div className="shadow p-3 mb-5 bg-body rounded">Regular shadow</div>
        </Col>
        <Col sm={6}>
          <div className="shadow-lg p-3 mb-5 bg-body rounded">
            Larger shadow
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default Shadows;
