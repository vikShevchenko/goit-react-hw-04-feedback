import PropTypes from 'prop-types';
import React from 'react';

export default function Notification(props) {
  return (
    <p
      style={{
        paddingTop: '10px',
        boxSizing: 'border-box',
        textAlign: 'center',
      }}
    >
      {props.mes}
    </p>
  );
}

Notification.propTypes = {
  mes: PropTypes.string.isRequired,
};
