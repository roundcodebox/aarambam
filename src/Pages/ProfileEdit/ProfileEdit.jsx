import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Styles from './ProfileEdit.module.scss';
import DashboardHeader from '../../Components/Dashboard/DashboardHeader';
import DashboardNav from '../../Components/Dashboard/DashboardNav';

function ProfileEdit() {
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
        <nav className={`nav ${Styles.navBorders}`}>
          <Link
            className={`${Styles.navLink} ${Styles.active} ms-0`}
            to="/profileedit"
          >
            Profile
          </Link>
          <Link className={`${Styles.navLink} ms-0`} to="/profilebilling">
            Billing
          </Link>
          <Link className={`${Styles.navLink} ms-0`} to="/profilesecurity">
            Security
          </Link>
          <Link className={`${Styles.navLink} ms-0`} to="/profilenotifications">
            Notifications
          </Link>
        </nav>
        <hr className="mt-0 mb-4" />
        <div className="row">
          <div className="col-xl-4">
            <div className="card mb-4 mb-xl-0">
              <div className={`${Styles.ProfileEditCardHeader}`}>
                Profile Picture
              </div>
              <div className="card-body text-center">
                <img
                  className={` ${Styles.imgAccountProfile} ${Styles.roundedCircle} mb-2`}
                  src="http://bootdey.com/img/Content/avatar/avatar1.png"
                  alt=""
                />
                <div className="small fst-italic text-muted mb-4">
                  JPG or PNG no larger than 5 MB
                </div>
                <button className="btn btn-primary" type="button">
                  Upload new image
                </button>
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <div className={`${Styles.ProfileEditCard} mb-4`}>
              <div className={`${Styles.ProfileEditCardHeader}`}>
                Account Details
              </div>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label
                      className="small mb-1 mb-1 col-sm-12 "
                      htmlFor="inputUsername"
                    >
                      Username (how your name will appear to other users on the
                      site)
                      <input
                        className={`${Styles.formControl}`}
                        id="inputUsername"
                        type="text"
                        placeholder="Enter your username"
                        defaultValue="username"
                      />
                    </label>
                  </div>
                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label
                        className="small mb-1 mb-1 col-sm-12"
                        htmlFor="inputFirstName"
                      >
                        First name
                        <input
                          className={`${Styles.formControl}`}
                          id="inputFirstName"
                          type="text"
                          placeholder="Enter your first name"
                          defaultValue="Valerie"
                        />
                      </label>
                    </div>
                    <div className="col-md-6">
                      <label
                        className="small mb-1 mb-1 col-sm-12"
                        htmlFor="inputLastName"
                      >
                        Last name
                        <input
                          className={`${Styles.formControl}`}
                          id="inputLastName"
                          type="text"
                          placeholder="Enter your last name"
                          defaultValue="Luna"
                        />
                      </label>
                    </div>
                  </div>
                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label
                        className="small mb-1 mb-1 col-sm-12"
                        htmlFor="inputOrgName"
                      >
                        Organization name
                        <input
                          className={`${Styles.formControl}`}
                          id="inputOrgName"
                          type="text"
                          placeholder="Enter your organization name"
                          defaultValue="Start Bootstrap"
                        />
                      </label>
                    </div>
                    <div className="col-md-6">
                      <label
                        className="small mb-1 mb-1 col-sm-12"
                        htmlFor="inputLocation"
                      >
                        Location
                        <input
                          className={`${Styles.formControl}`}
                          id="inputLocation"
                          type="text"
                          placeholder="Enter your location"
                          defaultValue="San Francisco, CA"
                        />
                      </label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      className="small mb-1 mb-1 col-sm-12"
                      htmlFor="inputEmailAddress"
                    >
                      Email address
                      <input
                        className={`${Styles.formControl}`}
                        id="inputEmailAddress"
                        type="email"
                        placeholder="Enter your email address"
                        defaultValue="name@example.com"
                      />
                    </label>
                  </div>
                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label
                        className="small mb-1 mb-1 col-sm-12"
                        htmlFor="inputPhone"
                      >
                        Phone number
                        <input
                          className={`${Styles.formControl}`}
                          id="inputPhone"
                          type="tel"
                          placeholder="Enter your phone number"
                          defaultValue="555-123-4567"
                        />
                      </label>
                    </div>
                    <div className="col-md-6">
                      <label
                        className="small mb-1 mb-1 col-sm-12"
                        htmlFor="inputBirthday"
                      >
                        Birthday
                        <input
                          className={`${Styles.formControl}`}
                          id="inputBirthday"
                          type="text"
                          name="birthday"
                          placeholder="Enter your birthday"
                          defaultValue="06/10/1988"
                        />
                      </label>
                    </div>
                  </div>
                  <button className="btn btn-primary" type="button">
                    Save changes
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

export default ProfileEdit;
