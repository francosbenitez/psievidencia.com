import React from "react";
import styles from "./styles.module.css";

const LoadingBar = () => {
  return (
    <div className={styles.loaderBar}>
      {" "}
      <div className={styles.loaderElement}></div>
    </div>
  );
};

export default LoadingBar;
