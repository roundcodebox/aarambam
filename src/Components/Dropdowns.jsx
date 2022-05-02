import React from 'react';
import {
  Container,
  Row,
  Col,
  Dropdown,
  DropdownButton,
  ButtonGroup,
  Button,
  SplitButton,
  NavDropdown,
  Navbar,
  Nav,
} from 'react-bootstrap';

function Dropdowns() {
  return (
    <Container>
      <Row>
        <Col sm={4}>
          <h4>Single button dropdowns</h4>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col sm={4}>
          <h4>Single button dropdowns</h4>
          <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
        </Col>
        <Col sm={8}>
          <h4>Dropdown ButtonGroup</h4>
          {['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'].map(
            (variant) => (
              <DropdownButton
                as={ButtonGroup}
                key={variant}
                id={`dropdown-variants-${variant}`}
                variant={variant.toLowerCase()}
                title={variant}
              >
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3" active>
                  Active Item
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
              </DropdownButton>
            )
          )}
        </Col>
        <Col sm={4}>
          <h4>Split button dropdowns</h4>
          <Dropdown as={ButtonGroup}>
            <Button variant="success">Split Button</Button>

            <Dropdown.Toggle
              split
              variant="success"
              id="dropdown-split-basic"
            />

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col sm={8}>
          <h4>Split button dropdowns</h4>
          {['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'].map(
            (variant) => (
              <SplitButton
                key={variant}
                id={`dropdown-split-variants-${variant}`}
                variant={variant.toLowerCase()}
                title={variant}
              >
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3" active>
                  Active Item
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
              </SplitButton>
            )
          )}
        </Col>
        <Col sm={4}>
          <h4>Dropdown Sizing</h4>
          <div className="mb-2">
            {[DropdownButton, SplitButton].map((DropdownType, idx) => (
              <DropdownType
                as={ButtonGroup}
                // eslint-disable-next-line react/no-array-index-key
                key={idx}
                id={`dropdown-button-drop-${idx}`}
                size="lg"
                title="Drop large"
              >
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
              </DropdownType>
            ))}
          </div>
          <div>
            {[DropdownButton, SplitButton].map((DropdownType, idx) => (
              <DropdownType
                as={ButtonGroup}
                // eslint-disable-next-line react/no-array-index-key
                key={idx}
                id={`dropdown-button-drop-${idx}`}
                size="sm"
                variant="secondary"
                title="Drop small"
              >
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
              </DropdownType>
            ))}
          </div>
        </Col>
        <Col sm={4}>
          <h4>Dark dropdowns</h4>
          <Dropdown>
            <Dropdown.Toggle
              id="dropdown-button-dark-example1"
              variant="secondary"
            >
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark">
              <Dropdown.Item href="#/action-1" active>
                Action
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <DropdownButton
            id="dropdown-button-dark-example2"
            variant="secondary"
            menuVariant="dark"
            title="Dropdown button"
            className="mt-2"
          >
            <Dropdown.Item href="#/action-1" active>
              Action
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
          </DropdownButton>
        </Col>
        <Col sm={8}>
          <h4>Dropdown in Navbar </h4>
          <Navbar variant="dark" bg="dark" expand="lg">
            <Container fluid>
              <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbar-dark-example" />
              <Navbar.Collapse id="navbar-dark-example">
                <Nav>
                  <NavDropdown
                    id="nav-dropdown-dark-example"
                    title="Dropdown"
                    menuVariant="dark"
                  >
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
        <Col sm={6}>
          <h4>Dropdown in Navbar </h4>
          <div className="mb-2">
            {['up', 'down', 'start', 'end'].map((direction) => (
              <DropdownButton
                as={ButtonGroup}
                key={direction}
                id={`dropdown-button-drop-${direction}`}
                drop={direction}
                variant="secondary"
                title={` Drop ${direction} `}
              >
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
              </DropdownButton>
            ))}
          </div>

          <div>
            {['up', 'down', 'start', 'end'].map((direction) => (
              <SplitButton
                key={direction}
                id={`dropdown-button-drop-${direction}`}
                drop={direction}
                variant="secondary"
                title={`Drop ${direction}`}
              >
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
              </SplitButton>
            ))}
          </div>
        </Col>
        <Col sm={4}>
          <h4>Dropdown items </h4>
          <DropdownButton id="dropdown-item-button" title="Dropdown button">
            <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
            <Dropdown.Item as="button">Action</Dropdown.Item>
            <Dropdown.Item as="button">Another action</Dropdown.Item>
            <Dropdown.Item as="button">Something else</Dropdown.Item>
          </DropdownButton>
        </Col>
        <Col sm={4}>
          <h4>Dropdown items </h4>
          <DropdownButton id="dropdown-item-button" title="Dropdown button">
            <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
            <Dropdown.Item as="button">Action</Dropdown.Item>
            <Dropdown.Item as="button">Another action</Dropdown.Item>
            <Dropdown.Item as="button">Something else</Dropdown.Item>
          </DropdownButton>
        </Col>
        <Col sm={4}>
          <h4>Dropdown Menu alignment</h4>
          <DropdownButton
            align="end"
            title="Dropdown end"
            id="dropdown-menu-align-end"
          >
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </DropdownButton>
        </Col>
        <Col sm={6}>
          <h4>Dropdown with Responsive alignment</h4>
          <>
            <div>
              <DropdownButton
                as={ButtonGroup}
                align={{ lg: 'end' }}
                title="Left-aligned but right aligned when large screen"
                id="dropdown-menu-align-responsive-1"
              >
                <Dropdown.Item eventKey="1">Action 1</Dropdown.Item>
                <Dropdown.Item eventKey="2">Action 2</Dropdown.Item>
              </DropdownButton>
            </div>
            <div className="mt-2">
              <SplitButton
                align={{ lg: 'start' }}
                title="Right-aligned but left aligned when large screen"
                id="dropdown-menu-align-responsive-2"
              >
                <Dropdown.Item eventKey="1">Action 1</Dropdown.Item>
                <Dropdown.Item eventKey="2">Action 2</Dropdown.Item>
              </SplitButton>
            </div>
          </>
        </Col>
        <Col sm={12}>
          <h4>Dropdown with AutoClose</h4>
          <>
            <Dropdown className="d-inline mx-2">
              <Dropdown.Toggle id="dropdown-autoclose-true">
                Default Dropdown
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="d-inline mx-2" autoClose="inside">
              <Dropdown.Toggle id="dropdown-autoclose-inside">
                Clickable Outside
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="d-inline mx-2" autoClose="outside">
              <Dropdown.Toggle id="dropdown-autoclose-outside">
                Clickable Inside
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="d-inline mx-2" autoClose={false}>
              <Dropdown.Toggle id="dropdown-autoclose-false">
                Manual Close
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </>
        </Col>
      </Row>
    </Container>
  );
}
export default Dropdowns;
