import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';

function AlertDismissible() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>How&apos;s it going?!</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me y&apos;all!
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    </>
  );
}
export default AlertDismissible;
