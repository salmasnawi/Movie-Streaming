// src/components/Modal.js
import React from "react";

const Modal = ({ message, onClose }) => {
  return (
    <div className="modal fade show" style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Message</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <p>{message}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-warning"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;