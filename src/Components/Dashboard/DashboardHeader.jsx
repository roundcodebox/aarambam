import React from 'react';
import { BiSearch, BiMenu } from 'react-icons/bi';
import './Dashboard.scss';

function DashboardHeader() {
  return (
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
  );
}

export default DashboardHeader;
