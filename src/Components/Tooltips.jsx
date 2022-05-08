import React from 'react';

function Tooltips() {
  return (
    <div className="container px-4 py-5">
      <div className="row g-5 py-5">
        <div className="col-sm-12 col-lg-12">
          <h4 className="display-4">Tooltips</h4>
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Tooltip on top"
          >
            Tooltip on top
          </button>{' '}
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="Tooltip on right"
          >
            Tooltip on right
          </button>{' '}
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Tooltip on bottom"
          >
            Tooltip on bottom
          </button>{' '}
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-toggle="tooltip"
            data-bs-placement="left"
            title="Tooltip on left"
          >
            Tooltip on left
          </button>{' '}
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-toggle="tooltip"
            data-bs-html="true"
            title="<em>Tooltip</em> <u>with</u> <b>HTML</b>"
          >
            Tooltip with HTML
          </button>{' '}
        </div>
      </div>
    </div>
  );
}

export default Tooltips;
