import React from 'react';
import { Container } from 'react-bootstrap';

function Footers() {
  return (
    <>
      <div className="b-example-divider mb-0" />
      <h4>Footer Examples</h4>
      <div className="b-example-divider mb-0" />
      <Container>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p className="col-md-4 mb-0 text-muted">&copy; 2021 Company, Inc</p>

          <a
            href="/"
            className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto
           link-dark text-decoration-none"
          >
            <svg className="bi me-2" width="40" height="32"><use xlinkHref="#/bootstrap" /></svg>
          </a>

          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item"><a href="#/" className="nav-link px-2 text-muted">Home</a></li>
            <li className="nav-item"><a href="#/" className="nav-link px-2 text-muted">Features</a></li>
            <li className="nav-item"><a href="#/" className="nav-link px-2 text-muted">Pricing</a></li>
            <li className="nav-item"><a href="#/" className="nav-link px-2 text-muted">FAQs</a></li>
            <li className="nav-item"><a href="#/" className="nav-link px-2 text-muted">About</a></li>
          </ul>
        </footer>
      </Container>
      <div className="b-example-divider" />
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
              <svg className="bi" width="30" height="24"><use xlinkHref="#bootstrap" /></svg>
            </a>
            <span className="text-muted">&copy; 2021 Company, Inc</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3"><a className="text-muted" href="#/">Twitter</a></li>
            <li className="ms-3"><a className="text-muted" href="#/">Instagram</a></li>
            <li className="ms-3"><a className="text-muted" href="#/">Facebook</a></li>
          </ul>
        </footer>
      </div>

      <div className="b-example-divider" />

      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><a href="#/" className="nav-link px-2 text-muted">Home</a></li>
            <li className="nav-item"><a href="#/" className="nav-link px-2 text-muted">Features</a></li>
            <li className="nav-item"><a href="#/" className="nav-link px-2 text-muted">Pricing</a></li>
            <li className="nav-item"><a href="#/" className="nav-link px-2 text-muted">FAQs</a></li>
            <li className="nav-item"><a href="#/" className="nav-link px-2 text-muted">About</a></li>
          </ul>
          <p className="text-center text-muted">&copy; 2021 Company, Inc</p>
        </footer>
      </div>

      <div className="b-example-divider" />

      <div className="container">
        <footer className="row row-cols-5 py-5 my-5 border-top">
          <div className="col">
            <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
              <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap" /></svg>
            </a>
            <p className="text-muted">&copy; 2021</p>
          </div>

          <div className="col" />

          <div className="col">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#/" className="nav-link p-0 text-muted">Home</a></li>
              <li className="nav-item mb-2"><a href="#/" className="nav-link p-0 text-muted">Features</a></li>
              <li className="nav-item mb-2"><a href="#/" className="nav-link p-0 text-muted">Pricing</a></li>
              <li className="nav-item mb-2"><a href="#/" className="nav-link p-0 text-muted">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#/" className="nav-link p-0 text-muted">About</a></li>
            </ul>
          </div>

          <div className="col">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#/" className="nav-link p-0 text-muted">Home</a></li>
              <li className="nav-item mb-2"><a href="#/" className="nav-link p-0 text-muted">Features</a></li>
              <li className="nav-item mb-2"><a href="#/" className="nav-link p-0 text-muted">Pricing</a></li>
              <li className="nav-item mb-2"><a href="#/" className="nav-link p-0 text-muted">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#/" className="nav-link p-0 text-muted">About</a></li>
            </ul>
          </div>

          <div className="col">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#/" className="nav-link p-0 text-muted">Home</a></li>
              <li className="nav-item mb-2"><a href="#/" className="nav-link p-0 text-muted">Features</a></li>
              <li className="nav-item mb-2"><a href="#/" className="nav-link p-0 text-muted">Pricing</a></li>
              <li className="nav-item mb-2"><a href="#/" className="nav-link p-0 text-muted">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#/" className="nav-link p-0 text-muted">About</a></li>
            </ul>
          </div>
        </footer>
      </div>

      <div className="b-example-divider" />

      <div className="container">
        <footer className="py-5">
          <div className="row">
            <div className="col-2">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#/" className="nav-link p-0 text-muted">Home</a></li>
                <li className="nav-item mb-2"><a href="#/" className="nav-link p-0 text-muted">Features</a></li>
                <li className="nav-item mb-2"><a href="#/" className="nav-link p-0 text-muted">Pricing</a></li>
                <li className="nav-item mb-2"><a href="#/" className="nav-link p-0 text-muted">FAQs</a></li>
                <li className="nav-item mb-2"><a href="#/" className="nav-link p-0 text-muted">About</a></li>
              </ul>
            </div>

            <div className="col-2">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#/" className="nav-link p-0 text-muted">Home</a></li>
                <li className="nav-item mb-2"><a href="#/" className="nav-link p-0 text-muted">Features</a></li>
                <li className="nav-item mb-2"><a href="#/" className="nav-link p-0 text-muted">Pricing</a></li>
                <li className="nav-item mb-2"><a href="#/" className="nav-link p-0 text-muted">FAQs</a></li>
                <li className="nav-item mb-2"><a href="#/" className="nav-link p-0 text-muted">About</a></li>
              </ul>
            </div>

            <div className="col-2">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#/" className="nav-link p-0 text-muted">Home</a></li>
                <li className="nav-item mb-2"><a href="#/" className="nav-link p-0 text-muted">Features</a></li>
                <li className="nav-item mb-2"><a href="#/" className="nav-link p-0 text-muted">Pricing</a></li>
                <li className="nav-item mb-2"><a href="#/" className="nav-link p-0 text-muted">FAQs</a></li>
                <li className="nav-item mb-2"><a href="#/" className="nav-link p-0 text-muted">About</a></li>
              </ul>
            </div>

            <div className="col-4 offset-1">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of whats new and exciting from us.</p>
                <div className="d-flex w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    Email address
                    <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                  </label>
                  <button className="btn btn-primary" type="button">Subscribe</button>
                </div>
              </form>
            </div>
          </div>

          <div className="d-flex justify-content-between py-4 my-4 border-top">
            <p>&copy; 2021 Company, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3"><a className="link-dark" href="#/">Twitter</a></li>
              <li className="ms-3"><a className="link-dark" href="#/">Instagram</a></li>
              <li className="ms-3"><a className="link-dark" href="#/">Facebook</a></li>
            </ul>
          </div>
        </footer>
      </div>

    </>
  );
}

export default Footers;
