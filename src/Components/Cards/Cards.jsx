import React from 'react';
import './Cards.scss';
import { FaCartPlus, FaRocket, FaCreditCard, FaRedo } from 'react-icons/fa';

function Cards() {
  return (
    <div className="container px-4 py-3">
      <div className="row g-2 py-5">
        <h4>Card Styles</h4>
        <div className="col-sm-4 col-lg-4">
          <h4>Card with background colors</h4>
          <div className="card text-white bg-primary mb-3">
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title">Primary card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card text-white bg-secondary mb-3">
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title">Secondary card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card text-white bg-success mb-3">
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title">Success card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card text-white bg-danger mb-3">
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title">Danger card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card text-dark bg-warning mb-3">
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title">Warning card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card text-dark bg-info mb-3">
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title">Info card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card text-dark bg-light mb-3">
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title">Light card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card text-white bg-dark mb-3">
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title">Dark card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-4 col-lg-4">
          <h4>Card Border Color</h4>
          <div className="card border-primary mb-3">
            <div className="card-header">Header</div>
            <div className="card-body text-primary">
              <h5 className="card-title">Primary card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card border-secondary mb-3">
            <div className="card-header">Header</div>
            <div className="card-body text-secondary">
              <h5 className="card-title">Secondary card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card border-success mb-3">
            <div className="card-header">Header</div>
            <div className="card-body text-success">
              <h5 className="card-title">Success card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card border-danger mb-3">
            <div className="card-header">Header</div>
            <div className="card-body text-danger">
              <h5 className="card-title">Danger card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card border-warning mb-3">
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title">Warning card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card border-info mb-3">
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title">Info card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card border-light mb-3">
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title">Light card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card border-dark mb-3">
            <div className="card-header">Header</div>
            <div className="card-body text-dark">
              <h5 className="card-title">Dark card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-4 col-lg-4">
          <h4>Basic Card</h4>
          <div className="card my-2">
            <img
              src="/assets/images/200x200.png"
              className="card-img-top"
              alt="Card cover"
              width="200"
              height="200"
              loading="lazy"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#/" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <h4>Card with title, text, and links</h4>
          <div className="card my-2">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#/" className="card-link">
                Card link
              </a>
              <a href="#/" className="card-link">
                Another link
              </a>
            </div>
          </div>
          <div className="card my-2">
            <img
              src="/assets/images/200x200.png"
              className="card-img-top"
              alt="Card cover"
              width="200"
              height="200"
              loading="lazy"
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <h4>Card with ListGroup</h4>
          <div className="card my-2" style={{ width: '18rem' }}>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">An item</li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
            </ul>
          </div>

          <div className="card my-2" style={{ width: '18rem' }}>
            <div className="card-header">Featured</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">An item</li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
            </ul>
            <div className="card-footer">Card footer</div>
          </div>

          <h4>Card Kitchen Sink</h4>
          <div className="card my-2" style={{ width: '18rem' }}>
            <img
              src="/assets/images/200x200.png"
              className="card-img-top"
              alt="Card cover"
              width="200"
              height="200"
              loading="lazy"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">An item</li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
            </ul>
            <div className="card-body">
              <a href="#/" className="card-link">
                Card link
              </a>
              <a href="#/" className="card-link">
                Another link
              </a>
            </div>
          </div>
          <h4>Card with header and button</h4>
          <div className="card">
            <div className="card-header">Featured</div>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#/" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-6">
          <h4>Card with header and footer</h4>
          <div className="card text-center">
            <div className="card-header">Featured</div>
            <div className="card-body">
              `` <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#/" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
            <div className="card-footer text-muted">2 days ago</div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-6">
          <h4>Quote in a Card</h4>
          <div className="card">
            <div className="card-header">Quote</div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <p>A well-known quote, contained in a blockquote element.</p>
                <footer className="blockquote-footer">
                  Someone famous in{' '}
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      <h6>Card wrapped with grids </h6>
      <div className="row g-5">
        <div className="col-sm-6 col-lg-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#/" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#/" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-lg-12">
          <h4>Card with custom width</h4>
          <div className="card w-75">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#/" className="btn btn-primary">
                Button
              </a>
            </div>
          </div>

          <div className="card w-50 my-2">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#/" className="btn btn-primary">
                Button
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-lg-12">
          <h4>Card alignment</h4>
          <div className="card my-2" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#/" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div className="card text-center my-2" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#/" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div className="card text-end my-2" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#/" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div className="row g-5 py-5">
            <div className="col-sm-6 col-lg-6 my-2">
              <div className="card text-center">
                <div className="card-header">
                  <ul className="nav nav-tabs card-header-tabs">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="true"
                        href="#/"
                      >
                        Active
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#/">
                        Link
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link disabled" href="#/">
                        Disabled
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#/" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-6 my-2">
              <div className="card text-center">
                <div className="card-header">
                  <ul className="nav nav-pills card-header-pills">
                    <li className="nav-item">
                      <a className="nav-link active" href="#/">
                        Active
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#/">
                        Link
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link disabled" href="#/">
                        Disabled
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#/" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-5 py-5">
            <div className="col-sm-6 col-lg-6 my-2">
              <h6>Card with Image Overlays</h6>
              <div className="card mb-3">
                <img
                  src="/assets/images/468x240.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-6 my-2">
              <h6>Card with Image Overlays</h6>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
                <img
                  src="/assets/images/468x240.png"
                  className="card-img-bottom"
                  alt="..."
                />
              </div>
            </div>
            <div className="col-sm-3 col-lg-3" />
            <div className="col-sm-6 col-lg-6">
              <h6>Card with Image Overlays</h6>
              <div className="card bg-dark text-white">
                <img
                  src="/assets/images/468x240.png"
                  className="card-img-bottom"
                  alt="..."
                />
                <div className="card-img-overlay">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">Last updated 3 mins ago</p>
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-lg-3" />
          </div>
        </div>
        <div className="col-md-4 col-xl-3">
          <div className="card bg-c-blue order-card">
            <div className="card-block">
              <h6 className="m-b-20">Orders Received</h6>
              <h2 className="text-right">
                <FaCartPlus className="fa fa-cart-plus f-left" />
                <span>486</span>
              </h2>
              <p className="m-b-0">
                Completed Orders<span className="f-right">351</span>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-xl-3">
          <div className="card bg-c-green order-card">
            <div className="card-block">
              <h6 className="m-b-20">Orders Received</h6>
              <h2 className="text-right">
                <FaRocket className="fa fa-rocket f-left" />
                <span>486</span>
              </h2>
              <p className="m-b-0">
                Completed Orders<span className="f-right">351</span>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-xl-3">
          <div className="card bg-c-yellow order-card">
            <div className="card-block">
              <h6 className="m-b-20">Orders Received</h6>
              <h2 className="text-right">
                <FaRedo className="fa fa-refresh f-left" />
                <span>486</span>
              </h2>
              <p className="m-b-0">
                Completed Orders<span className="f-right">351</span>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-xl-3">
          <div className="card bg-c-pink order-card">
            <div className="card-block">
              <h6 className="m-b-20">Orders Received</h6>
              <h2 className="text-right">
                <FaCreditCard className="fa fa-credit-card f-left" />
                <span>486</span>
              </h2>
              <p className="m-b-0">
                Completed Orders<span className="f-right">351</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cards;
