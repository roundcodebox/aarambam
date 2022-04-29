import React from 'react';
import {
  Container, Row, Col
} from 'react-bootstrap';
import ModalExample1 from './ModalExample1';
import ModalExample2 from './ModalExample2';
import ModalExample3 from './ModalExample3';
import ModalExample4 from './ModalExample4';
import ModalExample5 from './ModalExample5';
import ModalExample6 from './ModalExample6';
import ModalFullscreenExamples from './ModalFullscreenExamples';

function ModalExamples() {
  return (
    <Container>
      <Row>
        <h4>All Modal Examples</h4>
        <Col sm={4}>
          <h6>Basic Modal Examples</h6>
          <ModalExample1 />
        </Col>
        <Col sm={4}>
          <h6>Modal with static backdrop</h6>
          <ModalExample2 />
        </Col>
        <Col sm={4}>
          <h6>Modal without Animation</h6>
          <ModalExample3 />
        </Col>
        <Col sm={4}>
          <h6>Modal with focus on specific element</h6>
          <ModalExample4 />
        </Col>
        <Col sm={4}>
          <h6>Modal with optional sizes</h6>
          <ModalExample5 />
        </Col>
        <Col sm={4}>
          <h6>Sizing modals using custom CSS</h6>
          <ModalExample6 />
        </Col>
        <Col sm={12}>
          <h6>Sizing modals using custom CSS</h6>
          <ModalFullscreenExamples />
        </Col>
      </Row>
    </Container>
  );
}
export default ModalExamples;
