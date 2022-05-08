import React from 'react';

function ForgotPassword() {
  return (
    <div className="container px-4 py-5">
      <div className="row g-5 py-5">
        <div className="col-sm-6">
          <div className=" card shadow-sm forgotPassword-card">
            <div className="card-body">
              <h4 className="display-4">Forgot Password</h4>
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
              </div>
              <div className="row my-2">
                <div className="col-sm-4  d-grid">
                  <button type="button" className="btn btn-primary">
                    ForgotPassword
                  </button>
                </div>
                <div className="col-sm-8" />
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

export default ForgotPassword;
