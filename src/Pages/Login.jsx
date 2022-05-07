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

function Login() {
  return (
    <Container className="px-4 py-5">
      <Row className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <Col className="col-lg-6">
          <Card style={{ width: '100%' }}>
            <Card.Body>
              <Card.Title className="display-4">Login</Card.Title>
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control
                  size="sm"
                  type="email"
                  placeholder="name@example.com"
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingPassword"
                label="Password"
                className="mb-3"
              >
                <Form.Control
                  size="sm"
                  type="password"
                  placeholder="Password"
                />
              </FloatingLabel>{' '}
              <Form.Check label="Remember me" />{' '}
              <Stack gap={5} direction="horizontal">
                <div className="bg-light border">
                  <Button variant="primary">Login</Button>{' '}
                </div>
                <div className="bg-light border ms-auto">
                  <Button variant="outline-primary">Register</Button>{' '}
                </div>
              </Stack>
              <p>New on our platform? Create an account</p>
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

export default Login;
