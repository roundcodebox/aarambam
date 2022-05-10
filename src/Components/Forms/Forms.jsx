import React from 'react';

function Forms() {
  return (
    <div className="container px-4 py-5">
      <div className="row g-5 py-5">
        <div className="col-sm-6 col-lg-6">
          <h1>Forms Overview</h1>
          <form>
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label col-sm-12"
              >
                Email address
                <input
                  type="email"
                  className="form-control col-sm-12"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </label>
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label col-sm-12"
              >
                Password
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </label>
            </div>
            <div className="mb-3 form-check">
              <label
                className="form-check-label col-sm-12"
                htmlFor="exampleCheck1"
              >
                Check me out
                <input
                  type="checkbox"
                  className="form-check-input col-sm-12"
                  id="exampleCheck1"
                />
              </label>
            </div>
            <button type="submit" className="btn btn-primary col-sm-12">
              Submit
            </button>
          </form>
        </div>
        <div className="col-sm-6 col-lg-6">
          <h1>Disabled Forms</h1>
          <form>
            <form>
              <fieldset disabled>
                <div className="mb-3">
                  <label
                    htmlFor="disabledTextInput"
                    className="form-label  col-sm-12"
                  >
                    <input
                      type="text"
                      id="disabledTextInput"
                      className="form-control  col-sm-12"
                      placeholder="Disabled input"
                    />
                    Disabled input
                  </label>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="disabledSelect"
                    className="form-label  col-sm-12"
                  >
                    Disabled select menu
                    <select id="disabledSelect" className="form-select">
                      <option>Disabled select</option>
                    </select>
                  </label>
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <label
                      className="form-check-label col-sm-12"
                      htmlFor="disabledFieldsetCheck"
                    >
                      Can't check this
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="disabledFieldsetCheck"
                        disabled
                      />
                    </label>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary  col-sm-12">
                  Submit
                </button>
              </fieldset>
            </form>
          </form>
        </div>
        <div className="col-sm-6 col-lg-6">
          <h2>Forms controls</h2>
          <div className="mb-3">
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label col-sm-12"
            >
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
              Email address
            </label>
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleFormControlTextarea1"
              className="form-label col-sm-12"
            >
              <textarea
                className="form-control col-sm-12"
                id="exampleFormControlTextarea1"
                rows="3"
              />
              Example textarea
            </label>
          </div>
        </div>
        <div className="col-sm-6 col-lg-6">
          <h6>Input field Size</h6>
          <input
            className="form-control form-control-lg my-2"
            type="text"
            placeholder=".form-control-lg"
            aria-label=".form-control-lg example"
          />
          <input
            className="form-control my-2"
            type="text"
            placeholder="Default input"
            aria-label="default input example"
          />
          <input
            className="form-control form-control-sm my-2"
            type="text"
            placeholder=".form-control-sm"
            aria-label=".form-control-sm example"
          />
        </div>
        <div className="col-sm-6 col-lg-6">
          <h6>Readonly plain text</h6>
          <div className="mb-3 row">
            <label
              htmlFor="staticEmail"
              className="col-sm-2 col-form-label col-sm-12"
            >
              Email
              <input
                type="text"
                readOnly
                className="form-control-plaintext col-sm-12"
                id="staticEmail"
                value="email@example.com"
              />
            </label>
          </div>
          <div className="mb-3 row">
            <label
              htmlFor="inputPassword"
              className="col-sm-2 col-form-label col-sm-12"
            >
              Password
              <input
                type="password"
                className="form-control col-sm-12"
                id="inputPassword"
              />
            </label>
          </div>
        </div>
        <div className="col-sm-6 col-lg-6">
          <h6>File input sizes</h6>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label col-sm-12">
              Default file input example
              <input className="form-control" type="file" id="formFile" />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="formFileMultiple" className="form-label col-sm-12">
              Multiple files input example
              <input
                className="form-control"
                type="file"
                id="formFileMultiple"
                multiple
              />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="formFileDisabled" className="form-label col-sm-12">
              Disabled file input example
              <input
                className="form-control"
                type="file"
                id="formFileDisabled"
                disabled
              />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="formFileSm" className="form-label col-sm-12">
              Small file input example
              <input
                className="form-control form-control-sm"
                id="formFileSm"
                type="file"
              />
            </label>
          </div>
          <div>
            <label htmlFor="formFileLg" className="form-label col-sm-12">
              Large file input example
              <input
                className="form-control form-control-lg"
                id="formFileLg"
                type="file"
              />
            </label>
          </div>
        </div>
        <div className="col-sm-6 col-lg-6">
          <h6>Readonly plain text </h6>
          <label htmlFor="exampleColorInput" className="form-label">
            Color picker
            <input
              type="color"
              className="form-control form-control-color"
              id="exampleColorInput"
              value="#563d7c"
              title="Choose your color"
            />
          </label>
        </div>
        <div className="col-sm-6 col-lg-6">
          <h6>Select from datalists</h6>
          <label htmlFor="exampleDataList" className="form-label col-sm-12">
            Datalist example
            <input
              className="form-control col-sm-12"
              list="datalistOptions"
              id="exampleDataList"
              placeholder="Type to search..."
            />
          </label>
          <datalist id="datalistOptions">
            <option value="San Francisco">San Francisco</option>
            <option value="New York">New York</option>
            <option value="Seattle">Seattle</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Chicago">Chicago</option>
          </datalist>
        </div>
        <div className="col-sm-6 col-lg-6">
          <h6>Select </h6>
          <select className="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="col-sm-6 col-lg-6">
          <h6>select sizes</h6>

          <select
            className="form-select form-select-lg mb-3"
            aria-label=".form-select-lg example"
          >
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <select
            className="form-select my-2"
            aria-label="Default select example"
          >
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <select
            className="form-select form-select-sm my-2"
            aria-label=".form-select-sm example"
          >
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="col-sm-6 col-lg-6">
          <h6>Checkboxes</h6>
          <div className="form-check">
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Default checkbox
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label" htmlFor="flexCheckChecked">
              Checked checkbox
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                checked
              />
            </label>
          </div>
          <div className="form-check">
            <label
              className="form-check-label"
              htmlFor="flexCheckIndeterminate"
            >
              Indeterminate checkbox
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckIndeterminate"
              />
            </label>
          </div>
          <h6>Switches</h6>
          <div className="form-check form-switch">
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Default switch checkbox input
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
            </label>
          </div>
          <div className="form-check form-switch">
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckChecked"
            >
              Checked switch checkbox input
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                checked
              />
            </label>
          </div>
          <div className="form-check form-switch">
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDisabled"
            >
              Disabled switch checkbox input
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDisabled"
                disabled
              />
            </label>
          </div>
          <div className="form-check form-switch">
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckCheckedDisabled"
            >
              Disabled checked switch checkbox input
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckCheckedDisabled"
                checked
                disabled
              />
            </label>
          </div>
          <h6>Vertically stacked checkboxes</h6>
          <div className="form-check">
            <label className="form-check-label" htmlFor="defaultCheck1">
              Default checkbox
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label" htmlFor="defaultCheck2">
              Disabled checkbox
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck2"
                disabled
              />
            </label>
          </div>
          <h6>Vertically stacked radioboxes</h6>
          <div className="form-check">
            <label className="form-check-label" htmlFor="exampleRadios1">
              Default radio
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
                checked
              />
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label" htmlFor="exampleRadios2">
              Second default radio
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                value="option2"
              />
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label" htmlFor="exampleRadios3">
              Disabled radio
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios3"
                value="option3"
                disabled
              />
            </label>
          </div>
          <h6>horizontal stacked checkboxes</h6>
          <div className="form-check form-check-inline">
            <label className="form-check-label" htmlFor="inlineCheckbox1">
              1
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="option1"
              />
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label" htmlFor="inlineCheckbox2">
              2
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox2"
                value="option2"
              />
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label" htmlFor="inlineCheckbox3">
              3 (disabled)
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox3"
                value="option3"
                disabled
              />
            </label>
          </div>
          <h6>horizontal stacked radioboxes</h6>
          <div className="form-check form-check-inline">
            <label className="form-check-label" htmlFor="inlineRadio1">
              1
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label" htmlFor="inlineRadio2">
              2
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label" htmlFor="inlineRadio3">
              3 (disabled)
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio3"
                value="option3"
                disabled
              />
            </label>
          </div>
          <div className="col-sm-6 col-lg-6">
            <h6>Range Examples</h6>
            <label htmlFor="customRange1" className="form-label">
              Range
              <input type="range" className="form-range" id="customRange1" />
            </label>
            <label htmlFor="customRange2" className="form-label">
              Range with steps
              <input
                type="range"
                className="form-range"
                min="0"
                max="5"
                id="customRange2"
              />
            </label>
          </div>
          <div className="col-sm-12 col-lg-12" />
        </div>
      </div>
    </div>
  );
}
export default Forms;
