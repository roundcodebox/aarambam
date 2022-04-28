import React from 'react';
import {
  Container, Col, Row, Form, InputGroup, FormControl, Dropdown, DropdownButton, Button, SplitButton, FloatingLabel
} from 'react-bootstrap';
import FormValidationExample from './FormValidationExample';

function Forms() {
  return (
    <Container>
      <Row>
        <Col sm={6} className="pt-5">
          <h1>Forms</h1>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We&apos;ll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <h4>Disabled forms</h4>
          <Form.Group className="mb-3">
            <Form.Label>Disabled input</Form.Label>
            <Form.Control placeholder="Disabled input" disabled />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Disabled select menu</Form.Label>
            <Form.Select disabled>
              <option>Disabled select</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check type="checkbox" label="Can't check this" disabled />
          </Form.Group>
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
          <h3>Floating labels</h3>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
          <h3>TextAreas Floating labels</h3>
          <FloatingLabel controlId="floatingTextarea" label="Comments" className="mb-3">
            <Form.Control as="textarea" placeholder="Leave a comment here" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingTextarea2" label="Comments">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: '100px' }}
            />
          </FloatingLabel>
          <h3>Selects with Floating Label</h3>
          <FloatingLabel controlId="floatingSelect" label="Works with selects">
            <Form.Select aria-label="Floating label select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </FloatingLabel>
          <h3>Floating Label Layout</h3>
          <Row className="g-2">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Email address">
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingSelectGrid" label="Works with selects">
                <Form.Select aria-label="Floating label select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>
          <h3>Form Layout</h3>

          <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form>
          <h3>Form grid Layout</h3>
          <Form>
            <Row>
              <Col>
                <Form.Control placeholder="First name" />
              </Col>
              <Col>
                <Form.Control placeholder="Last name" />
              </Col>
            </Row>
          </Form>
          <h3>Form Complex Layouts</h3>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <h3>Horizontal Form Layout</h3>
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                Email
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="email" placeholder="Email" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
              <Form.Label column sm={2}>
                Password
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="password" placeholder="Password" />
              </Col>
            </Form.Group>
            <fieldset>
              <Form.Group as={Row} className="mb-3">
                <Form.Label as="legend" column sm={2}>
                  Radios
                </Form.Label>
                <Col sm={10}>
                  <Form.Check
                    type="radio"
                    label="first radio"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                  />
                  <Form.Check
                    type="radio"
                    label="second radio"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                  />
                  <Form.Check
                    type="radio"
                    label="third radio"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3"
                  />
                </Col>
              </Form.Group>
            </fieldset>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
              <Col sm={{ span: 10, offset: 2 }}>
                <Form.Check label="Remember me" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit">Sign in</Button>
              </Col>
            </Form.Group>
          </Form>
          <h3>Horizontal form label sizing</h3>
          <Row>
            <Form.Label column="lg" lg={2}>
              Large Text
            </Form.Label>
            <Col>
              <Form.Control size="lg" type="text" placeholder="Large text" />
            </Col>
          </Row>
          <br />
          <Row>
            <Form.Label column lg={2}>
              Normal Text
            </Form.Label>
            <Col>
              <Form.Control type="text" placeholder="Normal text" />
            </Col>
          </Row>
          <br />
          <Row>
            <Form.Label column="sm" lg={2}>
              Small Text
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <h3>Form Layout Column sizing</h3>
          <Form>
            <Row>
              <Col xs={7}>
                <Form.Control placeholder="City" />
              </Col>
              <Col>
                <Form.Control placeholder="State" />
              </Col>
              <Col>
                <Form.Control placeholder="Zip" />
              </Col>
            </Row>
          </Form>
          <h3>Form Layout Auto-sizing</h3>
          <Form>
            <Row className="align-items-center">
              <Col xs="auto">
                <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                  Name
                </Form.Label>
                <Form.Control
                  className="mb-2"
                  id="inlineFormInput"
                  placeholder="Jane Doe"
                />
              </Col>
              <Col xs="auto">
                <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                  Username
                </Form.Label>
                <InputGroup className="mb-2">
                  <InputGroup.Text>@</InputGroup.Text>
                  <FormControl id="inlineFormInputGroup" placeholder="Username" />
                </InputGroup>
              </Col>
              <Col xs="auto">
                <Form.Check
                  type="checkbox"
                  id="autoSizingCheck"
                  className="mb-2"
                  label="Remember me"
                />
              </Col>
              <Col xs="auto">
                <Button type="submit" className="mb-2">
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
          <h3>Form Layout size-specific</h3>
          <Form>
            <Row className="align-items-center">
              <Col sm={3} className="my-1">
                <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                  Name
                </Form.Label>
                <Form.Control id="inlineFormInputName" placeholder="Jane Doe" />
              </Col>
              <Col sm={3} className="my-1">
                <Form.Label htmlFor="inlineFormInputGroupUsername" visuallyHidden>
                  Username
                </Form.Label>
                <InputGroup>
                  <InputGroup.Text>@</InputGroup.Text>
                  <FormControl id="inlineFormInputGroupUsername" placeholder="Username" />
                </InputGroup>
              </Col>
              <Col xs="auto" className="my-1">
                <Form.Check type="checkbox" id="autoSizingCheck2" label="Remember me" />
              </Col>
              <Col xs="auto" className="my-1">
                <Button type="submit">Submit</Button>
              </Col>
            </Row>
          </Form>
          <h4>Form Validations</h4>
          <FormValidationExample />
        </Col>
      </Row>
    </Container>
  );
}
export default Forms;
