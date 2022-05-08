import React from 'react';

function Stacks() {
  return (
    <div className="container px-4 py-5">
      <div className="row g-5 py-5">
        <div className="col-sm-12 col-lg-12">
          <h4>Stack Examples</h4>
          <div className="col-sm-12 col-lg-12">
            <h5>Vertical Stack</h5>
            <div className="vstack gap-3">
              <div className="bg-light border">First item</div>
              <div className="bg-light border">Second item</div>
              <div className="bg-light border">Third item</div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-12">
            <h5>Horizontal Stack</h5>
            <div className="hstack gap-3">
              <div className="bg-light border">First item</div>
              <div className="bg-light border">Second item</div>
              <div className="bg-light border">Third item</div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-12">
            <h5>Horizontal Stack with margin utilities</h5>
            <div className="hstack gap-3">
              <div className="bg-light border">First item</div>
              <div className="bg-light border ms-auto">Second item</div>
              <div className="bg-light border">Third item</div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-12">
            <h5>Horizontal Stack with vertical rules</h5>
            <div className="hstack gap-3">
              <div className="bg-light border">First item</div>
              <div className="bg-light border ms-auto">Second item</div>
              <div className="vr" />
              <div className="bg-light border">Third item</div>
            </div>
          </div>
          <div className="col-sm-4 col-lg-4">
            <h5>Stack examples</h5>
            <div className="vstack gap-2 col-md-5 mx-auto">
              <button type="button" className="btn btn-secondary">
                Save changes
              </button>
              <button type="button" className="btn btn-outline-secondary">
                Cancel
              </button>
            </div>
          </div>
          <div className="col-sm-8 col-lg-8">
            <h5>Horizontal Stack with a inline form </h5>
            <div className="hstack gap-3">
              <input
                className="form-control me-auto"
                type="text"
                placeholder="Add your item here..."
                aria-label="Add your item here..."
              />

              <button type="button" className="btn btn-secondary">
                Submit
              </button>
              <div className="vr" />
              <button type="button" className="btn btn-outline-danger">
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Stacks;
