import React from 'react';
import { Row, Container, Col, ListGroup } from 'react-bootstrap';

function Sidebar() {
  return (
    <Container>
      <Row>
        <Col>
          <h2>Components</h2>
          <ListGroup variant="flush">
            <ListGroup.Item action>Typography</ListGroup.Item>
            <ListGroup.Item action>Headers</ListGroup.Item>
            <ListGroup.Item action>Forms</ListGroup.Item>
            <ListGroup.Item action>Alerts</ListGroup.Item>
            <ListGroup.Item action>Alerts</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default Sidebar;
