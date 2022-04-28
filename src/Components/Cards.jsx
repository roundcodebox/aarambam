import React from 'react';
import {
  Card, Container, Row, Col
} from 'react-bootstrap';

function Cards() {
  return (
    <Container>
      <Row className="mt-5">
        <h4>Card Styles</h4>
        <Col sm={4}>
          <h4>Background Color</h4>
          {[
            'Primary',
            'Secondary',
            'Success',
            'Danger',
            'Warning',
            'Info',
            'Light',
            'Dark',
          ].map((variant) => (
            <Card
              bg={variant.toLowerCase()}
              key={variant}
              text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
              style={{ width: '18rem' }}
              className="mb-2"
            >
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>
                  {variant}
                  {' '}
                  Card Title
                  {' '}
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>
        <Col sm={4}>
          <h4>Card Border Color</h4>
          <>
            <Card border="primary" style={{ width: '18rem' }}>
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Primary Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <br />

            <Card border="secondary" style={{ width: '18rem' }}>
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Secondary Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <br />

            <Card border="success" style={{ width: '18rem' }}>
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Success Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <br />

            <Card border="danger" style={{ width: '18rem' }}>
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Danger Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <br />

            <Card border="warning" style={{ width: '18rem' }}>
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Warning Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <br />

            <Card border="info" style={{ width: '18rem' }}>
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Info Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <br />

            <Card border="dark" style={{ width: '18rem' }}>
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Dark Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
            <Card border="light" style={{ width: '18rem' }}>
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Light Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
          </>
        </Col>
      </Row>
    </Container>
  );
}
export default Cards;
