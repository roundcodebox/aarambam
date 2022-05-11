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
  BiDisc,
} from 'react-icons/bi';

function DashboardNav() {
  return (
    <div className="dashboard-nav" id="navbar">
      <nav className="dashboard-nav__container">
        <div>
          <a
            href="/dashboard"
            className="dashboard-nav__link dashboard-nav__logo"
          >
            <BiDisc className="bx bxs-disc dashboard-nav__icon" />
            <span className="dashboard-nav__logo-name">ReactStarterKit</span>
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
              <a href="/dashboard" className="dashboard-nav__link nav__logout">
                <BiLogOut className="bx bx-log-out dashboard-nav__icon" />
                <span className="dashboard-nav__name">Log Out</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default DashboardNav;
