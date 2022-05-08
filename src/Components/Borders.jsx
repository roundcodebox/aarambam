import React from 'react';

function Border() {
  return (
    <div className="container px-4 py-4">
      <div className="row g-5 py-5">
        <div className="col-sm-12 col-lg-12">
          <div className="row g-5 py-4">
            <h4>Border Colors</h4>
            <div className="col bg-light border border-primary m-2 sm-4">
              <p>
                <small>
                  <small>Primary Border</small>
                </small>
              </p>
            </div>
            <div
              sm={3}
              className="col bg-light border border-secondary m-2 sm-4"
            >
              <p>
                <small>
                  <small>Secondary Border</small>
                </small>
              </p>
            </div>
            <div sm={3} className="col bg-light border border-success m-2 sm-4">
              <p>
                <small>
                  <small>Success Border</small>
                </small>
              </p>
            </div>
          </div>
          <div className="row g-5 py-4">
            <div sm={3} className=" col bg-light border border-danger m-2 sm-4">
              <p>
                <small>
                  <small>Danger Border</small>
                </small>
              </p>
            </div>
            <div sm={3} className="col bg-light border border-warning m-2 sm-4">
              <p>
                <small>
                  <small>Warning Border</small>
                </small>
              </p>
            </div>
            <div sm={3} className="col bg-light border border-info m-2 sm-4">
              <p>
                <small>
                  <small>Info Border</small>
                </small>
              </p>
            </div>
          </div>
          <div className="row g-5 py-4">
            <div sm={3} className="col bg-light border border-light m-2 sm-4">
              <p>
                <small>
                  <small>Light Border</small>
                </small>
              </p>
            </div>
            <div sm={3} className="col bg-light border border-dark m-2 sm-4">
              <p>
                <small>
                  <small>Dark Border</small>
                </small>
              </p>
            </div>
            <div sm={3} className="col bg-light border border-white m-2 sm-4">
              <p>
                <small>
                  <small>White Border</small>
                </small>
              </p>
            </div>
          </div>
          <div className="row g-5">
            <h4>Border Width</h4>
            <div sm={3} className="col bg-light border border-1 m-1 sm-3">
              <p>
                <small>
                  <small>Border width of 1</small>
                </small>
              </p>
            </div>
            <div sm={3} className="col bg-light border border-2 m-1 sm-3">
              <p>
                <small>
                  <small>Border width of 2</small>
                </small>
              </p>
            </div>
            <div sm={3} className="col bg-light border border-3 m-1 sm-3">
              <p>
                <small>
                  <small>Border width of 3</small>
                </small>
              </p>
            </div>
            <div sm={3} className="col bg-light border border-4 m-1 sm-3">
              <p>
                <small>
                  <small>Border width of 4</small>
                </small>
              </p>
            </div>
            <div sm={3} className="col bg-light border border-5 m-1">
              <p>
                <small>
                  <small>Border width of 4</small>
                </small>
              </p>
            </div>
          </div>
          <div className="row g-5">
            <h4>Add borders selectively</h4>
            <div sm={3} className="col bg-light border border-2 m-1 sm-3">
              <p>
                <small>
                  <small>All borders added</small>
                </small>
              </p>
            </div>
            <div sm={3} className="col bg-light border-2 border-top m-1 sm-3">
              <p>
                <small>
                  <small>Top border added</small>
                </small>
              </p>
            </div>
            <div sm={3} className="col bg-light  border-2 border-end m-1 sm-3">
              <p>
                <small>
                  <small>End border added</small>
                </small>
              </p>
            </div>
            <div
              sm={3}
              className="col bg-light  border-2 border-bottom m-1 sm-3"
            >
              <p>
                <small>
                  <small>Bottom border added</small>
                </small>
              </p>
            </div>
            <div sm={3} className="col bg-light  border-2 border-start m-1">
              <p>
                <small>
                  <small>Start border added</small>
                </small>
              </p>
            </div>
          </div>
          <div className="row g-5">
            <h4>Remove borders selectively</h4>
            <div sm={3} className="col bg-light border border-0 m-1 sm-3">
              <p>
                <small>
                  <small>All borders removed</small>
                </small>
              </p>
            </div>
            <div
              sm={3}
              className="col bg-light border  border-2 border-top-0 m-1 sm-3"
            >
              <p>
                <small>
                  <small>Top border removed</small>
                </small>
              </p>
            </div>
            <div
              sm={3}
              className="col bg-light border border-2 border-end-0 m-1 sm-3"
            >
              <p>
                <small>
                  <small>End border removed</small>
                </small>
              </p>
            </div>
            <div
              sm={3}
              className="col bg-light border border-2 border-bottom-0 m-1 sm-3"
            >
              <p>
                <small>
                  <small>Bottom border removed</small>
                </small>
              </p>
            </div>
            <div
              sm={3}
              className="col bg-light border border-2 border-start-0 m-1 sm-3"
            >
              <p>
                <small>
                  <small>Start border removed</small>
                </small>
              </p>
            </div>
          </div>
          <div className="row g-5">
            <h4>Border radius</h4>
            <div sm={3} className="col sm-3">
              <p>
                <small>Border rounded</small>
              </p>
              <img
                src="/assets/images/120x90.png"
                className="rounded"
                alt="Bootstrap Themes"
                width="120"
                height="90"
                loading="lazy"
              />
            </div>
            <div sm={3} className="col sm-3">
              <p>
                <small>Border rounded top</small>
              </p>
              <img
                src="/assets/images/120x90.png"
                className="rounded-top"
                alt="Bootstrap Themes"
                width="120"
                height="90"
                loading="lazy"
              />
            </div>
            <div sm={3} className="col sm-3">
              <p>
                <small>Border rounded end</small>
              </p>
              <img
                src="/assets/images/120x90.png"
                className="rounded-end"
                alt="Bootstrap Themes"
                width="120"
                height="90"
                loading="lazy"
              />
            </div>
            <div sm={3} className="col sm-3">
              <p>
                <small>Border rounded bottom</small>
              </p>
              <img
                src="/assets/images/120x90.png"
                className="rounded-bottom"
                alt="Bootstrap Themes"
                width="120"
                height="90"
                loading="lazy"
              />
            </div>
            <div sm={3} className="col sm-3">
              <p>
                <small>Border rounded start</small>
              </p>
              <img
                src="/assets/images/120x90.png"
                className="rounded-start"
                alt="Bootstrap Themes"
                width="120"
                height="90"
                loading="lazy"
              />
            </div>
            <div className="row g-5">
              <div sm={3} className="col sm-3">
                <p>
                  <small>Border rounded circle</small>
                </p>
                <img
                  src="/assets/images/200x200.png"
                  className="rounded-circle"
                  alt="Bootstrap Themes"
                  width="200"
                  height="200"
                  loading="lazy"
                />
              </div>
              <div sm={3} className="col sm-3">
                <p>
                  <small>Border rounded pill</small>
                </p>
                <img
                  src="/assets/images/234x60.png"
                  className="rounded-pill"
                  alt="Bootstrap Themes"
                  width="234"
                  height="60"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Border;
