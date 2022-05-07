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
    <Container className="px-4 py-5">
      <Row className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <Col className="col-lg-6">
          <Card style={{ width: '100%' }}>
            <Card.Body>
              <Card.Title className="display-4">Register</Card.Title>
              <Form>
                <Row>
                  <Col>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="First name"
                      className="mb-3"
                    >
                      <Form.Control type="text" placeholder="First name" />
                    </FloatingLabel>
                  </Col>
                  <Col>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Last name"
                      className="mb-3"
                      type="text"
                    >
                      <Form.Control type="text" placeholder="Last name" />
                    </FloatingLabel>
                  </Col>
                </Row>
              </Form>
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
                <Form.Control type="password" placeholder="Confirm Password" />
              </FloatingLabel>{' '}
              <Form.Group className="mb-3">
                <Form.Check
                  required
                  label="I agree to privacy policy & terms"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
              </Form.Group>
              <Stack gap={5} direction="horizontal">
                <div className="bg-light border">
                  <Button variant="primary">Register</Button>{' '}
                </div>
                <div className="bg-light border ms-auto">
                  <Button variant="outline-primary">Login</Button>{' '}
                </div>
              </Stack>
              <p> Already have an account? Sign in instead </p>
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
