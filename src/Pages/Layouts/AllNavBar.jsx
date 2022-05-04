import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

function AllNavBar() {
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">React Starter Kit</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="/cheatsheet">CheatSheet</Nav.Link>
            <NavDropdown title="All Components" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/header">Header</NavDropdown.Item>
              <NavDropdown.Item href="/cards">Cards</NavDropdown.Item>
              <NavDropdown.Item href="/shadows">Shadows</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/navbars">Navbars</NavDropdown.Item>
              <NavDropdown.Item href="/buttons">Buttons</NavDropdown.Item>
              <NavDropdown.Item href="/dropdowns">Dropdowns</NavDropdown.Item>
              <NavDropdown.Item href="/typography">Typography</NavDropdown.Item>
              <NavDropdown.Item href="/tables">Tables</NavDropdown.Item>
              <NavDropdown.Item href="/forms">Forms</NavDropdown.Item>
              <NavDropdown.Item href="/accordionexample">
                Accordion Examples
              </NavDropdown.Item>
              <NavDropdown.Item href="/badges">Badges</NavDropdown.Item>
              <NavDropdown.Item href="/breadcrumbs">
                Breadcrumbs
              </NavDropdown.Item>
              <NavDropdown.Item href="/listgroups">Listgroups</NavDropdown.Item>
              <NavDropdown.Item href="/spinners">Spinners</NavDropdown.Item>
              <NavDropdown.Item href="/progressbars">
                ProgressBars
              </NavDropdown.Item>
              <NavDropdown.Item href="/modalexamples">
                Modal Examples
              </NavDropdown.Item>
              <NavDropdown.Item href="/carouselsexamples">
                Carousels Examples
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Some more Components"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="/paginations">
                Paginations
              </NavDropdown.Item>
              <NavDropdown.Item href="/navs">Navs</NavDropdown.Item>
              <NavDropdown.Item href="/toasts">Toasts</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/stacks">Stacks</NavDropdown.Item>
              <NavDropdown.Item href="/borders">Borders</NavDropdown.Item>
              <NavDropdown.Item href="/jumbotron">Jumbotron</NavDropdown.Item>
              <NavDropdown.Item href="/footers">Footers</NavDropdown.Item>
              <NavDropdown.Item href="/heros">Heros</NavDropdown.Item>
              <NavDropdown.Item href="/grid">Grid</NavDropdown.Item>
              <NavDropdown.Item href="/features">Features</NavDropdown.Item>
              <NavDropdown.Item href="/alerts">Alerts</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="All Pages" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default AllNavBar;
