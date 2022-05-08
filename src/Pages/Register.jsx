import React from 'react';

function Register() {
  return (
    <div className="container px-4 py-5">
      <div className="row g-5 py-5">
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
        <div className="col-sm-6">
          <div className="card shadow-sm register-card">
            <div className="card-body">
              <h4 className="display-4">Register</h4>
              <div className="col-sm-12">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label col-sm-6 p-1"
                >
                  First Name
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="First Name"
                  />
                </label>
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label col-sm-6 p-1"
                >
                  Last Name
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Last Name"
                  />
                </label>
              </div>
              <div className="col-sm-12">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label col-sm-12"
                >
                  Email address
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter email address"
                  />
                </label>
              </div>
              <div className="col-sm-12">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label col-sm-12 my-2"
                >
                  Forgot Password
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Enter Password"
                    id="exampleFormControlInput1"
                  />
                </label>
              </div>
              <div className="col-sm-12">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label col-sm-12 my-2"
                >
                  Confirm Password
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Enter Password"
                    id="exampleFormControlInput1"
                  />
                </label>
              </div>
              <div className="row my-2">
                <div className="col-sm-8">
                  <div className="form-check form-switch">
                    <label
                      className="form-check-label my-2"
                      htmlFor="flexSwitchCheckDefault"
                    >
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                      />
                      I agree to privacy policy & terms
                    </label>
                  </div>
                </div>
                <div className="col-sm-4 d-grid">
                  <button type="button" className="btn btn-primary">
                    Register
                  </button>
                </div>
              </div>
              <div className="col-sm-8 d-grid gap-2 d-md-flex justify-content-md-start">
                <p>
                  Already have an account?{' '}
                  <a href="/register" className="link-primary">
                    Sign in instead
                  </a>
                </p>
              </div>
              <div className="col-sm-8 d-grid gap-2 d-md-flex justify-content-md-end" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
