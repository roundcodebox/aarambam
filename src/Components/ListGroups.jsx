import React from 'react';

function ListGroups() {
  return (
    <div className="container px-4 py-5">
      <div className="row g-5 py-5">
        <div className="col-sm-6 col-lg-6">
          <h4>ListGroup Basic Example</h4>
          <ul className="list-group">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
          </ul>
        </div>
        <div className="col-sm-6 col-lg-6">
          <h4>ListGroup Basic Example</h4>
          <ul className="list-group">
            <li className="list-group-item active" aria-current="true">
              An active item
            </li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
          </ul>
        </div>
        <div className="col-sm-6 col-lg-6">
          <h4>Disabled items</h4>
          <ul className="list-group">
            <li className="list-group-item disabled">A disabled item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
          </ul>
        </div>
        <div className="col-sm-6 col-lg-6">
          <h4>Disabled items</h4>
          <div className="list-group">
            <a
              href="#/"
              className="list-group-item list-group-item-action active"
              aria-current="true"
            >
              The current link item
            </a>
            <a href="#/" className="list-group-item list-group-item-action">
              A second link item
            </a>
            <a href="#/" className="list-group-item list-group-item-action">
              A third link item
            </a>
            <a href="#/" className="list-group-item list-group-item-action">
              A fourth link item
            </a>
            <a
              href="#/"
              className="list-group-item list-group-item-action disabled"
            >
              A disabled link item
            </a>
          </div>
        </div>
        <div className="col-sm-6 col-lg-6">
          <h4>ListGroup Flush</h4>
          <ol className="list-group list-group-numbered">
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Subheading</div>
                Content for list item
              </div>
              <span className="badge bg-primary rounded-pill">14</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Subheading</div>
                Content for list item
              </div>
              <span className="badge bg-primary rounded-pill">14</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Subheading</div>
                Content for list item
              </div>
              <span className="badge bg-primary rounded-pill">14</span>
            </li>
          </ol>
        </div>
        <div className="col-sm-6 col-lg-6">
          <h4>ListGroup Flush Action</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
          </ul>
        </div>
        <div className="col-sm-6 col-lg-6">
          <h4>ListGroup Numbered</h4>
          <ol className="list-group list-group-numbered">
            <li className="list-group-item">A list item</li>
            <li className="list-group-item">A list item</li>
            <li className="list-group-item">A list item</li>
          </ol>
        </div>
        <div className="col-sm-6 col-lg-6">
          <h4>ListGroup Contextual classes Actionable</h4>
          <ul className="list-group">
            <li className="list-group-item">
              A simple default list group item
            </li>

            <li className="list-group-item list-group-item-primary">
              A simple primary list group item
            </li>
            <li className="list-group-item list-group-item-secondary">
              A simple secondary list group item
            </li>
            <li className="list-group-item list-group-item-success">
              A simple success list group item
            </li>
            <li className="list-group-item list-group-item-danger">
              A simple danger list group item
            </li>
            <li className="list-group-item list-group-item-warning">
              A simple warning list group item
            </li>
            <li className="list-group-item list-group-item-info">
              A simple info list group item
            </li>
            <li className="list-group-item list-group-item-light">
              A simple light list group item
            </li>
            <li className="list-group-item list-group-item-dark">
              A simple dark list group item
            </li>
          </ul>
        </div>
        <div className="col-sm-6 col-lg-6">
          <h4>ListGroup Contextual classes</h4>
          <div className="list-group">
            <a href="#/" className="list-group-item list-group-item-action">
              A simple default list group item
            </a>

            <a
              href="#/"
              className="list-group-item list-group-item-action list-group-item-primary"
            >
              A simple primary list group item
            </a>
            <a
              href="#/"
              className="list-group-item list-group-item-action list-group-item-secondary"
            >
              A simple secondary list group item
            </a>
            <a
              href="#/"
              className="list-group-item list-group-item-action list-group-item-success"
            >
              A simple success list group item
            </a>
            <a
              href="#/"
              className="list-group-item list-group-item-action list-group-item-danger"
            >
              A simple danger list group item
            </a>
            <a
              href="#/"
              className="list-group-item list-group-item-action list-group-item-warning"
            >
              A simple warning list group item
            </a>
            <a
              href="#/"
              className="list-group-item list-group-item-action list-group-item-info"
            >
              A simple info list group item
            </a>
            <a
              href="#/"
              className="list-group-item list-group-item-action list-group-item-light"
            >
              A simple light list group item
            </a>
            <a
              href="#/"
              className="list-group-item list-group-item-action list-group-item-dark"
            >
              A simple dark list group item
            </a>
          </div>
        </div>
        <div className="col-sm-6 col-lg-6">
          <h4>ListGroup Horizontal</h4>
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              A list item
              <span className="badge bg-primary rounded-pill">14</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              A second list item
              <span className="badge bg-primary rounded-pill">2</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              A third list item
              <span className="badge bg-primary rounded-pill">1</span>
            </li>
          </ul>
        </div>
        <div className="col-sm-6 col-lg-6">
          <h4>ListGroup Tabbed Interfaces</h4>
          <div className="list-group">
            <a
              href="#/"
              className="list-group-item list-group-item-action active"
              aria-current="true"
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
                <small>3 days ago</small>
              </div>
              <p className="mb-1">Some placeholder content in a paragraph.</p>
              <small>And some small print.</small>
            </a>
            <a href="#/" className="list-group-item list-group-item-action">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
                <small className="text-muted">3 days ago</small>
              </div>
              <p className="mb-1">Some placeholder content in a paragraph.</p>
              <small className="text-muted">And some muted small print.</small>
            </a>
            <a href="#/" className="list-group-item list-group-item-action">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
                <small className="text-muted">3 days ago</small>
              </div>
              <p className="mb-1">Some placeholder content in a paragraph.</p>
              <small className="text-muted">And some muted small print.</small>
            </a>
          </div>
        </div>
        <div className="col-sm-6 col-lg-6">
          <h4>ListGroup Tabbed Interfaces</h4>
          <ul className="list-group">
            <li className="list-group-item">
              <input
                className="form-check-input me-1"
                type="checkbox"
                value=""
                aria-label="..."
              />
              First checkbox
            </li>
            <li className="list-group-item">
              <input
                className="form-check-input me-1"
                type="checkbox"
                value=""
                aria-label="..."
              />
              Second checkbox
            </li>
            <li className="list-group-item">
              <input
                className="form-check-input me-1"
                type="checkbox"
                value=""
                aria-label="..."
              />
              Third checkbox
            </li>
            <li className="list-group-item">
              <input
                className="form-check-input me-1"
                type="checkbox"
                value=""
                aria-label="..."
              />
              Fourth checkbox
            </li>
            <li className="list-group-item">
              <input
                className="form-check-input me-1"
                type="checkbox"
                value=""
                aria-label="..."
              />
              Fifth checkbox
            </li>
          </ul>
        </div>
        <div className="col-sm-6 col-lg-6">
          <h4>Labels as listgroup </h4>
          <div className="list-group">
            <label className="list-group-item" htmlFor="first-checkbox">
              <input
                className="form-check-input me-1"
                type="checkbox"
                value=""
                id="first-checkbox"
              />
              First checkbox
            </label>
            <label className="list-group-item" htmlFor="third-checkbox">
              <input
                className="form-check-input me-1"
                type="checkbox"
                value=""
                id="second-checkbox"
              />
              Second checkbox
            </label>
            <label className="list-group-item" htmlFor="third-checkbox">
              <input
                className="form-check-input me-1"
                type="checkbox"
                value=""
                id="third-checkbox"
              />
              Third checkbox
            </label>
            <label className="list-group-item" htmlFor="fourth-checkbox">
              <input
                className="form-check-input me-1"
                type="checkbox"
                value=""
                id="fourth-checkbox"
              />
              Fourth checkbox
            </label>
            <label className="list-group-item" htmlFor="fifth-checkbox">
              <input
                className="form-check-input me-1"
                type="checkbox"
                value=""
                id="fifth-checkbox"
              />
              Fifth checkbox
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListGroups;
