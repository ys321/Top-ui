import React, { useEffect, useState } from "react";
// import ToastContainer from 'react-bootstrap/ToastContainer';
// import Toast from 'react-bootstrap/Toast';

function ToastAlert({ visible, variant, title, sinceTime, body, image }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(visible);
  }, [visible]);

  return (
    <>
      {/* <ToastContainer position="top-end" className="p-3">
        <Toast
          onClose={() => setShow(false)}
          show={show}
          delay={3000}
          autohide
          bg={variant}
        >
          <Toast.Header>
            <img
              src={image || "holder.js/20x20?text=%20"}
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">{title || ""}</strong>
            <small>{sinceTime || ""}</small>
          </Toast.Header>
          <Toast.Body>{body || ""}</Toast.Body>
        </Toast>
      </ToastContainer> */}
    </>
  );
}

export default ToastAlert;
