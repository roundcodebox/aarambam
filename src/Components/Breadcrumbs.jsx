import React from 'react';
import {
  Breadcrumb, Container, Row, Col
} from 'react-bootstrap';

function Breadcrumbs() {
  return (
    <Container>
      <Row>
        <Col>
          <h4>Breadcrumbs Example</h4>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
              Library
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Data</Breadcrumb.Item>
          </Breadcrumb>

        </Col>
      </Row>
    </Container>
  );
}
export default Breadcrumbs;
