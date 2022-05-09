import React from 'react';

function Dropdowns() {
  return (
    <div className="container px-4 py-5">
      <div className="row g-5 py-5">
        <div className="col-sm-8 col-lg-8">
          <h6>Dropdown ButtonGroup</h6>
          <div className="btn-group mx-1">
            <button
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Action
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="/dropdowns">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/dropdowns">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/dropdowns">
                  Something else here
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="/dropdowns">
                  Separated link
                </a>
              </li>
            </ul>
          </div>
          <div className="btn-group mx-1">
            <button
              type="button"
              className="btn btn-secondary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Action
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="/dropdowns">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/dropdowns">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/dropdowns">
                  Something else here
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="/dropdowns">
                  Separated link
                </a>
              </li>
            </ul>
          </div>
          <div className="btn-group mx-1">
            <button
              type="button"
              className="btn btn-success dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Action
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="/dropdowns">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/dropdowns">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/dropdowns">
                  Something else here
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="/dropdowns">
                  Separated link
                </a>
              </li>
            </ul>
          </div>
          <div className="btn-group mx-1">
            <button
              type="button"
              className="btn btn-info dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Action
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="/dropdowns">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/dropdowns">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/dropdowns">
                  Something else here
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="/dropdowns">
                  Separated link
                </a>
              </li>
            </ul>
          </div>
          <div className="btn-group mx-1">
            <button
              type="button"
              className="btn btn-warning dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Action
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="/dropdowns">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/dropdowns">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/dropdowns">
                  Something else here
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="/dropdowns">
                  Separated link
                </a>
              </li>
            </ul>
          </div>
          <div className="btn-group mx-1">
            <button
              type="button"
              className="btn btn-danger dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Action
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="/dropdowns">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/dropdowns">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/dropdowns">
                  Something else here
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="/dropdowns">
                  Separated link
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-4 col-lg-4">
          <h6>Dropdown Sizing</h6>
          <div className="btn-group my-2">
            <button
              className="btn btn-secondary btn-lg dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Large button
            </button>
            <ul className="dropdown-menu">...</ul>
          </div>
        </div>
        <div className="col-sm-8 col-lg-8">
          <h6>Split button dropdowns</h6>
          <div className="btn-group mx-1">
            <button type="button" className="btn btn-primary">
              Action
            </button>
            <button
              type="button"
              className="btn btn-primary dropdown-toggle dropdown-toggle-split"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="/dropdowns">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/dropdowns">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/dropdowns">
                  Something else here
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="/dropdowns">
                  Separated link
                </a>
              </li>
            </ul>
          </div>
          <div className="btn-group mx-1">
            <button type="button" className="btn btn-secondary">
              Action
            </button>
            <button
              type="button"
              className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="/dropdowns">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/dropdowns">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/dropdowns">
                  Something else here
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="/dropdowns">
                  Separated link
                </a>
              </li>
            </ul>
          </div>
          <div className="btn-group mx-1">
            <button type="button" className="btn btn-success">
              Action
            </button>
            <button
              type="button"
              className="btn btn-success dropdown-toggle dropdown-toggle-split"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="/dropdowns">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/dropdowns">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/dropdowns">
                  Something else here
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="/dropdowns">
                  Separated link
                </a>
              </li>
            </ul>
          </div>
          <div className="btn-group mx-1">
            <button type="button" className="btn btn-info">
              Action
            </button>
            <button
              type="button"
              className="btn btn-info dropdown-toggle dropdown-toggle-split"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="/dropdowns">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/dropdowns">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/dropdowns">
                  Something else here
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="/dropdowns">
                  Separated link
                </a>
              </li>
            </ul>
          </div>
          <div className="btn-group mx-1">
            <button type="button" className="btn btn-warning">
              Action
            </button>
            <button
              type="button"
              className="btn btn-warning dropdown-toggle dropdown-toggle-split"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="/dropdowns">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/dropdowns">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/dropdowns">
                  Something else here
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="/dropdowns">
                  Separated link
                </a>
              </li>
            </ul>
          </div>
          <div className="btn-group mx-1">
            <button type="button" className="btn btn-danger">
              Action
            </button>
            <button
              type="button"
              className="btn btn-danger dropdown-toggle dropdown-toggle-split"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="/dropdowns">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/dropdowns">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/dropdowns">
                  Something else here
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="/dropdowns">
                  Separated link
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-4 col-lg-4">
          <h6>Large split button</h6>
          <div className="btn-group my-2">
            <button className="btn btn-secondary btn-lg" type="button">
              Large split button
            </button>
            <button
              type="button"
              className="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul className="dropdown-menu">...</ul>
          </div>
        </div>
        <div className="col-sm-3 col-lg-3">
          <h6>Small button</h6>
          <div className="btn-group">
            <button
              className="btn btn-secondary btn-sm dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Small button
            </button>
            <ul className="dropdown-menu">...</ul>
          </div>
        </div>
        <div className="col-sm-3 col-lg-3">
          <h6>Small split button</h6>
          <div className="btn-group">
            <button className="btn btn-secondary btn-sm" type="button">
              Small split button
            </button>
            <button
              type="button"
              className="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul className="dropdown-menu">...</ul>
          </div>
        </div>
        <div className="col-sm-3 col-lg-3">
          <h6>Single button dropdowns</h6>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown button
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="/dropdowns">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/dropdowns">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/dropdowns">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-3 col-lg-3">
          <h6>Single button dropdowns</h6>
          <div className="dropdown">
            <a
              className="btn btn-secondary dropdown-toggle"
              href="/dropdowns"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown link
            </a>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <a className="dropdown-item" href="/dropdowns">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/dropdowns">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/dropdowns">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col-sm-12 col-lg-12">
        <h6>Dropdown in Navbar </h6>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/dropdowns">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDarkDropdown"
              aria-controls="navbarNavDarkDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarNavDarkDropdown"
            >
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/dropdowns"
                    id="navbarDarkDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-dark"
                    aria-labelledby="navbarDarkDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="/dropdowns">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/dropdowns">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/dropdowns">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="col-sm-3 col-lg-3">
        <h6>Dark dropdowns</h6>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <ul
            className="dropdown-menu dropdown-menu-dark"
            aria-labelledby="dropdownMenuButton2"
          >
            <li>
              <a className="dropdown-item active" href="/dropdowns">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/dropdowns">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/dropdowns">
                Something else here
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="/dropdowns">
                Separated link
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4 col-lg-4">
          <h6>Navbar Dropup</h6>
          <div className="btn-group mx-1 dropup">
            <button
              type="button"
              className="btn btn-secondary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropup
            </button>
            <ul className="dropdown-menu" />
          </div>
          <div className="btn-group mx-1 dropup">
            <button type="button" className="btn btn-secondary">
              Split dropup
            </button>
            <button
              type="button"
              className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul className="dropdown-menu" />
          </div>
        </div>
        <div className="col-sm-4 col-lg-4">
          <h6>Navbar Dropright</h6>
          <div className="btn-group mx-1 dropend">
            <button
              type="button"
              className="btn btn-secondary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropright
            </button>
            <ul className="dropdown-menu" />
          </div>

          <div className="btn-group mx-1 dropend">
            <button type="button" className="btn btn-secondary">
              Split dropend
            </button>
            <button
              type="button"
              className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="visually-hidden">Toggle Dropright</span>
            </button>
            <ul className="dropdown-menu" />
          </div>
        </div>
        <div className="col-sm-4 col-lg-4">
          <h6>Dropdown Dropleft</h6>
          <div className="btn-group mx-1 dropstart">
            <button
              type="button"
              className="btn btn-secondary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropstart
            </button>
            <ul className="dropdown-menu" />
          </div>

          <div className="btn-group mx-1">
            <div className="btn-group dropstart" role="group">
              <button
                type="button"
                className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="visually-hidden">Toggle Dropstart</span>
              </button>
              <ul className="dropdown-menu" />
            </div>
            <button type="button" className="btn btn-secondary">
              Split dropstart
            </button>
          </div>
        </div>
        <div className="col-sm-4 col-lg-4">
          <h6>Dropdown menu items</h6>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenu2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <li>
                <button className="dropdown-item" type="button">
                  Action
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Another action
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Something else here
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-4 col-lg-4">
          <h6>Menu items</h6>
          <div>
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenu2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li>
                  <button className="dropdown-item" type="button">
                    Action
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    Another action
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    Something else here
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-4 col-lg-4">
          <h6>Responsive alignment1221</h6>
          <div className="btn-group mx-1">
            <button
              type="button"
              className="btn btn-secondary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Right-aligned menu example
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <button className="dropdown-item" type="button">
                  Action
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Another action
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Something else here
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-6 col-lg-6">
          <h6>Responsive alignment</h6>
          <div className="btn-group mx-1">
            <button
              type="button"
              className="btn btn-secondary dropdown-toggle"
              data-bs-toggle="dropdown"
              data-bs-display="static"
              aria-expanded="false"
            >
              Left-aligned but right aligned when large screen
            </button>
            <ul className="dropdown-menu dropdown-menu-lg-end">
              <li>
                <button className="dropdown-item" type="button">
                  Action
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Another action
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Something else here
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-6 col-lg-6">
          <h6>Responsive alignment</h6>
          <div className="btn-group mx-1">
            <button
              type="button"
              className="btn btn-secondary dropdown-toggle"
              data-bs-toggle="dropdown"
              data-bs-display="static"
              aria-expanded="false"
            >
              Right-aligned but left aligned when large screen
            </button>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
              <li>
                <button className="dropdown-item" type="button">
                  Action
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Another action
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Something else here
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-lg-12">
        <h6>Alignment options</h6>
        <div className="btn-group mx-1">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <a className="dropdown-item" href="#/">
                Menu item
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#/">
                Menu item
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#/">
                Menu item
              </a>
            </li>
          </ul>
        </div>
        <div className="btn-group mx-1">
          <button
            type="button"
            className="btn btn-secondary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Right-aligned menu
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <a className="dropdown-item" href="#/">
                Menu item
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#/">
                Menu item
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#/">
                Menu item
              </a>
            </li>
          </ul>
        </div>
        <div className="btn-group mx-1">
          <button
            type="button"
            className="btn btn-secondary dropdown-toggle"
            data-bs-toggle="dropdown"
            data-bs-display="static"
            aria-expanded="false"
          >
            Left-aligned, right-aligned lg
          </button>
          <ul className="dropdown-menu dropdown-menu-lg-end">
            <li>
              <a className="dropdown-item" href="#/">
                Menu item
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#/">
                Menu item
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#/">
                Menu item
              </a>
            </li>
          </ul>
        </div>
        <div className="btn-group mx-1">
          <button
            type="button"
            className="btn btn-secondary dropdown-toggle"
            data-bs-toggle="dropdown"
            data-bs-display="static"
            aria-expanded="false"
          >
            Right-aligned, left-aligned lg
          </button>
          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
            <li>
              <a className="dropdown-item" href="#/">
                Menu item
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#/">
                Menu item
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#/">
                Menu item
              </a>
            </li>
          </ul>
        </div>
        <div className="btn-group mx-1 dropstart">
          <button
            type="button"
            className="btn btn-secondary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropstart
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#/">
                Menu item
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#/">
                Menu item
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#/">
                Menu item
              </a>
            </li>
          </ul>
        </div>
        <div className="btn-group mx-1 dropend">
          <button
            type="button"
            className="btn btn-secondary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropend
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#/">
                Menu item
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#/">
                Menu item
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#/">
                Menu item
              </a>
            </li>
          </ul>
        </div>
        <div className="btn-group mx-1 dropup my-2">
          <button
            type="button"
            className="btn btn-secondary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropup
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#/">
                Menu item
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#/">
                Menu item
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#/">
                Menu item
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-sm-4 col-lg-4">
        <h6>Dropdown options</h6>
        <div className="d-flex">
          <div className="dropdown me-1">
            <button
              type="button"
              className="btn btn-secondary dropdown-toggle"
              id="dropdownMenuOffset"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              data-bs-offset="10,20"
            >
              Offset
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
              <li>
                <a className="dropdown-item" href="#/">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#/">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#/">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
          <div className="btn-group mx-1">
            <button type="button" className="btn btn-secondary">
              Reference
            </button>
            <button
              type="button"
              className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
              id="dropdownMenuReference"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              data-bs-reference="parent"
            >
              <span className="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul
              className="dropdown-menu"
              aria-labelledby="dropdownMenuReference"
            >
              <li>
                <a className="dropdown-item" href="#/">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#/">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#/">
                  Something else here
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#/">
                  Separated link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-sm-8 col-lg-8">
        <h6>Auto close behavior</h6>
        <div className="btn-group mx-1">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="defaultDropdown"
            data-bs-toggle="dropdown"
            data-bs-auto-close="true"
            aria-expanded="false"
          >
            Default dropdown
          </button>
          <ul className="dropdown-menu" aria-labelledby="defaultDropdown">
            <li>
              <a className="dropdown-item" href="#/">
                Menu item
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#/">
                Menu item
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#/">
                Menu item
              </a>
            </li>
          </ul>
        </div>

        <div className="btn-group mx-1">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuClickableOutside"
            data-bs-toggle="dropdown"
            data-bs-auto-close="inside"
            aria-expanded="false"
          >
            Clickable outside
          </button>
          <ul
            className="dropdown-menu"
            aria-labelledby="dropdownMenuClickableOutside"
          >
            <li>
              <a className="dropdown-item" href="#/">
                Menu item
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#/">
                Menu item
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#/">
                Menu item
              </a>
            </li>
          </ul>
        </div>

        <div className="btn-group mx-1">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuClickableInside"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
            aria-expanded="false"
          >
            Clickable inside
          </button>
          <ul
            className="dropdown-menu"
            aria-labelledby="dropdownMenuClickableInside"
          >
            <li>
              <a className="dropdown-item" href="#/">
                Menu item
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#/">
                Menu item
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#/">
                Menu item
              </a>
            </li>
          </ul>
        </div>

        <div className="btn-group mx-1">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuClickable"
            data-bs-toggle="dropdown"
            data-bs-auto-close="false"
            aria-expanded="false"
          >
            Manual close
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuClickable">
            <li>
              <a className="dropdown-item" href="#/">
                Menu item
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#/">
                Menu item
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#/">
                Menu item
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Dropdowns;
