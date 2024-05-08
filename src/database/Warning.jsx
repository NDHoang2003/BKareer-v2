import React from "react";

const Warning = ({ message, onClose }) => {
  return (
    <div className="warning-overlay">
      <div className="warning">
        <p>{message}</p>
        <button onClick={onClose}>Đóng</button>
      </div>
    </div>
  );
};

export default Warning;