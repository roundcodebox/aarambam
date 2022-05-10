import React from 'react';

function Buttons() {
  return (
    <div className="container px-4 py-5">
      <div className="row g-5 py-5">
        <div className="col-sm-12 col-lg-12">
          <h1>Buttons</h1>
          <button type="button" className="btn btn-primary">
            Primary
          </button>{' '}
          <button type="button" className="btn btn-secondary">
            Secondary
          </button>{' '}
          <button type="button" className="btn btn-success">
            Success
          </button>{' '}
          <button type="button" className="btn btn-danger">
            Danger
          </button>{' '}
          <button type="button" className="btn btn-warning">
            Warning
          </button>{' '}
          <button type="button" className="btn btn-info">
            Info
          </button>{' '}
          <button type="button" className="btn btn-light">
            Light
          </button>{' '}
          <button type="button" className="btn btn-dark">
            Dark
          </button>{' '}
          <button type="button" className="btn btn-link">
            Link
          </button>{' '}
        </div>
        <div className="col-sm-12 col-lg-12">
          <button type="button" className="btn btn-primary" disabled>
            Primary
          </button>{' '}
          <button type="button" className="btn btn-secondary" disabled>
            Secondary
          </button>{' '}
          <button type="button" className="btn btn-success" disabled>
            Success
          </button>{' '}
          <button type="button" className="btn btn-warning" disabled>
            Warning
          </button>{' '}
          <button type="button" className="btn btn-danger" disabled>
            Danger
          </button>{' '}
          <button type="button" className="btn btn-info" disabled>
            Info
          </button>{' '}
          <button type="button" className="btn btn-light" disabled>
            Light
          </button>{' '}
          <button type="button" className="btn btn-dark" disabled>
            Dark
          </button>{' '}
          <button type="button" className="btn btn-link" disabled>
            Link
          </button>{' '}
        </div>
        <div className="col-sm-12 col-lg-12">
          <h4>Colored links</h4>
          <a href="#/" className="link-primary">
            Primary link
          </a>{' '}
          <a href="#/" className="link-secondary">
            Secondary link
          </a>{' '}
          <a href="#/" className="link-success">
            Success link
          </a>{' '}
          <a href="#/" className="link-danger">
            Danger link
          </a>{' '}
          <a href="#/" className="link-warning">
            Warning link
          </a>{' '}
          <a href="#/" className="link-info">
            Info link
          </a>{' '}
          <a href="#/" className="link-light">
            Light link
          </a>{' '}
          <a href="#/" className="link-dark">
            Dark link
          </a>{' '}
        </div>
        <div className="col-sm-12 col-lg-12">
          <h4>Outline Buttons</h4>
          <br />
          <button type="button" className="btn btn-outline-primary">
            Primary
          </button>{' '}
          <button type="button" className="btn btn-outline-secondary">
            Secondary
          </button>{' '}
          <button type="button" className="btn btn-outline-success">
            Success
          </button>{' '}
          <button type="button" className="btn btn-outline-danger">
            Danger
          </button>{' '}
          <button type="button" className="btn btn-outline-warning">
            Warning
          </button>{' '}
          <button type="button" className="btn btn-outline-info">
            Info
          </button>{' '}
          <button type="button" className="btn btn-outline-light">
            Light
          </button>
          <button type="button" className="btn btn-outline-dark">
            Dark
          </button>{' '}
        </div>
        <div className="col-sm-12 col-lg-12">
          <br />
          <a className="btn btn-primary" href="#/" role="button">
            Link
          </a>
          <button className="btn btn-primary" type="submit">
            Button
          </button>{' '}
          <input className="btn btn-primary" type="button" value="Input" />{' '}
          <input className="btn btn-primary" type="submit" value="Submit" />{' '}
          <input className="btn btn-primary" type="reset" value="Reset" />{' '}
        </div>
        <div className="col-sm-12 col-lg-12">
          <br />
          <h4>Button Sizes</h4>
          <div className="mb-2">
            <button type="button" className="btn btn-primary btn-lg">
              Large button
            </button>{' '}
            <button type="button" className="btn btn-secondary btn-lg">
              Large button
            </button>{' '}
          </div>
          <div>
            <button type="button" className="btn btn-primary btn-sm">
              Small button
            </button>{' '}
            <button type="button" className="btn btn-secondary btn-sm">
              Small button
            </button>{' '}
          </div>
        </div>
        <div className="col-sm-12 col-lg-12">
          <br />
          <h4>Block buttons</h4>
          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="button">
              Button
            </button>{' '}
            <button className="btn btn-primary" type="button">
              Button
            </button>{' '}
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-lg-12 my-2">
        <br />
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="button"
          autoComplete="off"
        >
          Toggle button
        </button>{' '}
        <button
          type="button"
          className="btn btn-primary active"
          data-bs-toggle="button"
          autoComplete="off"
          aria-pressed="true"
        >
          Active toggle button
        </button>{' '}
        <button
          type="button"
          className="btn btn-primary"
          disabled
          data-bs-toggle="button"
          autoComplete="off"
        >
          Disabled toggle button
        </button>{' '}
      </div>
      <div className="col-sm-12 col-lg-12 my-2">
        <a
          href="#/"
          className="btn btn-primary"
          role="button"
          data-bs-toggle="button"
        >
          Toggle link
        </a>{' '}
        <a
          href="#/"
          className="btn btn-primary active"
          role="button"
          data-bs-toggle="button"
          aria-pressed="true"
        >
          Active toggle link
        </a>{' '}
        <a
          href="#/"
          className="btn btn-primary disabled"
          aria-disabled="true"
          role="button"
          data-bs-toggle="button"
        >
          Disabled toggle link
        </a>{' '}
      </div>
      <div className="col-sm-12 col-lg-12 my-2">
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-primary">
            Left
          </button>
          <button type="button" className="btn btn-primary">
            Middle
          </button>
          <button type="button" className="btn btn-primary">
            Right
          </button>
        </div>
      </div>
      <div className="col-sm-12 col-lg-12 my-2">
        <div className="btn-group" role="group" aria-label="Basic example">
          <div className="btn-group">
            <a href="#/" className="btn btn-primary active" aria-current="page">
              Active link
            </a>
            <a href="#/" className="btn btn-primary">
              Link
            </a>
            <a href="#/" className="btn btn-primary">
              Link
            </a>
          </div>
        </div>
        <div className="col-sm-12 col-lg-12 my-2">
          <div className="btn-group" role="group" aria-label="Basic example">
            <div
              className="btn-group"
              role="group"
              aria-label="Basic mixed styles example"
            >
              <button type="button" className="btn btn-danger">
                Left
              </button>
              <button type="button" className="btn btn-warning">
                Middle
              </button>
              <button type="button" className="btn btn-success">
                Right
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-lg-12 my-2">
          <div className="btn-group" role="group" aria-label="Basic example">
            <div
              className="btn-group"
              role="group"
              aria-label="Basic outlined example"
            >
              <button type="button" className="btn btn-outline-primary">
                Left
              </button>
              <button type="button" className="btn btn-outline-primary">
                Middle
              </button>
              <button type="button" className="btn btn-outline-primary">
                Right
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-lg-12 my-2">
          <div
            className="btn-group"
            role="group"
            aria-label="Basic checkbox toggle button group"
          >
            <label className="btn btn-outline-primary" htmlFor="btncheck1">
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck1"
                autoComplete="off"
              />
              Checkbox 1
            </label>

            <label className="btn btn-outline-primary" htmlFor="btncheck2">
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck2"
                autoComplete="off"
              />
              Checkbox 2
            </label>

            <label className="btn btn-outline-primary" htmlFor="btncheck3">
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck3"
                autoComplete="off"
              />
              Checkbox 3
            </label>
          </div>
          <div className="col-sm-12 col-lg-12 my-2">
            <div
              className="btn-group"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <label className="btn btn-outline-primary" htmlFor="btnradio1">
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btnradio1"
                  autoComplete="off"
                  checked
                />
                Radio 1
              </label>

              <label className="btn btn-outline-primary" htmlFor="btnradio2">
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btnradio2"
                  autoComplete="off"
                />
                Radio 2
              </label>

              <label className="btn btn-outline-primary" htmlFor="btnradio3">
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btnradio3"
                  autoComplete="off"
                />
                Radio 3
              </label>
            </div>
          </div>
          <div className="col-sm-12 col-lg-12 my-2">
            <div
              className="btn-toolbar"
              role="toolbar"
              aria-label="Toolbar with button groups"
            >
              <div
                className="btn-group me-2"
                role="group"
                aria-label="First group"
              >
                <button type="button" className="btn btn-primary">
                  1
                </button>
                <button type="button" className="btn btn-primary">
                  2
                </button>
                <button type="button" className="btn btn-primary">
                  3
                </button>
                <button type="button" className="btn btn-primary">
                  4
                </button>
              </div>
              <div
                className="btn-group me-2"
                role="group"
                aria-label="Second group"
              >
                <button type="button" className="btn btn-secondary">
                  5
                </button>
                <button type="button" className="btn btn-secondary">
                  6
                </button>
                <button type="button" className="btn btn-secondary">
                  7
                </button>
              </div>
              <div className="btn-group" role="group" aria-label="Third group">
                <button type="button" className="btn btn-info">
                  8
                </button>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-lg-12 my-2">
            <div
              className="btn-toolbar mb-3"
              role="toolbar"
              aria-label="Toolbar with button groups"
            >
              <div
                className="btn-group me-2"
                role="group"
                aria-label="First group"
              >
                <button type="button" className="btn btn-outline-secondary">
                  1
                </button>
                <button type="button" className="btn btn-outline-secondary">
                  2
                </button>
                <button type="button" className="btn btn-outline-secondary">
                  3
                </button>
                <button type="button" className="btn btn-outline-secondary">
                  4
                </button>
              </div>
              <div className="input-group">
                <div className="input-group-text" id="btnGroupAddon">
                  @
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Input group example"
                  aria-label="Input group example"
                  aria-describedby="btnGroupAddon"
                />
              </div>
            </div>

            <div
              className="btn-toolbar justify-content-between"
              role="toolbar"
              aria-label="Toolbar with button groups"
            >
              <div className="btn-group" role="group" aria-label="First group">
                <button type="button" className="btn btn-outline-secondary">
                  1
                </button>
                <button type="button" className="btn btn-outline-secondary">
                  2
                </button>
                <button type="button" className="btn btn-outline-secondary">
                  3
                </button>
                <button type="button" className="btn btn-outline-secondary">
                  4
                </button>
              </div>
              <div className="input-group">
                <div className="input-group-text" id="btnGroupAddon2">
                  @
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Input group example"
                  aria-label="Input group example"
                  aria-describedby="btnGroupAddon2"
                />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-12 my-2">
            <div
              className="btn-group btn-group-lg"
              role="group"
              aria-label="Basic example"
            >
              <button type="button" className="btn btn-outline-secondary">
                Left
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-group "
              >
                Middle
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-group btn-group-sm"
              >
                Right
              </button>
            </div>
            <div className="col-sm-12 col-lg-12 my-2">
              <div
                className="btn-group"
                role="group"
                aria-label="Basic example"
              >
                <button type="button" className="btn btn-outline-secondary">
                  Left
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-group "
                >
                  Middle
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-group btn-group-sm"
                >
                  Right
                </button>
              </div>
            </div>
            <div className="col-sm-12 col-lg-12 my-2">
              <div
                className="btn-group btn-group-sm"
                role="group"
                aria-label="Basic example"
              >
                <button type="button" className="btn btn-outline-secondary">
                  Left
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-group "
                >
                  Middle
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-group btn-group-sm"
                >
                  Right
                </button>
              </div>
              <div className="col-sm-12 col-lg-12 my-2">
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Button group with nested dropdown"
                >
                  <button type="button" className="btn btn-primary">
                    1
                  </button>
                  <button type="button" className="btn btn-primary">
                    2
                  </button>

                  <div className="btn-group" role="group">
                    <button
                      id="btnGroupDrop1"
                      type="button"
                      className="btn btn-primary dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="btnGroupDrop1"
                    >
                      <li>
                        <a className="dropdown-item" href="#/">
                          Dropdown link
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#/">
                          Dropdown link
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-lg-12 my-2">
                <div
                  className="btn-group-vertical"
                  role="group"
                  aria-label="Button group with nested dropdown"
                >
                  <button type="button" className="btn btn-primary">
                    Button
                  </button>
                  <button type="button" className="btn btn-primary">
                    Button
                  </button>

                  <div className="btn-group-vertical" role="group">
                    <button
                      id="btnGroupDrop1"
                      type="button"
                      className="btn btn-primary dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="btnGroupDrop1"
                    >
                      <li>
                        <a className="dropdown-item" href="#/">
                          Dropdown link
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#/">
                          Dropdown link
                        </a>
                      </li>
                    </ul>
                    <button type="button" className="btn btn-primary">
                      Button
                    </button>
                    <button type="button" className="btn btn-primary">
                      Button
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-lg-12 my-2">
                <div
                  className="btn-group-vertical"
                  role="group"
                  aria-label="Button group with nested dropdown"
                >
                  <button type="button" className="btn btn-outline-danger">
                    Button
                  </button>
                  <button type="button" className="btn btn-outline-danger">
                    Button
                  </button>
                  <button type="button" className="btn btn-outline-danger">
                    Button
                  </button>
                  <button type="button" className="btn btn-outline-danger">
                    Button
                  </button>
                  <button type="button" className="btn btn-outline-danger">
                    Button
                  </button>
                  <button type="button" className="btn btn-outline-danger">
                    Button
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Buttons;
