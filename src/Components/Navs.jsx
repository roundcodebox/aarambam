import React from 'react';

function Navs() {
  return (
    <div className="container px-4 py-5">
      <div className="row g-5 py-5">
        <h4>Nav basic example</h4>
        <div className="col-sm-4 col-lg-4">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/navs">
                Active
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/navs">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/navs">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/navs">
                Disabled
              </a>
            </li>
          </ul>
        </div>
        <div className="col-sm-4 col-lg-4">
          <nav className="nav">
            <a className="nav-link active" aria-current="page" href="/navs">
              Active
            </a>
            <a className="nav-link" href="/navs">
              Link
            </a>
            <a className="nav-link" href="/navs">
              Link
            </a>
            <a className="nav-link disabled" href="/navs">
              Disabled
            </a>
          </nav>
        </div>
        <div className="col-sm-12 col-lg-12">
          <h4>Alignment and orientation</h4>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/navs">
                Active
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/navs">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/navs">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/navs">
                Disabled
              </a>
            </li>
          </ul>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/navs">
                Active
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/navs">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/navs">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/navs">
                Disabled
              </a>
            </li>
          </ul>
        </div>
        <div className="col-sm-4 col-lg-4">
          <h4>Vertical Nav</h4>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/navs">
                Active
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/navs">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/navs">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/navs">
                Disabled
              </a>
            </li>
          </ul>
        </div>
        <div className="col-sm-4 col-lg-4">
          <h4>Nav in Tabs</h4>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/navs">
                Active
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/navs">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/navs">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/navs">
                Disabled
              </a>
            </li>
          </ul>
        </div>
        <div className="col-sm-4 col-lg-4">
          <h4>Nav Pills</h4>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/navs">
                Active
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/navs">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/navs">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/navs">
                Disabled
              </a>
            </li>
          </ul>
        </div>
        <div className="col-sm-6 col-lg-6">
          <h4>Nav fill and justified</h4>
          <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/navs">
                Active
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/navs">
                Much longer nav link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/navs">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/navs">
                Disabled
              </a>
            </li>
          </ul>
        </div>
        <div className="col-sm-6 col-lg-6">
          <h4>Nav fill and justified with same width</h4>
          <nav className="nav nav-pills nav-fill">
            <a className="nav-link active" aria-current="page" href="/navs">
              Active
            </a>
            <a className="nav-link" href="/navs">
              Much longer nav link
            </a>
            <a className="nav-link" href="/navs">
              Link
            </a>
            <a className="nav-link disabled" href="/navs">
              Disabled
            </a>
          </nav>
        </div>
        <div className="col-sm-12 col-lg-12 my-2">
          <h4>Nav with dropdowns</h4>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/navs">
                Active
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="/navs"
                role="button"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/navs">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/navs">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/navs">
                    Something else here
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/navs">
                    Separated link
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/navs">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/navs">
                Disabled
              </a>
            </li>
          </ul>
        </div>
        <div className="col-sm-12 col-lg-12 my-2">
          <h4>Pills with dropdowns</h4>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/navs">
                Active
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="/navs"
                role="button"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/navs">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/navs">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/navs">
                    Something else here
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/navs">
                    Separated link
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/navs">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/navs">
                Disabled
              </a>
            </li>
          </ul>
        </div>
        <div className="col-sm-6 col-lg-6 my-2">
          <h4>Tabs</h4>
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Home
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Profile
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact"
                type="button"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                Contact
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              This is some placeholder content the Home tab's associated
              content. Clicking another tab will toggle the visibility of this
              one for the next. The tab JavaScript swaps classes to control the
              content visibility and styling. You can use it with tabs, pills,
              and any other .nav-powered navigation.
            </div>
            <div
              className="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              This is some placeholder content the Profile tab's associated
              content. Clicking another tab will toggle the visibility of this
              one for the next. The tab JavaScript swaps classes to control the
              content visibility and styling. You can use it with tabs, pills,
              and any other .nav-powered navigation.
            </div>
            <div
              className="tab-pane fade"
              id="contact"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >
              This is some placeholder content the Contact tab's associated
              content. Clicking another tab will toggle the visibility of this
              one for the next. The tab JavaScript swaps classes to control the
              content visibility and styling. You can use it with tabs, pills,
              and any other .nav-powered navigation.
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-6 my-2">
          <h4>Tabs with pills</h4>
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Home
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Profile
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Contact
              </button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              This is some placeholder content the Home tab's associated
              content. Clicking another tab will toggle the visibility of this
              one for the next. The tab JavaScript swaps classes to control the
              content visibility and styling. You can use it with tabs, pills,
              and any other .nav-powered navigation.
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              This is some placeholder content the Profile tab's associated
              content. Clicking another tab will toggle the visibility of this
              one for the next. The tab JavaScript swaps classes to control the
              content visibility and styling. You can use it with tabs, pills,
              and any other .nav-powered navigation.
            </div>
            <div
              className="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              This is some placeholder content the Contact tab's associated
              content. Clicking another tab will toggle the visibility of this
              one for the next. The tab JavaScript swaps classes to control the
              content visibility and styling. You can use it with tabs, pills,
              and any other .nav-powered navigation.
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-lg-12 my-2">
          <h4>Tabs with vertical pills</h4>
          <div className="d-flex align-items-start">
            <div
              className="nav flex-column nav-pills me-3"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <button
                className="nav-link active"
                id="v-pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-home"
                type="button"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
              >
                Home
              </button>
              <button
                className="nav-link"
                id="v-pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-profile"
                type="button"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
              >
                Profile
              </button>
              <button
                className="nav-link"
                id="v-pills-messages-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-messages"
                type="button"
                role="tab"
                aria-controls="v-pills-messages"
                aria-selected="false"
              >
                Messages
              </button>
              <button
                className="nav-link"
                id="v-pills-settings-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-settings"
                type="button"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                Settings
              </button>
            </div>
            <div className="tab-content" id="v-pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
              >
                This is some placeholder content the Home tab's associated
                content. Clicking another tab will toggle the visibility of this
                one for the next. The tab JavaScript swaps classes to control
                the content visibility and styling. You can use it with tabs,
                pills, and any other .nav-powered navigation.
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                This is some placeholder content the Profile tab's associated
                content. Clicking another tab will toggle the visibility of this
                one for the next. The tab JavaScript swaps classes to control
                the content visibility and styling. You can use it with tabs,
                pills, and any other .nav-powered navigation.
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-messages"
                role="tabpanel"
                aria-labelledby="v-pills-messages-tab"
              >
                This is some placeholder content the Messages tab's associated
                content. Clicking another tab will toggle the visibility of this
                one for the next. The tab JavaScript swaps classes to control
                the content visibility and styling. You can use it with tabs,
                pills, and any other .nav-powered navigation.
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-settings"
                role="tabpanel"
                aria-labelledby="v-pills-settings-tab"
              >
                This is some placeholder content the Settings tab's associated
                content. Clicking another tab will toggle the visibility of this
                one for the next. The tab JavaScript swaps classes to control
                the content visibility and styling. You can use it with tabs,
                pills, and any other .nav-powered navigation.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navs;
