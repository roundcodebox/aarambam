import React from 'react';

function Border() {
  return (
    <div className="container px-4 py-4">
      <div className="row g-5 py-5">
        <div className="col-sm-12 col-lg-12">
          <div className="row g-5 py-4">
            <h4>Border Colors</h4>
            <div className="col bg-light border border-primary m-2 sm-4">
              <p>Primary Border</p>
            </div>
            <div
              sm={3}
              className="col bg-light border border-secondary m-2 sm-4"
            >
              <p>Secondary Border</p>
            </div>
            <div sm={3} className="col bg-light border border-success m-2 sm-4">
              <p>Success Border</p>
            </div>
          </div>
          <div className="row g-5 py-4">
            <div sm={3} className=" col bg-light border border-danger m-2 sm-4">
              <p>Danger Border</p>
            </div>
            <div sm={3} className="col bg-light border border-warning m-2 sm-4">
              <p>Warning Border</p>
            </div>
            <div sm={3} className="col bg-light border border-info m-2 sm-4">
              <p>Info Border</p>
            </div>
          </div>
          <div className="row g-5 py-4">
            <div sm={3} className="col bg-light border border-light m-2 sm-4">
              <p>Light Border</p>
            </div>
            <div sm={3} className="col bg-light border border-dark m-2 sm-4">
              <p>Dark Border</p>
            </div>
            <div sm={3} className="col bg-light border border-white m-2 sm-4">
              <p>White Border</p>
            </div>
          </div>
          <div className="row g-5 py-4">
            <h4>Border Width</h4>
            <div sm={3} className="col bg-light border border-1 m-1 sm=3">
              <p>Border width of 1</p>
            </div>
            <div sm={3} className="col bg-light border border-2 m-1 sm=3">
              <p>Border width of 2</p>
            </div>
            <div sm={3} className="col bg-light border border-3 m-1 sm=3">
              <p>Border width of 3</p>
            </div>
            <div sm={3} className="col bg-light border border-4 m-1 sm=3">
              <p>Border width of 4</p>
            </div>
            <div sm={3} className="col bg-light border border-5 m-1">
              <p>Border width of 4</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Border;
