import React, { useEffect } from 'react';
import Styles from './ContactInfo.module.scss';
import DashboardHeader from '../Dashboard/DashboardHeader';
import DashboardNav from '../Dashboard/DashboardNav';

function ContactInfo() {
  useEffect(() => {
    document.body.classList.add('dashboard-body');

    return function cleanup() {
      document.body.classList.remove('body');
    };
  }, []);
  return (
    <>
      <DashboardHeader />
      <DashboardNav />
      <div className="container px-4 py-5 bootstrap snippets bootdey">
        <div className="row g-5 py-5">
          <div className="col-sm-4 col-md-4">
            <div className={`${Styles.widget} ${Styles.lazurbg} ${Styles.pxl}`}>
              <h2>Janet Smith</h2>
              <ul className={`list-inline ${Styles.mtmd}`}>
                <li>
                  <span className="fa fa-envelope m-r-xs" />
                  <li className="list-inline-item">Email: mike@mail.com</li>
                </li>
                <li>
                  <span className="fa fa-home m-r-xs" />
                  <li className="list-inline-item">
                    Address: Street 200, Avenue 10
                  </li>
                </li>
                <li>
                  <span className="fa fa-phone m-r-xs" />
                  <li className="list-inline-item">Contact: (+121) 678 3462</li>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className={`${Styles.widget} ${Styles.redbg} ${Styles.pxl}`}>
              <h2>Deyson Bejarano</h2>
              <ul className={`list-inline ${Styles.mtmd}`}>
                <li>
                  <span className="fa fa-envelope m-r-xs" />
                  <li className="list-inline-item">Email: deyson@mail.com</li>
                </li>
                <li>
                  <span className="fa fa-home m-r-xs" />
                  <li className="list-inline-item">
                    Address: Street 200, Avenue 10
                  </li>
                </li>
                <li>
                  <span className="fa fa-phone m-r-xs" />
                  <li className="list-inline-item">Contact: (+121) 678 3462</li>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className={`${Styles.widget} ${Styles.navybg} ${Styles.pxl}`}>
              <h2>Briant Mckenly</h2>
              <ul className={`list-unstyled ${Styles.mtmd}`}>
                <li>
                  <span className="fa fa-envelope m-r-xs" />
                  <li className="list-inline-item">Email: bmkenly@mail.com</li>
                </li>
                <li>
                  <span className="fa fa-home m-r-xs" />
                  <li className="list-inline-item">
                    Address: Street 200, Avenue 10
                  </li>
                </li>
                <li>
                  <span className="fa fa-phone m-r-xs" />
                  <li className="list-inline-item">Contact: (+121) 678 3462</li>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div
              className={`${Styles.widget} ${Styles.yellowbg} ${Styles.pxl}`}
            >
              <h2>Carlos simptho</h2>
              <ul className={`list-unstyled ${Styles.mtmd}`}>
                <li>
                  <span className="fa fa-envelope m-r-xs" />
                  <li className="list-inline-item">Email: clossimp@mail.com</li>
                </li>
                <li>
                  <span className="fa fa-home m-r-xs" />
                  <li className="list-inline-item">
                    Address: Street 200, Avenue 10
                  </li>
                </li>
                <li>
                  <span className="fa fa-phone m-r-xs" />
                  <li className="list-inline-item">Contact: (+121) 678 3462</li>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactInfo;
