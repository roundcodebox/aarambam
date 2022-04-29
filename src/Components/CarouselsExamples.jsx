import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CarouselsExample1 from './CarouselsExample1';
import CarouselsExample2 from './CarouselsExample2';
import CarouselsExample3 from './CarouselsExample3';
import CarouselsExample4 from './CarouselsExample4';
import CarouselsExample5 from './CarouselsExample5';

function CarouselsExamples() {
  return (
    <Container>
      <Row>
        <Col sm={12}>
          <h4>Carousel Examples</h4>
          <CarouselsExample1 />
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <h4>Carousel Controlled Examples</h4>
          <CarouselsExample2 />
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <h4>Carousel Crossfade Examples</h4>
          <CarouselsExample3 />
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <h4>Carousel Individual Item Intervals Examples</h4>
          <CarouselsExample4 />
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <h4>Carousel Dark variant</h4>
          <CarouselsExample5 />
        </Col>
      </Row>
    </Container>
  );
}
export default CarouselsExamples;
