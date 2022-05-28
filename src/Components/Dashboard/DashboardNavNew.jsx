import React from 'react';
import {
  FaHome,
  FaChalkboard,
  FaRegBookmark,
  FaCog,
  FaFirstOrder,
} from 'react-icons/fa';
import './DashboardNavNew.scss';

function DashboardNavNew() {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 bg-light vh-100"
      style={{ width: '100px' }}
    >
      <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
        <li className="nav-item">
          <a href="#/" className="nav-link active py-3 border-bottom">
            <FaHome className="fa fa-home" />
            <small>Home</small>
          </a>
        </li>
        <li>
          <a href="#/" className="nav-link py-3 border-bottom">
            <FaChalkboard className="fa fa-dashboard" />
            <small>Dashboard</small>
          </a>
        </li>
        <li>
          <a href="#/" className="nav-link py-3 border-bottom">
            <FaFirstOrder className="fa fa-first-order" />{' '}
            <small>My Orders</small>
          </a>
        </li>
        <li>
          <a href="#/" className="nav-link py-3 border-bottom">
            <FaCog className="fa fa-cog" /> <small>Settings</small>
          </a>
        </li>
        <li>
          <a href="#/" className="nav-link py-3 border-bottom">
            <FaRegBookmark className="fa fa-bookmark" /> <small>Bookmark</small>
          </a>
        </li>
      </ul>
      <div className="dropdown border-top">
        <a
          href="#/"
          className="d-flex
          align-items-center
          justify-content-center
          p-3
          link-dark
          text-decoration-none
          dropdown-toggle"
          id="dropdownUser3"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt="mdo"
            width="24"
            height="24"
            className="rounded-circle"
          />
        </a>
        <ul
          className="dropdown-menu text-small shadow"
          aria-labelledby="dropdownUser3"
        >
          <li>
            <a className="dropdown-item" href="/">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="/">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DashboardNavNew;
