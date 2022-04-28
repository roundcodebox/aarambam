import React from 'react';
import {
  Container, Col, Row, Form, InputGroup, FormControl, Dropdown, DropdownButton, Button, SplitButton
} from 'react-bootstrap';

function Forms() {
  return (
    <Container>
      <Col sm={6} className="pt-5">
        <Row>
          <h1>Forms</h1>
          <h2>Forms Sizes</h2>
          <Form.Label>Large text field</Form.Label>
          <Form.Control size="lg" type="text" placeholder="Large text" />
          <br />
          <Form.Label>Normal text field</Form.Label>
          <Form.Control type="text" placeholder="Normal text" />
          <br />
          <Form.Label>Small text field</Form.Label>
          <Form.Control size="sm" type="text" placeholder="Small text" />
          <br />
          <h2>File input</h2>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Default file input example</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
          <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Label>Multiple files input example</Form.Label>
            <Form.Control type="file" multiple />
          </Form.Group>
          <Form.Group controlId="formFileDisabled" className="mb-3">
            <Form.Label>Disabled file input example</Form.Label>
            <Form.Control type="file" disabled />
          </Form.Group>
          <Form.Group controlId="formFileSm" className="mb-3">
            <Form.Label>Small file input example</Form.Label>
            <Form.Control type="file" size="sm" />
          </Form.Group>
          <Form.Group controlId="formFileLg" className="mb-3">
            <Form.Label>Large file input example</Form.Label>
            <Form.Control type="file" size="lg" />
          </Form.Group>
          <Form.Label htmlFor="exampleColorInput">Color picker</Form.Label>
          <Form.Control
            type="color"
            id="exampleColorInput"
            defaultValue="#563d7c"
            title="Choose your color"
          />
          <h2>Select</h2>
          <Form.Label>Default select</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <Form.Label>Large size select</Form.Label>
          <Form.Select size="lg">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <br />
          <Form.Label>Default size select</Form.Label>
          <Form.Select>
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <br />
          <Form.Label>Small size select</Form.Label>
          <Form.Select size="sm">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <h2>Checks and radios</h2>
          <h2>Default (stacked)</h2>
          <Form>
            {['checkbox', 'radio'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={`default ${type}`}
                />

                <Form.Check
                  disabled
                  type={type}
                  label={`disabled ${type}`}
                  id={`disabled-default-${type}`}
                />
              </div>
            ))}
          </Form>
          <h2>Switches</h2>
          <Form>
            <Form.Check
              type="switch"
              id="custom-switch"
              label="Check this switch"
            />
            <Form.Check
              disabled
              type="switch"
              label="disabled switch"
              id="disabled-custom-switch"
            />
          </Form>
          <h2>Inline Checkbox and Radio</h2>
          <Form>
            {['checkbox', 'radio'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="1"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="2"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
                <Form.Check
                  inline
                  disabled
                  label="3 (disabled)"
                  type={type}
                  id={`inline-${type}-3`}
                />
              </div>
            ))}
          </Form>
          <Form.Label>Range</Form.Label>
          <Form.Range />
          <h2>Form InputGroup</h2>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <FormControl
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <FormControl
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
          </InputGroup>

          <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon3">
              https://example.com/users/
            </InputGroup.Text>
            <FormControl id="basic-url" aria-describedby="basic-addon3" />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <FormControl aria-label="Amount (to the nearest dollar)" />
            <InputGroup.Text>.00</InputGroup.Text>
          </InputGroup>

          <InputGroup>
            <InputGroup.Text>With textarea</InputGroup.Text>
            <FormControl as="textarea" aria-label="With textarea" />
          </InputGroup>
          <h2>Form InputGroup Sizing</h2>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
            <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
          </InputGroup>
          <br />
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">Default</InputGroup.Text>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          <br />
          <InputGroup size="lg">
            <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text>
            <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
          </InputGroup>
          <h2>Checkboxes and radios</h2>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <FormControl aria-label="Text input with checkbox" />
          </InputGroup>
          <InputGroup>
            <InputGroup.Radio aria-label="Radio button for following text input" />
            <FormControl aria-label="Text input with radio button" />
          </InputGroup>
          <h2>Multiple inputs</h2>
          <InputGroup className="mb-3">
            <InputGroup.Text>First and last name</InputGroup.Text>
            <FormControl aria-label="First name" />
            <FormControl aria-label="Last name" />
          </InputGroup>
          <h2>Multiple addons</h2>
          <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <InputGroup.Text>0.00</InputGroup.Text>
            <FormControl aria-label="Dollar amount (with dot and two decimal places)" />
          </InputGroup>
          <InputGroup>
            <FormControl aria-label="Dollar amount (with dot and two decimal places)" />
            <InputGroup.Text>$</InputGroup.Text>
            <InputGroup.Text>0.00</InputGroup.Text>
          </InputGroup>
          <h2>Button addons</h2>
          <InputGroup className="mb-3">
            <Button variant="outline-secondary" id="button-addon1">
              Button
            </Button>
            <FormControl
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <FormControl
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              Button
            </Button>
          </InputGroup>

          <InputGroup className="mb-3">
            <Button variant="outline-secondary">Button</Button>
            <Button variant="outline-secondary">Button</Button>
            <FormControl aria-label="Example text with two button addons" />
          </InputGroup>

          <InputGroup>
            <FormControl
              placeholder="Recipient's username"
              aria-label="Recipient's username with two button addons"
            />
            <Button variant="outline-secondary">Button</Button>
            <Button variant="outline-secondary">Button</Button>
          </InputGroup>
          <h2>Buttons with Dropdowns</h2>
          <InputGroup className="mb-3">
            <Button variant="outline-secondary">Button</Button>
            <Button variant="outline-secondary">Button</Button>
            <FormControl aria-label="Example text with two button addons" />
          </InputGroup>

          <InputGroup>
            <FormControl
              placeholder="Recipient's username"
              aria-label="Recipient's username with two button addons"
            />
            <Button variant="outline-secondary">Button</Button>
            <Button variant="outline-secondary">Button</Button>
          </InputGroup>
          <InputGroup className="mb-3">
            <DropdownButton
              variant="outline-secondary"
              title="Dropdown"
              id="input-group-dropdown-1"
            >
              <Dropdown.Item href="#">Action</Dropdown.Item>
              <Dropdown.Item href="#">Another action</Dropdown.Item>
              <Dropdown.Item href="#">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Separated link</Dropdown.Item>
            </DropdownButton>
            <FormControl aria-label="Text input with dropdown button" />
          </InputGroup>

          <InputGroup className="mb-3">
            <FormControl aria-label="Text input with dropdown button" />

            <DropdownButton
              variant="outline-secondary"
              title="Dropdown"
              id="input-group-dropdown-2"
              align="end"
            >
              <Dropdown.Item href="#">Action</Dropdown.Item>
              <Dropdown.Item href="#">Another action</Dropdown.Item>
              <Dropdown.Item href="#">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Separated link</Dropdown.Item>
            </DropdownButton>
          </InputGroup>

          <InputGroup>
            <DropdownButton
              variant="outline-secondary"
              title="Dropdown"
              id="input-group-dropdown-3"
            >
              <Dropdown.Item href="#">Action</Dropdown.Item>
              <Dropdown.Item href="#">Another action</Dropdown.Item>
              <Dropdown.Item href="#">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Separated link</Dropdown.Item>
            </DropdownButton>
            <FormControl aria-label="Text input with 2 dropdown buttons" />
            <DropdownButton
              variant="outline-secondary"
              title="Dropdown"
              id="input-group-dropdown-4"
              align="end"
            >
              <Dropdown.Item href="#">Action</Dropdown.Item>
              <Dropdown.Item href="#">Another action</Dropdown.Item>
              <Dropdown.Item href="#">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Separated link</Dropdown.Item>
            </DropdownButton>
          </InputGroup>
          <h2>Segmented buttons</h2>
          <InputGroup className="mb-3">
            <SplitButton
              variant="outline-secondary"
              title="Action"
              id="segmented-button-dropdown-1"
            >
              <Dropdown.Item href="#">Action</Dropdown.Item>
              <Dropdown.Item href="#">Another action</Dropdown.Item>
              <Dropdown.Item href="#">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Separated link</Dropdown.Item>
            </SplitButton>
            <FormControl aria-label="Text input with dropdown button" />
          </InputGroup>

          <InputGroup className="mb-3">
            <FormControl aria-label="Text input with dropdown button" />
            <SplitButton
              variant="outline-secondary"
              title="Action"
              id="segmented-button-dropdown-2"
              alignRight
            >
              <Dropdown.Item href="#">Action</Dropdown.Item>
              <Dropdown.Item href="#">Another action</Dropdown.Item>
              <Dropdown.Item href="#">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Separated link</Dropdown.Item>
            </SplitButton>
          </InputGroup>
        </Row>
      </Col>
    </Container>
  );
}
export default Forms;
