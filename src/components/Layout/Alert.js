import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';
import { GoAlert } from 'react-icons/go';

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;

  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <GoAlert /> {alert.msg}
      </div>
    )
  );
};
