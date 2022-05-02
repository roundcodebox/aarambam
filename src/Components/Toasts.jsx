import React from 'react';
import { Container, Row, Col, Toast, ToastContainer } from 'react-bootstrap';
import ToastsAutohide from './ToastsAutohide';
import ToastPlacement from './ToastPlacement';
import ToastsDismissible from './ToastsDismissible';

function Toasts() {
  return (
    <Container>
      <Row>
        <Col sm={4}>
          <h4> Basic Example</h4>
          <Toast>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
          </Toast>
        </Col>
        <Col sm={4}>
          <h4> Stacking Toasts</h4>
          <ToastContainer>
            <Toast>
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded me-2"
                  alt=""
                />
                <strong className="me-auto">Bootstrap</strong>
                <small className="text-muted">just now</small>
              </Toast.Header>
              <Toast.Body>See? Just like this.</Toast.Body>
            </Toast>
            <Toast>
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded me-2"
                  alt=""
                />
                <strong className="me-auto">Bootstrap</strong>
                <small className="text-muted">2 seconds ago</small>
              </Toast.Header>
              <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
            </Toast>
          </ToastContainer>
        </Col>
        <Col sm={4}>
          <h4>Toasts Placements</h4>
          <div
            aria-live="polite"
            aria-atomic="true"
            className="bg-dark position-relative"
            style={{ minHeight: '240px' }}
          >
            <ToastContainer position="top-end" className="p-3">
              <Toast>
                <Toast.Header>
                  <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                  />
                  <strong className="me-auto">Bootstrap</strong>
                  <small className="text-muted">just now</small>
                </Toast.Header>
                <Toast.Body>See? Just like this.</Toast.Body>
              </Toast>
              <Toast>
                <Toast.Header>
                  <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                  />
                  <strong className="me-auto">Bootstrap</strong>
                  <small className="text-muted">2 seconds ago</small>
                </Toast.Header>
                <Toast.Body>
                  Heads up, toasts will stack automatically
                </Toast.Body>
              </Toast>
            </ToastContainer>
          </div>
        </Col>
        <Col sm={4}>
          <h4> Stacking Toasts</h4>
          <>
            {[
              'Primary',
              'Secondary',
              'Success',
              'Danger',
              'Warning',
              'Info',
              'Light',
              'Dark',
            ].map((variant, idx) => (
              <Toast
                className="d-inline-block m-1"
                bg={variant.toLowerCase()}
                // eslint-disable-next-line react/no-array-index-key
                key={idx}
              >
                <Toast.Header>
                  <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                  />
                  <strong className="me-auto">Bootstrap</strong>
                  <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body className={variant === 'Dark' && 'text-white'}>
                  Hello, world! This is a toast message.
                </Toast.Body>
              </Toast>
            ))}
          </>
        </Col>
        <Col>
          <ToastsAutohide />
        </Col>
        <ToastsDismissible />
        <ToastPlacement />
      </Row>
    </Container>
  );
}
export default Toasts;
