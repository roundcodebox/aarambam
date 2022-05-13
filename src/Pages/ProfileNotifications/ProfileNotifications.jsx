import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProfileNotifications.scss';
import DashboardHeader from '../../Components/Dashboard/DashboardHeader';
import DashboardNav from '../../Components/Dashboard/DashboardNav';

function ProfileNotifications() {
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
      <div className="container-xl px-4 mt-4 py-5">
        <nav className="nav nav-borders">
          <Link className="nav-link ms-0" to="/profileedit">
            Profile
          </Link>
          <Link className="nav-link ms-0" to="/profilebilling">
            Billing
          </Link>
          <Link className="nav-link ms-0" to="/profilesecurity">
            Security
          </Link>
          <Link className="nav-link active ms-0" to="/profilenotifications">
            Notifications
          </Link>
        </nav>
        <hr className="mt-0 mb-4" />
        <div className="row">
          <div className="col-lg-8">
            <div className="card card-header-actions mb-4">
              <div className="card-header">
                Email Notifications
                <div className="form-check form-switch">
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckChecked"
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckChecked"
                      defaultChecked="true"
                    />
                  </label>
                </div>
              </div>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label
                      className="small mb-1 col-sm-12"
                      htmlFor="inputNotificationEmail"
                    >
                      Default notification email
                      <input
                        className="form-control"
                        id="inputNotificationEmail"
                        type="email"
                        defaultValue="name@example.com"
                        readOnly
                      />
                    </label>
                  </div>
                  <div className="mb-0">
                    <p className="small mb-2">
                      Choose which types of email updates you receive
                    </p>
                    <div className="form-check mb-2">
                      <label
                        className="form-check-label"
                        htmlFor="checkAccountChanges"
                      >
                        Changes made to your account
                        <input
                          className="form-check-input"
                          id="checkAccountChanges"
                          type="checkbox"
                          defaultChecked="true"
                        />
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <label
                        className="form-check-label"
                        htmlFor="checkAccountGroups"
                      >
                        Changes are made to groups you're part of
                        <input
                          className="form-check-input"
                          id="checkAccountGroups"
                          type="checkbox"
                          defaultChecked="true"
                        />
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <label
                        className="form-check-label"
                        htmlFor="checkProductUpdates"
                      >
                        Product updates for products you've purchased or starred
                        <input
                          className="form-check-input"
                          id="checkProductUpdates"
                          type="checkbox"
                          defaultChecked="true"
                        />
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <label
                        className="form-check-label"
                        htmlFor="checkProductNew"
                      >
                        Information on new products and services
                        <input
                          className="form-check-input"
                          id="checkProductNew"
                          type="checkbox"
                          defaultChecked="true"
                        />
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <label
                        className="form-check-label"
                        htmlFor="checkPromotional"
                      >
                        Marketing and promotional offers
                        <input
                          className="form-check-input"
                          id="checkPromotional"
                          type="checkbox"
                        />
                      </label>
                    </div>
                    <div className="form-check">
                      <label
                        className="form-check-label"
                        htmlFor="checkSecurity"
                      >
                        Security alerts
                        <input
                          className="form-check-input"
                          id="checkSecurity"
                          type="checkbox"
                          defaultChecked="true"
                          disabled
                          readOnly
                        />
                      </label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="card card-header-actions mb-4">
              <div className="card-header">
                Push Notifications
                <div className="form-check form-switch">
                  <label className="form-check-label" htmlFor="smsToggleSwitch">
                    <input
                      className="form-check-input"
                      id="smsToggleSwitch"
                      type="checkbox"
                      defaultChecked="true"
                    />
                  </label>
                </div>
              </div>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label
                      className="small mb-1 col-sm-12"
                      htmlFor="inputNotificationSms"
                    >
                      Default SMS number
                      <input
                        className="form-control"
                        id="inputNotificationSms"
                        type="tel"
                        defaultValue="123-456-7890"
                        readOnly
                      />
                    </label>
                  </div>
                  <div className="mb-0">
                    <p className="small mb-2">
                      Choose which types of push notifications you receive
                    </p>
                    <div className="form-check mb-2">
                      <label
                        className="form-check-label"
                        htmlFor="checkSmsComment"
                      >
                        Someone comments on your post
                        <input
                          className="form-check-input"
                          id="checkSmsComment"
                          type="checkbox"
                          defaultChecked="true"
                        />
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <label
                        className="form-check-label"
                        htmlFor="checkSmsShare"
                      >
                        Someone shares your post
                        <input
                          className="form-check-input"
                          id="checkSmsShare"
                          type="checkbox"
                        />
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <label
                        className="form-check-label"
                        htmlFor="checkSmsFollow"
                      >
                        <input
                          className="form-check-input"
                          id="checkSmsFollow"
                          type="checkbox"
                          defaultChecked="true"
                        />
                        A user follows your account
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <label
                        className="form-check-label"
                        htmlFor="checkSmsGroup"
                      >
                        New posts are made in groups you're part
                        <input
                          className="form-check-input"
                          id="checkSmsGroup"
                          type="checkbox"
                        />
                      </label>
                    </div>
                    <div className="form-check">
                      <label
                        className="form-check-label"
                        htmlFor="checkSmsPrivateMessage"
                      >
                        <input
                          className="form-check-input"
                          id="checkSmsPrivateMessage"
                          type="checkbox"
                          defaultChecked="true"
                        />
                        You receive a private message
                      </label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-header">Notification Preferences</div>
              <div className="card-body">
                <form>
                  <div className="form-check mb-2">
                    <label
                      className="form-check-label"
                      htmlFor="checkAutoGroup"
                    >
                      <input
                        className="form-check-input"
                        id="checkAutoGroup"
                        type="checkbox"
                        defaultChecked="true"
                      />
                      Automatically subscribe to group notifications
                    </label>
                  </div>
                  <div className="form-check mb-3">
                    <label
                      className="form-check-label"
                      htmlFor="checkAutoProduct"
                    >
                      <input
                        className="form-check-input"
                        id="checkAutoProduct"
                        type="checkbox"
                      />
                      Automatically subscribe to new product notifications
                    </label>
                  </div>
                  <button className="btn btn-danger" type="button">
                    Unsubscribe from all notifications
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileNotifications;
