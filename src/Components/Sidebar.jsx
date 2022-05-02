import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

function Sidebar() {
  return (
    <Container>
      <Row className="mt-5">
        <Col className="mt-5">
          <h1>Sidebar</h1>
          <ListGroup>
            <ListGroup.Item action>No style</ListGroup.Item>
            <ListGroup.Item action variant="primary">
              Primary
            </ListGroup.Item>
            <ListGroup.Item action variant="secondary">
              Secondary
            </ListGroup.Item>
            <ListGroup.Item action variant="success">
              Success
            </ListGroup.Item>
            <ListGroup.Item action variant="danger">
              Danger
            </ListGroup.Item>
            <ListGroup.Item action variant="warning">
              Warning
            </ListGroup.Item>
            <ListGroup.Item action variant="info">
              Info
            </ListGroup.Item>
            <ListGroup.Item action variant="light">
              Light
            </ListGroup.Item>
            <ListGroup.Item action variant="dark">
              Dark
            </ListGroup.Item>
          </ListGroup>
          <ListGroup className="pt-5">
            <ListGroup.Item action active>
              Cras justo odio
            </ListGroup.Item>
            <ListGroup.Item action>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item action>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item action>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item action>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
export default Sidebar;
