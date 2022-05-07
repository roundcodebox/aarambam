import React from 'react';
import { Form } from 'react-bootstrap';

function Login() {
  return (
    <div className="container px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-sm-6">
          <div style={{ width: '100%' }} className=" card shadow-sm login-card">
            <div className="card-body">
              <h4 className="display-4">Login</h4>
              <Form>
                <div className="col-sm-12 my-2">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email address"
                  />
                </div>
                <div className="col-sm-12 my-2">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter Password" />
                </div>
                <div className="row my-4">
                  <div className="col-sm-8">
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      label="Remember me"
                    />
                  </div>
                  <div className="col-sm-4">
                    <a href="/forgotpassword">Forgot Passport</a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4  d-grid">
                    <button type="button" className="btn btn-primary">
                      Login
                    </button>
                  </div>
                  <div className="col-sm-8 d-grid gap-2 d-md-flex justify-content-md-end">
                    <p>
                      New on our platform?{' '}
                      <a href="/register" className="link-primary">
                        Create an account
                      </a>
                    </p>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-6">
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
