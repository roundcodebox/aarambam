import React, { useEffect } from 'react';
import './Dashboard.scss';
import {
  BiHomeAlt,
  BiUser,
  BiChevronDown,
  BiMessageRounded,
  BiCompass,
  BiBookmark,
  BiLogOut,
  BiSearch,
  BiMenu,
  BiDisc,
} from 'react-icons/bi';

function Dashboard() {
  useEffect(() => {
    document.body.classList.add('dashboard-body');

    return function cleanup() {
      document.body.classList.remove('body');
    };
  }, []);
  return (
    <div className="container px-4 py-1">
      <div className="row g-5 py-1">
        <div className="col-sm-12 col-lg-12">
          <header className="dashboard-header">
            <div className="dashboard-header__container">
              {/* <img
                src="assets/images/perfil.jpg"
                alt=""
                className="dashboard-header__img"
              /> */}
              <a href="/dashboard" className="header__logo">
                React Starter Kit
              </a>
              <div className="dashboard-header__search">
                <input
                  type="search"
                  placeholder="Search"
                  className="dashboard-header__input"
                />
                <BiSearch className="bx bx-search dashboard-header__icon" />
              </div>

              <div className="dashboard-header__toggle">
                <BiMenu className="bx bx-menu" id="header-toggle" />
              </div>
              <div className="dropdown text-end dashboard-header__container">
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
                    className="rounded-circle dashboard-header__img"
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
          </header>

          <div className="dashboard-nav" id="navbar">
            <nav className="dashboard-nav__container">
              <div>
                <a
                  href="/dashboard"
                  className="dashboard-nav__link dashboard-nav__logo"
                >
                  <BiDisc className="bx bxs-disc dashboard-nav__icon" />
                  <span className="dashboard-nav__logo-name">
                    ReactStarterKit
                  </span>
                </a>

                <div className="dashboard-nav__list">
                  <div className="dashboard-nav__items">
                    <h3 className="dashboard-nav__subtitle">Profile</h3>

                    <a href="/dashboard" className="dashboard-nav__link active">
                      <BiHomeAlt className="bx bx-home dashboard-nav__icon" />
                      <span className="dashboard-nav__name">Home</span>
                    </a>

                    <div className="dashboard-nav__dropdown">
                      <a href="/dashboard" className="dashboard-nav__link">
                        <BiUser className="bx bx-user dashboard-nav__icon" />
                        <span className="dashboard-nav__name">Profile</span>
                        <BiChevronDown
                          className="bx
                        bx-chevron-down
                        dashboard-nav__icon
                        dashboard-nav__dropdown-icon"
                        />
                      </a>

                      <div className="dashboard-nav__dropdown-collapse">
                        <div className="dashboard-nav__dropdown-content">
                          <a
                            href="/dashboard"
                            className="dashboard-nav__dropdown-item"
                          >
                            Passwords
                          </a>
                          <a
                            href="/dashboard"
                            className="dashboard-nav__dropdown-item"
                          >
                            Mail
                          </a>
                          <a
                            href="/dashboard"
                            className="dashboard-nav__dropdown-item"
                          >
                            Accounts
                          </a>
                        </div>
                      </div>
                    </div>

                    <a href="/dashboard" className="dashboard-nav__link">
                      <BiMessageRounded className="bx bx-message-rounded dashboard-nav__icon" />
                      <span className="dashboard-nav__name">Messages</span>
                    </a>
                  </div>

                  <div className="dashboard-nav__items">
                    <h3 className="dashboard-nav__subtitle">Profile</h3>
                    <div className="dashboard-nav__dropdown">
                      <a href="/dashboard" className="dashboard-nav__link">
                        <BiUser className="bx bx-user dashboard-nav__icon" />
                        <span className="dashboard-nav__name">Profile</span>
                        <BiChevronDown
                          className="bx
                        bx-chevron-down
                        dashboard-nav__icon
                        dashboard-nav__dropdown-icon"
                        />
                      </a>

                      <div className="dashboard-nav__dropdown-collapse">
                        <div className="dashboard-nav__dropdown-content">
                          <a
                            href="/dashboard"
                            className="dashboard-nav__dropdown-item"
                          >
                            Passwords
                          </a>
                          <a
                            href="/dashboard"
                            className="dashboard-nav__dropdown-item"
                          >
                            Mail
                          </a>
                          <a
                            href="/dashboard"
                            className="dashboard-nav__dropdown-item"
                          >
                            Accounts
                          </a>
                        </div>
                      </div>
                    </div>

                    <a href="/dashboard" className="dashboard-nav__link">
                      <BiCompass className="bx bx-compass dashboard-nav__icon" />
                      <span className="dashboard-nav__name">Explore</span>
                    </a>
                    <a href="/dashboard" className="dashboard-nav__link">
                      <BiCompass className="bx bx-compass dashboard-nav__icon" />
                      <span className="dashboard-nav__name">Explore</span>
                    </a>
                    <a href="/dashboard" className="dashboard-nav__link">
                      <BiBookmark className="bx bx-bookmark dashboard-nav__icon" />
                      <span className="dashboard-nav__name">Saved</span>
                    </a>
                    <a
                      href="/dashboard"
                      className="dashboard-nav__link nav__logout"
                    >
                      <BiLogOut className="bx bx-log-out dashboard-nav__icon" />
                      <span className="dashboard-nav__name">Log Out</span>
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          <main>
            <section>
              <h4>Dashboard</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt vel illum fuga unde cum, voluptates magni molestias
                eveniet culpa autem ut, totam veniam, suscipit tempore ullam
                pariatur est at asperiores?
              </p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
