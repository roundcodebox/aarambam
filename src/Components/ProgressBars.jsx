import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

function ProgressBars() {
  return (
    <Container>
      <Row>
        <Col sm={6}>
          <h4>Progressbar Example</h4>
          <ProgressBar now={60} />
        </Col>
        <Col sm={6}>
          <h4>Progressbar Contextual alternatives</h4>
          <div>
            <ProgressBar variant="success" now={40} />
            <ProgressBar variant="info" now={20} />
            <ProgressBar variant="warning" now={60} />
            <ProgressBar variant="danger" now={80} />
          </div>
        </Col>
        <Col sm={6}>
          <h4>Progressbar Striped</h4>
          <div>
            <ProgressBar striped variant="success" now={40} />
            <ProgressBar striped variant="info" now={20} />
            <ProgressBar striped variant="warning" now={60} />
            <ProgressBar striped variant="danger" now={80} />
          </div>
        </Col>
        <Col sm={6}>
          <h4>Progressbar Animated</h4>
          <ProgressBar animated now={45} />
        </Col>
        <Col sm={6}>
          <h4>Progressbar Stacked</h4>
          <ProgressBar>
            <ProgressBar striped variant="success" now={35} key={1} />
            <ProgressBar variant="warning" now={20} key={2} />
            <ProgressBar striped variant="danger" now={10} key={3} />
          </ProgressBar>
        </Col>
      </Row>
    </Container>
  );
}

export default ProgressBars;
