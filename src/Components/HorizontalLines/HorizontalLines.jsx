import React from 'react';
import './HorizontalLines.scss';

function HorizontalLines() {
  return (
    <div className="container px-4 py-5">
      <div className="row g-5 py-5">
        <div className="col-sm-12 col-lg-12">
          <div className="wrapper">
            <div className="divider div-transparent" />
            <div className="divider div-transparent div-arrow-down" />
            <div className="divider div-transparent div-tab-down" />
            <div className="divider div-transparent div-stopper" />
            <div className="divider div-transparent div-dot" />
          </div>
          <div className="wrapper">
            <hr className="hr-text" data-content="AND" />
            <br />
            <hr className="hr-text" data-content="OR" />
          </div>
          <div className="text-hr">
            <span className="text-hr__text">Standard</span>
          </div>

          <div className="text-hr text-hr--right">
            <span className="text-hr__text">Right Aligned</span>
          </div>

          <div className="text-hr text-hr--double">
            <span className="text-hr__text">Double</span>
            <span className="text-hr__text">Sided</span>
          </div>

          <div className="text-hr text-hr--center">
            <span className="text-hr__text">Centered</span>
          </div>

          <div className="text-hr text-hr--triple">
            <span className="text-hr__text">First</span>
            <span className="text-hr__text">Second</span>
            <span className="text-hr__text">Third</span>
          </div>

          <div className="text-hr text-hr--loud">
            <span className="text-hr__text">First</span>
          </div>

          <div className="text-hr text-hr--double text-hr--loud">
            <span className="text-hr__text">First</span>
            <span className="text-hr__text">Second</span>
          </div>

          <br />
          <hr className="style1" />
          <br />
          <hr className="style2" />
          <br />
          <hr className="style3" />
          <br />
          <hr className="style4" />
          <br />
          <hr className="style5" />
          <br />
          <hr className="style6" />
          <br />
          <hr className="style7" />
          <br />
          <hr className="style8" />
          <br />
          <hr className="style9" />
          <br />
          <hr className="style10" />
          <br />
          <hr className="style11" />
          <br />
          <hr className="style12" />
          <br />
          <hr className="style13" />
          <br />
          <hr className="style14" />
          <br />
          <hr className="style15" />
          <br />
          <hr className="style16" />
          <br />
          <hr className="style17" />
          <br />
          <hr className="style18" />
        </div>
      </div>
    </div>
  );
}
export default HorizontalLines;
