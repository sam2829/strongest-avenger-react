import React, { useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";
import styles from "../styles/AlertMessage.module.css";

const AlertMessage = ({ variant, message }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
  };

  // Will close alert message after 3 seconds
  // and only run once when opponent mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {show && (
        <Alert
          className={styles.Alert}
          variant={variant}
          onClose={handleClose}
          dismissible
        >
          {message}
        </Alert>
      )}
    </>
  );
};

export const useAlert = () => {
  const [alert, setAlert] = useState(null);

  const showAlert = (variant, message) => {
    setAlert({ variant, message });
  };

  const hideAlert = () => {
    setAlert(null);
  };

  return { alert, showAlert, hideAlert };
};

export default AlertMessage;
