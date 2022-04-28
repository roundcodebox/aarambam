import React from 'react';
import {
  Container, Row, Col, Button, ToggleButtonGroup, ToggleButton
} from 'react-bootstrap';

function Buttons() {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h1>Buttons</h1>
          <br />
          <Button variant="primary">Primary</Button>
          {' '}
          <Button variant="secondary">Secondary</Button>
          {' '}
          <Button variant="success">Success</Button>
          {' '}
          <Button variant="warning">Warning</Button>
          {' '}
          <Button variant="danger">Danger</Button>
          {' '}
          <Button variant="info">Info</Button>
          {' '}
          <Button variant="light">Light</Button>
          {' '}
          <Button variant="dark">Dark</Button>
          {' '}
          <Button variant="link">Link</Button>
          {' '}
        </Col>
        <Col xs={12}>
          <br />
          <Button variant="primary" className="disabled">
            Primary
          </Button>
          {' '}
          <Button variant="secondary" className="disabled">
            Secondary
          </Button>
          {' '}
          <Button variant="success" className="disabled">
            Success
          </Button>
          {' '}
          <Button variant="warning" className="disabled">
            Warning
          </Button>
          {' '}
          <Button variant="danger" className="disabled">
            Danger
          </Button>
          {' '}
          <Button variant="info" className="disabled">
            Info
          </Button>
          {' '}
          <Button variant="light" className="disabled">
            Light
          </Button>
          {' '}
          <Button variant="dark" className="disabled">
            Dark
          </Button>
          {' '}
          <Button variant="link" className="disabled">
            Link
          </Button>
        </Col>
        <Col xs={12}>
          <br />
          {' '}
          <Button variant="outline-primary">Primary</Button>
          {' '}
          <Button variant="outline-secondary">Secondary</Button>
          {' '}
          <Button variant="outline-success">Success</Button>
          {' '}
          <Button variant="outline-warning">Warning</Button>
          {' '}
          <Button variant="outline-danger">Danger</Button>
          {' '}
          <Button variant="outline-info">Info</Button>
          {' '}
          <Button variant="outline-light">Light</Button>
          {' '}
          <Button variant="outline-dark">Dark</Button>
        </Col>
        <Col xs={12}>
          <br />
          <Button href="#">Link</Button>
          {' '}
          <Button type="submit">Button</Button>
          {' '}
          <Button as="input" type="button" value="Input" />
          {' '}
          <Button as="input" type="submit" value="Submit" />
          {' '}
          <Button as="input" type="reset" value="Reset" />
        </Col>
        <Col xs={12}>
          <br />
          <div className="mb-2">
            <Button variant="primary" size="lg">
              Large button
            </Button>
            {' '}
            <Button variant="secondary" size="lg">
              Large button
            </Button>
          </div>
          <div>
            <Button variant="primary" size="sm">
              Small button
            </Button>
            {' '}
            <Button variant="secondary" size="sm">
              Small button
            </Button>
          </div>
        </Col>
        <Col xs={12}>
          <br />
          <div className="d-grid gap-2">
            <Button variant="primary" size="lg">
              Block level button
            </Button>
            <Button variant="secondary" size="lg">
              Block level button
            </Button>
          </div>
        </Col>
        <Col xs={12}>
          <br />
          <Button variant="primary" size="lg" active>
            Primary button
          </Button>
          {' '}
          <Button variant="secondary" size="lg" active>
            Button
          </Button>
        </Col>
        <Col xs={12}>
          <br />
          <Button variant="primary" size="lg" disabled>
            Primary button
          </Button>
          {' '}
          <Button variant="secondary" size="lg" disabled>
            Button
          </Button>
          {' '}
          <Button href="#" variant="secondary" size="lg" disabled>
            Link
          </Button>
        </Col>
        <Col xs={12}>
          <br />
          <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className="mb-2">
            <ToggleButton id="tbg-check-1" value={1}>
              Checkbox 1 (pre-checked)
            </ToggleButton>
            <ToggleButton id="tbg-check-2" value={2}>
              Checkbox 2
            </ToggleButton>
            <ToggleButton id="tbg-check-3" value={3}>
              Checkbox 3 (pre-checked)
            </ToggleButton>
          </ToggleButtonGroup>
          <br />
          <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
            <ToggleButton id="tbg-radio-1" value={1}>
              Radio 1 (pre-checked)
            </ToggleButton>
            <ToggleButton id="tbg-radio-2" value={2}>
              Radio 2
            </ToggleButton>
            <ToggleButton id="tbg-radio-3" value={3}>
              Radio 3
            </ToggleButton>
          </ToggleButtonGroup>
        </Col>
      </Row>
    </Container>
  );
}
export default Buttons;
