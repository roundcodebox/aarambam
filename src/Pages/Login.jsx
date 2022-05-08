import React from 'react';

function Login() {
  return (
    <div className="container px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-sm-6">
          <div className=" card shadow-sm login-card">
            <div className="card-body">
              <h4 className="display-4">Login</h4>
              <div className="col-sm-12 my-2">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label col-sm-12 my-2"
                >
                  Email address
                  <input
                    type="email"
                    className="form-control my-2"
                    id="exampleFormControlInput1"
                    placeholder="Enter email address"
                  />
                </label>
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label col-sm-12"
                >
                  Forgot Password
                  <a className="float-end" href="/forgotpassword">
                    Forgot Password
                  </a>
                  <input
                    className="form-control my-2"
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
                      className="form-check-label"
                      htmlFor="flexSwitchCheckDefault"
                    >
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                      />
                      Remember me
                    </label>
                  </div>
                </div>
                <div className="col-sm-4  d-grid">
                  <button type="button" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </div>
              <div className="col-sm-8 d-grid d-md-flex justify-content-md-start">
                <p>
                  New on our platform?{' '}
                  <a href="/register" className="link-primary">
                    Create an account
                  </a>
                </p>
              </div>
              <div className="col-sm-8 d-grid d-md-flex justify-content-md-end" />
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
