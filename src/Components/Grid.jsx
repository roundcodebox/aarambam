import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';

function Grid() {
  return (
    <h4>grids</h4>
    // <>
    //   <Container>
    //     <h4>Grid Examples</h4>
    //     <Row>
    //       <Col
    //         style={{
    //           paddingTop: '0.75rem',
    //           paddingBottom: '0.75rem',
    //           backgroundColor: '#bbeffd',
    //           border: '1px solid #61dafb',
    //         }}
    //       >
    //         1 of 1
    //       </Col>
    //     </Row>
    //   </Container>
    //   <Container fluid="md">
    //     <h4>Fluid Container</h4>
    //     <Row>
    //       <Col
    //         style={{
    //           paddingTop: '0.75rem',
    //           paddingBottom: '0.75rem',
    //           backgroundColor: '#bbeffd',
    //           border: '1px solid #61dafb',
    //         }}
    //       >
    //         1 of 1
    //       </Col>
    //     </Row>
    //   </Container>
    //   <Container>
    //     <h4>Auto-layout columns</h4>
    //     <Row>
    //       <Col
    //         style={{
    //           paddingTop: '0.75rem',
    //           paddingBottom: '0.75rem',
    //           backgroundColor: '#bbeffd',
    //           border: '1px solid #61dafb',
    //         }}
    //       >
    //         1 of 2
    //       </Col>
    //       <Col
    //         style={{
    //           paddingTop: '0.75rem',
    //           paddingBottom: '0.75rem',
    //           backgroundColor: '#bbeffd',
    //           border: '1px solid #61dafb',
    //         }}
    //       >
    //         2 of 2
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col
    //         style={{
    //           paddingTop: '0.75rem',
    //           paddingBottom: '0.75rem',
    //           backgroundColor: '#bbeffd',
    //           border: '1px solid #61dafb',
    //         }}
    //       >
    //         1 of 3
    //       </Col>
    //       <Col
    //         style={{
    //           paddingTop: '0.75rem',
    //           paddingBottom: '0.75rem',
    //           backgroundColor: '#bbeffd',
    //           border: '1px solid #61dafb',
    //         }}
    //       >
    //         2 of 3
    //       </Col>
    //       <Col
    //         style={{
    //           paddingTop: '0.75rem',
    //           paddingBottom: '0.75rem',
    //           backgroundColor: '#bbeffd',
    //           border: '1px solid #61dafb',
    //         }}
    //       >
    //         3 of 3
    //       </Col>
    //     </Row>
    //   </Container>
    //   <Container>
    //     <h4>Setting column width</h4>
    //     <Row>
    //       <Col
    //         style={{
    //           paddingTop: '0.75rem',
    //           paddingBottom: '0.75rem',
    //           backgroundColor: '#bbeffd',
    //           border: '1px solid #61dafb',
    //         }}
    //       >
    //         1 of 3
    //       </Col>
    //       <Col
    //         xs={6}
    //         style={{
    //           paddingTop: '0.75rem',
    //           paddingBottom: '0.75rem',
    //           backgroundColor: '#bbeffd',
    //           border: '1px solid #61dafb',
    //         }}
    //       >
    //         2 of 3 (wider)
    //       </Col>
    //       <Col
    //         style={{
    //           paddingTop: '0.75rem',
    //           paddingBottom: '0.75rem',
    //           backgroundColor: '#bbeffd',
    //           border: '1px solid #61dafb',
    //         }}
    //       >
    //         3 of 3
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col
    //         style={{
    //           paddingTop: '0.75rem',
    //           paddingBottom: '0.75rem',
    //           backgroundColor: '#bbeffd',
    //           border: '1px solid #61dafb',
    //         }}
    //       >
    //         1 of 3
    //       </Col>
    //       <Col
    //         xs={5}
    //         style={{
    //           paddingTop: '0.75rem',
    //           paddingBottom: '0.75rem',
    //           backgroundColor: '#bbeffd',
    //           border: '1px solid #61dafb',
    //         }}
    //       >
    //         2 of 3 (wider)
    //       </Col>
    //       <Col
    //         style={{
    //           paddingTop: '0.75rem',
    //           paddingBottom: '0.75rem',
    //           backgroundColor: '#bbeffd',
    //           border: '1px solid #61dafb',
    //         }}
    //       >
    //         3 of 3
    //       </Col>
    //     </Row>
    //   </Container>
    //   <Container>
    //     <h4>Variable width content</h4>
    //     <Row className="justify-content-md-center">
    //       <Col
    //         xs
    //         lg="2"
    //         style={{
    //           paddingTop: '0.75rem',
    //           paddingBottom: '0.75rem',
    //           backgroundColor: '#bbeffd',
    //           border: '1px solid #61dafb',
    //         }}
    //       >
    //         1 of 3
    //       </Col>
    //       <Col
    //         md="auto"
    //         style={{
    //           paddingTop: '0.75rem',
    //           paddingBottom: '0.75rem',
    //           backgroundColor: '#bbeffd',
    //           border: '1px solid #61dafb',
    //         }}
    //       >
    //         Variable width content
    //       </Col>
    //       <Col
    //         xs
    //         lg="2"
    //         style={{
    //           paddingTop: '0.75rem',
    //           paddingBottom: '0.75rem',
    //           backgroundColor: '#bbeffd',
    //           border: '1px solid #61dafb',
    //         }}
    //       >
    //         3 of 3
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col
    //         style={{
    //           paddingTop: '0.75rem',
    //           paddingBottom: '0.75rem',
    //           backgroundColor: '#bbeffd',
    //           border: '1px solid #61dafb',
    //         }}
    //       >
    //         1 of 3
    //       </Col>
    //       <Col
    //         md="auto"
    //         style={{
    //           paddingTop: '0.75rem',
    //           paddingBottom: '0.75rem',
    //           backgroundColor: '#bbeffd',
    //           border: '1px solid #61dafb',
    //         }}
    //       >
    //         Variable width content
    //       </Col>
    //       <Col
    //         xs
    //         lg="2"
    //         style={{
    //           paddingTop: '0.75rem',
    //           paddingBottom: '0.75rem',
    //           backgroundColor: '#bbeffd',
    //           border: '1px solid #61dafb',
    //         }}
    //       >
    //         3 of 3
    //       </Col>
    //     </Row>
    //   </Container>
    //   <Container>
    //     <h4>Responsive grids</h4>
    //     <Row>
    //       <Col
    //         sm={8}
    //         style={{
    //           paddingTop: '0.75rem',
    //           paddingBottom: '0.75rem',
    //           backgroundColor: '#bbeffd',
    //           border: '1px solid #61dafb',
    //         }}
    //       >
    //         sm=8
    //       </Col>
    //       <Col
    //         sm={4}
    //         style={{
    //           paddingTop: '0.75rem',
    //           paddingBottom: '0.75rem',
    //           backgroundColor: '#bbeffd',
    //           border: '1px solid #61dafb',
    //         }}
    //       >
    //         sm=4
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col
    //         sm
    //         style={{
    //           paddingTop: '0.75rem',
    //           paddingBottom: '0.75rem',
    //           backgroundColor: '#bbeffd',
    //           border: '1px solid #61dafb',
    //         }}
    //       >
    //         sm=true
    //       </Col>
    //       <Col
    //         sm
    //         style={{
    //           paddingTop: '0.75rem',
    //           paddingBottom: '0.75rem',
    //           backgroundColor: '#bbeffd',
    //           border: '1px solid #61dafb',
    //         }}
    //       >
    //         sm=true
    //       </Col>
    //       <Col
    //         sm
    //         style={{
    //           paddingTop: '0.75rem',
    //           paddingBottom: '0.75rem',
    //           backgroundColor: '#bbeffd',
    //           border: '1px solid #61dafb',
    //         }}
    //       >
    //         sm=true
    //       </Col>
    //     </Row>
    //   </Container>
    //   <Container>
    //     {/* Stack the columns on mobile by making one full-width and the other half-width */}
    //     <Row>
    //       <h4>Responsive grids</h4>
    //       <Col
    //         xs={12}
    //         md={8}
    //         style={{
    //           paddingTop: '0.75rem',
    //           paddingBottom: '0.75rem',
    //           backgroundColor: '#bbeffd',
    //           border: '1px solid #61dafb',
    //         }}
    //       >
    //         xs=12 md=8
    //       </Col>
    //       <Col
    //         xs={6}
    //         md={4}
    //         style={{
    //           paddingTop: '0.75rem',
    //           paddingBottom: '0.75rem',
    //           backgroundColor: '#bbeffd',
    //           border: '1px solid #61dafb',
    //         }}
    //       >
    //         xs=6 md=4
    //       </Col>
    //     </Row>

    //     {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
    //     <Row>
    //       <Col
    //         xs={6}
    //         md={4}
    //         style={{
    //           paddingTop: '0.75rem',
    //           paddingBottom: '0.75rem',
    //           backgroundColor: '#bbeffd',
    //           border: '1px solid #61dafb',
    //         }}
    //       >
    //         xs=6 md=4
    //       </Col>
    //       <Col
    //         xs={6}
    //         md={4}
    //         style={{
    //           paddingTop: '0.75rem',
    //           paddingBottom: '0.75rem',
    //           backgroundColor: '#bbeffd',
    //           border: '1px solid #61dafb',
    //         }}
    //       >
    //         xs=6 md=4
    //       </Col>
    //       <Col
    //         xs={6}
    //         md={4}
    //         style={{
    //           paddingTop: '0.75rem',
    //           paddingBottom: '0.75rem',
    //           backgroundColor: '#bbeffd',
    //           border: '1px solid #61dafb',
    //         }}
    //       >
    //         xs=6 md=4
    //       </Col>
    //     </Row>

    //     {/* Columns are always 50% wide, on mobile and desktop */}
    //     <Row>
    //       <Col
    //         xs={6}
    //         style={{
    //           paddingTop: '0.75rem',
    //           paddingBottom: '0.75rem',
    //           backgroundColor: '#bbeffd',
    //           border: '1px solid #61dafb',
    //         }}
    //       >
    //         xs=6
    //       </Col>
    //       <Col
    //         xs={6}
    //         style={{
    //           paddingTop: '0.75rem',
    //           paddingBottom: '0.75rem',
    //           backgroundColor: '#bbeffd',
    //           border: '1px solid #61dafb',
    //         }}
    //       >
    //         xs=6
    //       </Col>
    //     </Row>
    //   </Container>
    // </>
  );
}
export default Grid;
