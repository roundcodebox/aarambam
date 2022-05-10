import React from 'react';
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
  return (
    <div className="container px-4 py-1">
      <div className="row g-5 py-1">
        <div className="col-sm-12 col-lg-12">
          <header className="dashboard-header">
            <div className="header__container">
              <img
                src="assets/images/perfil.jpg"
                alt=""
                className="header__img"
              />

              <a href="/dashboard" className="header__logo">
                React Starter Kit
              </a>

              <div className="header__search">
                <input
                  type="search"
                  placeholder="Search"
                  className="header__input"
                />
                <BiSearch className="bx bx-search header__icon" />
              </div>

              <div className="dashboard-header__toggle">
                <BiMenu className="bx bx-menu" id="header-toggle" />
              </div>
            </div>
          </header>

          <div className="dashboard-nav" id="navbar">
            <nav className="nav__container">
              <div>
                <a href="/dashboard" className="nav__link nav__logo">
                  <BiDisc className="bx bxs-disc nav__icon" />
                  <span className="nav__logo-name">ReactStarterKit</span>
                </a>

                <div className="nav__list">
                  <div className="dashboard-nav__items">
                    <h3 className="nav__subtitle">Profile</h3>

                    <a href="/dashboard" className="nav__link active">
                      <BiHomeAlt className="bx bx-home nav__icon" />
                      <span className="nav__name">Home</span>
                    </a>

                    <div className="nav__dropdown">
                      <a href="/dashboard" className="nav__link">
                        <BiUser className="bx bx-user nav__icon" />
                        <span className="nav__name">Profile</span>
                        <BiChevronDown className="bx bx-chevron-down nav__icon nav__dropdown-icon" />
                      </a>

                      <div className="nav__dropdown-collapse">
                        <div className="nav__dropdown-content">
                          <a href="/dashboard" className="nav__dropdown-item">
                            Passwords
                          </a>
                          <a href="/dashboard" className="nav__dropdown-item">
                            Mail
                          </a>
                          <a href="/dashboard" className="nav__dropdown-item">
                            Accounts
                          </a>
                        </div>
                      </div>
                    </div>

                    <a href="/dashboard" className="nav__link">
                      <BiMessageRounded className="bx bx-message-rounded nav__icon" />
                      <span className="nav__name">Messages</span>
                    </a>
                  </div>

                  <div className="dashboard-nav__items">
                    <h3 className="nav__subtitle">Profile1</h3>
                    <div className="nav__dropdown">
                      <a href="/dashboard" className="nav__link">
                        <BiUser className="bx bx-user nav__icon" />
                        <span className="nav__name">Profile</span>
                        <BiChevronDown className="bx bx-chevron-down nav__icon nav__dropdown-icon" />
                      </a>

                      <div className="nav__dropdown-collapse">
                        <div className="nav__dropdown-content">
                          <a href="/dashboard" className="nav__dropdown-item">
                            Passwords
                          </a>
                          <a href="/dashboard" className="nav__dropdown-item">
                            Mail
                          </a>
                          <a href="/dashboard" className="nav__dropdown-item">
                            Accounts
                          </a>
                        </div>
                      </div>
                    </div>

                    <a href="/dashboard" className="nav__link">
                      <BiCompass className="bx bx-compass nav__icon" />
                      <span className="nav__name">Explore</span>
                    </a>
                    <a href="/dashboard" className="nav__link">
                      <BiCompass className="bx bx-compass nav__icon" />
                      <span className="nav__name">Explore</span>
                    </a>
                    <a href="/dashboard" className="nav__link">
                      <BiBookmark className="bx bx-bookmark nav__icon" />
                      <span className="nav__name">Saved</span>
                    </a>
                    <a href="/dashboard" className="nav__link nav__logout">
                      <BiLogOut className="bx bx-log-out nav__icon" />
                      <span className="nav__name">Log Out</span>
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          <main>
            <section>
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
