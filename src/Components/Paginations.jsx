import React from 'react';

function Paginations() {
  return (
    <div className="container px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-sm-12">
          <h4>Pagination examples</h4>
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#/">
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#/">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#/">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#/">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#/">
                  Next
                </a>
              </li>
            </ul>
          </nav>
          <h4>Pagination Working with icons</h4>
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#/" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#/">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#/">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#/">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#/" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
          <h4>Pagination with Disabled and active states</h4>
          <nav aria-label="...">
            <ul className="pagination">
              <li className="page-item disabled">
                <a className="page-link" href="#/">
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#/">
                  1
                </a>
              </li>
              <li className="page-item active" aria-current="page">
                <a className="page-link" href="#/">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#/">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#/">
                  Next
                </a>
              </li>
            </ul>
          </nav>
          <nav aria-label="...">
            <ul className="pagination">
              <li className="page-item disabled">
                <span className="page-link">Previous</span>
              </li>
              <li className="page-item">
                <a className="page-link" href="#/">
                  1
                </a>
              </li>
              <li className="page-item active" aria-current="page">
                <span className="page-link">2</span>
              </li>
              <li className="page-item">
                <a className="page-link" href="#/">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#/">
                  Next
                </a>
              </li>
            </ul>
          </nav>
          <h4>Pagination Sizes</h4>
          <nav aria-label="...">
            <ul className="pagination pagination-lg">
              <li className="page-item active" aria-current="page">
                <span className="page-link">1</span>
              </li>
              <li className="page-item">
                <a className="page-link" href="#/">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#/">
                  3
                </a>
              </li>
            </ul>
          </nav>
          <nav aria-label="...">
            <ul className="pagination pagination-sm">
              <li className="page-item active" aria-current="page">
                <span className="page-link">1</span>
              </li>
              <li className="page-item">
                <a className="page-link" href="#/">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#/">
                  3
                </a>
              </li>
            </ul>
          </nav>
          <h4>Pagination Alignment</h4>
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                <a className="page-link" href="#/">
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#/">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#/">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#/">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#/">
                  Next
                </a>
              </li>
            </ul>
          </nav>
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end">
              <li className="page-item disabled">
                <a className="page-link" href="#/">
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#/">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#/">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#/">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#/">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-sm-12" />
      </div>
    </div>
  );
}
export default Paginations;
