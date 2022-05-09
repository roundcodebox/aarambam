import React from 'react';
import { FaHome } from 'react-icons/fa';

function Sidebar() {
  return (
    <>
      <div className="col-sm-3 d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
        <a
          href="/sidebar"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg className="bi me-2" width="40" height="32">
            <use xlinkHref="#bootstrap" />
          </svg>
          <span className="fs-4">Sidebar</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="/sidebar" className="nav-link active" aria-current="page">
              <FaHome /> Home
            </a>
          </li>
          <li>
            <a href="/sidebar" className="nav-link text-white">
              <svg className="bi me-2" width="16" height="16">
                <use xlinkHref="#speedometer2" />
              </svg>
              Dashboard
            </a>
          </li>
          <li>
            <a href="/sidebar" className="nav-link text-white">
              <svg className="bi me-2" width="16" height="16">
                <use xlinkHref="#table" />
              </svg>
              Orders
            </a>
          </li>
          <li>
            <a href="/sidebar" className="nav-link text-white">
              <svg className="bi me-2" width="16" height="16">
                <use xlinkHref="#grid" />
              </svg>
              Products
            </a>
          </li>
          <li>
            <a href="/sidebar" className="nav-link text-white">
              <svg className="bi me-2" width="16" height="16">
                <use xlinkHref="#people-circle" />
              </svg>
              Customers
            </a>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a
            href="/sidebar"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>mdo</strong>
          </a>
          <ul
            className="dropdown-menu dropdown-menu-dark text-small shadow"
            aria-labelledby="dropdownUser1"
          >
            <li>
              <a className="dropdown-item" href="/sidebar">
                New project...
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/sidebar">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/sidebar">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="/sidebar">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="col-sm-3 d-flex flex-column flex-shrink-0 p-3 bg-light"
        style={{ width: '280px' }}
      >
        <a
          href="/sidebar"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <svg className="bi me-2" width="40" height="32">
            <use xlinkHref="#bootstrap" />
          </svg>
          <span className="fs-4">Sidebar</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="/sidebar" className="nav-link active" aria-current="page">
              <svg className="bi me-2" width="16" height="16">
                <use xlinkHref="#home" />
              </svg>
              <FaHome /> Home
            </a>
          </li>
          <li>
            <a href="/sidebar" className="nav-link link-dark">
              <svg className="bi me-2" width="16" height="16">
                <use xlinkHref="#speedometer2" />
              </svg>
              Dashboard
            </a>
          </li>
          <li>
            <a href="/sidebar" className="nav-link link-dark">
              <svg className="bi me-2" width="16" height="16">
                <use xlinkHref="#table" />
              </svg>
              Orders
            </a>
          </li>
          <li>
            <a href="/sidebar" className="nav-link link-dark">
              <svg className="bi me-2" width="16" height="16">
                <use xlinkHref="#grid" />
              </svg>
              Products
            </a>
          </li>
          <li>
            <a href="/sidebar" className="nav-link link-dark">
              <svg className="bi me-2" width="16" height="16">
                <use xlinkHref="#people-circle" />
              </svg>
              Customers
            </a>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a
            href="/sidebar"
            className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
            id="dropdownUser2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>mdo</strong>
          </a>
          <ul
            className="dropdown-menu text-small shadow"
            aria-labelledby="dropdownUser2"
          >
            <li>
              <a className="dropdown-item" href="/sidebar">
                New project...
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/sidebar">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/sidebar">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="/sidebar">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="col-sm-3 d-flex flex-column flex-shrink-0 bg-light"
        style={{ width: '4.5rem' }}
      >
        <a
          href="/sidebar"
          className="d-block p-3 link-dark text-decoration-none"
          title="Icon-only"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
        >
          <svg className="bi" width="40" height="32">
            <use xlinkHref="#bootstrap" />
          </svg>
          <span className="visually-hidden">Icon-only</span>
        </a>
        <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
          <li className="nav-item">
            <a
              href="/sidebar"
              className="nav-link active py-3 border-bottom"
              aria-current="page"
              title="Home"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
            >
              <FaHome />
            </a>
          </li>
          <li>
            <a
              href="/sidebar"
              className="nav-link py-3 border-bottom"
              title="Dashboard"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
            >
              <svg
                className="bi"
                width="24"
                height="24"
                role="img"
                aria-label="Dashboard"
              >
                <use xlinkHref="#speedometer2" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="/sidebar"
              className="nav-link py-3 border-bottom"
              title="Orders"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
            >
              <svg
                className="bi"
                width="24"
                height="24"
                role="img"
                aria-label="Orders"
              >
                <use xlinkHref="#table" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="/sidebar"
              className="nav-link py-3 border-bottom"
              title="Products"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
            >
              <svg
                className="bi"
                width="24"
                height="24"
                role="img"
                aria-label="Products"
              >
                <use xlinkHref="#grid" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="/sidebar"
              className="nav-link py-3 border-bottom"
              title="Customers"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
            >
              <svg
                className="bi"
                width="24"
                height="24"
                role="img"
                aria-label="Customers"
              >
                <use xlinkHref="#people-circle" />
              </svg>
            </a>
          </li>
        </ul>
        <div className="dropdown border-top">
          <a
            href="/sidebar"
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
              <a className="dropdown-item" href="/sidebar">
                New project...
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/sidebar">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/sidebar">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="/sidebar">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="col-sm-3 flex-shrink-0 p-3 bg-white"
        style={{ width: '280px' }}
      >
        <a
          href="/sidebar"
          className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom"
        >
          <svg className="bi me-2" width="30" height="24">
            <use xlinkHref="#bootstrap" />
          </svg>
          <span className="fs-5 fw-semibold">Collapsible</span>
        </a>
        <ul className="list-unstyled ps-0">
          <li className="mb-1">
            <button
              type="button"
              className="btn btn-toggle align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#home-collapse"
              aria-expanded="true"
            >
              <FaHome /> Home
            </button>
            <div className="collapse show" id="home-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a href="/sidebar" className="link-dark rounded">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="/sidebar" className="link-dark rounded">
                    Updates
                  </a>
                </li>
                <li>
                  <a href="/sidebar" className="link-dark rounded">
                    Reports
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="mb-1">
            <button
              type="button"
              className="btn btn-toggle align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#dashboard-collapse"
              aria-expanded="false"
            >
              Dashboard
            </button>
            <div className="collapse" id="dashboard-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a href="/sidebar" className="link-dark rounded">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="/sidebar" className="link-dark rounded">
                    Weekly
                  </a>
                </li>
                <li>
                  <a href="/sidebar" className="link-dark rounded">
                    Monthly
                  </a>
                </li>
                <li>
                  <a href="/sidebar" className="link-dark rounded">
                    Annually
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="mb-1">
            <button
              type="button"
              className="btn btn-toggle align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#orders-collapse"
              aria-expanded="false"
            >
              Orders
            </button>
            <div className="collapse" id="orders-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a href="/sidebar" className="link-dark rounded">
                    New
                  </a>
                </li>
                <li>
                  <a href="/sidebar" className="link-dark rounded">
                    Processed
                  </a>
                </li>
                <li>
                  <a href="/sidebar" className="link-dark rounded">
                    Shipped
                  </a>
                </li>
                <li>
                  <a href="/sidebar" className="link-dark rounded">
                    Returned
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="border-top my-3" />
          <li className="mb-1">
            <button
              type="button"
              className="btn btn-toggle align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#account-collapse"
              aria-expanded="false"
            >
              Account
            </button>
            <div className="collapse" id="account-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a href="/sidebar" className="link-dark rounded">
                    New...
                  </a>
                </li>
                <li>
                  <a href="/sidebar" className="link-dark rounded">
                    Profile
                  </a>
                </li>
                <li>
                  <a href="/sidebar" className="link-dark rounded">
                    Settings
                  </a>
                </li>
                <li>
                  <a href="/sidebar" className="link-dark rounded">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <div
        className="col-sm-3 d-flex flex-column align-items-stretch flex-shrink-0 bg-white"
        style={{ width: '380px' }}
      >
        <a
          href="/sidebar"
          className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom"
        >
          <svg className="bi me-2" width="30" height="24">
            <use xlinkHref="#bootstrap" />
          </svg>
          <span className="fs-5 fw-semibold">List group</span>
        </a>
        <div className="list-group list-group-flush border-bottom scrollarea">
          <a
            href="/sidebar"
            className="list-group-item list-group-item-action active py-3 lh-tight"
            aria-current="true"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small>Wed</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </a>
          <a
            href="/sidebar"
            className="list-group-item list-group-item-action py-3 lh-tight"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-muted">Tues</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </a>
          <a
            href="/sidebar"
            className="list-group-item list-group-item-action py-3 lh-tight"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-muted">Mon</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </a>

          <a
            href="/sidebar"
            className="list-group-item list-group-item-action py-3 lh-tight"
            aria-current="true"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-muted">Wed</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </a>
          <a
            href="/sidebar"
            className="list-group-item list-group-item-action py-3 lh-tight"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-muted">Tues</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </a>
          <a
            href="/sidebar"
            className="list-group-item list-group-item-action py-3 lh-tight"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-muted">Mon</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </a>
          <a
            href="/sidebar"
            className="list-group-item list-group-item-action py-3 lh-tight"
            aria-current="true"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-muted">Wed</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </a>
          <a
            href="/sidebar"
            className="list-group-item list-group-item-action py-3 lh-tight"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-muted">Tues</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </a>
          <a
            href="/sidebar"
            className="list-group-item list-group-item-action py-3 lh-tight"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-muted">Mon</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </a>
          <a
            href="/sidebar"
            className="list-group-item list-group-item-action py-3 lh-tight"
            aria-current="true"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-muted">Wed</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </a>
          <a
            href="/sidebar"
            className="list-group-item list-group-item-action py-3 lh-tight"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-muted">Tues</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </a>
          <a
            href="/sidebar"
            className="list-group-item list-group-item-action py-3 lh-tight"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-muted">Mon</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
export default Sidebar;
