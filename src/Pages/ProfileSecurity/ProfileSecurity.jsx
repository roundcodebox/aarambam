import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProfileSecurity.scss';
import DashboardHeader from '../../Components/Dashboard/DashboardHeader';
import DashboardNav from '../../Components/Dashboard/DashboardNav';

function ProfileSecurity() {
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
          <Link className="nav-link active ms-0" to="/profilesecurity">
            Security
          </Link>
          <Link className="nav-link ms-0" to="/profilenotifications">
            Notifications
          </Link>
        </nav>
        <hr className="mt-0 mb-4" />
        <div className="row">
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-header">Change Password</div>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label
                      className="small mb-1 col-sm-12"
                      htmlFor="currentPassword"
                    >
                      Current Password
                      <input
                        className="form-control"
                        id="currentPassword"
                        type="password"
                        placeholder="Enter current password"
                      />
                    </label>
                  </div>
                  <div className="mb-3">
                    <label
                      className="small mb-1 col-sm-12"
                      htmlFor="newPassword"
                    >
                      New Password
                      <input
                        className="form-control"
                        id="newPassword"
                        type="password"
                        placeholder="Enter new password"
                      />
                    </label>
                  </div>
                  <div className="mb-3 ">
                    <label
                      className="small mb-1 col-sm-12"
                      htmlFor="confirmPassword"
                    >
                      Confirm Password
                      <input
                        className="form-control"
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm new password"
                      />
                    </label>
                  </div>
                  <button className="btn btn-primary" type="button">
                    Save
                  </button>
                </form>
              </div>
            </div>
            <div className="card mb-4">
              <div className="card-header">Security Preferences</div>
              <div className="card-body">
                <h5 className="mb-1">Account Privacy</h5>
                <p className="small text-muted">
                  By setting your account to private, your profile information
                  and posts will not be visible to users outside of your user
                  groups.
                </p>
                <form>
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="radioPrivacy1">
                      Public (posts are available to all users)
                      <input
                        className="form-check-input"
                        id="radioPrivacy1"
                        type="radio"
                        name="radioPrivacy"
                        checked="true"
                      />
                    </label>
                  </div>
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="radioPrivacy2">
                      Private (posts are available to only users in your groups)
                      <input
                        className="form-check-input"
                        id="radioPrivacy2"
                        type="radio"
                        name="radioPrivacy"
                      />
                    </label>
                  </div>
                </form>
                <hr className="my-4" />
                <h5 className="mb-1">Data Sharing</h5>
                <p className="small text-muted">
                  Sharing usage data can help us to improve our products and
                  better serve our users as they navigation through our
                  application. When you agree to share usage data with us, crash
                  reports and usage analytics will be automatically sent to our
                  development team for investigation.
                </p>
                <form>
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="radioUsage1">
                      Yes, share data and crash reports with app developers
                      <input
                        className="form-check-input"
                        id="radioUsage1"
                        type="radio"
                        name="radioUsage"
                        checked="true"
                      />
                    </label>
                  </div>
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="radioUsage2">
                      No, limit my data sharing with app developers
                      <input
                        className="form-check-input"
                        id="radioUsage2"
                        type="radio"
                        name="radioUsage"
                      />
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-header">Two-Factor Authentication</div>
              <div className="card-body">
                <p>
                  Add another level of security to your account by enabling
                  two-factor authentication. We will send you a text message to
                  verify your login attempts on unrecognized devices and
                  browsers.
                </p>
                <form>
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="twoFactorOn">
                      On
                      <input
                        className="form-check-input"
                        id="twoFactorOn"
                        type="radio"
                        name="twoFactor"
                        checked="true"
                      />
                    </label>
                  </div>
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="twoFactorOff">
                      Off
                      <input
                        className="form-check-input"
                        id="twoFactorOff"
                        type="radio"
                        name="twoFactor"
                      />
                    </label>
                  </div>
                  <div className="mt-3">
                    <label
                      className="small mb-1 col-sm-12"
                      htmlFor="twoFactorSMS"
                    >
                      SMS Number
                      <input
                        className="form-control"
                        id="twoFactorSMS"
                        type="tel"
                        placeholder="Enter a phone number"
                        value="555-123-4567"
                      />
                    </label>
                  </div>
                </form>
              </div>
            </div>
            <div className="card mb-4">
              <div className="card-header">Delete Account</div>
              <div className="card-body">
                <p>
                  Deleting your account is a permanent action and cannot be
                  undone. If you are sure you want to delete your account,
                  select the button below.
                </p>
                <button className="btn btn-danger" type="button">
                  I understand, delete my account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileSecurity;
