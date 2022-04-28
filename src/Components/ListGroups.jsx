import React from 'react';
import {
  Container, Row, Col, ListGroup, Badge, Tab
} from 'react-bootstrap';

function ListGroups() {
  return (
    <Container>
      <Row>
        <Col sm={6}>
          <h4>ListGroup Basic Example</h4>
          <ListGroup>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={6}>
          <h4>ListGroup Active items</h4>
          <ListGroup as="ul">
            <ListGroup.Item as="li" active>
              Cras justo odio
            </ListGroup.Item>
            <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item as="li" disabled>
              Morbi leo risus
            </ListGroup.Item>
            <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={6}>
          <h4>Disabled items</h4>
          <ListGroup>
            <ListGroup.Item disabled>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={6}>
          <h4>ListGroup Flush</h4>
          <ListGroup variant="flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={6}>
          <h4>ListGroup Numbered</h4>
          <ListGroup as="ol" numbered>
            <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
            <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
            <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={6}>
          <h4>ListGroup Custom Content</h4>
          <ListGroup as="ol" numbered>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Subheading</div>
                Cras justo odio
              </div>
              <Badge bg="primary" pill>
                14
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Subheading</div>
                Cras justo odio
              </div>
              <Badge bg="primary" pill>
                14
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Subheading</div>
                Cras justo odio
              </div>
              <Badge bg="primary" pill>
                14
              </Badge>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={6}>

          <h4>ListGroup Contextual classes Actionable</h4>
          <ListGroup>
            <ListGroup.Item>No style</ListGroup.Item>
            <ListGroup.Item variant="primary">Primary</ListGroup.Item>
            <ListGroup.Item action variant="secondary">
              Secondary
            </ListGroup.Item>
            <ListGroup.Item action variant="success">
              Success
            </ListGroup.Item>
            <ListGroup.Item action variant="danger">
              Danger
            </ListGroup.Item>
            <ListGroup.Item action variant="warning">
              Warning
            </ListGroup.Item>
            <ListGroup.Item action variant="info">
              Info
            </ListGroup.Item>
            <ListGroup.Item action variant="light">
              Light
            </ListGroup.Item>
            <ListGroup.Item action variant="dark">
              Dark
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={6}>
          <h4>ListGroup Contextual classes</h4>
          <ListGroup>
            <ListGroup.Item>No style</ListGroup.Item>
            <ListGroup.Item variant="primary">Primary</ListGroup.Item>
            <ListGroup.Item variant="secondary">Secondary</ListGroup.Item>
            <ListGroup.Item variant="success">Success</ListGroup.Item>
            <ListGroup.Item variant="danger">Danger</ListGroup.Item>
            <ListGroup.Item variant="warning">Warning</ListGroup.Item>
            <ListGroup.Item variant="info">Info</ListGroup.Item>
            <ListGroup.Item variant="light">Light</ListGroup.Item>
            <ListGroup.Item variant="dark">Dark</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={6}>
          <h4>ListGroup Horizontal</h4>
          <ListGroup horizontal>
            <ListGroup.Item>This</ListGroup.Item>
            <ListGroup.Item>ListGroup</ListGroup.Item>
            <ListGroup.Item>renders</ListGroup.Item>
            <ListGroup.Item>horizontally!</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={6}>
          <h4>ListGroup Tabbed Interfaces</h4>
          <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <Row>
              <Col sm={4}>
                <ListGroup>
                  <ListGroup.Item action href="#link1">
                    Link 1
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link2">
                    Link 2
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col sm={8}>
                <Tab.Content>
                  <Tab.Pane eventKey="#link1">
                    <p>Tab content 1 </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link2">
                    <p>Tab content 2 </p>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Col>
      </Row>
    </Container>
  );
}

export default ListGroups;
