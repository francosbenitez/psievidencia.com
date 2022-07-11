import React from "react";

const LoadingSpinner = ({ btn }: { btn?: boolean }) => {
  return (
    <div
      className="loader loader--visible"
      style={{ position: btn ? "relative" : "absolute" }}
    >
      <div className={`${btn ? "lds-dual-ring-btn" : "lds-dual-ring"}`}></div>
    </div>
  );
};

export default LoadingSpinner;
