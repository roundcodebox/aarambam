import React from 'react';
import { FloatingLabel, Form, Card } from 'react-bootstrap';

function Register() {
  return (
    <div className="px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-lg-6">
          <Card
            style={{ width: '100%' }}
            className="shadow-sm p-3 register-card"
          >
            <Card.Body>
              <Card.Title className="display-4">Register</Card.Title>
              <Form>
                <div className="row justify-content-center">
                  <div className="col-sm-6">
                    <FloatingLabel
                      controlId="floatingInput"
                      label="First name"
                      className="mb-3"
                    >
                      <Form.Control type="text" placeholder="First name" />
                    </FloatingLabel>
                  </div>
                  <div className="col-sm-6">
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Last name"
                      className="mb-3"
                      type="text"
                    >
                      <Form.Control type="text" placeholder="Last name" />
                    </FloatingLabel>
                  </div>
                </div>
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
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingPassword"
                  label="Confirm Password"
                  className="mb-3"
                >
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                  />
                </FloatingLabel>
                <Form.Group className="mb-3">
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="I agree to privacy policy & terms"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                </Form.Group>
                <div className="col-sm-8">
                  <button type="button" className="btn btn-primary">
                    Register
                  </button>
                </div>
              </Form>
              <p>
                Already have an account?{' '}
                <a href="/register">Sign in instead.</a>
              </p>
            </Card.Body>
          </Card>
        </div>
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
      </div>
    </div>
  );
}

export default Register;
