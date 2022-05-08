import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import './Header.scss';
import MegaMenu from './MegaMenu';

function Header() {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <MegaMenu />
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Aarambam</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="b-example-divider" />
      <div className="b-example-divider" />
      <Container>
        <Navbar className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            <svg className="bi me-2" width="40" height="32">
              <use xlinkHref="#bootstrap" />
            </svg>
            <span className="fs-4">Simple header</span>
          </a>

          <ul className="nav nav-pills">
            <li className="nav-item">
              <a href="/header" className="nav-link active" aria-current="page">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/header" className="nav-link">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="/header" className="nav-link">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a href="/header" className="nav-link">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a href="/header" className="nav-link">
                About
              </a>
            </li>
          </ul>
        </Navbar>
      </Container>

      <div className="b-example-divider" />
      <Container>
        <header className="d-flex justify-content-center py-3">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a href="/header" className="nav-link active" aria-current="page">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/header" className="nav-link">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="/header" className="nav-link">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a href="/header" className="nav-link">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a href="/header" className="nav-link">
                About
              </a>
            </li>
          </ul>
        </header>
      </Container>

      <div className="b-example-divider" />
      <Container>
        <header
          className="d-flex flex-wrap align-items-center justify-content-center
        justify-content-md-between py-3 mb-4 border-bottom"
        >
          <a
            href="/"
            className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
          >
            <svg
              className="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              <use xlinkHref="#bootstrap" />
            </svg>
          </a>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="/header" className="nav-link px-2 link-secondary">
                Home
              </a>
            </li>
            <li>
              <a href="/header" className="nav-link px-2 link-dark">
                Features
              </a>
            </li>
            <li>
              <a href="/header" className="nav-link px-2 link-dark">
                Pricing
              </a>
            </li>
            <li>
              <a href="/header" className="nav-link px-2 link-dark">
                FAQs
              </a>
            </li>
            <li>
              <a href="/header" className="nav-link px-2 link-dark">
                About
              </a>
            </li>
          </ul>

          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">
              Login
            </button>
            <button type="button" className="btn btn-primary">
              Sign-up
            </button>
          </div>
        </header>
      </Container>

      <div className="b-example-divider" />
      <header className="p-3 bg-dark text-white">
        <Container>
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <svg
                className="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              >
                <use xlinkHref="#bootstrap" />
              </svg>
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="/header" className="nav-link px-2 text-secondary">
                  Home
                </a>
              </li>
              <li>
                <a href="/header" className="nav-link px-2 text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="/header" className="nav-link px-2 text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/header" className="nav-link px-2 text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/header" className="nav-link px-2 text-white">
                  About
                </a>
              </li>
            </ul>

            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input
                type="search"
                className="form-control form-control-dark"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">
                Login
              </button>
              <button type="button" className="btn btn-warning">
                Sign-up
              </button>
            </div>
          </div>
        </Container>
      </header>

      <div className="b-example-divider" />

      <div className="b-example-divider" />

      <Container>
        <header
          className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3
     mb-4 border-bottom"
        >
          <a
            href="/"
            className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
          >
            <svg
              className="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              <use xlinkHref="#bootstrap" />
            </svg>
          </a>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="/header" className="nav-link px-2 link-secondary">
                Home
              </a>
            </li>
            <li>
              <a href="/header" className="nav-link px-2 link-dark">
                Features
              </a>
            </li>
            <li>
              <a href="/header" className="nav-link px-2 link-dark">
                Pricing
              </a>
            </li>
            <li>
              <a href="/header" className="nav-link px-2 link-dark">
                FAQs
              </a>
            </li>
            <li>
              <a href="/header" className="nav-link px-2 link-dark">
                About
              </a>
            </li>
          </ul>

          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">
              Login
            </button>
            <button type="button" className="btn btn-primary">
              Sign-up
            </button>
          </div>
        </header>
      </Container>

      <div className="b-example-divider" />

      <header className="p-3 bg-dark text-white">
        <Container>
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/header"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <svg
                className="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              >
                <use xlinkHref="#bootstrap" />
              </svg>
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="/header" className="nav-link px-2 text-secondary">
                  Home
                </a>
              </li>
              <li>
                <a href="/header" className="nav-link px-2 text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="/header" className="nav-link px-2 text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/header" className="nav-link px-2 text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/header" className="nav-link px-2 text-white">
                  About
                </a>
              </li>
            </ul>

            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input
                type="search"
                className="form-control form-control-dark"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">
                Login
              </button>
              <button type="button" className="btn btn-warning">
                Sign-up
              </button>
            </div>
          </div>
        </Container>
      </header>

      <div className="b-example-divider" />

      <header className="p-3 mb-3 border-bottom">
        <Container>
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/header"
              className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none"
            >
              <svg
                className="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              >
                <use xlinkHref="#bootstrap" />
              </svg>
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="/header" className="nav-link px-2 link-secondary">
                  Overview
                </a>
              </li>
              <li>
                <a href="/header" className="nav-link px-2 link-dark">
                  Inventory
                </a>
              </li>
              <li>
                <a href="/header" className="nav-link px-2 link-dark">
                  Customers
                </a>
              </li>
              <li>
                <a href="/header" className="nav-link px-2 link-dark">
                  Products
                </a>
              </li>
            </ul>

            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input
                type="search"
                className="form-control"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            <div className="dropdown text-end">
              <a
                href="/header"
                className="d-block link-dark text-decoration-none dropdown-toggle"
                id="dropdownUser1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle"
                />
              </a>
              <ul
                className="dropdown-menu text-small"
                aria-labelledby="dropdownUser1"
              >
                <li>
                  <a className="dropdown-item" href="/header">
                    New project...
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/header">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/header">
                    Profile
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/header">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </header>

      <div className="b-example-divider" />

      <header className="py-3 mb-3 border-bottom">
        <div
          className="container-fluid d-grid gap-3 align-items-center"
          style={{ gridTemplateColumns: '1fr 2fr' }}
        >
          <div className="dropdown">
            <a
              href="/header"
              className="d-flex align-items-center col-lg-4 mb-2 mb-lg-0 link-dark text-decoration-none dropdown-toggle"
              id="dropdownNavLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <svg className="bi me-2" width="40" height="32">
                <use xlinkHref="#bootstrap" />
              </svg>
            </a>
            <ul
              className="dropdown-menu text-small shadow"
              aria-labelledby="dropdownNavLink"
            >
              <li>
                <a
                  className="dropdown-item active"
                  href="/header"
                  aria-current="page"
                >
                  Overview
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/header">
                  Inventory
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/header">
                  Customers
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/header">
                  Products
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="/header">
                  Reports
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/header">
                  Analytics
                </a>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center">
            <form className="w-100 me-3">
              <input
                type="search"
                className="form-control"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            <div className="flex-shrink-0 dropdown">
              <a
                href="/header"
                className="d-block link-dark text-decoration-none dropdown-toggle"
                id="dropdownUser2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle"
                />
              </a>
              <ul
                className="dropdown-menu text-small shadow"
                aria-labelledby="dropdownUser2"
              >
                <li>
                  <a className="dropdown-item" href="/header">
                    New project...
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/header">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/header">
                    Profile
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/header">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <div className="container-fluid pb-3">
        <div
          className="d-grid gap-3"
          style={{ gridTemplateColumns: '1fr 2fr' }}
        >
          <div className="bg-light border rounded-3">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
          <div className="bg-light border rounded-3">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>

      <div className="b-example-divider" />

      <nav className="py-2 bg-light border-bottom">
        <div className="container d-flex flex-wrap">
          <ul className="nav me-auto">
            <li className="nav-item">
              <a
                href="/header"
                className="nav-link link-dark px-2 active"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/header" className="nav-link link-dark px-2">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="/header" className="nav-link link-dark px-2">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a href="/header" className="nav-link link-dark px-2">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a href="/header" className="nav-link link-dark px-2">
                About
              </a>
            </li>
          </ul>
          <ul className="nav">
            <li className="nav-item">
              <a href="/header" className="nav-link link-dark px-2">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a href="/header" className="nav-link link-dark px-2">
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <header className="py-3 mb-4 border-bottom">
        <div className="container d-flex flex-wrap justify-content-center">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none"
          >
            <svg className="bi me-2" width="40" height="32">
              <use xlinkHref="#bootstrap" />
            </svg>
            <span className="fs-4">Double header</span>
          </a>
          <form className="col-12 col-lg-auto mb-3 mb-lg-0">
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>
        </div>
      </header>

      <div className="b-example-divider" />

      <header>
        <div className="px-3 py-2 bg-dark text-white">
          <Container>
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <a
                href="/header"
                className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
              >
                <svg
                  className="bi me-2"
                  width="40"
                  height="32"
                  role="img"
                  aria-label="Bootstrap"
                >
                  <use xlinkHref="#bootstrap" />
                </svg>
              </a>

              <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                <li>
                  <a href="/header" className="nav-link text-secondary">
                    <svg
                      className="bi d-block mx-auto mb-1"
                      width="24"
                      height="24"
                    >
                      <use xlinkHref="#home" />
                    </svg>
                    Home
                  </a>
                </li>
                <li>
                  <a href="/header" className="nav-link text-white">
                    <svg
                      className="bi d-block mx-auto mb-1"
                      width="24"
                      height="24"
                    >
                      <use xlinkHref="#speedometer2" />
                    </svg>
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="/header" className="nav-link text-white">
                    <svg
                      className="bi d-block mx-auto mb-1"
                      width="24"
                      height="24"
                    >
                      <use xlinkHref="#table" />
                    </svg>
                    Orders
                  </a>
                </li>
                <li>
                  <a href="/header" className="nav-link text-white">
                    <svg
                      className="bi d-block mx-auto mb-1"
                      width="24"
                      height="24"
                    >
                      <use xlinkHref="#grid" />
                    </svg>
                    Products
                  </a>
                </li>
                <li>
                  <a href="/header" className="nav-link text-white">
                    <svg
                      className="bi d-block mx-auto mb-1"
                      width="24"
                      height="24"
                    >
                      <use xlinkHref="#people-circle" />
                    </svg>
                    Customers
                  </a>
                </li>
              </ul>
            </div>
          </Container>
        </div>
        <div className="px-3 py-2 border-bottom mb-3">
          <div className="container d-flex flex-wrap justify-content-center">
            <form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto">
              <input
                type="search"
                className="form-control"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            <div className="text-end">
              <button type="button" className="btn btn-light text-dark me-2">
                Login
              </button>
              <button type="button" className="btn btn-primary">
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="b-example-divider" />
    </>
  );
}

export default Header;
