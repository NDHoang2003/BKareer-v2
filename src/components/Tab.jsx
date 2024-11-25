import React, { useState } from "react";

const Tab = ({ title, onClick, isActive }) => (
  <button className={`${isActive ? "tabs-btn-active" : ""}`} onClick={onClick}>
    {title}
  </button>
);

export default Tab;
