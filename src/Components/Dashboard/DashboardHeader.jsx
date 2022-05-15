import React, { useEffect } from 'react';
import { BiSearch, BiMenu } from 'react-icons/bi';
import Styles from './Dashboard.module.scss';

function DashboardHeader() {
  useEffect(() => {
    document.body.classList.add('dashboard-body');

    return function cleanup() {
      document.body.classList.remove('body');
    };
  }, []);
  return (
    <header className={`${Styles.dashboardHeader}`}>
      <div className={`${Styles.dashboardHeaderContainer}`}>
        {/* <img
                src="assets/images/perfil.jpg"
                alt=""
                className="dashboardHeaderImg"
              /> */}
        <a href="/dashboard" className={`${Styles.dashboardHeaderLogo}`}>
          React Starter Kit
        </a>
        <div className={`${Styles.dashboardHeaderSearch}`}>
          <input
            type="search"
            placeholder="Search"
            className={`${Styles.dashboardHeaderInput}`}
          />
          <BiSearch className={`${Styles.dashboardHeaderIcon} bx bx-search`} />
        </div>

        <div className={`${Styles.dashboardHeaderToggle}`}>
          <BiMenu className="bx bx-menu" id="header-toggle" />
        </div>
        <div className={`${Styles.dashboardHeaderContainer} dropdown text-end`}>
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
              className={`${Styles.dashboardHeaderImg} rounded-circle`}
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
