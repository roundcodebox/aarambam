import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';

function Typography() {
  return (
    <Container>
      <Row>
        <Col sm={12} className="pt-5">
          <hr />
          <h1>Typography</h1>
        </Col>
        <Col sm={4}>
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Heading 6</h6>
          <h3>
            Fancy display heading
            <small className="text-muted">With faded secondary text</small>
          </h3>
        </Col>
        <Col sm={4}>
          <h2>Example body text</h2>
          <p>
            Nullam quis risus eget
            <a href="/#">urna mollis ornare</a>
            vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.
          </p>
          <p><small>This line of text is meant to be treated as fine print.</small></p>
          <p>
            The following is
            <strong>rendered as bold text</strong>
            .
          </p>
          <p>
            The following is
            <em>rendered as italicized text</em>
            .
          </p>
          <p>
            An abbreviation of the word attribute is
            <abbr title="attribute">attr</abbr>
            .
          </p>
        </Col>
        <Col sm={4}>
          <h2>Emphasis classes</h2>
          <p className="text-muted">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
          <p className="text-primary">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
          <p className="text-secondary">Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
          <p className="text-warning">Etiam porta sem malesuada magna mollis euismod.</p>
          <p className="text-danger">Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p className="text-success">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
          <p className="text-info">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
        </Col>
        <h1>Blockquotes</h1>
        <Col sm={4}>
          <blockquote className="blockquote">
            <p>A well-known quote, contained in a blockquote element.</p>
          </blockquote>
        </Col>
        <Col sm={4}>
          <figure>
            <blockquote className="blockquote">
              <p>A well-known quote, contained in a blockquote element.</p>
            </blockquote>
            <figcaption className="blockquote-footer">
              Someone famous in
              {' '}
              <cite title="Source Title">Source Title</cite>
            </figcaption>
          </figure>
        </Col>
        <Col sm={4}>
          <figure className="text-center">
            <blockquote className="blockquote">
              <p>A well-known quote, contained in a blockquote element.</p>
            </blockquote>
            <figcaption className="blockquote-footer">
              Someone famous in
              {' '}
              <cite title="Source Title">Source Title</cite>
            </figcaption>
          </figure>
        </Col>
        <Col sm={4}>
          <h1 className="display-1">Display 1</h1>
          <h1 className="display-2">Display 2</h1>
          <h1 className="display-3">Display 3</h1>
          <h1 className="display-4">Display 4</h1>
        </Col>
        <Col sm={4}>
          <p className="lead">
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
          </p>

        </Col>
        <Col sm={4}>
          <p>
            You can use the mark tag to
            {' '}
            <mark>highlight</mark>
            {' '}
            text.
          </p>
          <p><del>This line of text is meant to be treated as deleted text.</del></p>
          <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
          <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
          <p><u>This line of text will render as underlined</u></p>
          <p><small>This line of text is meant to be treated as fine print.</small></p>
          <p><strong>This line rendered as bold text.</strong></p>
          <p><em>This line rendered as italicized text.</em></p>
        </Col>
        <Col sm={4}>
          <ul className="list-unstyled">
            <li>This is a list.</li>
            <li>It appears completely unstyled.</li>
            <li>Structurally, it&apos;s still a list.</li>
            <li>However, this style only applies to immediate child elements.</li>
            <li>
              Nested lists:
              <ul>
                <li>are unaffected by this style</li>
                <li>will still show a bullet</li>
                <li>and have appropriate left margin</li>
              </ul>
            </li>
            <li>This may still come in handy in some situations.</li>
          </ul>
        </Col>
        <Col sm={4}>
          <figure className="text-end">
            <blockquote className="blockquote">
              <p>A well-known quote, contained in a blockquote element.</p>
            </blockquote>
            <figcaption className="blockquote-footer">
              Someone famous in
              {' '}
              <cite title="Source Title">Source Title</cite>
            </figcaption>
          </figure>
        </Col>
      </Row>
    </Container>
  );
}
export default Typography;
