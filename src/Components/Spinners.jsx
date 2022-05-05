import React from 'react';
import { Container, Row, Col, Spinner, Button } from 'react-bootstrap';
import Sidebar from '../Pages/Layouts/Sidebar';

function Spinners() {
  return (
    <Container className="pt-5">
      <Row>
        <Col sm={9} className="pt-5">
          <Col sm={9}>
            <h2>Spinners</h2>
            <h4>Border Spinner</h4>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Col>
          <Col sm={9}>
            <h4>Grow Spinner</h4>
            <Spinner animation="grow" />
          </Col>
          <Col sm={9}>
            <h4>Spinner Variants</h4>
            <Spinner animation="border" variant="primary" />
            <Spinner animation="border" variant="secondary" />
            <Spinner animation="border" variant="success" />
            <Spinner animation="border" variant="danger" />
            <Spinner animation="border" variant="warning" />
            <Spinner animation="border" variant="info" />
            <Spinner animation="border" variant="light" />
            <Spinner animation="border" variant="dark" />
          </Col>
          <Col sm={9}>
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="light" />
            <Spinner animation="grow" variant="dark" />
          </Col>
          <Col sm={9}>
            <h4>Spinner sizes</h4>
            <Spinner animation="border" size="sm" />
            <Spinner animation="border" />
            <Spinner animation="grow" size="sm" />
            <Spinner animation="grow" />
          </Col>
          <Col sm={9}>
            <h4>Spinner in Buttons</h4>
            <Button variant="primary" disabled>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              <span className="visually-hidden">Loading...</span>
            </Button>

            <Button variant="primary" disabled>
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Loading...
            </Button>
          </Col>
          <Col sm={9}>
            <h4>Spinner with Accessibility</h4>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Col>
        </Col>
        <Col sm={3} className="pt-5">
          <Sidebar />
        </Col>
      </Row>
    </Container>
  );
}
export default Spinners;
