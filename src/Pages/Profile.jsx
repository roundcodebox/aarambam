import React from 'react';
import './Profile.scss';

function Profile() {
  return (
    <div className="container-xl px-4 mt-4">
      <nav className="nav nav-borders">
        <a
          className="nav-link active ms-0"
          href="https://www.bootdey.com/snippets/view/bs5-edit-profile-account-details"
          target="__blank"
        >
          Profile
        </a>
        <a
          className="nav-link"
          href="https://www.bootdey.com/snippets/view/bs5-profile-billing-page"
          target="__blank"
        >
          Billing
        </a>
        <a
          className="nav-link"
          href="https://www.bootdey.com/snippets/view/bs5-profile-security-page"
          target="__blank"
        >
          Security
        </a>
        <a
          className="nav-link"
          href="https://www.bootdey.com/snippets/view/bs5-edit-notifications-page"
          target="__blank"
        >
          Notifications
        </a>
      </nav>
      <hr className="mt-0 mb-4" />
      <div className="row">
        <div className="col-xl-4">
          <div className="card mb-4 mb-xl-0">
            <div className="card-header">Profile Picture</div>
            <div className="card-body text-center">
              <img
                className="img-account-profile rounded-circle mb-2"
                src="http://bootdey.com/img/Content/avatar/avatar1.png"
                alt=""
              />
              <div className="small font-italic text-muted mb-4">
                JPG or PNG no larger than 5 MB
              </div>
              <button className="btn btn-primary" type="button">
                Upload new image
              </button>
            </div>
          </div>
        </div>
        <div className="col-xl-8">
          <div className="card mb-4">
            <div className="card-header">Account Details</div>
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
                      className="form-control"
                      id="inputUsername"
                      type="text"
                      placeholder="Enter your username"
                      value="username"
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
                        className="form-control"
                        id="inputFirstName"
                        type="text"
                        placeholder="Enter your first name"
                        value="Valerie"
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
                        className="form-control"
                        id="inputLastName"
                        type="text"
                        placeholder="Enter your last name"
                        value="Luna"
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
                        className="form-control"
                        id="inputOrgName"
                        type="text"
                        placeholder="Enter your organization name"
                        value="Start Bootstrap"
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
                        className="form-control"
                        id="inputLocation"
                        type="text"
                        placeholder="Enter your location"
                        value="San Francisco, CA"
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
                      className="form-control"
                      id="inputEmailAddress"
                      type="email"
                      placeholder="Enter your email address"
                      value="name@example.com"
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
                        className="form-control"
                        id="inputPhone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value="555-123-4567"
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
                        className="form-control"
                        id="inputBirthday"
                        type="text"
                        name="birthday"
                        placeholder="Enter your birthday"
                        value="06/10/1988"
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
  );
}

export default Profile;
