import React from 'react';
import {
  Container, Row, Col, Stack, Button, Form
} from 'react-bootstrap';

function Stacks() {
  return (
    <Container>
      <Row>
        <h4>Stack Examples</h4>
        <Col sm={6}>
          <h5>Vertical Stack</h5>
          <Stack gap={3}>
            <div className="bg-light border">First item</div>
            <div className="bg-light border">Second item</div>
            <div className="bg-light border">Third item</div>
          </Stack>
        </Col>
        <Col sm={6}>
          <h5>Horizontal Stack</h5>
          <Stack direction="horizontal" gap={3}>
            <div className="bg-light border">First item</div>
            <div className="bg-light border">Second item</div>
            <div className="bg-light border">Third item</div>
          </Stack>
        </Col>
        <Col sm={12}>
          <h5>Horizontal Stack with margin utilities</h5>
          <Stack direction="horizontal" gap={3}>
            <div className="bg-light border">First item</div>
            <div className="bg-light border ms-auto">Second item</div>
            <div className="bg-light border">Third item</div>
          </Stack>
        </Col>
        <Col sm={12}>
          <h5>Horizontal Stack with vertical rules</h5>
          <Stack direction="horizontal" gap={3}>
            <div className="bg-light border">First item</div>
            <div className="bg-light border ms-auto">Second item</div>
            <div className="vr" />
            <div className="bg-light border">Third item</div>
          </Stack>
        </Col>
        <Col sm={4}>
          <h5>Stack examples</h5>
          <Stack gap={2} className="col-md-5 mx-auto">
            <Button variant="secondary">Save changes</Button>
            <Button variant="outline-secondary">Cancel</Button>
          </Stack>
        </Col>
        <Col sm={8}>
          <h5>Horizontal Stack with a inline form </h5>
          <Stack direction="horizontal" gap={3}>
            <Form.Control className="me-auto" placeholder="Add your item here..." />
            <Button variant="secondary">Submit</Button>
            <div className="vr" />
            <Button variant="outline-danger">Reset</Button>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}
export default Stacks;
