import React from 'react';
import AlertDismissible from './AlertDismissible';
import AlertDismissibleExample from './AlertDismissibleExample';

function Alerts() {
  return (
    <div className="container px-4 py-5">
      <div className="row g-5 py-5">
        <div className="col-sm-6">
          <h4>Alerts Example</h4>
          <div className="alert alert-primary" role="alert">
            A simple primary alert—check it out!
          </div>
          <div className="alert alert-secondary" role="alert">
            A simple secondary alert—check it out!
          </div>
          <div className="alert alert-success" role="alert">
            A simple success alert—check it out!
          </div>
          <div className="alert alert-danger" role="alert">
            A simple danger alert—check it out!
          </div>
          <div className="alert alert-warning" role="alert">
            A simple warning alert—check it out!
          </div>
          <div className="alert alert-info" role="alert">
            A simple info alert—check it out!
          </div>
          <div className="alert alert-light" role="alert">
            A simple light alert—check it out!
          </div>
          <div className="alert alert-dark" role="alert">
            A simple dark alert—check it out!
          </div>
        </div>
        <div className="col-sm-6">
          <h4>Alerts with links</h4>
          <div className="alert alert-primary" role="alert">
            A simple primary alert with{' '}
            <a href="#/" className="alert-link">
              an example link
            </a>
            . Give it a click if you like.
          </div>
          <div className="alert alert-secondary" role="alert">
            A simple secondary alert with{' '}
            <a href="#/" className="alert-link">
              an example link
            </a>
            . Give it a click if you like.
          </div>
          <div className="alert alert-success" role="alert">
            A simple success alert with{' '}
            <a href="#/" className="alert-link">
              an example link
            </a>
            . Give it a click if you like.
          </div>
          <div className="alert alert-danger" role="alert">
            A simple danger alert with{' '}
            <a href="#/" className="alert-link">
              an example link
            </a>
            . Give it a click if you like.
          </div>
          <div className="alert alert-warning" role="alert">
            A simple warning alert with{' '}
            <a href="#/" className="alert-link">
              an example link
            </a>
            . Give it a click if you like.
          </div>
          <div className="alert alert-info" role="alert">
            A simple info alert with{' '}
            <a href="#/" className="alert-link">
              an example link
            </a>
            . Give it a click if you like.
          </div>
          <div className="alert alert-light" role="alert">
            A simple light alert with{' '}
            <a href="#/" className="alert-link">
              an example link
            </a>
            . Give it a click if you like.
          </div>
          <div className="alert alert-dark" role="alert">
            A simple dark alert with{' '}
            <a href="#/" className="alert-link">
              an example link
            </a>
            . Give it a click if you like.
          </div>
        </div>
        <div sm={12}>
          <h4>Alerts with additional content</h4>
          <div className="alert alert-success" role="alert">
            <h4 className="alert-heading">Well done!</h4>
            <p>
              Aww yeah, you successfully read this important alert message. This
              example text is going to run a bit longer so that you can see how
              spacing within an alert works with this kind of content.
            </p>
            <hr />
            <p className="mb-0">
              Whenever you need to, be sure to use margin utilities to keep
              things nice and tidy.
            </p>
          </div>
          <AlertDismissibleExample />
          <AlertDismissible />
        </div>
      </div>
    </div>
  );
}
export default Alerts;
