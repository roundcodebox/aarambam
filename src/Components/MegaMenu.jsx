import React from 'react';

function MegaMenu() {
  return (
    <div>
      {' '}
      <nav className=" fixed-top navbar navbar-expand-lg navbar-light bg-dark navbar-dark shadow">
        <div className="container">
          <a className="navbar-brand" href="/header">
            React Starter Kit{' '}
            <span className="badge bg-primary">Bootstrap 5</span>
          </a>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-content"
          >
            <div className="hamburger-toggle">
              <div className="hamburger">
                <span />
                <span />
                <span />
              </div>
            </div>
          </button>
          <div className="collapse navbar-collapse" id="navbar-content">
            <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/header"
                >
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/header"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                >
                  Multilevel
                </a>
                <ul className="dropdown-menu shadow">
                  <li>
                    <a className="dropdown-item" href="/header">
                      Gallery
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="blog.html">
                      Blog
                    </a>
                  </li>
                  <li className="dropstart">
                    <a
                      href="/header"
                      className="dropdown-item dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      Submenu Left
                    </a>
                    <ul className="dropdown-menu shadow">
                      <li>
                        <a className="dropdown-item" href="/header">
                          {' '}
                          Third level 1
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/header">
                          {' '}
                          Third level 2
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/header">
                          {' '}
                          Third level 3
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/header">
                          {' '}
                          Third level 4
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/header">
                          {' '}
                          Third level 5
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropend">
                    <a
                      href="/header"
                      className="dropdown-item dropdown-toggle"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                    >
                      Submenu Right
                    </a>
                    <ul className="dropdown-menu shadow">
                      <li>
                        <a className="dropdown-item" href="/header">
                          {' '}
                          Second level 1
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/header">
                          {' '}
                          Second level 2
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/header">
                          {' '}
                          Second level 3
                        </a>
                      </li>
                      <li className="dropend">
                        <a
                          href="/header"
                          className="dropdown-item dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          Let's go deeper!
                        </a>
                        <ul className="dropdown-menu dropdown-submenu shadow">
                          <li>
                            <a className="dropdown-item" href="/header">
                              {' '}
                              Third level 1
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="/header">
                              {' '}
                              Third level 2
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="/header">
                              {' '}
                              Third level 3
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="/header">
                              {' '}
                              Third level 4
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="/header">
                              {' '}
                              Third level 5
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/header">
                          {' '}
                          Third level 5
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/header">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/header">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown dropdown-mega position-static">
                <a
                  className="nav-link dropdown-toggle"
                  href="/header"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                >
                  Megamenu
                </a>
                <div className="dropdown-menu shadow">
                  <div className="mega-content px-4">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-12 col-sm-4 col-md-3 py-1">
                          <h5>Pages</h5>
                          <div className="list-group">
                            <a className="list-group-item" href="/header">
                              Accomodations
                            </a>
                            <a className="list-group-item" href="/header">
                              Terms & Conditions
                            </a>
                            <a className="list-group-item" href="/header">
                              Privacy
                            </a>
                          </div>
                        </div>
                        <div className="col-12 col-sm-4 col-md-3 py-1">
                          <h5>Card</h5>
                          <div className="card">
                            <img
                              src="img/banner-image.jpg"
                              className="img-fluid"
                              alt="banner"
                            />
                            <div className="card-body">
                              <p className="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-sm-4 col-md-3 py-1">
                          <h5>About CodeHim</h5>
                          <p>
                            <b>CodeHim</b> is one of the BEST developer websites
                            that provide web designers and developers with a
                            simple way to preview and download a variety of free
                            code & scripts.
                          </p>
                        </div>
                        <div className="col-12 col-sm-12 col-md-3 py-1">
                          <h5>Damn, so many</h5>
                          <div className="list-group">
                            <a className="list-group-item" href="/header">
                              Accomodations
                            </a>
                            <a className="list-group-item" href="/header">
                              Terms & Conditions
                            </a>
                            <a className="list-group-item" href="/header">
                              Privacy
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <form className="d-flex ms-auto">
              <div className="input-group">
                <input
                  className="form-control border-0 mr-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-primary border-0" type="submit">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default MegaMenu;
