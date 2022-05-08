import React from 'react';

function Shadows() {
  return (
    <div className="container px-4 py-5">
      <div className="row px-4 py-5">
        <h4>Shadows</h4>
        <div className="col-sm-3">
          <div className="shadow-none p-3 mb-5 bg-light rounded">No shadow</div>
        </div>
        <div className="col-sm-3">
          <div className="shadow-sm p-3 mb-5 bg-body rounded">Small shadow</div>
        </div>
        <div className="col-sm-3">
          <div className="shadow p-3 mb-5 bg-body rounded">Regular shadow</div>
        </div>
        <div className="col-sm-3">
          <div className="shadow-lg p-3 mb-5 bg-body rounded">
            Larger shadow
          </div>
        </div>
      </div>
    </div>
  );
}
export default Shadows;
