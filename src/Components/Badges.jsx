import React from 'react';

function Badges() {
  return (
    <div className="container px-4 py-5">
      <div className="row align-items-center g-5 py-5">
        <div className="col-sm-6">
          <h2>Badges Examples</h2>
          <div>
            <h1>
              Example heading <span className="badge bg-secondary">New</span>
            </h1>
            <h2>
              Example heading <span className="badge bg-secondary">New</span>
            </h2>
            <h3>
              Example heading <span className="badge bg-secondary">New</span>
            </h3>
            <h4>
              Example heading <span className="badge bg-secondary">New</span>
            </h4>
            <h5>
              Example heading <span className="badge bg-secondary">New</span>
            </h5>
            <h6>
              Example heading <span className="badge bg-secondary">New</span>
            </h6>
          </div>
        </div>
        <div className="col-sm-6">
          <h4>Button with badge </h4>
          <button type="button" className="btn btn-primary">
            Notifications <span className="badge bg-secondary">4</span>
          </button>
          <h4>Button with badge positioned </h4>
          <button type="button" className="btn btn-primary position-relative">
            Inbox
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              99+
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
          <h4>Button with badge positioned </h4>
          <button type="button" className="btn btn-primary position-relative">
            Profile
            <span
              className="position-absolute top-0
            start-100
            translate-middle p-2
            bg-danger border border-light
            rounded-circle"
            >
              <span className="visually-hidden">New alerts</span>
            </span>
          </button>
          <h4>Badge Contextual variations</h4>
          <div>
            <span className="badge bg-primary">Primary</span>{' '}
            <span className="badge bg-secondary">Secondary</span>{' '}
            <span className="badge bg-success">Success</span>{' '}
            <span className="badge bg-danger">Danger</span>{' '}
            <span className="badge bg-warning text-dark">Warning</span>{' '}
            <span className="badge bg-info text-dark">Info</span>{' '}
            <span className="badge bg-light text-dark">Light</span>{' '}
            <span className="badge bg-dark">Dark</span>
          </div>
          <h4>Badge Pills</h4>
          <div>
            <span className="badge rounded-pill bg-primary">Primary</span>{' '}
            <span className="badge rounded-pill bg-secondary">Secondary</span>{' '}
            <span className="badge rounded-pill bg-success">Success</span>{' '}
            <span className="badge rounded-pill bg-danger">Danger</span>{' '}
            <span className="badge rounded-pill bg-warning text-dark">
              Warning
            </span>{' '}
            <span className="badge rounded-pill bg-info text-dark">Info</span>{' '}
            <span className="badge rounded-pill bg-light text-dark">Light</span>{' '}
            <span className="badge rounded-pill bg-dark">Dark</span>{' '}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Badges;
