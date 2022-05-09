import React from 'react';

function Spinners() {
  return (
    <div className="container px-4 py-5">
      <div className="row g-5 py-5">
        <div className="col-sm-6 col-lg-6">
          <div className="col-sm-9 col-lg-9">
            <h2>Spinners</h2>
            <h4>Border Spinner</h4>
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
          <div className="col-sm-9 col-lg-9">
            <h4>Grow Spinner</h4>
            <div className="spinner-grow" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
          <div className="col-sm-9 col-lg-9">
            <h4>Spinner Variants</h4>
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border text-secondary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border text-success" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border text-danger" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border text-warning" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border text-info" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border text-light" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border text-dark" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
          <div className="col-sm-9 col-lg-9">
            <div className="spinner-grow text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-secondary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-success" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-danger" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-warning" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-info" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-light" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-dark" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
          <div className="col-sm-9 col-lg-9">
            <h4>Spinner sizes</h4>
            <div className="spinner-border spinner-border-sm" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow spinner-grow-sm" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="col-sm-9 col-lg-9">
              <div
                className="spinner-border"
                style={{ width: ' 3rem height: 3rem' }}
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
              <div
                className="spinner-grow"
                style={{ width: '3rem height: 3rem' }}
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
          <div className="col-sm-9 col-lg-9">
            <h4>Spinner in Buttons</h4>
            <button className="btn btn-primary" type="button" disabled>
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              />
              <span className="visually-hidden">Loading...</span>
            </button>{' '}
            <button className="btn btn-primary" type="button" disabled>
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              />
              Loading...
            </button>{' '}
            <button className="btn btn-primary" type="button" disabled>
              <span
                className="spinner-grow spinner-grow-sm"
                role="status"
                aria-hidden="true"
              />
              <span className="visually-hidden">Loading...</span>
            </button>{' '}
            <button className="btn btn-primary" type="button" disabled>
              <span
                className="spinner-grow spinner-grow-sm"
                role="status"
                aria-hidden="true"
              />
              Loading...
            </button>{' '}
          </div>
          <h4>Spinner width</h4>
          <div className="col-sm-9 col-lg-9">
            <div className="spinner-border border-1 m-1" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border border-2 m-2" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border border-3 m-1" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border border-4 m-1" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border border-5 m-1" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Spinners;
