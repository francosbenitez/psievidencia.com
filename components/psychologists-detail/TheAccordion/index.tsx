import { useState } from "react";
import styles from "./styles.module.css";

const Accordion = ({
  title,
  content,
}: {
  title: string;
  content: string | string[];
}) => {
  const [isActive, setIsActive] = useState(false);

  if (typeof content !== "string") {
    content = content.join(", ");
  }

  return (
    <>
      {content !== "" && (
        <div className={styles["accordion-item"]}>
          <div
            className={styles["accordion-title"]}
            onClick={() => setIsActive(!isActive)}
          >
            <div>{title}</div>
            <div>{isActive ? "-" : "+"}</div>
          </div>
          {isActive && (
            <div className={styles["accordion-content"]}>{content}</div>
          )}
        </div>
      )}
    </>
  );
};

export default Accordion;
