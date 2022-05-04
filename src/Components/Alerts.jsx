import React from 'react';
import { Alert, Container, Row, Col } from 'react-bootstrap';
import AlertDismissible from './AlertDismissible';
import AlertDismissibleExample from './AlertDismissibleExample';

function Alerts() {
  return (
    <Container>
      <Row>
        <Col sm={6}>
          <h4>Alerts Example</h4>
          {[
            'primary',
            'secondary',
            'success',
            'danger',
            'warning',
            'info',
            'light',
            'dark',
          ].map((variant) => (
            <Alert key={variant} variant={variant}>
              This is a {variant} alert—check it out!
            </Alert>
          ))}
        </Col>
        <Col sm={6}>
          <h4>Alerts with Links Example</h4>
          {[
            'primary',
            'secondary',
            'success',
            'danger',
            'warning',
            'info',
            'light',
            'dark',
          ].map((variant) => (
            <Alert key={variant} variant={variant}>
              This is a {variant} alert with{' '}
              <Alert.Link href="#/">an example link</Alert.Link>. Give it a
              click if you like.
            </Alert>
          ))}
        </Col>
        <Col sm={12}>
          <h4>Alerts with additional content</h4>
          <Alert variant="success">
            <Alert.Heading>Hey, nice to see you</Alert.Heading>
            <p>
              Aww yeah, you successfully read this important alert message. This
              example text is going to run a bit longer so that you can see how
              spacing within an alert works with this kind of content.
            </p>
            <hr />
            <p className="mb-0">
              Whenever you need to, be sure to use margin utilities to keep
              things nice and tidy.
            </p>
          </Alert>
          <AlertDismissibleExample />
          <AlertDismissible />
        </Col>
      </Row>
    </Container>
  );
}
export default Alerts;
