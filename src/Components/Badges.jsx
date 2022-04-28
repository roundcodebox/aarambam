import React from 'react';
import {
  Badge, Button, Container, Row, Col
} from 'react-bootstrap';

function Badges() {
  return (
    <Container>
      <Row>
        <h2>Badges Examples</h2>
        <Col sm={6} className="pt-5">
          <div>
            <h1>
              Example heading
              {' '}
              <Badge bg="secondary">New</Badge>
            </h1>
            <h2>
              Example heading
              {' '}
              <Badge bg="secondary">New</Badge>
            </h2>
            <h3>
              Example heading
              {' '}
              <Badge bg="secondary">New</Badge>
            </h3>
            <h4>
              Example heading
              {' '}
              <Badge bg="secondary">New</Badge>
            </h4>
            <h5>
              Example heading
              {' '}
              <Badge bg="secondary">New</Badge>
            </h5>
            <h6>
              Example heading
              {' '}
              <Badge bg="secondary">New</Badge>
            </h6>
          </div>
        </Col>
        <Col sm={6} className="pt-5">
          <Button variant="primary">
            Profile
            {' '}
            <Badge bg="secondary">9</Badge>
            <span className="visually-hidden">unread messages</span>
          </Button>
          <h4>Badge Contextual variations</h4>
          <div>
            <Badge bg="primary">Primary</Badge>
            {' '}
            <Badge bg="secondary">Secondary</Badge>
            {' '}
            <Badge bg="success">Success</Badge>
            {' '}
            <Badge bg="danger">Danger</Badge>
            {' '}
            <Badge bg="warning" text="dark">
              Warning
            </Badge>
            {' '}
            <Badge bg="info">Info</Badge>
            {' '}
            <Badge bg="light" text="dark">
              Light
            </Badge>
            {' '}
            <Badge bg="dark">Dark</Badge>
          </div>
          <h4>Badge Pills</h4>
          <div>
            <Badge pill bg="primary">
              Primary
            </Badge>
            {' '}
            <Badge pill bg="secondary">
              Secondary
            </Badge>
            {' '}
            <Badge pill bg="success">
              Success
            </Badge>
            {' '}
            <Badge pill bg="danger">
              Danger
            </Badge>
            {' '}
            <Badge pill bg="warning" text="dark">
              Warning
            </Badge>
            {' '}
            <Badge pill bg="info">
              Info
            </Badge>
            {' '}
            <Badge pill bg="light" text="dark">
              Light
            </Badge>
            {' '}
            <Badge pill bg="dark">
              Dark
            </Badge>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default Badges;
