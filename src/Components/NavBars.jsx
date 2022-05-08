import React from 'react';

function Navbars() {
  return (
    <div className="container px-4 py-5">
      <div className="row g-5 py-5">
        <div className="col-sm-12 col-lg-12">
          <h1>NavBars</h1>
          <nav className="navbar navbar-expand-lg navbar-light bg-light my-2">
            <div className="container-fluid">
              <a className="navbar-brand" href="/navbars">
                Navbar
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/navbars"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/navbars">
                      Link
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/navbars"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="/navbars">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/navbars">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="/navbars">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="/navbars">
                      Disabled
                    </a>
                  </li>
                </ul>
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>
          <nav className="navbar  navbar-expand-lg navbar-dark bg-dark my-2">
            <div className="container-fluid">
              <a className="navbar-brand" href="/navbars">
                Navbar
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/navbars"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/navbars">
                      Link
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/navbars"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="/navbars">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/navbars">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="/navbars">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="/navbars">
                      Disabled
                    </a>
                  </li>
                </ul>
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary my-2">
            <div className="container-fluid">
              <a className="navbar-brand" href="/navbars">
                Navbar
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/navbars"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/navbars">
                      Link
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/navbars"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="/navbars">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/navbars">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="/navbars">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="/navbars">
                      Disabled
                    </a>
                  </li>
                </ul>
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>
          <nav
            className="navbar  navbar-expand-lg navbar-light my-2"
            style={{ backgroundColor: '#e3f2fd;' }}
          >
            <div className="container-fluid">
              <a className="navbar-brand" href="/navbars">
                Navbar
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/navbars"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/navbars">
                      Link
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/navbars"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="/navbars">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/navbars">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="/navbars">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="/navbars">
                      Disabled
                    </a>
                  </li>
                </ul>
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>
          <h1>Navbar Offcanvas</h1>
          <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="/navbars">
                Offcanvas navbar
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="offcanvas offcanvas-end"
                tabIndex="-2"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                    Offcanvas
                  </h5>
                  <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  />
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="/navbars"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/navbars">
                        Link
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="/navbars"
                        id="offcanvasNavbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Dropdown
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="offcanvasNavbarDropdown"
                      >
                        <li>
                          <a className="dropdown-item" href="/navbars">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/navbars">
                            Another action
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="/navbars">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <form className="d-flex">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button className="btn btn-outline-success" type="submit">
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </nav>
          <h1>Navbar Scrolling</h1>
          <nav
            id="navbar-example2"
            className="navbar navbar-light bg-light sticky-top px-3"
          >
            <a className="navbar-brand" href="/navbars">
              Navbar
            </a>
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a className="nav-link" href="#scrollspyHeading1">
                  First
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#scrollspyHeading2">
                  Second
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="/navbars"
                  role="button"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#scrollspyHeading3">
                      Third
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#scrollspyHeading4">
                      Fourth
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#scrollspyHeading5">
                      Fifth
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <div
            data-bs-spy="scroll"
            data-bs-target="#navbar-example2"
            data-bs-offset="0"
            className="scrollspy-example"
            tabIndex="-1"
          >
            <h4 id="scrollspyHeading1">First heading</h4>
            <p>
              This is some placeholder content for the scrollspy page. Note that
              as you scroll down the page, the appropriate navigation link is
              highlighted. It's repeated throughout the component example. We
              keep adding some more example copy here to emphasize the scrolling
              and highlighting.
            </p>
            <h4 id="scrollspyHeading2">Second heading</h4>
            <p>
              This is some placeholder content for the scrollspy page. Note that
              as you scroll down the page, the appropriate navigation link is
              highlighted. It's repeated throughout the component example. We
              keep adding some more example copy here to emphasize the scrolling
              and highlighting.
            </p>
            <h4 id="scrollspyHeading3">Third heading</h4>
            <p>
              This is some placeholder content for the scrollspy page. Note that
              as you scroll down the page, the appropriate navigation link is
              highlighted. It's repeated throughout the component example. We
              keep adding some more example copy here to emphasize the scrolling
              and highlighting.
            </p>
            <h4 id="scrollspyHeading4">Fourth heading</h4>
            <p>
              This is some placeholder content for the scrollspy page. Note that
              as you scroll down the page, the appropriate navigation link is
              highlighted. It's repeated throughout the component example. We
              keep adding some more example copy here to emphasize the scrolling
              and highlighting.
            </p>
            <h4 id="scrollspyHeading5">Fifth heading</h4>
            <p>
              This is some placeholder content for the scrollspy page. Note that
              as you scroll down the page, the appropriate navigation link is
              highlighted. It's repeated throughout the component example. We
              keep adding some more example copy here to emphasize the scrolling
              and highlighting.
            </p>
          </div>
          <h1>Nested NavBar</h1>
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <div id="list-example" className="list-group">
                  <a
                    className="list-group-item list-group-item-action"
                    href="#list-item-1"
                  >
                    Item 1
                  </a>
                  <a
                    className="list-group-item list-group-item-action"
                    href="#list-item-2"
                  >
                    Item 2
                  </a>
                  <a
                    className="list-group-item list-group-item-action"
                    href="#list-item-3"
                  >
                    Item 3
                  </a>
                  <a
                    className="list-group-item list-group-item-action"
                    href="#list-item-4"
                  >
                    Item 4
                  </a>
                </div>
              </div>
              <div className="col-sm-9">
                <div
                  data-bs-spy="scroll"
                  data-bs-target="#list-example"
                  data-bs-offset="0"
                  className="scrollspy-example col-sm-9"
                  tabIndex="-1"
                >
                  <h4 id="list-item-1">Item 1</h4>
                  <p>
                    This is some placeholder content for the scrollspy page.
                    Note that as you scroll down the page, the appropriate
                    navigation link is highlighted. It's repeated throughout the
                    component example. We keep adding some more example copy
                    here to emphasize the scrolling and highlighting.
                  </p>
                  <h4 id="list-item-2">Item 2</h4>
                  <p>
                    This is some placeholder content for the scrollspy page.
                    Note that as you scroll down the page, the appropriate
                    navigation link is highlighted. It's repeated throughout the
                    component example. We keep adding some more example copy
                    here to emphasize the scrolling and highlighting.
                  </p>
                  <h4 id="list-item-3">Item 3</h4>
                  <p>
                    This is some placeholder content for the scrollspy page.
                    Note that as you scroll down the page, the appropriate
                    navigation link is highlighted. It's repeated throughout the
                    component example. We keep adding some more example copy
                    here to emphasize the scrolling and highlighting.
                  </p>
                  <h4 id="list-item-4">Item 4</h4>
                  <p>
                    This is some placeholder content for the scrollspy page.
                    Note that as you scroll down the page, the appropriate
                    navigation link is highlighted. It's repeated throughout the
                    component example. We keep adding some more example copy
                    here to emphasize the scrolling and highlighting.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h1>Nested NavBar</h1>
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <nav
                  id="navbar-example3"
                  className="navbar navbar-light bg-light flex-column align-items-stretch p-3"
                >
                  <a className="navbar-brand" href="/navbars">
                    Navbar
                  </a>
                  <nav className="nav nav-pills flex-column">
                    <a className="nav-link" href="#item-1">
                      Item 1
                    </a>
                    <nav className="nav nav-pills flex-column">
                      <a className="nav-link ms-3 my-1" href="#item-1-1">
                        Item 1-1
                      </a>
                      <a className="nav-link ms-3 my-1" href="#item-1-2">
                        Item 1-2
                      </a>
                    </nav>
                    <a className="nav-link" href="#item-2">
                      Item 2
                    </a>
                    <a className="nav-link" href="#item-3">
                      Item 3
                    </a>
                    <nav className="nav nav-pills flex-column">
                      <a className="nav-link ms-3 my-1" href="#item-3-1">
                        Item 3-1
                      </a>
                      <a className="nav-link ms-3 my-1" href="#item-3-2">
                        Item 3-2
                      </a>
                    </nav>
                  </nav>
                </nav>
              </div>
              <div className="col-sm-9">
                <div
                  data-bs-spy="scroll"
                  data-bs-target="#navbar-example3"
                  data-bs-offset="0"
                  tabIndex="-1"
                >
                  <h4 id="item-1">Item 1</h4>
                  <p>
                    This is some placeholder content for the scrollspy page.
                    Note that as you scroll down the page, the appropriate
                    navigation link is highlighted. It's repeated throughout the
                    component example. We keep adding some more example copy
                    here to emphasize the scrolling and highlighting.
                  </p>
                  <h5 id="item-1-1">Item 1-1</h5>
                  <p>
                    This is some placeholder content for the scrollspy page.
                    Note that as you scroll down the page, the appropriate
                    navigation link is highlighted. It's repeated throughout the
                    component example. We keep adding some more example copy
                    here to emphasize the scrolling and highlighting.
                  </p>
                  <h5 id="item-1-2">Item 1-2</h5>
                  <p>
                    This is some placeholder content for the scrollspy page.
                    Note that as you scroll down the page, the appropriate
                    navigation link is highlighted. It's repeated throughout the
                    component example. We keep adding some more example copy
                    here to emphasize the scrolling and highlighting.
                  </p>
                  <h4 id="item-2">Item 2</h4>
                  <p>
                    This is some placeholder content for the scrollspy page.
                    Note that as you scroll down the page, the appropriate
                    navigation link is highlighted. It's repeated throughout the
                    component example. We keep adding some more example copy
                    here to emphasize the scrolling and highlighting.
                  </p>
                  <h4 id="item-3">Item 3</h4>
                  <p>
                    This is some placeholder content for the scrollspy page.
                    Note that as you scroll down the page, the appropriate
                    navigation link is highlighted. It's repeated throughout the
                    component example. We keep adding some more example copy
                    here to emphasize the scrolling and highlighting.
                  </p>
                  <h5 id="item-3-1">Item 3-1</h5>
                  <p>
                    This is some placeholder content for the scrollspy page.
                    Note that as you scroll down the page, the appropriate
                    navigation link is highlighted. It's repeated throughout the
                    component example. We keep adding some more example copy
                    here to emphasize the scrolling and highlighting.
                  </p>
                  <h5 id="item-3-2">Item 3-2</h5>
                  <p>
                    This is some placeholder content for the scrollspy page.
                    Note that as you scroll down the page, the appropriate
                    navigation link is highlighted. It's repeated throughout the
                    component example. We keep adding some more example copy
                    here to emphasize the scrolling and highlighting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbars;
