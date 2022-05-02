import React from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  ButtonGroup,
  ButtonToolbar,
  ToggleButtonGroup,
  ToggleButton,
  Dropdown,
  DropdownButton,
} from 'react-bootstrap';

function Buttons() {
  return (
    <Container>
      <Row>
        <Col sm={12}>
          <h1>Buttons</h1>
          <br />
          <Button variant="primary">Primary</Button>{' '}
          <Button variant="secondary">Secondary</Button>{' '}
          <Button variant="success">Success</Button>{' '}
          <Button variant="warning">Warning</Button>{' '}
          <Button variant="danger">Danger</Button>{' '}
          <Button variant="info">Info</Button>{' '}
          <Button variant="light">Light</Button>{' '}
          <Button variant="dark">Dark</Button>{' '}
          <Button variant="link">Link</Button>{' '}
        </Col>
        <Col sm={12}>
          <br />
          <Button variant="primary" className="disabled">
            Primary
          </Button>{' '}
          <Button variant="secondary" className="disabled">
            Secondary
          </Button>{' '}
          <Button variant="success" className="disabled">
            Success
          </Button>{' '}
          <Button variant="warning" className="disabled">
            Warning
          </Button>{' '}
          <Button variant="danger" className="disabled">
            Danger
          </Button>{' '}
          <Button variant="info" className="disabled">
            Info
          </Button>{' '}
          <Button variant="light" className="disabled">
            Light
          </Button>{' '}
          <Button variant="dark" className="disabled">
            Dark
          </Button>{' '}
          <Button variant="link" className="disabled">
            Link
          </Button>{' '}
        </Col>
        <Col sm={12}>
          <h4>Colored links</h4>
          <a href="#/" className="link-primary">
            Primary link
          </a>{' '}
          <a href="#/" className="link-secondary">
            Secondary link
          </a>{' '}
          <a href="#/" className="link-success">
            Success link
          </a>{' '}
          <a href="#/" className="link-danger">
            Danger link
          </a>{' '}
          <a href="#/" className="link-warning">
            Warning link
          </a>{' '}
          <a href="#/" className="link-info">
            Info link
          </a>{' '}
          <a href="#/" className="link-light">
            Light link
          </a>{' '}
          <a href="#/" className="link-dark">
            Dark link
          </a>{' '}
        </Col>
        <Col sm={12}>
          <h4>Outline Buttons</h4>
          <br />
          <Button variant="outline-primary">Primary</Button>{' '}
          <Button variant="outline-secondary">Secondary</Button>{' '}
          <Button variant="outline-success">Success</Button>{' '}
          <Button variant="outline-warning">Warning</Button>{' '}
          <Button variant="outline-danger">Danger</Button>{' '}
          <Button variant="outline-info">Info</Button>{' '}
          <Button variant="outline-light">Light</Button>{' '}
          <Button variant="outline-dark">Dark</Button>{' '}
        </Col>
        <Col sm={12}>
          <br />
          <Button href="#">Link</Button> <Button type="submit">Button</Button>{' '}
          <Button as="input" type="button" value="Input" />{' '}
          <Button as="input" type="submit" value="Submit" />{' '}
          <Button as="input" type="reset" value="Reset" />{' '}
        </Col>
        <Col sm={12}>
          <br />
          <h4>Button Sizes</h4>
          <div className="mb-2">
            <Button variant="primary" size="lg">
              Large button
            </Button>{' '}
            <Button variant="secondary" size="lg">
              Large button
            </Button>{' '}
          </div>
          <div>
            <Button variant="primary" size="sm">
              Small button
            </Button>{' '}
            <Button variant="secondary" size="sm">
              Small button
            </Button>{' '}
          </div>
        </Col>
        <Col sm={12}>
          <br />
          <h4>Block buttons</h4>
          <div className="d-grid gap-2">
            <Button variant="primary" size="lg">
              Block level button
            </Button>{' '}
            <Button variant="secondary" size="lg">
              Block level button
            </Button>{' '}
          </div>
        </Col>
        <Col sm={12}>
          <br />
          <Button variant="primary" size="lg" active>
            Primary button
          </Button>{' '}
          <Button variant="secondary" size="lg" active>
            Button
          </Button>{' '}
        </Col>
        <Col sm={12}>
          <br />
          <Button variant="primary" size="lg" disabled>
            Primary button
          </Button>{' '}
          <Button variant="secondary" size="lg" disabled>
            Button
          </Button>{' '}
          <Button href="#" variant="secondary" size="lg" disabled>
            Link
          </Button>{' '}
        </Col>
        <Col sm={12}>
          <br />
          <h4>Checkbox / Radio Button</h4>
          <h4>Checkbox / Radio Button Uncontrolled</h4>
          <ToggleButtonGroup
            type="checkbox"
            defaultValue={[1, 3]}
            className="mb-2"
          >
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
          <h4>Button groups</h4>
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary">Left</Button>{' '}
            <Button variant="secondary">Middle</Button>{' '}
            <Button variant="secondary">Right</Button>{' '}
          </ButtonGroup>
          <h4>Button toolbar</h4>
          <ButtonToolbar aria-label="Toolbar with button groups">
            <ButtonGroup className="me-2" aria-label="First group">
              <Button>1</Button> <Button>2</Button> <Button>3</Button>{' '}
              <Button>4</Button>{' '}
            </ButtonGroup>
            <ButtonGroup className="me-2" aria-label="Second group">
              <Button>5</Button> <Button>6</Button> <Button>7</Button>{' '}
            </ButtonGroup>
            <ButtonGroup aria-label="Third group">
              <Button>8</Button>{' '}
            </ButtonGroup>
          </ButtonToolbar>
          <h4>ButtonGroup Sizing</h4>
          <ButtonGroup size="lg" className="mb-2">
            <Button>Left</Button> <Button>Middle</Button> <Button>Right</Button>{' '}
          </ButtonGroup>
          <br />
          <ButtonGroup className="mb-2">
            <Button>Left</Button> <Button>Middle</Button> <Button>Right</Button>{' '}
          </ButtonGroup>
          <br />
          <ButtonGroup size="sm">
            <Button>Left</Button> <Button>Middle</Button> <Button>Right</Button>{' '}
          </ButtonGroup>
          <h4>ButtonGroup Nesting</h4>
          <ButtonGroup>
            <Button>1</Button> <Button>2</Button>{' '}
            <DropdownButton
              as={ButtonGroup}
              title="Dropdown"
              id="bg-nested-dropdown"
            >
              <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
              <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
            </DropdownButton>
          </ButtonGroup>
          <h4>ButtonGroup Vertical variation</h4>
          <ButtonGroup vertical>
            <Button>Button</Button> <Button>Button</Button>{' '}
            <DropdownButton
              as={ButtonGroup}
              title="Dropdown"
              id="bg-vertical-dropdown-1"
            >
              <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
              <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
            </DropdownButton>
            <Button>Button</Button> <Button>Button</Button>{' '}
            <DropdownButton
              as={ButtonGroup}
              title="Dropdown"
              id="bg-vertical-dropdown-2"
            >
              <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
              <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
            </DropdownButton>
            <DropdownButton
              as={ButtonGroup}
              title="Dropdown"
              id="bg-vertical-dropdown-3"
            >
              <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
              <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
            </DropdownButton>
          </ButtonGroup>
        </Col>
      </Row>
    </Container>
  );
}
export default Buttons;
