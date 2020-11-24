import React from 'react';
import { Alert  } from 'reactstrap';

function AlertNotification ({ visible, text, type, toggle }) {
  return (
    <div style={{ position: 'absolute', top: -65, right: -90 }}>
      <Alert  color={type} isOpen={visible} toggle={toggle}>
        {text}
      </Alert >
      
    </div>
  );
};

export default AlertNotification;