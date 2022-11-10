import React from "react";
import styles from "./styles.module.css";

const LoadingSpinner = ({ btn }: { btn?: boolean }) => {
  return (
    <div
      className={`${btn ? "" : styles["loader"]} ${styles["loader--visible"]}`}
    >
      <div
        className={`${
          btn ? styles["lds-dual-ring-btn"] : styles["lds-dual-ring"]
        }`}
      ></div>
    </div>
  );
};

export default LoadingSpinner;
