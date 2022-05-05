import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from './Sidebar';
import Typography from '../../Components/Typography';

function TypographyLayout() {
  return (
    <Container>
      <Row>
        <Col sm={9}>
          <Typography />
        </Col>
        <Col sm={3}>
          <Sidebar />
        </Col>
      </Row>
    </Container>
  );
}

export default TypographyLayout;
