import React, { useEffect } from 'react';
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
import { Link } from 'react-router-dom';
import Styles from './Dashboard.module.scss';

function DashboardNav() {
  useEffect(() => {
    document.body.classList.add('dashboard-body');

    return function cleanup() {
      document.body.classList.remove('body');
    };
  }, []);
  return (
    <div className={`${Styles.dashboardNav}`} id="navbar">
      <nav className={`${Styles.dashboardNavContainer}`}>
        <div>
          <Link
            to="/dashboard"
            className={`${Styles.dashboardNavLogo} ${Styles.dashboardNavLink}`}
          >
            <BiDisc className={`${Styles.dashboardNavIcon} bx bx-disc`} />
            <span className={`${Styles.dashboardNavIcon}`}>
              ReactStarterKit
            </span>
          </Link>

          <div className={`${Styles.dashboardNavList}`}>
            <div className={`${Styles.dashboardNavItems}`}>
              <h3 className={`${Styles.dashboardNavSubtitle}`}>Profile</h3>
              <Link
                to="/dashboard"
                className={`${Styles.dashboardNavLink} active`}
              >
                <BiHomeAlt
                  className={`${Styles.dashboardNavIcon} bx bx-home`}
                />
                <span className={`${Styles.dashboardNavName}`}>Home</span>
              </Link>

              <div className={`${Styles.dashboardNavDropdown}`}>
                <Link to="/dashboard" className={`${Styles.dashboardNavLink}`}>
                  <BiUser className={`${Styles.dashboardNavIcon} bx bx-user`} />
                  <span className={`${Styles.dashboardNavName}`}>Profile</span>
                  <BiChevronDown
                    className={`${Styles.dashboardNavIcon}
                        ${Styles.dashboardNavDropdownIcon} bx bx-chevron-down`}
                  />
                </Link>

                <div className={`${Styles.dashboardNavDropdownCollapse}`}>
                  <div className={`${Styles.dashboardNavDropdownContent}`}>
                    <Link
                      to="/profileedit"
                      className={`${Styles.dashboardNavDropdownItem}`}
                    >
                      Edit Profile
                    </Link>
                    <Link
                      to="/profilebilling"
                      className={`${Styles.dashboardNavDropdownItem}`}
                    >
                      Billing Details
                    </Link>
                    <Link
                      to="/dashboard"
                      className={`${Styles.dashboardNavDropdownItem}`}
                    >
                      Security
                    </Link>
                    <Link
                      to="/dashboard"
                      className={`${Styles.dashboardNavDropdownItem}`}
                    >
                      Notifications
                    </Link>
                  </div>
                </div>
              </div>

              <Link to="/dashboard" className={`${Styles.dashboardNavLink}`}>
                <BiMessageRounded
                  className={`${Styles.dashboardNavIcon} bx bx-message-rounded `}
                />
                <span className={`${Styles.dashboardNavName}`}>Messages</span>
              </Link>
            </div>

            <div className={`${Styles.dashboardNavItems}`}>
              <h3 className={`${Styles.dashboardNavSubtitle}`}>Profile</h3>
              <div className={`${Styles.dashboardNavDropdown}`}>
                <Link to="/dashboard" className={`${Styles.dashboardNavLink}`}>
                  <BiUser className={`${Styles.dashboardNavIcon} bx bx-user`} />
                  <span className={`${Styles.dashboardNavName}`}>Profile</span>
                  <BiChevronDown
                    className={`${Styles.dashboardNavIcon} bx
                        bx-chevron-down ${Styles.dashboardNavDropdownIcon}`}
                  />
                </Link>

                <div className={`${Styles.dashboardNavDropdownCollapse}`}>
                  <div className={`${Styles.dashboardNavDropdownContent}`}>
                    <Link
                      to="/dashboard"
                      className={`${Styles.dashboardNavDropdownItem}`}
                    >
                      Passwords
                    </Link>
                    <Link
                      to="/dashboard"
                      className={`${Styles.dashboardNavDropdownItem}`}
                    >
                      Mail
                    </Link>
                    <Link
                      to="/dashboard"
                      className={`${Styles.dashboardNavDropdownItem}`}
                    >
                      Accounts
                    </Link>
                  </div>
                </div>
              </div>

              <Link to="/dashboard" className={`${Styles.dashboardNavLink}`}>
                <BiCompass
                  className={`${Styles.dashboardNavIcon} bx bx-compass `}
                />
                <span className={`${Styles.dashboardNavName}`}>Explore</span>
              </Link>
              <Link to="/dashboard" className={`${Styles.dashboardNavLink}`}>
                <BiCompass
                  className={`${Styles.dashboardNavIcon} bx bx-compass `}
                />
                <span className={`${Styles.dashboardNavName}`}>Explore</span>
              </Link>
              <Link to="/dashboard" className={`${Styles.dashboardNavLink}`}>
                <BiBookmark
                  className={`${Styles.dashboardNavIcon} bx bx-bookmark`}
                />
                <span className={`${Styles.dashboardNavName}`}>Saved</span>
              </Link>
              <Link
                to="/dashboard"
                className={`${Styles.dashboardNavLink} ${Styles.dashboardNavLogout}`}
              >
                <BiLogOut
                  className={`${Styles.dashboardNavIcon} bx bx-log-out `}
                />
                <span className={`${Styles.dashboardNavName}`}>Log Out</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default DashboardNav;
