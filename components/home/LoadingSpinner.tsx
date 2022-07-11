import React from "react";
import { useState } from "react";

const LoadingSpinner = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className={`loader" ${visible && "loader--visible"}`}>
      <div className="lds-dual-ring"></div>
    </div>
  );
};

export default LoadingSpinner;
