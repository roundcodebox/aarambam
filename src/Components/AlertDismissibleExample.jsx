import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';

function AlertDismissibleExample() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <>
        <h4>Dismissible Alerts</h4>
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            Change this and that and try again. Duis mollis, est non commodo
            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
            Cras mattis consectetur purus sit amet fermentum.
          </p>
        </Alert>
      </>
    );
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}
export default AlertDismissibleExample;
