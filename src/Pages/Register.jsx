import React from 'react';
import {
  Container,
  Row,
  Col,
  FloatingLabel,
  Form,
  Button,
  Card,
  Stack,
} from 'react-bootstrap';

function Register() {
  return (
    <Container className="container col-xxl-8 px-4 py-5">
      <Row className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <Col className="col-lg-6">
          <Card style={{ width: '100%' }}>
            <Card.Body>
              <Card.Title className="display-4 fw-bold lh-1">
                Register
              </Card.Title>
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingPassword"
                label="Password"
                className="mb-3"
              >
                <Form.Control type="password" placeholder="Password" />
              </FloatingLabel>{' '}
              <FloatingLabel
                controlId="floatingPassword"
                label="Confirm Password"
                className="mb-3"
              >
                <Form.Control
                  type="confirmPassword"
                  placeholder="Confirm Password"
                />
              </FloatingLabel>{' '}
              <Stack gap={5} direction="horizontal">
                <div className="bg-light border">
                  <Button variant="primary">Register</Button>{' '}
                </div>
                <div className="bg-light border ms-auto">
                  <Button variant="outline-primary">Login</Button>{' '}
                </div>
              </Stack>
            </Card.Body>
          </Card>
        </Col>
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src="/assets/images/bootstrap-themes.png"
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
      </Row>
    </Container>
  );
}

export default Register;
