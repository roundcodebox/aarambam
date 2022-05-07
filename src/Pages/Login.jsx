import React from 'react';
import { FloatingLabel, Form, Card } from 'react-bootstrap';

function Login() {
  return (
    <div className="px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-lg-6">
          <Card style={{ width: '100%' }} className="shadow-sm p-3 login-card">
            <Card.Body>
              <Card.Title className="display-4">Login</Card.Title>
              <Form>
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
                <div className="row">
                  <div className="col-sm-8">
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      label="Remember me"
                    />
                  </div>
                  <div className="col-sm-4">
                    <a href="/register">Forgot Passport</a>
                  </div>
                </div>
                <button type="button" className="btn btn-primary">
                  Login
                </button>
              </Form>
              <p>
                New on our platform? <a href="/register">Create an account.</a>
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

export default Login;
