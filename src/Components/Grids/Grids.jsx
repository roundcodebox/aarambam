import React from 'react';

function Grids() {
  return (
    <main>
      <div className="container">
        <h1>React Starter kit grid examples</h1>
        <p className="lead">
          Basic grid layouts to get you familiar with building within the
          Bootstrap grid system.
        </p>
        <p>
          In these examples the <code>.themed-grid-col</code> class is added to
          the columns to add some theming. This is not a class that is available
          in Bootstrap by default.
        </p>

        <h2 className="mt-4">Five grid tiers</h2>
        <p>
          There are five tiers to the Bootstrap grid system, one for each range
          of devices we support. Each tier starts at a minimum viewport size and
          automatically applies to the larger devices unless overridden.
        </p>

        <div className="row mb-3">
          <div className="col-4 themed-grid-col bg-secondary text-white text-white py-2 my-2">
            .col-4
          </div>
          <div className="col-4 themed-grid-col bg-secondary text-white py-2 my-2">
            .col-4
          </div>
          <div className="col-4 themed-grid-col bg-secondary text-white py-2 my-2">
            .col-4
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-sm-4 themed-grid-col bg-secondary text-white py-2 my-2">
            .col-sm-4
          </div>
          <div className="col-sm-4 themed-grid-col bg-secondary text-white py-2 my-2">
            .col-sm-4
          </div>
          <div className="col-sm-4 themed-grid-col bg-secondary text-white py-2 my-2">
            .col-sm-4
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-4 themed-grid-col bg-secondary text-white py-2 my-2">
            .col-md-4
          </div>
          <div className="col-md-4 themed-grid-col bg-secondary text-white py-2 my-2">
            .col-md-4
          </div>
          <div className="col-md-4 themed-grid-col bg-secondary text-white py-2 my-2">
            .col-md-4
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-lg-4 themed-grid-col bg-secondary text-white py-2 my-2">
            .col-lg-4
          </div>
          <div className="col-lg-4 themed-grid-col bg-secondary text-white py-2 my-2">
            .col-lg-4
          </div>
          <div className="col-lg-4 themed-grid-col bg-secondary text-white py-2 my-2">
            .col-lg-4
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-xl-4 themed-grid-col bg-secondary text-white py-2 my-2">
            .col-xl-4
          </div>
          <div className="col-xl-4 themed-grid-col bg-secondary text-white py-2 my-2">
            .col-xl-4
          </div>
          <div className="col-xl-4 themed-grid-col bg-secondary text-white py-2 my-2">
            .col-xl-4
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-xxl-4 themed-grid-col bg-secondary text-white py-2 my-2">
            .col-xxl-4
          </div>
          <div className="col-xxl-4 themed-grid-col bg-secondary text-white py-2 my-2">
            .col-xxl-4
          </div>
          <div className="col-xxl-4 themed-grid-col bg-secondary text-white py-2 my-2">
            .col-xxl-4
          </div>
        </div>

        <h2 className="mt-4">Three equal columns</h2>
        <p>
          Get three equal-width columns
          <strong>starting at desktops and scaling to large desktops</strong>.
          On mobile devices, tablets and below, the columns will automatically
          stack.
        </p>
        <div className="row mb-3">
          <div className="col-md-4 themed-grid-col bg-secondary text-white py-2 my-2">
            .col-md-4
          </div>
          <div className="col-md-4 themed-grid-col bg-secondary text-white py-2 my-2">
            .col-md-4
          </div>
          <div className="col-md-4 themed-grid-col bg-secondary text-white py-2 my-2">
            .col-md-4
          </div>
        </div>

        <h2 className="mt-4">Three equal columns alternative</h2>
        <p>
          By using the <code>.row-cols-*</code> classes, you can easily create a
          grid with equal columns.
        </p>
        <div className="row row-cols-md-3 mb-3">
          <div className="col themed-grid-col bg-secondary text-white py-2 my-2">
            <code>.col</code> child of <code>.row-cols-md-3</code>
          </div>
          <div className="col themed-grid-col bg-secondary text-white py-2 my-2">
            <code>.col</code> child of <code>.row-cols-md-3</code>
          </div>
          <div className="col themed-grid-col bg-secondary text-white py-2 my-2">
            <code>.col</code> child of <code>.row-cols-md-3</code>
          </div>
        </div>

        <h2 className="mt-4">Three unequal columns</h2>
        <p>
          Get three columns
          <strong>starting at desktops and scaling to large desktops</strong> of
          various widths. Remember, grid columns should add up to twelve for a
          single horizontal block. More than that, and columns start stacking no
          matter the viewport.
        </p>
        <div className="row mb-3">
          <div className="col-md-3 themed-grid-col bg-secondary text-white py-2 my-2">
            .col-md-3
          </div>
          <div className="col-md-6 themed-grid-col bg-secondary text-white py-2 my-2">
            .col-md-6
          </div>
          <div className="col-md-3 themed-grid-col bg-secondary text-white py-2 my-2">
            .col-md-3
          </div>
        </div>

        <h2 className="mt-4">Two columns</h2>
        <p>
          Get two columns
          <strong>starting at desktops and scaling to large desktops</strong>.
        </p>
        <div className="row mb-3">
          <div className="col-md-8 themed-grid-col bg-secondary text-white py-2 my-2">
            .col-md-8
          </div>
          <div className="col-md-4 themed-grid-col bg-secondary text-white py-2 my-2">
            .col-md-4
          </div>
        </div>

        <h2 className="mt-4">Full width, single column</h2>
        <p className="text-warning">
          No grid classes are necessary for full-width elements.
        </p>

        <hr className="my-4" />

        <h2 className="mt-4">Two columns with two nested columns</h2>
        <p>
          Per the documentation, nesting is easy—just put a row of columns
          within an existing column. This gives you two columns
          <strong>starting at desktops and scaling to large desktops</strong>,
          with another two (equal widths) within the larger column.
        </p>
        <p>
          At mobile device sizes, tablets and down, these columns and their
          nested columns will stack.
        </p>
        <div className="row mb-3">
          <div className="col-md-8 themed-grid-col bg-secondary text-white py-2 my-2">
            <div className="pb-3">.col-md-8</div>
            <div className="row">
              <div className="col-md-6 themed-grid-col bg-secondary text-white py-2 my-2">
                .col-md-6
              </div>
              <div className="col-md-6 themed-grid-col bg-secondary text-white py-2 my-2">
                .col-md-6
              </div>
            </div>
          </div>
          <div className="col-md-4 themed-grid-col bg-secondary text-white py-2 my-2">
            .col-md-4
          </div>
        </div>

        <hr className="my-4" />

        <h2 className="mt-4">Mixed: mobile and desktop</h2>
        <p>
          The Bootstrap v4 grid system has five tiers of classes: xs (extra
          small, this class infix is not used), sm (small), md (medium), lg
          (large), and xl (extra large). You can use nearly any combination of
          these classes to create more dynamic and flexible layouts.
        </p>
        <p>
          Each tier of classes scales up, meaning if you plan on setting the
          same widths for md, lg and xl, you only need to specify md.
        </p>
        <div className="row mb-3">
          <div className="col-md-8 themed-grid-col bg-secondary text-white py-2 my-2">
            .col-md-8
          </div>
          <div className="col-6 col-md-4 themed-grid-col bg-secondary text-white py-2 my-2">
            .col-6 .col-md-4
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-6 col-md-4 themed-grid-col bg-secondary text-white py-2 my-2">
            .col-6 .col-md-4
          </div>
          <div className="col-6 col-md-4 themed-grid-col bg-secondary text-white py-2 my-2">
            .col-6 .col-md-4
          </div>
          <div className="col-6 col-md-4 themed-grid-col bg-secondary text-white py-2 my-2">
            .col-6 .col-md-4
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-6 themed-grid-col bg-secondary text-white py-2 my-2">
            .col-6
          </div>
          <div className="col-6 themed-grid-col bg-secondary text-white py-2 my-2">
            .col-6
          </div>
        </div>

        <hr className="my-4" />

        <h2 className="mt-4">Mixed: mobile, tablet, and desktop</h2>
        <div className="row mb-3">
          <div className="col-sm-6 col-lg-8 themed-grid-col bg-secondary text-white py-2 my-2">
            .col-sm-6 .col-lg-8
          </div>
          <div className="col-6 col-lg-4 themed-grid-col bg-secondary text-white py-2 my-2">
            .col-6 .col-lg-4
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-6 col-sm-4 themed-grid-col bg-secondary text-white py-2 my-2">
            .col-6 .col-sm-4
          </div>
          <div className="col-6 col-sm-4 themed-grid-col bg-secondary text-white py-2 my-2">
            .col-6 .col-sm-4
          </div>
          <div className="col-6 col-sm-4 themed-grid-col bg-secondary text-white py-2 my-2">
            .col-6 .col-sm-4
          </div>
        </div>

        <hr className="my-4" />

        <h2 className="mt-4">Gutters</h2>
        <p>
          With <code>.gx-*</code> classes, the horizontal gutters can be
          adjusted.
        </p>
        <div className="row row-cols-1 row-cols-md-3 gx-4">
          <div className="col themed-grid-col bg-secondary text-white py-2 my-2">
            <code>.col</code> with <code>.gx-4</code> gutters
          </div>
          <div className="col themed-grid-col bg-secondary text-white py-2 my-2">
            <code>.col</code> with <code>.gx-4</code> gutters
          </div>
          <div className="col themed-grid-col bg-secondary text-white py-2 my-2">
            <code>.col</code> with <code>.gx-4</code> gutters
          </div>
          <div className="col themed-grid-col bg-secondary text-white py-2 my-2">
            <code>.col</code> with <code>.gx-4</code> gutters
          </div>
          <div className="col themed-grid-col bg-secondary text-white py-2 my-2">
            <code>.col</code> with <code>.gx-4</code> gutters
          </div>
          <div className="col themed-grid-col bg-secondary text-white py-2 my-2">
            <code>.col</code> with <code>.gx-4</code> gutters
          </div>
        </div>
        <p className="mt-4">
          Use the <code>.gy-*</code> classes to control the vertical gutters.
        </p>
        <div className="row row-cols-1 row-cols-md-3 gy-4">
          <div className="col themed-grid-col bg-secondary text-white py-2 my-2">
            <code>.col</code> with <code>.gy-4</code> gutters
          </div>
          <div className="col themed-grid-col bg-secondary text-white py-2 my-2">
            <code>.col</code> with <code>.gy-4</code> gutters
          </div>
          <div className="col themed-grid-col bg-secondary text-white py-2 my-2">
            <code>.col</code> with <code>.gy-4</code> gutters
          </div>
          <div className="col themed-grid-col bg-secondary text-white py-2 my-2">
            <code>.col</code> with <code>.gy-4</code> gutters
          </div>
          <div className="col themed-grid-col bg-secondary text-white py-2 my-2">
            <code>.col</code> with <code>.gy-4</code> gutters
          </div>
          <div className="col themed-grid-col bg-secondary text-white py-2 my-2">
            <code>.col</code> with <code>.gy-4</code> gutters
          </div>
        </div>
        <p className="mt-4">
          With <code>.g-*</code> classes, the gutters in both directions can be
          adjusted.
        </p>
        <div className="row row-cols-1 row-cols-md-3 g-3">
          <div className="col themed-grid-col bg-secondary text-white py-2 my-2">
            <code>.col</code> with <code>.g-3</code> gutters
          </div>
          <div className="col themed-grid-col bg-secondary text-white py-2 my-2">
            <code>.col</code> with <code>.g-3</code> gutters
          </div>
          <div className="col themed-grid-col bg-secondary text-white py-2 my-2">
            <code>.col</code> with <code>.g-3</code> gutters
          </div>
          <div className="col themed-grid-col bg-secondary text-white py-2 my-2">
            <code>.col</code> with <code>.g-3</code> gutters
          </div>
          <div className="col themed-grid-col bg-secondary text-white py-2 my-2">
            <code>.col</code> with <code>.g-3</code> gutters
          </div>
          <div className="col themed-grid-col bg-secondary text-white py-2 my-2">
            <code>.col</code> with <code>.g-3</code> gutters
          </div>
        </div>
      </div>

      <div className="container" id="containers">
        <hr className="my-4" />

        <h2 className="mt-4">Containers</h2>
        <p>
          Additional classes added in Bootstrap v4.4 allow containers that are
          100% wide until a particular breakpoint. v5 adds a new
          <code>xxl</code> breakpoint.
        </p>
      </div>

      <div className="container themed-container bg-secondary text-white py-2 my-2">
        .container
      </div>
      <div className="container-sm themed-container bg-secondary text-white py-2 my-2">
        .container-sm
      </div>
      <div className="container-md themed-container bg-secondary text-white py-2 my-2">
        .container-md
      </div>
      <div className="container-lg themed-container bg-secondary text-white py-2 my-2">
        .container-lg
      </div>
      <div className="container-xl themed-container bg-secondary text-white py-2 my-2">
        .container-xl
      </div>
      <div className="container-xxl themed-container bg-secondary text-white py-2 my-2">
        .container-xxl
      </div>
      <div className="container-fluid themed-container bg-secondary text-white py-2 my-2">
        .container-fluid
      </div>
    </main>
  );
}
export default Grids;
