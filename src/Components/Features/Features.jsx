import React from 'react';

function Features() {
  return (
    <>
      <div className="container px-4 py-5" id="featured-3">
        <h4>Features examples</h4>
        <h2 className="pb-2 border-bottom">Columns with icons</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="feature col">
            <div className="feature-icon bg-primary bg-gradient">
              <svg className="bi" width="1em" height="1em">
                <use xlinkHref="#collection" />
              </svg>
            </div>
            <h2>Featured title</h2>
            <p>
              Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
            <a href="#/" className="icon-link">
              Call to action
              <svg className="bi" width="1em" height="1em">
                <use xlinkHref="#chevron-right" />
              </svg>
            </a>
          </div>
          <div className="feature col">
            <div className="feature-icon bg-primary bg-gradient">
              <svg className="bi" width="1em" height="1em">
                <use xlinkHref="#people-circle" />
              </svg>
            </div>
            <h2>Featured title</h2>
            <p>
              Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
            <a href="#/" className="icon-link">
              Call to action
              <svg className="bi" width="1em" height="1em">
                <use xlinkHref="#chevron-right" />
              </svg>
            </a>
          </div>
          <div className="feature col">
            <div className="feature-icon bg-primary bg-gradient">
              <svg className="bi" width="1em" height="1em">
                <use xlinkHref="#toggles2" />
              </svg>
            </div>
            <h2>Featured title</h2>
            <p>
              Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
            <a href="#/" className="icon-link">
              Call to action
              <svg className="bi" width="1em" height="1em">
                <use xlinkHref="#chevron-right" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="b-example-divider" />
      <div className="container px-4 py-5" id="hanging-icons">
        <h2 className="pb-2 border-bottom">Hanging icons</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="col d-flex align-items-start">
            <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
              <svg className="bi" width="1em" height="1em">
                <use xlinkHref="#toggles2" />
              </svg>
            </div>
            <div>
              <h2>Featured title</h2>
              <p>
                Paragraph of text beneath the heading to explain the heading.
                We'll add onto it with another sentence and probably just keep
                going until we run out of words.
              </p>
              <a href="#/" className="btn btn-primary">
                Primary button
              </a>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
              <svg className="bi" width="1em" height="1em">
                <use xlinkHref="#cpu-fill" />
              </svg>
            </div>
            <div>
              <h2>Featured title</h2>
              <p>
                Paragraph of text beneath the heading to explain the heading.
                We'll add onto it with another sentence and probably just keep
                going until we run out of words.
              </p>
              <a href="#/" className="btn btn-primary">
                Primary button
              </a>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
              <svg className="bi" width="1em" height="1em">
                <use xlinkHref="#tools" />
              </svg>
            </div>
            <div>
              <h2>Featured title</h2>
              <p>
                Paragraph of text beneath the heading to explain the heading.
                We'll add onto it with another sentence and probably just keep
                going until we run out of words.
              </p>
              <a href="#/" className="btn btn-primary">
                Primary button
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="b-example-divider" />

      <div className="container px-4 py-5" id="custom-cards">
        <h2 className="pb-2 border-bottom">Custom cards</h2>

        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Short title, long jacket
                </h2>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src="https://github.com/twbs.png"
                      alt="Bootstrap"
                      width="32"
                      height="32"
                      className="rounded-circle border border-white"
                    />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#geo-fill" />
                    </svg>
                    <small>Earth</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#calendar3" />
                    </svg>
                    <small>3d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Much longer title that wraps to multiple lines
                </h2>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src="https://github.com/twbs.png"
                      alt="Bootstrap"
                      width="32"
                      height="32"
                      className="rounded-circle border border-white"
                    />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#geo-fill" />
                    </svg>
                    <small>Paris</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#calendar3" />
                    </svg>
                    <small>4d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
              <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Another longer title belongs here
                </h2>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src="https://github.com/twbs.png"
                      alt="Bootstrap"
                      width="32"
                      height="32"
                      className="rounded-circle border border-white"
                    />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#geo-fill" />
                    </svg>
                    <small>California</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#calendar3" />
                    </svg>
                    <small>5d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="b-example-divider" />
      <div className="container px-4 py-5" id="icon-grid">
        <h2 className="pb-2 border-bottom">Icon grid</h2>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-muted flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <use xlinkHref="#bootstrap" />
            </svg>
            <div>
              <h4 className="fw-bold mb-0">Featured title</h4>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-muted flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <use xlinkHref="#cpu-fill" />
            </svg>
            <div>
              <h4 className="fw-bold mb-0">Featured title</h4>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-muted flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <use xlinkHref="#calendar3" />
            </svg>
            <div>
              <h4 className="fw-bold mb-0">Featured title</h4>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-muted flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <use xlinkHref="#home" />
            </svg>
            <div>
              <h4 className="fw-bold mb-0">Featured title</h4>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-muted flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <use xlinkHref="#speedometer2" />
            </svg>
            <div>
              <h4 className="fw-bold mb-0">Featured title</h4>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-muted flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <use xlinkHref="#toggles2" />
            </svg>
            <div>
              <h4 className="fw-bold mb-0">Featured title</h4>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-muted flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <use xlinkHref="#geo-fill" />
            </svg>
            <div>
              <h4 className="fw-bold mb-0">Featured title</h4>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-muted flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <use xlinkHref="#tools" />
            </svg>
            <div>
              <h4 className="fw-bold mb-0">Featured title</h4>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="b-example-divider" />
    </>
  );
}
export default Features;
