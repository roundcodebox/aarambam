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
          <a
            href="/dashboard"
            className={`${Styles.dashboardNavLogo} ${Styles.dashboardNavLink}`}
          >
            <BiDisc className={`${Styles.dashboardNavIcon} bx bx-disc`} />
            <span className={`${Styles.dashboardNavIcon}`}>
              ReactStarterKit
            </span>
          </a>

          <div className={`${Styles.dashboardNavList}`}>
            <div className={`${Styles.dashboardNavItems}`}>
              <h3 className={`${Styles.dashboardNavSubtitle}`}>Profile</h3>
              <a
                href="/dashboard"
                className={`${Styles.dashboardNavLink} active`}
              >
                <BiHomeAlt
                  className={`${Styles.dashboardNavIcon} bx bx-home`}
                />
                <span className={`${Styles.dashboardNavName}`}>Home</span>
              </a>

              <div className={`${Styles.dashboardNavDropdown}`}>
                <a href="/dashboard" className={`${Styles.dashboardNavLink}`}>
                  <BiUser className={`${Styles.dashboardNavIcon} bx bx-user`} />
                  <span className={`${Styles.dashboardNavName}`}>Profile</span>
                  <BiChevronDown
                    className={`${Styles.dashboardNavIcon}
                        ${Styles.dashboardNavDropdownIcon} bx bx-chevron-down`}
                  />
                </a>

                <div className={`${Styles.dashboardNavDropdownCollapse}`}>
                  <div className={`${Styles.dashboardNavDropdownContent}`}>
                    <a
                      href="/dashboard"
                      className={`${Styles.dashboardNavDropdownItem}`}
                    >
                      Passwords
                    </a>
                    <a
                      href="/dashboard"
                      className={`${Styles.dashboardNavDropdownItem}`}
                    >
                      Mail
                    </a>
                    <a
                      href="/dashboard"
                      className={`${Styles.dashboardNavDropdownItem}`}
                    >
                      Accounts
                    </a>
                  </div>
                </div>
              </div>

              <a href="/dashboard" className={`${Styles.dashboardNavLink}`}>
                <BiMessageRounded
                  className={`${Styles.dashboardNavIcon} bx bx-message-rounded `}
                />
                <span className={`${Styles.dashboardNavName}`}>Messages</span>
              </a>
            </div>

            <div className={`${Styles.dashboardNavItems}`}>
              <h3 className={`${Styles.dashboardNavSubtitle}`}>Profile</h3>
              <div className={`${Styles.dashboardNavDropdown}`}>
                <a href="/dashboard" className={`${Styles.dashboardNavLink}`}>
                  <BiUser className={`${Styles.dashboardNavIcon} bx bx-user`} />
                  <span className={`${Styles.dashboardNavName}`}>Profile</span>
                  <BiChevronDown
                    className={`${Styles.dashboardNavIcon} bx
                        bx-chevron-down ${Styles.dashboardNavDropdownIcon}`}
                  />
                </a>

                <div className={`${Styles.dashboardNavDropdownCollapse}`}>
                  <div className={`${Styles.dashboardNavDropdownContent}`}>
                    <a
                      href="/dashboard"
                      className={`${Styles.dashboardNavDropdownItem}`}
                    >
                      Passwords
                    </a>
                    <a
                      href="/dashboard"
                      className={`${Styles.dashboardNavDropdownItem}`}
                    >
                      Mail
                    </a>
                    <a
                      href="/dashboard"
                      className={`${Styles.dashboardNavDropdownItem}`}
                    >
                      Accounts
                    </a>
                  </div>
                </div>
              </div>

              <a href="/dashboard" className={`${Styles.dashboardNavLink}`}>
                <BiCompass
                  className={`${Styles.dashboardNavIcon} bx bx-compass `}
                />
                <span className={`${Styles.dashboardNavName}`}>Explore</span>
              </a>
              <a href="/dashboard" className={`${Styles.dashboardNavLink}`}>
                <BiCompass
                  className={`${Styles.dashboardNavIcon} bx bx-compass `}
                />
                <span className={`${Styles.dashboardNavName}`}>Explore</span>
              </a>
              <a href="/dashboard" className={`${Styles.dashboardNavLink}`}>
                <BiBookmark
                  className={`${Styles.dashboardNavIcon} bx bx-bookmark`}
                />
                <span className={`${Styles.dashboardNavName}`}>Saved</span>
              </a>
              <a
                href="/dashboard"
                className={`${Styles.dashboardNavLink} ${Styles.dashboardNavLogout}`}
              >
                <BiLogOut
                  className={`${Styles.dashboardNavIcon} bx bx-log-out `}
                />
                <span className={`${Styles.dashboardNavName}`}>Log Out</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default DashboardNav;
